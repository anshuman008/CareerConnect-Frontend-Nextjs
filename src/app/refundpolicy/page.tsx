import React from 'react';

const Refund = () => {
  const style = {
    container: {
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
    },
    heading: {
      color: '#4a4a4a',
      borderBottom: '2px solid #eaeaea',
      paddingBottom: '10px',
    },
    list: {
      marginLeft: '20px',
      listStyleType: 'disc',
    },
    contactInfo: {
      marginTop: '20px',
    },
    paragraph: {
      margin: '10px 0',
    },
  };

  return (
    <div style={style.container}>
      <h1 style={style.heading}>Refund Policy for Career Connect Services</h1>

      <ol style={style.list}>
        <li style={style.paragraph}>
          <strong>Conditional Refund:</strong>
          At Career Connect Services, our refund policy is conditional and depends on various parameters that may change over time. We strive to be fair and transparent in our approach.
        </li>
        <li style={style.paragraph}>
          <strong>Refund Eligibility:</strong>
          Refunds, when applicable, are determined by specific factors including the nature of service availed, the progress of the counseling session or service, and the time elapsed since the service was purchased. The eligibility criteria for refunds are subject to change, and we advise clients to stay informed about these parameters.
        </li>
        <li style={style.paragraph}>
          <strong>No Automatic Refunds:</strong>
          Please be aware that refunds are not automatically granted. Each request is carefully reviewed, and a decision is made based on the prevailing conditions and parameters at that time.
        </li>
        <li style={style.paragraph}>
          <strong>Contact for Concerns:</strong>
          Your satisfaction is important to us. If you have any concerns or issues with the service provided, please reach out to us directly. We are committed to working with you to address and resolve any issues within the framework of our policy.
        </li>
        <li style={style.paragraph}>
          <strong>Policy Updates:</strong>
          Career Connect Services reserves the right to modify this refund policy. We recommend clients review our policy periodically to stay updated on any changes.
        </li>
        
        <li style={style.paragraph}>
  <strong>Time Line for Refund:</strong>
  Refunds will take around 12 to 15 workings days to process. On some products, refunds are not applicable.
</li>

      </ol>

      <div style={style.contactInfo}>
        <p>
          <strong>Contact Us:</strong>
          For any inquiries or clarification regarding our refund policy, please contact us.
        </p>
      </div>
    </div>
  );
};

export default Refund;
