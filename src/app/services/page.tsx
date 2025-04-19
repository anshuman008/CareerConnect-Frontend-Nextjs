import { plansData } from "@/data/plansData";

interface Plan {
  title: string;
  subtitle: string;
  price: number;
  currency: string;
  url: string;
  features: string[];
  popular: boolean;
  color: string;
}

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Get expert guidance and comprehensive support for your college admission journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plansData.map((plan: Plan, index: number) => (
            <div 
              key={index} 
              className={`relative rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${plan.color}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-tl-lg">
                  <span className="text-sm font-semibold">MOST POPULAR</span>
                </div>
              )}
              
              <div className="p-6 sm:p-8">
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {plan.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mt-1">
                    {plan.subtitle}
                  </p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                      ₹{plan.price}
                    </span>
                    <span className="text-gray-500 ml-2">/one-time</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-sm sm:text-base text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={plan.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button 
                    className={`w-full py-3 px-4 sm:py-4 sm:px-6 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    Get Started
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-base sm:text-lg text-gray-600">
            Need help choosing? Contact us at{' '}
            <a 
              href="mailto:support@careerconnect.com" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              support@careerconnect.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;