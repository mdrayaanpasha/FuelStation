import { FiArrowRight, FiCheck, FiDollarSign, FiTruck, FiShield, FiPercent, FiClock } from 'react-icons/fi';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-black">FuelMarket</span>
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Power Your Fuel Deals<br />
              <span className="bg-gradient-to-r from-black to-cyan-500 bg-clip-text text-transparent">
                Trade Smart, Trade Fast
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join the ultimate fuel trading hub. Connect instantly with verified buyers and sellers worldwide. 
              Get unbeatable prices, ironclad security, and lightning-fast settlements.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-700 transition flex items-center" onClick={e=>window.location.href="./auth/authenticate"}>
                Start Trading Now <FiArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-xl bg-white border border-gray-100 hover:border-blue-100 transition">
              <FiDollarSign className="text-4xl text-black mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Best Market Rates</h3>
              <p className="text-gray-600">Live fuel prices with zero hidden fees - save big on every trade</p>
            </div>
            <div className="p-8 rounded-xl bg-white border border-gray-100 hover:border-blue-100 transition">
              <FiTruck className="text-4xl text-black mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Seamless Delivery</h3>
              <p className="text-gray-600">Global shipping network with real-time tracking at your fingertips</p>
            </div>
            <div className="p-8 rounded-xl bg-white border border-gray-100 hover:border-blue-100 transition">
              <FiShield className="text-4xl text-black mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Rock-Solid Security</h3>
              <p className="text-gray-600">Advanced encryption and escrow ensure every deal is protected</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Your Path to Profitable Trading</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 w-0.5 h-full bg-gray-200"></div>
            <div className="space-y-24">
              {[
                {
                  title: 'Join the Market',
                  desc: 'Sign up in minutes and get verified to start trading instantly'
                },
                {
                  title: 'Find Your Deal',
                  desc: 'Browse fuel listings or post your offer to connect with traders'
                },
                {
                  title: 'Trade with Confidence',
                  desc: 'Secure payments through our trusted escrow system'
                },
                {
                  title: 'Get Your Fuel',
                  desc: 'Track your shipment from port to delivery with ease'
                }
              ].map((step, index) => (
                <div key={step.title} className="relative md:w-1/2 md:ml-auto md:even:ml-0 md:even:mr-auto">
                  <div className="md:absolute left-0 top-0 w-16 h-16 bg-black rounded-full flex items-center justify-center -translate-x-1/2">
                    <span className="text-white text-2xl font-bold">{index + 1}</span>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Fuel Your Future Now</h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
            Over 5,000 fuel traders are already maximizing profits with FuelMarket. 
            Don’t miss out - your next big deal is waiting!
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition flex items-center mx-auto" onClick={e=>window.location.href="./auth/authenticate"}>
            Join Free Today <FiArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h4 className="text-lg font-semibold mb-4">FuelMarket</h4>
              <p className="text-gray-600">The world’s smartest fuel trading platform</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="./about" className="text-gray-600 hover:text-black">About Us</a></li>
         
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="./auth/buyer-register" className="text-gray-600 hover:text-black">Buy</a></li>
                <li><a href="./auth/buyer-login" className="text-gray-600 hover:text-black">Sell</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="./contact" className="text-gray-600 hover:text-black">Contact Us</a></li>
                <li><a href="./faq" className="text-gray-600 hover:text-black">FAQs</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-16 pt-8 text-center text-gray-600">
            © 2025 FuelMarket. Powering global fuel trade.
          </div>
        </div>
      </footer>
    </div>
  );
}