import React from 'react';

const Services = () => {
  const engineeringServices = [
    "JOSAA & CSAB",
    "JAC Delhi",
    "IPU",
    "JAC Chandigarh",
    "JAYPEE NOIDA",
    "UPTAC/UPCET/UPSEE & MMMUT & HBTU",
    "MP-DTE",
    "BIT MESRA/PATNA/DEOGHAR/JAIPUR",
    "LMNIIT/THAPAR",
    "REAP",
    "HSTES",
    "MHT-CET",
    "COMED-K",
    "WBJEE",
    "BITS/LNMIIT/Thapar/MIT/VIT/SRM/Shiv Nadar"
  ];

 

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Engineering Counselling Services</h1>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        {engineeringServices.map((service, index) => (
          <li key={index} style={{ marginBottom: '10px', background: '#f0f0f0', padding: '10px 15px', borderRadius: '5px' }}>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
