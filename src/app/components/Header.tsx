import React from 'react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-[80px] py-[40px] mix-blend-difference text-white">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <div className="text-[20px] font-medium tracking-tighter">
          IDEOLOGY.
        </div>
        <nav>
          <ul className="flex gap-12 text-[14px] tracking-widest uppercase">
            <li><a href="#statement" className="hover:opacity-50 transition-opacity">Index</a></li>
            <li><a href="#ethos" className="hover:opacity-50 transition-opacity">Philosophy</a></li>
            <li><a href="#evidence" className="hover:opacity-50 transition-opacity">Works</a></li>
            <li><a href="#inquiry" className="hover:opacity-50 transition-opacity">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
