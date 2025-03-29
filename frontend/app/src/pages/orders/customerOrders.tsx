import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { FiUser, FiPhone, FiMapPin, FiDroplet, FiClock, FiCheckCircle, FiAlertCircle, FiPackage } from "react-icons/fi";
import Navigation from "../../components/nav";
interface Order {
  _id: string;
  buyer: { name: string; phone: string; address: string };
  liters: number;
  status: boolean;
  createdAt: string;
}

interface DecodedToken {
  id: string;
}

const CustomerOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const sellerToken = localStorage.getItem("sellerToken");

  const getSellerId = (): string | null => {
    if (!sellerToken) return null;
    try {
      const decoded: DecodedToken = jwtDecode(sellerToken);
      return decoded.id;
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  };

  useEffect(() => {
    const sellerId = getSellerId();
    if (!sellerId) {
      console.error("Seller ID not found");
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/orders/sellers-orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ seller: sellerId }),
        });
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const handleUpdateStatus = async (orderId: string) => {
    setUpdating(orderId);
    try {
      const response = await fetch(`http://localhost:3000/api/orders/update/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Failed to update order");

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: true } : order
        )
      );
    } catch (error) {
      console.error("Error updating order:", error);
    } finally {
      setUpdating(null);
    }
  };

  return (
    <>
    <Navigation></Navigation>
   
      <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-3">Customer Orders</h1>
          <p className="text-gray-600">Manage your fuel deliveries</p>
        </div>

        {/* Content */}
        {loading ? (
          <div className="space-y-4 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-xs">
                <div className="h-5 bg-gray-200 rounded-full w-1/3 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
              </div>
            ))}
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center p-12 bg-white rounded-2xl border border-gray-200 ">
            <FiPackage className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No orders found</p>
            <p className="text-gray-500 mt-2">All new orders will appear here</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {orders.map((order) => (
              <div 
                key={order._id} 
                className="bg-white p-6 rounded-2xl border border-gray-200 transition-all"
              >
                <div className="flex flex-col gap-4">
                  {/* Customer Info */}
                  <div className="flex items-center gap-3">
                    <FiUser className="w-6 h-6 text-gray-600" />
                    <h3 className="text-lg font-medium text-gray-900">
                      {order.buyer.name}
                    </h3>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <FiPhone className="w-5 h-5" />
                      <span>{order.buyer.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="w-5 h-5" />
                      <span>{order.buyer.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiDroplet className="w-5 h-5" />
                      <span>{order.liters} Liters</span>
                    </div>
                  </div>

                  {/* Status & Actions */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FiClock className="w-5 h-5" />
                      <span>
                        {new Date(order.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className={`flex items-center gap-2 ${
                        order.status ? 'text-green-600' : 'text-amber-600'
                      }`}>
                        {order.status ? (
                          <FiCheckCircle className="w-6 h-6" />
                        ) : (
                          <FiAlertCircle className="w-6 h-6" />
                        )}
                        <span className="text-sm font-medium">
                          {order.status ? 'Completed' : 'Pending'}
                        </span>
                      </div>

                      {!order.status && (
                        <button
                          onClick={() => handleUpdateStatus(order._id)}
                          className={`px-4 py-2 text-sm rounded-full transition-all ${
                            updating === order._id 
                              ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                              : 'bg-black text-white hover:bg-gray-500 cursor-pointer'
                          }`}
                          disabled={updating === order._id}
                        >
                          {updating === order._id ? (
                            <span className="flex items-center gap-2">
                              <span className="animate-spin">⟳</span>
                              Updating...
                            </span>
                          ) : (
                            "Mark Complete"
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default CustomerOrders;