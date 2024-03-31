import React from 'react';
import Script from 'next/script';
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/shared/Footer/Footer";
import SiteHeader from "@/app/SiteHeader";
import CommonClient from "./CommonClient";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children, params }: { children: React.ReactNode; params: any; }) {
  return (
    <>
      <Script 
       type="text/javascript"
       src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
       id="aisensy-wa-widget"
       widget-id="XK1LbL"
      />
      <html lang="en" dir="" className={poppins.className}>
        <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
          <SiteHeader />
          {children}
          <CommonClient />
          <Footer />
        </body>
      </html>
    </>
  );
}
