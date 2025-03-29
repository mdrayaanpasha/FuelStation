import { useState, useEffect } from "react";
import axios from "axios";
// import jwtDecode from "jwt-decode";
import { jwtDecode } from "jwt-decode"; // ✅ Correct way


const CreateOrder = () => {
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState("");
  const [liters, setLiters] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/orders/GetAllSellers");
        setSellers(response.data);
      } catch (error) {
        console.log(error)
        setMessage("Error fetching sellers");
      }
    };
    fetchSellers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    const token = localStorage.getItem("buyerToken"); // Get buyer's token
    if (!token) return setMessage("You must be logged in to place an order");

    const decoded: any = jwtDecode(token);
    const buyerId = decoded.id; // Extract buyer's ID

    try {
      const response = await axios.post("http://localhost:3000/api/orders/create", {
        buyer: buyerId,
        seller: selectedSeller,
        liters,
      });

      setMessage(response.data.message);
      setSelectedSeller("");
      setLiters("");
    } catch (error: any) {
      setMessage(error.response?.data?.message || "Error placing order");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Place Order</h2>

        {message && <p className="text-center text-red-600 mb-3">{message}</p>}

        <select
          value={selectedSeller}
          onChange={(e) => setSelectedSeller(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        >
          <option value="">Select Seller</option>
          {sellers.map((seller: any) => (
            <option key={seller._id} value={seller._id}>
              {seller.company} ({seller.email})
            </option>
          ))}
        </select>

        <input
          type="number"
          name="liters"
          placeholder="Liters of Fuel"
          value={liters}
          onChange={(e) => setLiters(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:cursor-pointer hover:bg-gray-800 transition duration-200"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CreateOrder;
