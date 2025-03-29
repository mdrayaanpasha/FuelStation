import { useState } from "react";
import axios from "axios";

const SellerRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    password: "",
  });

  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    try {
      const response = await axios.post("http://localhost:3000/api/auth/Sellers/register", formData);
      localStorage.setItem("sellertoken", response.data.token); 
      setMessage(response.data.message); 
      setFormData({ name: "", email: "", phone: "", company: "", password: "" }); // Reset form
      window.location.href = "/"; // Redirect to home page
    } catch (error: any) {
      setMessage(error.response?.data?.message || "Error registering seller");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-2xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Seller Registration</h2>

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
          name="company" 
          placeholder="Company Name" 
          value={formData.company} 
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

export default SellerRegister;
