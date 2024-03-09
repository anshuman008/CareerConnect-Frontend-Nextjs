import Image, { StaticImageData } from "next/image";
import { Route } from "@/routers/types";
import imageRightPng from "@/images/banner-1.png";
import imageRightPng2 from "@/images/banner-2.png";
import imageRightPng3 from "@/images/banner-3.png";

interface Hero2DataType {
  image: StaticImageData | string;
  heading: string;
  subHeading: string;
  btnText: string;
  btnLink: Route;
}

export const HERO2_DEMO_DATA: Hero2DataType[] = [
  {
    "image": imageRightPng,
    "heading": "Empowering Your Career Journey",
    "subHeading": "Discover unparalleled career counseling and guidance with CareerConnect Services. We're your partners in navigating the path to top educational institutions, offering expert advice, and bespoke solutions tailored to your aspirations.",
    "btnText": "Explore on YouTube",
    "btnLink": "https://www.youtube.com/@careerconnectservices"
  },
  {
    "image": imageRightPng2,
    "heading": "Navigating Academic Excellence",
    "subHeading": "Join over 50,000 students who've found their ideal colleges through our unique Best Choice Filling Algorithm and personalized support. CareerConnect Services: Your trusted ally in education and career planning.",
    "btnText": "Learn More",
    "btnLink": "https://www.youtube.com/@careerconnectservices"
  },
  {
    "image": imageRightPng3,
    "heading": "Your Success, Our Commitment",
    "subHeading": "At CareerConnect Services, we blend technology with personal touch. Experience our comprehensive support through every step of admission - from live sessions to one-on-one guidance, ensuring you make informed, confident decisions.",
    "btnText": "Subscribe Now",
    "btnLink": "https://www.youtube.com/@careerconnectservices"
  }
  
];

