import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion as Motion } from 'motion/react';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'PROCESS', path: '/process' },
  { name: 'PRICE', path: '/price' },
  { name: 'SAMPLE', path: '/sample' },
  { name: 'CONTACT', path: '/contact' },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 px-8 py-3 flex gap-8 items-center">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="relative text-[10px] tracking-[0.2em] font-light transition-colors"
          >
            <span className={location.pathname === item.path ? 'text-white' : 'text-white/40 hover:text-white'}>
              {item.name}
            </span>
            {location.pathname === item.path && (
              <Motion.div 
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 right-0 h-px bg-white" 
              />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};