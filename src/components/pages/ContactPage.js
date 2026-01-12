import React, { useState } from 'react';
import HighlightBox from '../common/HighlightBox';
import usePageSEO from '../../hooks/usePageSEO';
import { pageSEO } from '../../utils/seoConfig';

const ContactPage = () => {
  usePageSEO(pageSEO.contact.title, pageSEO.contact.description);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);

    // Show success message
    setShowSuccess(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="page">
      <section className="content-section">
        <h2>Contact Me</h2>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem' }}>
          I'd love to hear from you! Whether you have a question, want to share your own experience, or just
          want to say hello, please don't hesitate to reach out. I read every message and do my best to respond
          to everyone.
        </p>

        {showSuccess && (
          <div className="success-message">
            <strong>✓ Message sent successfully!</strong> Thank you for reaching out. I'll get back to you
            as soon as possible!
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message *</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>

        <div style={{ marginTop: '3rem' }}>
          <h3>Other Ways to Connect</h3>
          <p>You can also find me on social media:</p>
          <div className="social-links">
            <a href="#instagram" onClick={(e) => e.preventDefault()}>Instagram</a>
            <a href="#facebook" onClick={(e) => e.preventDefault()}>Facebook</a>
            <a href="#pinterest" onClick={(e) => e.preventDefault()}>Pinterest</a>
          </div>
        </div>

        <HighlightBox>
          <strong>What to Expect:</strong> I typically respond to messages within 2-3 business days. Please
          remember that I'm not a medical professional and cannot provide medical advice. For any health
          concerns about your child, please consult with your pediatrician or healthcare provider.
        </HighlightBox>
      </section>
    </div>
  );
};

export default ContactPage;
