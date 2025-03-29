import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

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
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Customer Orders</h1>
      {loading ? (
        <p className="text-gray-600">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border">Customer</th>
                <th className="p-3 border">Phone</th>
                <th className="p-3 border">Address</th>
                <th className="p-3 border">Liters</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-b hover:bg-gray-100">
                  <td className="p-3 border">{order.buyer.name}</td>
                  <td className="p-3 border">{order.buyer.phone}</td>
                  <td className="p-3 border">{order.buyer.address}</td>
                  <td className="p-3 border">{order.liters} L</td>
                  <td className="p-3 border">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm ${
                        order.status ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {order.status ? "Completed" : "Pending"}
                    </span>
                  </td>
                  <td className="p-3 border">{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td className="p-3 border">
                    {!order.status && (
                      <button
                        onClick={() => handleUpdateStatus(order._id)}
                        className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                        disabled={updating === order._id}
                      >
                        {updating === order._id ? "Updating..." : "Mark as Completed"}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CustomerOrders;
