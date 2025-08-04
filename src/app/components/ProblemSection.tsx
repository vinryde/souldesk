'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import React from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function ProblemSection() {
  const attritionData = {
    labels: ['E-commerce', 'Prof. Services', 'IT', 'Financial Svcs', 'Hi-Tech', 'Engineering', 'Chemicals', 'Automotive', 'Mining'],
    datasets: [{
      label: 'Attrition Rate (%)',
      data: [28.7, 25.7, 25, 24.8, 21.5, 14, 12.9, 12.4, 8.6],
      backgroundColor: [
        '#C89F91', '#C89F91', '#C89F91', '#C89F91', '#C89F91',
        '#E5D8D0', '#E5D8D0', '#E5D8D0', '#E5D8D0'
      ],
      borderRadius: 6
    }]
  };

  const costData = {
    labels: ['Junior-Mid', 'Senior/Niche', 'IT & Tech', 'BFSI', 'Leadership'],
    datasets: [{
      label: 'Hiring Cost (INR)',
      data: [50000, 100000, 80000, 120000, 200000],
      backgroundColor: ['#E5D8D0', '#E5D8D0', '#C89F91', '#C89F91', '#8A6E64'],
      borderRadius: 6
    }]
  };

  const commonOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#4A4A4A',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        padding: 10,
        cornerRadius: 4,
        displayColors: false
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#6F6F6F',
          font: { size: 10 }
        },
        grid: { display: false }
      },
      y: {
        ticks: {
          color: '#6F6F6F',
          callback: value => typeof value === 'number' ? `${value}%` : value
        },
        grid: { color: '#F0F0F0' }
      }
    }
  };

  const costOptions: ChartOptions<'bar'> = {
    ...commonOptions,
    scales: {
      ...commonOptions.scales,
      y: {
        ticks: {
          color: '#6F6F6F',
          callback: value => `₹${Number(value) / 1000}k`
        },
        grid: { color: '#F0F0F0' }
      }
    }
  };

  return (
    <section id="problem" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-dark">
            The High Cost of a Revolving Door
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            <strong>The Problem:</strong> Employee attrition in India isn't just a statistic;
            it's a significant financial drain impacting profitability and operational stability.
            The charts below visualize the scale of this problem across industries and the
            direct costs associated with replacing talent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold text-center mb-4">Attrition Rates by Industry (2024)</h4>
            <div className="h-[350px] md:h-[400px]">
              <Bar data={attritionData} options={commonOptions} />
            </div>
            <p className="text-xs text-center mt-4 text-gray-500">
              Hover over bars to see precise attrition rates. Rates above 20% often signal systemic issues.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold text-center mb-4">Talent Acquisition Costs Per Hire</h4>
            <div className="h-[350px] md:h-[400px]">
              <Bar data={costData} options={costOptions} />
            </div>
            <p className="text-xs text-center mt-4 text-gray-500">
              The cost to replace an employee escalates dramatically with seniority and specialization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
