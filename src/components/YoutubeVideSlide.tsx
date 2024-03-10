'use client'
import React, { useEffect, useState } from 'react';

const YoutubeVideoSlide = () => {
  // State to store the screen width
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set state based on the window's width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set the initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderStyle: React.CSSProperties = {
    display: 'flex',
    overflowX: 'auto',
    width: '100%',
    gap: '20px',
    padding: '20px',
    scrollSnapType: 'x mandatory',
  };

  const iframeStyle: React.CSSProperties = {
    flex: '0 0 auto',
    width: isMobile ? '90%' : '30vw',
    height: isMobile ? '50%' : '20vw',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    scrollSnapAlign: 'start',
    margin: 'auto',
  };

  return (
    <div style={sliderStyle}>
      <iframe 
        style={iframeStyle} 
        src="https://www.youtube.com/embed/3B4Xji60WOU" 
        title="Jac Delhi Counselling 2024 | Eligibility | Cut-off | Placements | Fees | in one video" 
        frameBorder="0" 
        allowFullScreen
      ></iframe>
      
      <iframe 
        style={iframeStyle} 
        src="https://www.youtube.com/embed/W9T7oCQRDfA" 
        title="Top 300 Colleges for Computer Science Engineering !! 99 percentile to 40 Percentile  !!Government" 
        frameBorder="0" 
        allowFullScreen
      ></iframe>

      <iframe 
        style={iframeStyle} 
        src="https://www.youtube.com/embed/xnGiaEFGL9k" 
        title="Low Percentile in JEE 2024 ? All About Jaypee Noida Admission  | Direct Admission ??| cut-off" 
        frameBorder="0" 
        allowFullScreen
      ></iframe>

      <iframe 
        style={iframeStyle} 
        src="https://www.youtube.com/embed/9c5rMc1PybQ" 
        title="JEE 2024 Low Percentile ?? Get Top 100 Government colleges between 10 -95 Percentile" 
        frameBorder="0" 
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeVideoSlide;
