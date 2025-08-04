'use client';

import React from 'react';

export default function HeroSection() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector('#problem');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-dark leading-tight">
          Soul Desk: Turn Attrition into Retention.
        </h2>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
          High employee turnover is costing Indian companies more than just talent. This interactive report
          explores the profound financial and operational burden of attrition and presents a data-driven case
          for a holistic wellness platform as a strategic, high-ROI solution.
        </p>
        <a
          href="#problem"
          onClick={handleScroll}
          className="mt-8 inline-block bg-accent text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-[#B08A7E] transition-colors"
        >
          Explore the Data
        </a>
      </div>
    </section>
  );
}
