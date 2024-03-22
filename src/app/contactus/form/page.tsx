import React from 'react';

function Form() {
  return (
    <div className="container mx-auto p-6 sm:[100%]  bg-gray-100 rounded-lg shadow-md w-[100%]">
        <h1 className="text-center text-3xl text-gray-800 mb-4 animate-pulse">
            Free Guidance Form 2024
        </h1>
        <div className="relative overflow-hidden pt-9/16 h-screen">
            <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://docs.google.com/forms/d/e/1FAIpQLSfr0pJuQHl-KpheCQSXX24NdZNrmPdUc6ULOwDe2ODFSp5P1A/viewform?embedded=true" 
                frameBorder="0" 
                allowFullScreen>
                Loading…
            </iframe>
        </div>
    </div>
  );
}

export default Form;
