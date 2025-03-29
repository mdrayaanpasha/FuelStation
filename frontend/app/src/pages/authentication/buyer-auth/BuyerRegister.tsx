import { useState } from "react";
import axios from "axios";

const BuyerRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const [message, setMessage] = useState<string | null>(null); // Success/Error messages

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null); // Reset message

    try {
      const response = await axios.post("http://localhost:3000/api/auth/Buyers/register", formData);
      localStorage.setItem("Buyertoken", response.data.token); 
      setMessage(response.data.message); // Success message
      window.location.href = "/"; 
    } catch (error: any) {
      console.log(error)
      setMessage(error.response?.data?.message || "Something went wrong"); // Error message
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-2xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Buyer Registration</h2>

        {message && (
          <p className={`text-center mb-3 ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}

        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
          className="w-full p-2 mb-3 border rounded"
        />

        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full p-2 mb-3 border rounded"
        />

        <input 
          type="text" 
          name="phone" 
          placeholder="Phone Number" 
          value={formData.phone} 
          onChange={handleChange} 
          className="w-full p-2 mb-3 border rounded"
        />

        <input 
          type="text" 
          name="address" 
          placeholder="Address" 
          value={formData.address} 
          onChange={handleChange} 
          className="w-full p-2 mb-3 border rounded"
        />

        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          className="w-full p-2 mb-3 border rounded"
        />

        <button 
          type="submit" 
          className="w-full bg-black text-white p-2 rounded hover:cursor-pointer hover:bg-gray-800 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default BuyerRegister;
