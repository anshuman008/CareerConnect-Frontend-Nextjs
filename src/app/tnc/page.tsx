import React from 'react';

const TermsAndConditions = () => {
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
  };

  return (
    <div style={style.container}>
      <h1 style={style.heading}>Terms & Conditions</h1>

      <ul style={style.list}>
        <li>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the WhatsApp or YouTube channel through which the service is provided, without express written permission by us.</li>
        <li>A breach or violation of any of the Terms will result in an immediate termination of your Services.</li>
        <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
        <li>We reserve the right to modify the contents of services at any time, but we have no obligation to update any information on our communication medium. You agree that it is your responsibility to monitor changes to our site.</li>
        <h2 style={style.heading}>Modifications to the Service and Prices</h2>
        <li>Prices for our products are subject to change without notice.</li>
        <li>We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.</li>
        <li>We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</li>
        <li>We do not warrant that the quality of any service purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.</li>
        <li>You agree to provide current, complete and accurate purchase and account information for all purchases made for services. You agree to promptly update your account and other information, including your email address and contact numbers, so that we can complete your transactions and contact you as needed.</li>
        <li>If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).</li>
        <h2 style={style.heading}>Entire Agreement</h2>
        <li>The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.</li>
        <li>These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).</li>
        <li>Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.</li>
      </ul>

      <div style={style.contactInfo}>
        <h2 style={style.heading}>Contact Information</h2>
        <p>Questions about the Terms of Service should be sent to us at <a href="mailto:help.careerconnectservices@gmail.com">help.careerconnectservices@gmail.com</a></p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
