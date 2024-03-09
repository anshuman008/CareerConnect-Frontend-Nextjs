import Image from 'next/image'
import React from 'react'
import  Android from "@/images/pngegg.png"

const CommingSoonComp = () => {

    const fadeInAnimation = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;

  const pulseAnimation = `
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
  `;

  return (
<div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        padding: "10px 20px",
        animation: "fadeIn 1s ease-out"
      }}>
        <style>
          {fadeInAnimation}
          {pulseAnimation}
        </style>

        <h4 style={{
          marginRight: "10px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "#333",
          animation: "fadeIn 2s ease-out"
        }}>Coming Soon</h4>
        <div style={{
          animation: "pulse 2s infinite"
        }}>
          <Image style={{
            width: "150px",
            height: "150px"
          }} src={Android} alt="android" />
        </div>
      </div>
  )
}

export default CommingSoonComp