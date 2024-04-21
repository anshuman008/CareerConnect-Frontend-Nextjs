import Link from "next/link";

const PageCollection2 = () => {
  const plans = [
    {
      name: 'Starter Package',
      price: '499',
      features: [
        'Rank Wise College Predictor',
        'Rank Wise Branch Predictor',
        'College-Branch Predictor/Chances',
        'Choice Filling Order According to Rank',
        'Round-wise Admission Predictor',
        'Counseling Tips & Important Notification'
      ],
      buttonText: 'Get started',
      highlighted: false,
      redirectLink: 'https://pages.razorpay.com/499Starter'
    },
    {
      name: 'All In One Package ONLINE',
      price: '799',
      features: [
        'One Time Online Mentor Session for 1 hr',
        'Rank Wise College Predictor',
        'Rank Wise Branch Predictor',
        'College-Branch Predictor/Chances',
        'Choice Filling Order According to Rank',
        'Round-wise Admission Predictor',
      ],
      buttonText: 'Get started',
      highlighted: false,
      redirectLink: 'https://pages.razorpay.com/799allinoneonline'
    },
    {
      name: 'All In One Package OFFLINE',
      price: '999',
      features: [
        'One Time Offline Mentor Session for 1 hr',
        'Rank Wise College Predictor',
        'Rank Wise Branch Predictor',
        'College-Branch Predictor/Chances',
        'Choice Filling Order According to Rank',
        'Round-wise Admission Predictor',
      ],
      buttonText: 'Contact Sales',
      highlighted: true,
      redirectLink: 'https://pages.razorpay.com/999allinoneoffline'
    },
  ];


   // This function will return additional styling for the super highlighted section
  const highlightClass = (highlighted: boolean) => {
    return highlighted ? 'bg-[#5e00d1] text-white' : 'bg-green-500 text-white';
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`max-w-xs w-full rounded-lg shadow-lg p-6 ${plan.highlighted ? 'border-4 border-blue-500 bg-blue-100' : 'bg-white'}`}>
              <h3 className={`text-lg font-medium ${plan.highlighted ? 'text-blue-600' : 'text-gray-900'}`}>{plan.name}</h3>
              <p className="text-4xl font-bold text-gray-900">{`₹${plan.price}`}</p>
              <ul className="mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start mt-2">
                    <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-700">{feature}</span>
                  </li>
                ))}
                <li key="counseling-mode" className={`flex items-start mt-2 rounded-lg p-3 ${highlightClass(plan.highlighted)}`}>
                  <svg className="flex-shrink-0 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c3.31 0 6 2.69 6 6s-6 6-6 6-6-2.69-6-6 2.69-6 6-6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v4l2 2" />
                  </svg>
                  <span className="ml-3 text-base">{plan.name === 'All In One Package OFFLINE' ? 'Offline Counseling Available' : 'Online Counseling Mode'}</span>
                </li>
              </ul>
              <Link href={{pathname:plan.redirectLink}}>
                 <button className={`${plan.highlighted ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'} w-full py-2 px-4 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors`}>
                {plan.buttonText}
              </button>
              </Link>
           
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageCollection2;