# Banks Lock & Hardware Store

A React-based e-commerce website for home accessories and hardware products.

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment file:
   ```bash
   cp .env.example .env
   ```

4. Set up EmailJS (required for contact form):
   - Go to [EmailJS](https://www.emailjs.com/)
   - Create an account and verify your email
   - Create a new email service (Gmail, Outlook, etc.)
   - Create an email template with these variables:
     - `{{from_name}}`
     - `{{from_email}}`
     - `{{phone}}`
     - `{{message}}`
     - `{{to_email}}`
   - Copy your Service ID, Template ID, and Public Key to `.env`:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Build for production:
   ```bash
   npm run build
   ```

## Deployment

This project is configured for deployment on Vercel. The contact form uses EmailJS for email functionality, so no backend server is required.

### Environment Variables for Production

Set these environment variables in your Vercel project settings:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Features

- Product catalog with images
- Contact form with email functionality
- WhatsApp integration
- Responsive design with Tailwind CSS
- Chat widget
