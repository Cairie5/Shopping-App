import React from "react";

function About() {
  return (
    <div className="about bg-dark text-white p-4" style={{ textAlign: 'center' }}>
      <h1 className="text-danger"><a className="link-offset-2 link-underline link-underline-opacity-100" href="#">About Our company</a></h1>
      <p>WRITE</p>
      <h2 className="text-danger"><a className="link-offset-2 link-underline link-underline-opacity-100" href="#">About Our CEO</a></h2>
      <img src="https://cdn.vectorstock.com/i/1000x1000/08/33/profile-icon-male-user-person-avatar-symbol-vector-20910833.webp" alt="CEO" style={{ width: "200px", marginTop: '10px' }} />
      <p>Our Manager is Felix Okeyo.
        He has over 20 years of experience in the industry and has led our company to great success.
        If you have any questions or concerns, please feel free to contact him at:
        <span className="fw-bold text-warning">***********@ourcompany.com</span>
        or call us at:
        <span className="fw-bold text-info">+254 7********.</span>
      </p>
      <h2><a className="link-offset-2 link-underline link-underline-opacity-100" href="#">Contact Us</a></h2>
      <p>
        If you need any assistance, please don't hesitate to reach out to us.
        You can contact us at info@ourcompany.com or call us at
        <span className="fw-bold text-info">+254 7********.</span>
        Our customer service team is available 24/7 to help you with any questions
        or concerns you may have.
      </p>
    </div>
  )
}

export default About;
