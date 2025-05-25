import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { FiTruck, FiDroplet, FiUser, FiShoppingCart } from "react-icons/fi";
import Navigation from "../../components/nav";
const CreateOrder = () => {
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState("");
  const [liters, setLiters] = useState("");
  const [message, setMessage] = useState<{ type: 'success' | 'error', content: string } | null>(null);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await axios.get("https://fuel-station-j9n7.vercel.app/api/orders/GetAllSellers");
        setSellers(response.data);
      } catch (error) {
        setMessage({ type: 'error', content: "Error fetching sellers" });
      }
    };
    fetchSellers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    const token = localStorage.getItem("buyerToken");
    if (!token) return setMessage({ type: 'error', content: "You must be logged in to place an order" });

    const decoded: any = jwtDecode(token);
    const buyerId = decoded.id;

    try {
      const response = await axios.post("https://fuel-station-j9n7.vercel.app/api/orders/create", {
        buyer: buyerId,
        seller: selectedSeller,
        liters,
      });

      setMessage({ type: 'success', content: response.data.message });
      setSelectedSeller("");
      setLiters("");
    } catch (error: any) {
      setMessage({ type: 'error', content: error.response?.data?.message || "Error placing order" });
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center flex-col">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Graphic Section */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 hidden md:block">
                <div className="h-full flex flex-col justify-center text-white">
                  <h2 className="text-4xl font-bold mb-6">Fuel Ordering Made Simple</h2>
                  <p className="text-lg opacity-90">
                    Connect directly with verified fuel suppliers and manage your orders efficiently
                  </p>
                  <FiTruck className="w-12 h-12 mt-8 opacity-90" />
                </div>
              </div>

              {/* Form Section */}
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <FiShoppingCart className="w-8 h-8 text-gray-900" />
                  <h2 className="text-3xl font-bold text-gray-900">Place New Order</h2>
                </div>

                {message && (
                  <div className={`p-4 rounded-lg mb-6 ${message.type === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                    }`}>
                    {message.content}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                      value={selectedSeller}
                      onChange={(e) => setSelectedSeller(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border-0 ring-1 ring-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 appearance-none bg-white"
                    >
                      <option value="">Select Seller</option>
                      {sellers.map((seller: any) => (
                        <option key={seller._id} value={seller._id}>
                          {seller.company} ({seller.email})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <FiDroplet className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      name="liters"
                      placeholder="Liters of Fuel"
                      value={liters}
                      onChange={(e) => setLiters(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border-0 ring-1 ring-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 transition"
                      min="1"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white py-4 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Place Fuel Order
                  </button>
                </form>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateOrder;