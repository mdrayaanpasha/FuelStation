import { FiZap, FiGlobe, FiUsers, FiBarChart2, FiAward } from 'react-icons/fi';
import Navigation from '../components/nav';

const OurStoryPage = () => {
  return (
    <>
    <Navigation/>
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-light text-gray-900 mb-6">
            Powering the Future of <span className="font-medium">Fuel Trading</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a bold idea to a global marketplace - our journey to transform fuel commerce
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-16 mb-20">
          {/* 2015 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4">
              <div className="bg-black text-white px-4 py-2 rounded-full inline-block">
                <span className="font-medium">2015</span>
              </div>
            </div>
            <div className="md:w-3/4 bg-white p-8 rounded-xl border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <FiZap className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-light">The Spark</h3>
              </div>
              <p className="text-gray-600">
                Founded in a Houston garage by energy traders frustrated with outdated systems. 
                Our first prototype connected just 3 local fuel suppliers with regional buyers.
              </p>
            </div>
          </div>

          {/* 2017 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4">
              <div className="bg-black text-white px-4 py-2 rounded-full inline-block">
                <span className="font-medium">2017</span>
              </div>
            </div>
            <div className="md:w-3/4 bg-white p-8 rounded-xl border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <FiGlobe className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-light">Going Global</h3>
              </div>
              <p className="text-gray-600">
                Expanded operations to Europe and Asia, processing our first million-barrel trade. 
                Implemented blockchain technology for secure transactions.
              </p>
            </div>
          </div>

          {/* 2020 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4">
              <div className="bg-black text-white px-4 py-2 rounded-full inline-block">
                <span className="font-medium">2020</span>
              </div>
            </div>
            <div className="md:w-3/4 bg-white p-8 rounded-xl border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <FiUsers className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-light">Community Growth</h3>
              </div>
              <p className="text-gray-600">
                Surpassed 5,000 active traders worldwide. Launched our mobile app and real-time 
                analytics dashboard, revolutionizing how traders make decisions.
              </p>
            </div>
          </div>

          {/* Today */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4">
              <div className="bg-black text-white px-4 py-2 rounded-full inline-block">
                <span className="font-medium">Today</span>
              </div>
            </div>
            <div className="md:w-3/4 bg-white p-8 rounded-xl border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <FiBarChart2 className="w-8 h-8 text-amber-600" />
                <h3 className="text-2xl font-light">Market Leader</h3>
              </div>
              <p className="text-gray-600">
                Facilitating over $2B in annual fuel transactions across 45 countries. 
                Recognized as the most innovative energy platform by Global Energy Awards.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-12">
          <h2 className="text-3xl font-light text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <FiAward className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2">Integrity First</h3>
              <p className="text-gray-600">
                Every trade is built on transparency and trust. We verify all participants and audit every transaction.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-100 rounded-full">
                  <FiZap className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2">Innovation Driven</h3>
              <p className="text-gray-600">
                Continuously evolving our platform to bring traders cutting-edge tools and market insights.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-purple-100 rounded-full">
                  <FiGlobe className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2">Global Mindset</h3>
              <p className="text-gray-600">
                Connecting diverse energy markets to create opportunities for traders worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Team Note */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-light text-gray-900 mb-4">Backed by Industry Experts</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our team combines decades of energy trading experience with top tech talent to build
            the marketplace of the future. Meet the people powering FuelMarket.
          </p>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default OurStoryPage;