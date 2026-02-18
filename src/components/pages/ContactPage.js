import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import emailjs from '@emailjs/browser';
import HighlightBox from '../common/HighlightBox';
import usePageSEO from '../../hooks/usePageSEO';
import { pageSEO } from '../../utils/seoConfig';
import contactContent from '../../content/contact.md';

const ContactPage = () => {
  usePageSEO(pageSEO.contact.title, pageSEO.contact.description);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // EmailJS Configuration
  // Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_v6ad6hr';
  const EMAILJS_TEMPLATE_ID = 'template_pw7zjvy';
  const EMAILJS_PUBLIC_KEY = 'eW7dpXqv9gX-l9Bqb';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowError(false);

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'No subject',
      message: formData.message
    };

    // Send email using EmailJS
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);

      // Show success message
      setShowSuccess(true);
      setIsLoading(false);

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
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      setShowError(true);
      setIsLoading(false);

      // Hide error message after 5 seconds
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    });
  };

  return (
    <div className="page">
      <section className="content-section">
        <ReactMarkdown>{contactContent}</ReactMarkdown>

        {showSuccess && (
          <div className="success-message">
            <strong>✓ Message sent successfully!</strong> Thank you for reaching out. I'll get back to you
            as soon as possible!
          </div>
        )}

        {showError && (
          <div className="error-message">
            <strong>✗ Failed to send message.</strong> Please try again or contact me directly via email.
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

          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* <div style={{ marginTop: '3rem' }}>
          <h3>Other Ways to Connect</h3>
          <p>You can also find me on social media:</p>
          <div className="social-links">
            <a href="#instagram" onClick={(e) => e.preventDefault()}>Instagram</a>
            <a href="#pinterest" onClick={(e) => e.preventDefault()}>Pinterest</a>
          </div>
        </div> */}

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
