import Logo from "@/shared/Logo/Logo";
import SocialsList1 from "@/shared/SocialsList1/SocialsList1";
import { CustomLink } from "@/data/types";
import React from "react";
import Link from "next/link";
import CommingSoonComp from "@/components/CommingSoonComp";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  // {
  //   id: "5",
  //   title: "Getting started",
  //   menus: [
  //     { href: "/", label: "Release Notes" },
  //     { href: "/", label: "Upgrade Guide" },
  //     { href: "/", label: "Browser Support" },
  //     { href: "/", label: "Dark Mode" },
  //   ],
  // },
  {
    id: "1",
    title: "COMPANY",
    menus: [
      { href: "/about", label: "About Us" },
      { href: "/contactus", label: "Contact Us" },
      { href: "/privacypolicy", label: "Privacy Policy" },
      { href: "/tnc", label: "Terms and Conditions" },
      { href: "/refundpolicy", label: "Refund Policy" },

    ],
  },
  {
    "id": "2",
    "title": "Our Services",
    "menus": [
      { "href": "/engg", "label": "Engineering Counselling Services" },
      { "href": "/med", "label": "Medical Counselling Services" },
    ]
  },
  // {
  //   id: "4",
  //   title: "OTHERS",
  //   menus: [
  //     { "href": "/", "label": "UPTAC/UPCET/UPSEE & MMMUT & HBTU" },
  //     { "href": "/", "label": "MP-DTE" },
  //     { "href": "/", "label": "BIT MESRA/PATNA/DEOGHAR/JAIPUR" },
  //     { "href": "/", "label": "VIEW ALL SERVICES" },
  //   ],
  // },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      
      <div key={index} className="text-sm">
       
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
       
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <Link
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
                rel="noopener noreferrer"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    );
  };

  return (
    <div className="nc-Footer relative py-20 lg:pt-28 lg:pb-24 border-t border-neutral-200 dark:border-neutral-700">
     
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            {/* <Logo /> */}
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <SocialsList1 className="flex items-center space-x-2 lg:space-x-0 lg:flex-col lg:space-y-3 lg:items-start" />
          </div>
        </div>
       
        {widgetMenus.map(renderWidgetMenuItem)}
        <CommingSoonComp/>
      </div>

     <div className="flex justify-center items-center mt-5 px-5">
     <h1>Copyright©CAREER CONNECT SERVICES. All rights reserved </h1>
     </div>
    </div>
  );
};

export default Footer;
