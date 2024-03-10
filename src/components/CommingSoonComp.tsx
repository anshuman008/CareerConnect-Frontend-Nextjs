'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Android from "@/images/pngegg.png";

const CommingSoonComp = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes growAndShrink {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }

          .animate-growAndShrink {
            animation: growAndShrink 2s infinite;
          }
        `}
      </style>
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-center rounded-lg p-4 animate-fadeIn`}>
        {isMobile ? (
          <div className="animate-growAndShrink relative w-20 h-20">
            <Image src={Android} alt="android" layout="fill" objectFit="contain" />
          </div>
        ) : (
          <>
            <h4 className="mb-2 sm:mb-0 sm:mr-4 text-base sm:text-lg font-bold text-gray-800 animate-fadeInFast">Coming Soon</h4>
            <div className="animate-growAndShrink relative w-24 h-24 sm:w-36 sm:h-36 md:w-30 md:h-30">
              <Image src={Android} alt="android" layout="fill" />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CommingSoonComp;
