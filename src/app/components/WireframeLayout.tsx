import React from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white text-black font-sans pt-[80px]">
      {/* Grid Overlay for Wireframe Visibility (Debug) */}
      <div className="fixed inset-0 pointer-events-none z-0 px-[120px] max-w-[1440px] mx-auto grid grid-cols-8 gap-[32px] opacity-[0.05]">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-black h-full" />
        ))}
      </div>
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-[120px]">
        {children}
      </div>

      <footer className="relative z-10 max-w-[1440px] mx-auto px-[120px] py-[64px] border-t border-black mt-[120px]">
        <div className="grid grid-cols-8 gap-[32px]">
          <div className="col-span-2">
            <div className="text-[18px] font-bold mb-[16px]">AGENCY NAME</div>
            <div className="text-[12px] text-gray-500 uppercase tracking-widest">© 2026 Wireframe Structure</div>
          </div>
          <div className="col-span-2 col-start-4">
            <div className="text-[12px] font-bold mb-[16px] uppercase tracking-widest">Navigation</div>
            <ul className="text-[12px] space-y-[8px]">
              <li>TOP</li>
              <li>VISION</li>
              <li>SERVICE</li>
              <li>PROCESS</li>
            </ul>
          </div>
          <div className="col-span-2">
            <div className="text-[12px] font-bold mb-[16px] uppercase tracking-widest">Connect</div>
            <ul className="text-[12px] space-y-[8px]">
              <li>WORKS</li>
              <li>SAMPLE</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-[120px] ${className}`}>
    {children}
  </section>
);

export const CTAArea = () => (
  <div className="border border-black p-[64px] text-center my-[120px]">
    <h2 className="text-[32px] font-light mb-[32px] tracking-tight">READY TO START A PROJECT?</h2>
    <div className="inline-block border border-black px-[40px] py-[16px] text-[14px] uppercase tracking-widest cursor-pointer hover:bg-black hover:text-white transition-colors">
      Get in Touch
    </div>
  </div>
);
