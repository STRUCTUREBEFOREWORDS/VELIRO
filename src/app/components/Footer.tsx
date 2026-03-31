import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-[80px] px-[80px] border-t border-[#EEEEEE] bg-white">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center text-[12px] text-[#BBBBBB] tracking-[0.2em] uppercase">
        <div>© 2026 IDEOLOGY. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[#1A1A1A]">Instagram</a>
          <a href="#" className="hover:text-[#1A1A1A]">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
