"use client";

import React from "react";
import { Tab } from "@/app/headlessui";
import { plansData } from "@/data/plansData";
import { neetData } from "@/data/neetData";
import { othersData } from "@/data/othersData";

interface Plan {
  title: string;
  subtitle: string;
  price?: number;
  originalPrice?: number;
  discountPercent?: number;
  currency: string;
  url: string;
  features?: string[];
  popular: boolean;
  color: string;
  poster?: string;
  category?:string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const getVideoEmbed = (plan: Plan) => {
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

const PlanCard = ({ plan }: { plan: Plan }) => (
  <div
    className={classNames(
      "relative rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col pt-8",
      plan.popular
        ? "border-2 border-orange-400 transform hover:scale-[1.02]"
        : "border border-gray-200",
      plan.color
    )}
  >
    {typeof plan.discountPercent === "number" && plan.discountPercent > 0 && (
      <div className="absolute -left-10 top-4 rotate-[-56deg] z-30">
        <span className="inline-block bg-red-500 text-white text-[10px] sm:text-xs font-extrabold tracking-widest px-8 py-1 shadow-lg rounded">
          {plan.discountPercent}% OFF
        </span>
      </div>
    )}
    {plan.category && (
      <div className="absolute left-1/2 -translate-x-1/2 top-2 z-30 flex justify-center w-full">
        <span className="inline-block px-5 py-1 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs font-bold shadow-lg border-2 border-white uppercase tracking-wide">
          {plan.category}
        </span>
      </div>
    )}
    {plan.popular && (
      <div className="absolute top-[-5px] right-0 bg-orange-500 text-white px-2 py-0.5 rounded-tl-lg z-20">
        <span className="text-xs font-semibold">BEST SELLER</span>
      </div>
    )}
    {plan.poster && (
      <div className="w-full h-40 flex items-center justify-center bg-black/10">
        <img
          src={plan.poster}
          alt={plan.title}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
    )}
    <div className="p-4 sm:p-5 flex-1 flex flex-col">
      <div className="mb-3">
        <h3 className={classNames("text-lg sm:text-xl font-bold", plan.popular ? "text-orange-600" : "text-gray-900")}>{plan.title}</h3>
        <p className="text-sm text-gray-600">{plan.subtitle}</p>
      </div>
      {typeof plan.price === "number" && (
        <div className="mb-4">
          <div className="flex items-baseline space-x-2">
            {typeof plan.originalPrice === "number" && plan.originalPrice > plan.price ? (
              <>
                <span className="text-sm sm:text-base text-gray-400 line-through">
                  {plan.currency === "INR" ? "\u20b9" : plan.currency}
                  {plan.originalPrice}
                </span>
                <span className={classNames("text-2xl sm:text-3xl font-extrabold", plan.popular ? "text-orange-600" : "text-gray-900")}>
                  {plan.currency === "INR" ? "\u20b9" : plan.currency}
                  {plan.price}
                </span>
                {typeof plan.discountPercent === "number" && plan.discountPercent > 0 && (
                  <span className="ml-1 inline-flex items-center text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                    {plan.discountPercent}% OFF
                  </span>
                )}
              </>
            ) : (
              <span className={classNames("text-2xl sm:text-3xl font-extrabold", plan.popular ? "text-orange-600" : "text-gray-900")}>
                {plan.currency === "INR" ? "\u20b9" : plan.currency}
                {plan.price}
              </span>
            )}
          </div>
        </div>
      )}
      {plan.features && plan.features.length > 0 && (
        <div className="space-y-2 mb-4">
          {plan.features.map((feature, idx) => (
            <div key={feature + "-" + idx} className="flex items-start">
              <svg
                className={classNames("flex-shrink-0 h-4 w-4 mt-0.5", plan.popular ? "text-orange-500" : "text-green-500")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="ml-2 text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      )}
      {getVideoEmbed(plan)}
      <a
        href={plan.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full mt-auto"
      >
        <button
          className={classNames(
            "w-full py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300",
            plan.popular
              ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          )}
        >
          Get Started
        </button>
      </a>
    </div>
  </div>
);

const TABS: { name: string; data: Plan[] }[] = [
  { name: "Medical", data: neetData },
  { name: "Engineering", data: plansData },
  { name: "Others", data: othersData },
];

export default function ServPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Choose Your Perfect Plan</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Get expert guidance and comprehensive support for your college admission journey
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            If you want help in selecting the below premium counselling packages please contact us on WhatsApp at {" "}
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
        <Tab.Group>
          <Tab.List className="flex space-x-2 justify-center mb-8">
            {TABS.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  classNames(
                    "px-6 py-2.5 rounded-full text-lg font-semibold focus:outline-none transition-all duration-300",
                    selected
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105 ring-2 ring-purple-300"
                      : "bg-gray-100 text-gray-700 hover:bg-primary-100"
                  )
                }
              >
                {tab.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {TABS.map((tab) => (
              <Tab.Panel key={tab.name}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                  {tab.data.map((plan: Plan, i: number) => (
                    <PlanCard plan={plan} key={i} />
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Need help choosing? Contact us at {" "}
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
}