import React, { useState } from "react";
import './ContactPage.css';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
    // Add form submission logic here, such as sending data to a server
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us!</p>

      <div className="contact-details">
        <h2 style={{textAlign:'center'}}>Our Address</h2>
        <p style={{paddingBottom:'15px'}}>123 Institute Lane, Knowledge City, Education State, 456789</p>

        <h2 style={{textAlign:'center'}}>Email</h2>
        <p style={{paddingBottom:'15px'}}>contact@institute.edu</p>

        <h2 style={{textAlign:'center'}}>Phone</h2>
        <p style={{paddingBottom:'15px'}}>+1 234 567 8900</p>
      </div>

      <div className="contact-form">
        <h2  style={{textAlign:'center'}}>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Submit</button>
          <button type="button" className="btn btn-primary btn-sm">Default</button>

        </form>
      </div>
    </div>
  );
};

export default ContactPage;
