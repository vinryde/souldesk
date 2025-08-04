'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const stats = [
  { label: 'Medical Cost Savings', value: 3.27, prefix: '$', suffix: '', description: 'For every $1 spent on wellness.' },
  { label: 'Higher Productivity', value: 21, prefix: '', suffix: '%', description: 'Reported by engaged teams.' },
  { label: 'Reduction in Turnover', value: 26, prefix: '', suffix: '%', description: 'As reported by leading platforms.' }
];

export default function ROISection() {
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        stats.forEach((stat, index) => {
          let current = 0;
          const increment = stat.value / 60;
          const animate = () => {
            current += increment;
            if (current < stat.value) {
              setAnimatedValues(prev => {
                const updated = [...prev];
                updated[index] = parseFloat(current.toFixed(2));
                return updated;
              });
              requestAnimationFrame(animate);
            } else {
              setAnimatedValues(prev => {
                const updated = [...prev];
                updated[index] = stat.value;
                return updated;
              });
            }
          };
          animate();
        });
      }
    }, { threshold: 0.5 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const doughnutData = {
    labels: ['Improved Productivity', 'Reduced Medical Costs', 'Stronger Retention'],
    datasets: [{
      data: [58, 21, 21],
      backgroundColor: ['#8A6E64', '#C89F91', '#E5D8D0'],
      borderColor: '#FFFFFF',
      borderWidth: 4,
      hoverOffset: 8
    }]
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '65%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#4A4A4A',
          padding: 20,
          font: { size: 12 }
        }
      },
      tooltip: {
        backgroundColor: '#4A4A4A',
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 12 },
        padding: 10,
        cornerRadius: 4,
        displayColors: false,
        callbacks: {
          label: context => `${context.label}: ${context.parsed}%`
        }
      }
    }
  };

  return (
    <section id="roi" className="py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-dark">
            The Tangible Return on Investment
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Investing in wellness isn't an expense; it's a high-return investment. The data clearly shows
            that comprehensive wellness programs deliver significant, measurable returns by cutting costs,
            boosting productivity, and improving employee retention.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Stat Cards */}
          <div className="lg:col-span-1 space-y-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className="bg-white p-6 rounded-lg text-center shadow-md stat-card">
                <div className="text-4xl font-bold text-[#8A6E64] mb-2">
                  {stat.prefix}{animatedValues[i].toFixed(stat.value % 1 === 0 ? 0 : 2)}{stat.suffix}
                </div>
                <p className="font-medium text-gray-600">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Doughnut Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold text-center mb-4">Primary Drivers of Wellness ROI</h4>
            <div className="h-[300px] md:h-[400px]">
              <Doughnut data={doughnutData} options={options} />
            </div>
            <p className="text-xs text-center mt-4 text-gray-500">
              Productivity gains are the largest contributor to the overall financial return.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
