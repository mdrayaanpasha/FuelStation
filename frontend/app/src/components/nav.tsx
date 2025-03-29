import { Link } from 'react-router-dom'; // You might need this later, depending on your routing setup

export default function Navigation() {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-black cursor-pointer" onClick={e=>window.location.href="./"} >FuelMarket</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="./order" className="text-gray-600 hover:text-black">Buy Fuel</a>
              <a href="./auth/seller-register" className="text-gray-600 hover:text-black">Sell Fuel</a>
              <a href="./about" className="text-gray-600 hover:text-black">Our Story</a>
            </div>
          </div>
          {!localStorage.getItem('buyertoken') || !localStorage.getItem("sellerToken") && (
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-blue-700 transition" onClick={e=>window.location.href="./auth/authenticate"}>
              Sign In
            </button>
          )}

        </div>
      </div>
    </nav>
  );
}