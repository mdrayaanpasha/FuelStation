import { useState } from "react";

const BuyerLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", { ...loginData, password: "****" }); // Masked password
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-2xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Buyer Login</h2>

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

export default BuyerLogin;
