'use client';

import { useEffect, useRef, useState } from 'react';
import {
    TriangleAlert,
    LocateFixed,
    ChartNoAxesCombined,
    SquareMousePointer,
  } from 'lucide-react';

const navItems = [
  { href: '#problem', label: 'The Problem', icon: TriangleAlert },
  { href: '#solution', label: 'The Solution', icon: LocateFixed },
  { href: '#roi', label: 'The ROI', icon: ChartNoAxesCombined },
  { href: '#blueprint', label: 'Platform Blueprint', icon: SquareMousePointer },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach(section => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-lightgray">Soul Desk: Wellness ROI Strategy</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className={`nav-item flex items-center space-x-2 ${
                activeSection === href
                  ? 'text-accent border-b-2 border-accent'
                  : 'border-b-2 border-transparent'
              } transition-colors pb-1`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          {navItems.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className="block py-2 text-sm hover:bg-gray-100 rounded-md flex items-center space-x-2"
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
