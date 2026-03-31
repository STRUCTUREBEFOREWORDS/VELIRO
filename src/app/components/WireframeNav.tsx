import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'TOP', path: '/' },
  { name: 'VISION', path: '/vision' },
  { name: 'SERVICE', path: '/service' },
  { name: 'PROCESS', path: '/process' },
  { name: 'WORKS', path: '/works' },
  { name: 'SAMPLE', path: '/sample' },
  { name: 'CONTACT', path: '/contact' },
];

export const WireframeNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-black z-50 h-[80px] flex items-center">
      <div className="max-w-[1440px] mx-auto w-full px-[120px] flex justify-between items-center">
        <div className="text-[24px] font-bold tracking-tighter">LOGO</div>
        <div className="flex gap-[32px]">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[12px] tracking-widest font-medium ${
                location.pathname === item.path ? 'underline' : 'no-underline hover:underline'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
