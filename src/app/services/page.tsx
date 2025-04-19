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
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
            Choose Your Perfect Plan
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Get expert guidance and comprehensive support for your college admission journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {plansData.map((plan: Plan, index: number) => (
            <div 
              key={index} 
              className={`relative rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                plan.popular 
                  ? 'border-2 border-orange-400 transform hover:scale-[1.02]' 
                  : 'border border-gray-200'
              } ${plan.color}`}
            >
              {plan.popular && (
                <div className="absolute top-[-5px] right-0 bg-orange-500 text-white px-2 py-0.5 rounded-tl-lg">
                  <span className="text-xs font-semibold">MOST POPULAR</span>
                </div>
              )}
              
              <div className="p-4 sm:p-5">
                <div className="mb-3">
                  <h3 className={`text-lg sm:text-xl font-bold ${
                    plan.popular ? 'text-orange-600' : 'text-gray-900'
                  }`}>
                    {plan.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {plan.subtitle}
                  </p>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className={`text-2xl sm:text-3xl font-extrabold ${
                      plan.popular ? 'text-orange-600' : 'text-gray-900'
                    }`}>
                      ₹{plan.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">/one-time</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <svg className={`flex-shrink-0 h-4 w-4 mt-0.5 ${
                        plan.popular ? 'text-orange-500' : 'text-green-500'
                      }`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-2 text-sm text-gray-700">{feature}</span>
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
                    className={`w-full py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg' 
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

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Need help choosing? Contact us at{' '}
            <a 
              href="mailto:support@careerconnect.com" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
             help.careerconnectservices@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;