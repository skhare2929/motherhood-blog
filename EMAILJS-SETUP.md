# EmailJS Setup Guide

This guide will help you configure EmailJS to receive emails from your contact form.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. Go to the **Email Services** page
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to the **Email Templates** page
2. Click **Create New Template**
3. Set up your template with these variables:
   - Subject: `New Contact Form Message: {{subject}}`
   - Content:
     ```
     You have received a new message from your website contact form.

     Name: {{from_name}}
     Email: {{from_email}}
     Subject: {{subject}}

     Message:
     {{message}}
     ```
4. **Copy the Template ID** (you'll need this later)
5. Click **Save**

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. **Copy this key** (you'll need this later)

## Step 5: Configure Your Website

Open the file: `src/components/pages/ContactPage.js`

Find these lines (around line 26-28):

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

Replace with your actual values:

```javascript
const EMAILJS_SERVICE_ID = 'service_abc123';  // From Step 2
const EMAILJS_TEMPLATE_ID = 'template_xyz789'; // From Step 3
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'; // From Step 4
```

Also update line 56 with your email address:

```javascript
to_email: 'your-email@example.com' // Replace with your actual email
```

## Step 6: Test Your Contact Form

1. Save the changes to `ContactPage.js`
2. Go to your website at http://localhost:3000
3. Navigate to the Contact page
4. Fill out the form and click "Send Message"
5. Check your email inbox for the message

## EmailJS Free Tier Limits

- 200 emails per month
- Perfect for a personal blog
- If you need more, you can upgrade to a paid plan

## Troubleshooting

### "Failed to send message" error
- Double-check that all IDs are correct
- Make sure your email service is properly connected
- Check the browser console for detailed error messages

### Not receiving emails
- Check your spam folder
- Verify the template is set up correctly
- Make sure the email service is active in EmailJS dashboard

### Template variables not showing
- Ensure variable names match exactly: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- Variables are case-sensitive

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: Available through their dashboard

---

**Note:** Keep your EmailJS credentials secure. Consider using environment variables for production deployment.
