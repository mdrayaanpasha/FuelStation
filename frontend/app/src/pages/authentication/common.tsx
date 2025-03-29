import { FiUser, FiBriefcase, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // You'll need react-router-dom installed

export default function RoleSelection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-black">FuelMarket</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Role Selection Section */}
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Join FuelMarket as
            </h1>
            <p className="text-gray-600 text-xl">
              Select your role to continue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Buyer Card */}
            <Link 
              to="/buyer-dashboard" 
              className="group p-8 rounded-xl bg-white border border-gray-100 hover:border-gray-400 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                  <FiUser className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Buyer</h3>
                <p className="text-gray-600 text-center mb-4">
                  Purchase fuel from verified suppliers with competitive pricing
                </p>
                <div className="flex items-center text-black group-hover:underline" onClick={e=>window.location.href='/auth/buyer-register'}>
                  <span>Continue as Buyer</span>
                  <FiArrowRight className="ml-2" />
                </div>
              </div>
            </Link>

            {/* Seller Card */}
            <Link 
              to="/seller-dashboard" 
              className="group p-8 rounded-xl bg-white border border-gray-100 hover:border-gray-400 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                  <FiBriefcase className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Seller</h3>
                <p className="text-gray-600 text-center mb-4">
                  List and manage your fuel products for global buyers
                </p>
                <div className="flex items-center text-black group-hover:underline" onClick={e=>window.location.href='/auth/seller-register'}>
                  <span>Continue as Seller</span>
                  <FiArrowRight className="ml-2" />
                </div>
              </div>
            </Link>
          </div>

          
        </div>
      </section>
    </div>
  );
}