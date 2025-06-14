import { plansData } from "@/data/plansData";

interface Plan {
  title: string;
  subtitle: string;
  price?: number;
  currency: string;
  url: string;
  features?: string[];
  popular: boolean;
  color: string;
  poster?: string;
}

const getVideoEmbed = (plan: Plan) => {
  // 499 plan: show standard YouTube video
  if (plan.price === 499) {
    return (
      <div className="flex justify-center my-4">
        <div className="w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/g4hYwadCiXE"
            title="Career Connect Services 499 Package Video"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    );
  }
  // 2499 plans: always use 16:9 (Shorts or Standard for visual alignment)
  if (
    plan.price === 2499 &&
    (plan.title.toLowerCase().includes("online") || plan.title.toLowerCase().includes("offline"))
  ) {
    return (
      <div className="flex justify-center my-4">
        <div className="w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/hklGSB7FOzc"
            title="Career Connect YouTube Short"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    );
  }
  return null;
};

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
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            If you want help in selecting the below premium counselling packages please contact us on WhatsApp at{" "}
            <a
              href="https://wa.me/917678545780"
              className="text-blue-600 hover:text-blue-700 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 7678545780
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {neetData.map((plan: Plan, index: number) => (
            <div
              key={plan.title + "-" + index}
              className={`relative rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                plan.popular
                  ? "border-2 border-orange-400 transform hover:scale-[1.02]"
                  : "border border-gray-200"
              } ${plan.color}`}
            >
              {plan.popular && (
                <div className="absolute top-[-5px] right-0 bg-orange-500 text-white px-2 py-0.5 rounded-tl-lg">
                  <span className="text-xs font-semibold">BEST SELLER</span>
                </div>
              )}

              {plan.poster && (
                <div className="w-full h-auto z-10 flex items-center justify-center bg-black">
                  <img
                    src={plan.poster}
                    alt={plan.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="p-4 sm:p-5">
                <div className="mb-3">
                  <h3
                    className={`text-lg sm:text-xl font-bold ${
                      plan.popular ? "text-orange-600" : "text-gray-900"
                    }`}
                  >
                    {plan.title}
                  </h3>
                  <p className="text-sm text-gray-600">{plan.subtitle}</p>
                </div>

                {typeof plan.price === "number" && (
                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span
                        className={`text-2xl sm:text-3xl font-extrabold ${
                          plan.popular ? "text-orange-600" : "text-gray-900"
                        }`}
                      >
                        ₹{plan.price}
                      </span>
                    </div>
                  </div>
                )}

                {plan.features && plan.features.length > 0 && (
                  <div className="space-y-2 mb-4">
                    {plan.features.map((feature, idx) => (
                      <div key={feature + "-" + idx} className="flex items-start">
                        <svg
                          className={`flex-shrink-0 h-4 w-4 mt-0.5 ${
                            plan.popular ? "text-orange-500" : "text-green-500"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-2 text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Video embeds for specific plans */}
                {getVideoEmbed(plan)}

                <a
                  href={
                    plan.title === "IPU Guaranteed Allotment Support" ||
                    plan.title === "Counselling Combo"
                      ? "https://wa.me/917678545780"
                      : plan.url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button
                    className={`w-full py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
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
            Need help choosing? Contact us at{" "}
            <a
              href="mailto:help.careerconnectservices@gmail.com"
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