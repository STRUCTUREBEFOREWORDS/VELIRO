import React from 'react';

export const Layout = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`max-w-[1200px] px-6 mx-auto grid grid-cols-8 gap-6 relative ${className}`}>
      {children}
    </div>
  );
};

export const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <section className={`py-24 relative border-b border-white/5 ${className}`}>
      {children}
    </section>
  );
};

export const WireframeButton = ({ children, onClick, variant = "primary", className = "" }: { children: React.ReactNode, onClick?: () => void, variant?: "primary" | "secondary", className?: string }) => (
  <button 
    onClick={onClick}
    className={`h-14 px-8 flex items-center justify-center text-xs tracking-[0.3em] transition-all cursor-pointer border ${
      variant === "primary" 
        ? "bg-white text-[#0a0a12] border-white" 
        : "bg-transparent text-white border-white/20 hover:border-white/50"
    } ${className}`}
  >
    {children}
  </button>
);

export const AxisLine = () => (
  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 pointer-events-none z-0" />
);

export const WireframeBox = ({ className = "", children }: { className?: string, children?: React.ReactNode }) => (
  <div className={`border border-white/10 bg-white/5 ${className}`}>
    {children}
  </div>
);
