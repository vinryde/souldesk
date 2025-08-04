'use client';

import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact-us" className="py-16 md:py-24 bg-[#F9F6F1]">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h3 className="text-3xl md:text-4xl font-bold text-dark mb-6">
          Ready to Transform Your Workforce?
        </h3>
        <p className="mt-4 text-lg text-gray-600 mb-8">
          We believe in building genuine connections. Our team is ready to discuss how Soul Desk can help you
          foster a valued, accountable, and deeply connected workforce. Reach out to us directly, human to human.
        </p>

        <form
          action="https://forms.gle/YOUR_GOOGLE_FORM_LINK_HERE"
          method="POST"
          target="_blank"
          className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-left"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="entry.123456789"
              placeholder="John Doe"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Your Email ID
            </label>
            <input
              type="email"
              id="email"
              name="entry.987654321"
              placeholder="john.doe@example.com"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-gray-700 text-sm font-medium mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="entry.112233445"
              placeholder="Apple Corp"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
              Your Message / POC Details
            </label>
            <textarea
              id="message"
              name="entry.554433221"
              rows={4}
              placeholder="Tell us about your needs or provide specific POC details..."
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-[#B08A7E] transition-colors"
          >
            Send Your Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
