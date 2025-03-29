import { useState } from "react";
import axios from "axios";
import { FiArrowRight, FiUserPlus, FiLock, FiMail, FiUser, FiPhone } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const BuyerAuth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [message, setMessage] = useState<{ type: 'success' | 'error', content: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    const endpoint = isLogin 
      ? "http://localhost:3000/api/auth/Buyers/login"
      : "http://localhost:3000/api/auth/Buyer/signup";

    try {
      const response = await axios.post(endpoint, formData);
      localStorage.setItem("buyerToken", response.data.token);
      localStorage.removeItem("sellerToken");

      setMessage({ type: 'success', content: response.data.message });
      
      setTimeout(() => {
        navigate("/");
      }, 1500);
      
    } catch (error: any) {
      setMessage({
        type: 'error',
        content: error.response?.data?.message || "Something went wrong"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side - Graphic */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 hidden md:block">
              <div className="h-full flex flex-col justify-center text-white">
                <h2 className="text-4xl font-bold mb-6">
                  {isLogin ? "Welcome Back!" : "Join FuelMarket"}
                </h2>
                <p className="text-lg opacity-90">
                  {isLogin 
                    ? "Access the best fuel deals from verified sellers worldwide."
                    : "Create your account and start trading fuel efficiently."}
                </p>
                <div className="mt-8">
                  <FiArrowRight className="w-12 h-12 animate-bounce-x" />
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-12">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" className="text-2xl font-bold text-gray-900">
                  FuelMarket
                </Link>
                <button
                  onClick={() => window.location.href="./buyer-register"}
                  className="text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-lg transition"
                >
                  {isLogin ? "Create Account" : "Already have an account?"}
                </button>
              </div>

              <h3 className="text-3xl font-bold mb-8 text-gray-900">
                {isLogin ? "Buyer Login" : "Create Buyer Account"}
              </h3>

              {message && (
                <div className={`p-4 rounded-lg mb-6 ${
                  message.type === 'success' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {message.content}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-0 ring-1 ring-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 transition"
                    />
                  </div>
                )}

                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-0 ring-1 ring-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 transition"
                  />
                </div>

                {!isLogin && (
                  <div className="relative">
                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-0 ring-1 ring-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 transition"
                    />
                  </div>
                )}

                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    minLength={6}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-0 ring-1 ring-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 transition"
                  />
                </div>

                <button
                  type="submit"
                  onClick={e=>handleSubmit(e)}
                  className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white py-4 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  {isLogin ? "Sign In" : "Create Account"}
                </button>

             

               

                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerAuth;