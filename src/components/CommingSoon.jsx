import React from 'react';

function CommingSoon() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `}
      </style>
      <div className="text-center p-6 rounded-lg bg-white shadow-lg animate-fadeIn" style={{ animation: 'fadeIn 2s ease-out, pulse 1.5s infinite ease-in-out' }}>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Coming Soon</h1>
        <p className="text-gray-600">Our new product is on the way. Stay tuned!</p>
      </div>
    </div>
  );
}

export default CommingSoon;
