import rightImg from "@/images/hero-right1.png";
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import BgGlassmorphism from "@/components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionHero from "./SectionHero";
import SectionClientSay from "@/components/SectionClientSay/SectionClientSay";
import SectionPromo3 from "@/components/SectionPromo3";

const PageAbout = ({}) => {
  return (
    <div className={`nc-PageAbout overflow-hidden relative`}>
      {/* ======== BG GLASS ======== */}
      {/* <BgGlassmorphism /> */}

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
  <SectionHero
    rightImg={""}
    heading="👋 About Us."
    btnText=""
    subHeading="With over 10+ years of experience, CareerConnect Services is dedicated to providing transparent and unbiased guidance. We help shape bright futures with comprehensive career counseling services."
  /> 

        {/* <SectionFounder /> */}

        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div> */}

        <SectionStatistic />

        <SectionPromo3 />
      </div>
    </div>
  );
};

export default PageAbout;
