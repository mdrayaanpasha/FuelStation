import { FiChevronDown, FiDroplet, FiCreditCard, FiTruck, FiShield, FiUser } from 'react-icons/fi';
import Navigation from '../components/nav';
const FAQPage = () => {
  const faqCategories = [
    {
      title: "Buying Fuel",
      icon: <FiDroplet className="w-5 h-5" />,
      questions: [
        {
          q: "How do I place a fuel order?",
          a: "Simply create an account, browse available sellers, and submit your order request. Our system will match you with the best options."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, bank transfers, and cryptocurrency for fuel purchases."
        },
        {
          q: "Is there a minimum order quantity?",
          a: "Minimums vary by seller but typically start at 1,000 liters for standard transactions."
        }
      ]
    },
    {
      title: "Selling Fuel",
      icon: <FiUser className="w-5 h-5" />,
      questions: [
        {
          q: "How do I become a verified seller?",
          a: "Complete our seller application, provide necessary documentation, and pass our vetting process to get approved."
        },
        {
          q: "What fees are involved for sellers?",
          a: "We charge a competitive 2% transaction fee on completed sales with no hidden costs."
        },
        {
          q: "How are payments processed?",
          a: "Seller payments are released to your designated account within 24 hours of delivery confirmation."
        }
      ]
    },
    {
      title: "Delivery & Logistics",
      icon: <FiTruck className="w-5 h-5" />,
      questions: [
        {
          q: "What delivery options are available?",
          a: "Options include tanker trucks, rail, and marine transport depending on location and quantity."
        },
        {
          q: "How is delivery timing calculated?",
          a: "Standard deliveries arrive within 3-5 business days. Expedited options are available."
        },
        {
          q: "Who handles customs clearance?",
          a: "Our logistics partners manage all international customs documentation and clearance."
        }
      ]
    },
    {
      title: "Safety & Security",
      icon: <FiShield className="w-5 h-5" />,
      questions: [
        {
          q: "How do you verify fuel quality?",
          a: "All shipments undergo third-party quality testing before delivery confirmation."
        },
        {
          q: "What security measures are in place?",
          a: "We use bank-grade encryption and blockchain technology to secure all transactions."
        },
        {
          q: "Are transactions insured?",
          a: "All transactions include basic protection, with optional enhanced coverage available."
        }
      ]
    }
  ];

  return (
    <>
    <Navigation></Navigation>
    
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about FuelMarket</p>
        </div>

        {/* FAQ Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {/* Category Header */}
              <div className="flex items-center gap-3 p-6 border-b border-gray-100">
                <div className="p-2 bg-gray-100 rounded-lg">
                  {category.icon}
                </div>
                <h2 className="text-xl font-medium">{category.title}</h2>
              </div>

              {/* Questions */}
              <div className="divide-y divide-gray-100">
                {category.questions.map((item, qIndex) => (
                  <div key={qIndex} className="p-6">
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-black">
                          {item.q}
                        </h3>
                        <FiChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                      </summary>
                      <p className="mt-3 text-gray-600">
                        {item.a}
                      </p>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-16 bg-black rounded-xl p-8 text-center">
          <h2 className="text-2xl font-light text-white mb-4">Still have questions?</h2>
          <p className="text-gray-300 mb-6">Our support team is available 24/7 to assist you</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:support@fuelmarket.com" 
              className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Email Support
            </a>
            <a 
              href="/contact" 
              className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Contact Form
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FAQPage;