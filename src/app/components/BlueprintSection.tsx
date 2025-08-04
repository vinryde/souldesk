'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const accordionItems = [
  {
    title: 'Integrated Holistic Offerings',
    content:
      'Seamlessly combine physical, mental, financial, and social wellness programs. This includes gamified health challenges, one-on-one coaching, mental health support, financial literacy tools, and community-building activities to address the employee as a whole person.',
  },
  {
    title: 'Comprehensive Family Benefits',
    content:
      'Extending benefits to families, including group health/life insurance and specialized support for parenthood (nutrition, mental health, coaching). This demonstrates a deep commitment that fosters unparalleled loyalty and retention.',
  },
  {
    title: 'Technology & Personalization',
    content:
      'We leverage cutting-edge technology to deliver scalable, personalized wellness plans and robust analytics. Our analytics dashboard helps HR leaders track engagement, demonstrate ROI, and gain insights for improvement.',
  },
  {
    title: 'Engaging & Culturally Relevant Experience',
    content:
      'Ensure high adoption with a mobile-first design, gamification, peer recognition, and culturally sensitive activities. The platform should be fun, accessible, and integrated into the daily workflow.',
  },
];

export default function BlueprintSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="blueprint" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-dark">
            Blueprint for an Impactful Platform
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            To succeed, a B2B wellness platform must be more than a collection of features.
            It must be an integrated, intelligent, and engaging experience. Click each section to expand.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {accordionItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-4 px-2 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-dark">{item.title}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-dark"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden px-2 pb-4"
                  >
                    <p className="text-gray-600">{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
