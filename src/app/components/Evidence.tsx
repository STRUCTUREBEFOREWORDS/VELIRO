import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const works = [
  {
    id: '01',
    title: 'SILENT VOID',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1616197151166-93dc9b4528d8'
  },
  {
    id: '02',
    title: 'MONOLITH',
    category: 'Object',
    image: 'https://images.unsplash.com/photo-1666618207644-4de0226a3f85'
  }
];

export const Evidence = () => {
  return (
    <section id="evidence" className="py-[160px] px-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-8 gap-[40px] mb-24">
          <div className="col-span-8 lg:col-span-3">
            <h2 className="text-[40px] leading-[1.1] tracking-tight font-light text-[#1A1A1A]">
              EVIDENCE OF <br /> CONCEPT.
            </h2>
          </div>
          <div className="col-span-8 lg:col-span-5 flex items-end">
            <p className="text-[18px] text-[#888888] max-w-[400px]">
              思想を物質へと翻訳した断片。
              装飾を排し、機能と形が一致する瞬間を捉える。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-[40px]">
          {works.map((work) => (
            <div key={work.id} className="col-span-8 lg:col-span-4 group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden mb-6 bg-[#F5F5F5]">
                <ImageWithFallback 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-baseline border-b border-[#EEEEEE] pb-4">
                <span className="text-[14px] text-[#BBBBBB]">{work.id}</span>
                <h3 className="text-[20px] font-light tracking-widest">{work.title}</h3>
                <span className="text-[12px] uppercase tracking-widest text-[#888888]">{work.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
