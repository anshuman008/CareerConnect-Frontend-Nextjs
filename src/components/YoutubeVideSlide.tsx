import React from 'react';

const YoutubeVideoSlide = () => {
  const sliderStyle = {
    display: 'flex',
    overflowX: 'auto',
    width: '100%',
    gap: '20px', // Adjust the space between iframes
    padding: '20px' // Adds padding around the iframes
  };

  const iframeStyle = {
    flex: '0 0 auto', // This ensures that each iframe is fully visible and not shrunk
    width: '100wh', // Each iframe takes up 100% of the viewport width
    height: '20vw' // This maintains a 16:9 aspect ratio (height is 56.25% of width)
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
