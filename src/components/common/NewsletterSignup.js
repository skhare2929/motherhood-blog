import { useState } from 'react';

const KIT_FORM_ID = 9155096;
const KIT_API_KEY = process.env.REACT_APP_KIT_API_KEY;
const KIT_HEADERS = {
  'Content-Type': 'application/json',
  'X-Kit-Api-Key': KIT_API_KEY,
};

const NewsletterSignup = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Step 1: Create/upsert subscriber to capture first name
      const subscriberRes = await fetch('https://api.kit.com/v4/subscribers', {
        method: 'POST',
        headers: KIT_HEADERS,
        body: JSON.stringify({
          email_address: form.email,
          first_name: form.name,
        }),
      });

      if (!subscriberRes.ok) throw new Error('Subscriber creation failed');
      const { subscriber } = await subscriberRes.json();

      // Step 2: Add subscriber to the freebie form to trigger automation
      const formRes = await fetch(`https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers/${subscriber.id}`, {
        method: 'POST',
        headers: KIT_HEADERS,
      });

      if (!formRes.ok) throw new Error('Form subscription failed');

      setStatus('success');
      setForm({ name: '', email: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-box">
        <h2 className="newsletter-title">Get Your Freebie</h2>
        <p className="newsletter-subtitle">
          Drop your name and email — I'll send it straight to your inbox.
        </p>

        {status === 'success' ? (
          <div className="success-message">
            You're in! Check your inbox for the freebie.
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="newsletter-fields">
              <input
                type="text"
                placeholder="Your first name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                required
              />
              <input
                type="email"
                placeholder="Your email address"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                required
              />
              <button
                type="submit"
                className="submit-button"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending…' : 'Send Me the Freebie'}
              </button>
            </div>
            {status === 'error' && (
              <div className="error-message">Something went wrong. Please try again.</div>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
