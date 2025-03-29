import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { FiPackage, FiClock, FiCheckCircle, FiAlertCircle, FiDroplet } from "react-icons/fi";
import Navigation from "../../components/nav";

interface Order {
  _id: string;
  seller: { name: string };
  liters: number;
  status: boolean;
  createdAt: string;
}

interface DecodedToken {
  id: string;
}

const BuyerOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const buyerToken = localStorage.getItem("buyerToken");

  const getBuyerId = (): string | null => {
    if (!buyerToken) return null;
    try {
      const decoded: DecodedToken = jwtDecode(buyerToken);
      return decoded.id;
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  };

  useEffect(() => {
    const buyerId = getBuyerId();
    if (!buyerId) {
      console.error("Buyer ID not found");
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/orders/buyers-orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ buyer: buyerId }),
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

  return (
    <>
    <Navigation/>
    <div className="min-h-screen  p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-3">Fuel Orders</h1>
          <p className="text-gray-600">Your recent fuel purchases</p>
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
          <div className="text-center p-12 bg-white rounded-2xl shadow-xs">
            <FiPackage className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No orders found</p>
            <p className="text-gray-500 mt-2">Start by placing your first fuel order</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {orders.map((order) => (
              <div 
                key={order._id} 
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-sm transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Order Info */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      {order.seller.name}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <FiDroplet className="w-5 h-5" />
                        <span>{order.liters} Liters</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiClock className="w-5 h-5" />
                        <span>
                          {new Date(order.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status */}
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

export default BuyerOrders;