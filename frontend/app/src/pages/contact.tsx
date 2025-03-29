import { FiMail, FiPhone, FiMapPin, FiGlobe, FiClock, FiHelpCircle } from 'react-icons/fi';
import Navigation from '../components/nav';

const ContactPage = () => {
  return (
    <>
    <Navigation/>
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Contact FuelMarket</h1>
          <p className="text-xl text-gray-600">We're here to help with your fuel trading needs</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="bg-white p-8 rounded-xl  border border-gray-200 hover:shadow-sm transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <FiMail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium">Email Us</h3>
            </div>
            <p className="text-gray-600 mb-4">For general inquiries and support</p>
            <a href="mailto:info@fuelmarket.com" className="text-blue-600 hover:underline">
              info@fuelmarket.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white p-8 rounded-xl  border border-gray-200 hover:shadow-sm transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-100 rounded-full">
                <FiPhone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-medium">Call Us</h3>
            </div>
            <p className="text-gray-600 mb-4">Available 24/7 for urgent matters</p>
            <a href="tel:+18005551234" className="text-blue-600 hover:underline">
              +1 (800) 555-1234
            </a>
          </div>

          {/* Location */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-sm transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <FiMapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-medium">Visit Us</h3>
            </div>
            <p className="text-gray-600 mb-4">Our headquarters in Houston, TX</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              123 Energy Way, Houston, TX 77002
            </a>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="bg-white p-8 rounded-xl  border border-gray-200">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Helpful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/faq" className="flex items-start gap-4 group">
              <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition">
                <FiHelpCircle className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">FAQs</h3>
                <p className="text-gray-600">Answers to common questions about fuel trading</p>
              </div>
            </a>
            <a href="/support" className="flex items-start gap-4 group">
              <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition">
                <FiGlobe className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Support Center</h3>
                <p className="text-gray-600">Comprehensive help articles and guides</p>
              </div>
            </a>
            <a href="/operations" className="flex items-start gap-4 group">
              <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition">
                <FiClock className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Operations</h3>
                <p className="text-gray-600">Our business hours and service coverage</p>
              </div>
            </a>
            <a href="/about" className="flex items-start gap-4 group">
              <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition">
                <FiMapPin className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Global Offices</h3>
                <p className="text-gray-600">Our locations worldwide</p>
              </div>
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500">
          <p>FuelMarket is committed to providing excellent service to all our trading partners.</p>
          <p className="mt-2">Average response time: under 2 business hours</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;