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
    image: imageRightPng,
    heading: "Your Career is Our Success",
    subHeading: "The first and largest online trusted consulting platform in India which provides all information regarding educational institutions & universities in their YouTube Channel. 🔥",
    btnText: "Learn now",
    btnLink: "/",
  },
  {
    image: imageRightPng2,
    heading: "Your Career is Our Success",
    subHeading: "The first and largest online trusted consulting platform in India which provides all information regarding educational institutions & universities in their YouTube Channel.🔥",
    btnText: "Learn now",
    btnLink: "/",
  },
  {
    image: imageRightPng3,
    heading: "Your Career is Our Success",
    subHeading: "The first and largest online trusted consulting platform in India which provides all information regarding educational institutions & universities in their YouTube Channel. 🔥",
    btnText: "Learn now",
    btnLink: "/",
  },
];

