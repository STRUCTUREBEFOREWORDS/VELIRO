import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Statement = () => {
  return (
    <section id="statement" className="min-h-screen flex items-center pt-[160px] pb-[160px] px-[80px] bg-[#FFFFFF]">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-8 gap-[40px]">
        <div className="col-span-8 lg:col-span-5 flex flex-col justify-center">
          <h1 className="text-[72px] leading-[0.95] tracking-[-0.04em] font-light text-[#1A1A1A] mb-12">
            CONSTRUCT <br />
            PURE <br />
            ESSENCE.
          </h1>
          <p className="text-[18px] leading-[1.8] text-[#888888] max-w-[480px]">
            私たちは、装飾を剥ぎ取り、本質だけを空間に留める。
            過剰な情報を削ぎ落とした先に現れる、静寂と緊張感。
            それが、私たちの描く「真実」の形です。
          </p>
        </div>
        <div className="col-span-8 lg:col-span-3 flex items-end">
          <div className="w-full aspect-[3/4] overflow-hidden grayscale grayscale-100 hover:grayscale-0 transition-all duration-700">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1647892842753-01ee3cafd42e" 
              alt="Conceptual Architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
