import React from 'react';

const Services = () => {
 

  const medicalServices = [
    "MBBS ADMISSION",
    "BDS",
    "BAMS",
    "B.SC NURSING",
    "BHMS",
    "BUMS",
    "BTECH BIO TECH"
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', marginTop: '50px', marginBottom: '30px' }}>Medical Services</h1>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        {medicalServices.map((service, index) => (
          <li key={index} style={{ marginBottom: '10px', background: '#f0f0f0', padding: '10px 15px', borderRadius: '5px' }}>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
