import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Inquiry = () => {
  return (
    <section id="inquiry" className="py-[160px] px-[80px] bg-[#FFFFFF]">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-8 gap-[40px]">
        <div className="col-span-8 lg:col-span-4">
          <h2 className="text-[40px] leading-[1.1] tracking-tight font-light text-[#1A1A1A] mb-8">
            INQUIRY.
          </h2>
          <p className="text-[18px] text-[#888888] mb-12 max-w-[360px]">
            新しい対話の始まりを。
            私たちの思想に共鳴するプロジェクトをお待ちしています。
          </p>
        </div>
        <div className="col-span-8 lg:col-span-4 flex flex-col justify-end">
          <form className="space-y-12">
            <div className="border-b border-[#DDDDDD] py-4">
              <input 
                type="text" 
                placeholder="NAME" 
                className="w-full bg-transparent outline-none text-[18px] tracking-widest uppercase placeholder:text-[#CCCCCC]"
              />
            </div>
            <div className="border-b border-[#DDDDDD] py-4">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="w-full bg-transparent outline-none text-[18px] tracking-widest uppercase placeholder:text-[#CCCCCC]"
              />
            </div>
            <div className="border-b border-[#DDDDDD] py-4">
              <textarea 
                placeholder="MESSAGE" 
                rows={1}
                className="w-full bg-transparent outline-none text-[18px] tracking-widest uppercase placeholder:text-[#CCCCCC] resize-none"
              />
            </div>
            <button className="flex items-center gap-4 text-[14px] tracking-[0.3em] uppercase group">
              Send Message 
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
