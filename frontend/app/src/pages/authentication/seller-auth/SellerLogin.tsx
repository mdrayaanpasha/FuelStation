import { useState } from "react";
import axios from "axios";

const SellerLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    try {
      const response = await axios.post("http://localhost:3000/api/auth/Sellers/login", loginData);

      setMessage(response.data.message); // Show success message
      localStorage.setItem("sellerToken", response.data.token); // Store token
      setLoginData({ email: "", password: "" }); // Reset form
      window.location.href = "/"; // Redirect to home page
    } catch (error: any) {
      setMessage(error.response?.data?.message || "Error logging in");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-2xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Seller Login</h2>

        {message && (
          <p className={`text-center mb-3 ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}

        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={loginData.email} 
          onChange={handleChange} 
          className="w-full p-2 mb-3 border rounded"
        />

        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={loginData.password} 
          onChange={handleChange} 
          className="w-full p-2 mb-3 border rounded"
        />

        <button 
          type="submit" 
          className="w-full bg-black text-white p-2 rounded hover:cursor-pointer hover:bg-gray-800 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SellerLogin;
