'use client';

import React from 'react';

export default function SolutionSection() {
  return (
    <section id="solution" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-dark">
            The Proactive Solution: Holistic Wellness
          </h3>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            <strong>The Solution:</strong> Instead of reactively managing departures, Soul Desk offers a
            strategic investment in <strong>holistic wellness</strong> that addresses the root causes
            of attrition. We foster a supportive culture that values employees' total well-being,
            encompassing their physical, mental, financial, and social health — including family support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Wellness Pillars */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-gray-200 bg-[#F9F6F1]">
              <h4 className="font-bold text-lg mb-2">🧠 Mental Wellness</h4>
              <p className="text-sm text-gray-600">
                Frictionless access to coaching, therapy, and mindfulness tools to combat stress and burnout.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 bg-[#F9F6F1]">
              <h4 className="font-bold text-lg mb-2">🏃 Physical Wellness</h4>
              <p className="text-sm text-gray-600">
                Gamified challenges, fitness sessions, and nutrition tracking to boost health and morale.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 bg-[#F9F6F1]">
              <h4 className="font-bold text-lg mb-2">💰 Financial Wellness</h4>
              <p className="text-sm text-gray-600">
                Literacy courses and budgeting tools to reduce financial stress and improve stability.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 bg-[#F9F6F1]">
              <h4 className="font-bold text-lg mb-2">🤝 Social Wellness</h4>
              <p className="text-sm text-gray-600">
                Events and recognition programs that foster community and belonging.
              </p>
            </div>
          </div>

          {/* Family Factor */}
          <div className="lg:col-span-2 bg-accent text-white p-8 rounded-xl flex flex-col justify-center">
            <h4 className="font-bold text-2xl mb-3">󰔡 The Family Factor</h4>
            <p className="text-white/90">
              Extending benefits to families is a critical differentiator. Insurance and life event support
              (like parenthood) show deep commitment, especially boosting retention among female talent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
