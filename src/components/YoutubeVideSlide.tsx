import React from 'react';

const YoutubeVideoSlide = () => {
  const sliderStyle: React.CSSProperties = {
    display: 'flex',
    overflowX: 'auto', // No error should be here now
    width: '100%',
    gap: '20px',
    padding: '20px',
    scrollSnapType: 'x mandatory',
  };

  const iframeStyle: React.CSSProperties = {
    flex: '0 0 auto',
    width: '30vw',
    height: '20vw',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    scrollSnapAlign: 'start',
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
