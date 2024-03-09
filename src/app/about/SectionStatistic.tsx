import React, { FC } from "react";
import Heading from "@/components/Heading/Heading";

export interface Statistic {
  id: string;
  heading: string;
  subHeading: string;
}

const CAREERCONNECT_STATS: Statistic[] = [
  {
    id: "1",
    heading: "Best Choice Filling Algorithm",
    subHeading: "Innovative algorithm ensuring optimal college and branch selection",
  },
  {
    id: "2",
    heading: "Complete Support till Admission",
    subHeading: "Personalized assistance via chat and phone calls throughout the admission process",
  },
  {
    id: "3",
    heading: "50,000+ Students Guided",
    subHeading: "Successfully guided over 50,000 students to top engineering colleges in India",
  },
];

export interface SectionStatisticProps {
  className?: string;
}

const SectionStatistic: FC<SectionStatisticProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      <Heading
        desc="Discover why CareerConnect Services is the most trusted platform for career counseling and guidance."
      >
        CareerConnect Highlights
      </Heading>
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">
        {CAREERCONNECT_STATS.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
          >
            <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
              {item.heading}
            </h3>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
              {item.subHeading}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionStatistic;
