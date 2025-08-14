import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* Left side - Contact info */}
        <div className="contact-info" data-aos="fade-right">
          <h2>Get In Touch</h2>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

          <div className="contact-item">
            <FaEnvelope /> <span>pankajkumarverma598@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt /> <span>+91 9115240219</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt /> <span>Lukcnow, India</span>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/pankaj-verma-a73377253/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/pankajv17" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </div>

        {/* Right side - Contact form */}
        <div className="contact-form-container" data-aos="fade-left">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status && <p className="form-status">{status}</p>}
        </div>

      </div>
    </section>
  );
}

export default Contact;
