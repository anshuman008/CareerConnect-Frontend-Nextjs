import React from 'react';

const Privacy = () => {
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
    },
    note: {
      fontStyle: 'italic',
      fontSize: '0.9em',
      margin: '10px 0',
    },
    strong: {
      fontWeight: 'bold',
    },
    paragraph: {
      margin: '10px 0',
    },
  };

  return (
    <div style={style.container}>
      <h1 style={style.heading}>Privacy Policy</h1>

      <p style={style.paragraph}>
        <strong style={style.strong}>Last updated on:</strong> 02-03-2024 21:05:48
      </p>

      <p style={style.paragraph}>
        This privacy policy (“Policy”) relates to how CAREER CONNECT SERVICES (“we”, “us”, “our”) use, handle, and process the data you provide us in connection with using the products or services we offer. By using this website or availing of our goods or services, you agree to the terms and conditions of this Policy, and consent to our use, storage, disclosure, and transfer of your information or data as described in this Policy.
      </p>

      <p style={style.paragraph}>
        We are committed to ensuring that your privacy is protected in accordance with applicable laws and regulations. We urge you to familiarize yourself with this Policy to understand how your data is being handled by us. CAREER CONNECT SERVICES may change this Policy periodically, and we encourage you to check this page for the latest version of the Policy to stay updated.
      </p>

      <h2 style={style.heading}>What Data Is Being Collected</h2>
      <ul style={style.list}>
        <li>Name</li>
        <li>Contact information including address and email address</li>
        <li>Demographic information, preferences, or interests</li>
        <li>Personal Data or Other information relevant/required for providing the goods or services to you</li>
      </ul>
      <p style={style.note}>
        Note: Personal Data will be defined under relevant Indian laws. We will not store any credit card, debit card, or similar card data of yours, in accordance with applicable laws and guidelines.
      </p>

      <h2 style={style.heading}>What We Do With The Data We Gather</h2>
      <p style={style.paragraph}>
        We require this data for various purposes, including:
      </p>
      <ul style={style.list}>
        <li>Internal record keeping.</li>
        <li>Improving our products or services.</li>
        <li>Providing updates about our products or services, including special offers.</li>
        <li>Communicating information to you.</li>
        <li>Internal training and quality assurance purposes.</li>
      </ul>

      <h2 style={style.heading}>Who Do We Share Your Data With</h2>
      <p style={style.paragraph}>
        We may share your information or data with:
      </p>
      <ul style={style.list}>
        <li>Third parties including our service providers for operational and business reasons.</li>
        <li>Our group companies, where relevant.</li>
        <li>Our auditors or advisors as required for their services.</li>
        <li>Governmental bodies, regulatory authorities, or law enforcement authorities as per legal obligations or compliance requirements.</li>
      </ul>

      <h2 style={style.heading}>How We Use Cookies</h2>
      <p style={style.paragraph}>
        We use cookies to collect information and understand customer behavior. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you do not accept cookies, you may not be able to fully avail of our goods or services. We do not control third-party cookies, and their privacy policies govern their use.
      </p>

      <h2 style={style.heading}>Your Rights Relating To Your Data</h2>
      <ul style={style.list}>
        <li>
          <strong style={style.strong}>Right to Review:</strong> You can review the data you provided and request corrections or amendments. However, we will not be responsible for the authenticity of the data or information provided by you.
        </li>
        <li>
          <strong style={style.strong}>Withdrawal of Consent:</strong> You can choose not to provide data or withdraw your consent by writing to help.careerconnectservices@gmail.com. However, this may impact our ability to provide you with our goods or services.
        </li>
      </ul>
      <p style={style.note}>
        Note: These rights are subject to our compliance with applicable laws.
      </p>

      <h2 style={style.heading}>How Long Will We Retain Your Information Or Data?</h2>
      <p style={style.paragraph}>
        We will retain your information or data for as long as we are providing goods and services to you and thereafter as permitted under applicable law. However, we will process such information or data in accordance with applicable laws and this Policy.
      </p>

      <h2 style={style.heading}>Data Security</h2>
      <p style={style.paragraph}>
        We will use commercially reasonable and legally required precautions to preserve the integrity and security of your information and data.
      </p>

      <h2 style={style.heading}>Queries/ Grievance Officer</h2>
      <p style={style.paragraph}>
        For any queries, questions, or grievances about this Policy, please contact us using the contact information provided on this website.
      </p>
    </div>
  );
};

export default Privacy;
