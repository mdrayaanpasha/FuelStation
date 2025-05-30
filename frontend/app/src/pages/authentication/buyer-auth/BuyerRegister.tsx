import { useState } from "react";
import axios from "axios";
import { FiUser, FiMail, FiPhone, FiMapPin, FiLock } from "react-icons/fi";

const BuyerRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
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

    try {
      const response = await axios.post("https://fuel-station-j9n7.vercel.app/api/auth/Buyers/register", formData);
      localStorage.setItem("Buyertoken", response.data.token);
      localStorage.removeItem("sellerToken");

      setMessage({ type: 'success', content: response.data.message });
      setTimeout(() => window.location.href = "/", 1500);
    } catch (error: any) {
      setMessage({
        type: 'error',
        content: error.response?.data?.message || "Something went wrong"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[75vw] bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Graphic Side */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 hidden md:block">
            <div className="h-full flex flex-col justify-center text-white">
              <h2 className="text-4xl font-bold mb-6">Join FuelMarket</h2>
              <p className="text-lg opacity-90">
                Create your buyer account and access premium fuel trading opportunities
              </p>
              <FiLock className="w-12 h-12 mt-8 opacity-90" />
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Buyer Registration</h2>

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
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border-0 ring-1 ring-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 transition"
                />
              </div>

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

              <div className="relative">
                <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  required
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border-0 ring-1 ring-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 transition"
                />
              </div>

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
                className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white py-4 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Create Account
              </button>

              <p className="text-center text-sm text-gray-600 mt-6">
                Already have an account?{" "}
                <a href="./buyer-login" className="text-gray-900 hover:underline font-medium">
                  Sign in here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerRegister;