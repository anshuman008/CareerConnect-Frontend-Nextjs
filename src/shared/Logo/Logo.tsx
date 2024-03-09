import React from "react";
import logoImg from "@/images/logo.svg";
import logoLightImg from "@/images/logo-light.svg";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/images/newBrandLogo.png"

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "flex-shrink-0",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-slate-600 ${className}`}
    >
      {/* THIS USE FOR MY CLIENT */}
      {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
      {img ? (
        <Image
         style={{height:90,width:90,margin:50}}
          src={logoImage}
          alt="Logo"
          sizes="400px"
          priority
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <Image
          className="hidden h-8 sm:h-10 w-auto dark:block"
          src={imgLight}
          alt="Logo-Light"
          sizes="200px"
          priority
        />
      )}
    </Link>
  );
};

export default Logo;
