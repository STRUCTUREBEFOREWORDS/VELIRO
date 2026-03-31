import React from 'react';
import { Layout, Section, CTAArea } from '../WireframeLayout';

export const Top = () => (
  <Layout>
    <Section className="min-h-[70vh] flex flex-col justify-center">
      <div className="grid grid-cols-8 gap-[32px]">
        <div className="col-span-6">
          <h1 className="text-[72px] leading-[1.1] font-light tracking-tighter mb-[40px]">
            TRANSFORMING <br />
            IDEAS INTO <br />
            DIGITAL REALITY.
          </h1>
          <p className="text-[18px] leading-relaxed max-w-[480px] text-gray-600">
            A boutique web production agency focused on structural integrity and minimalist aesthetics. We build future-proof digital environments.
          </p>
        </div>
      </div>
    </Section>

    <Section border-t border-black>
      <div className="grid grid-cols-8 gap-[32px]">
        <div className="col-span-2">
          <h2 className="text-[14px] font-bold tracking-[0.2em] uppercase">Overview</h2>
        </div>
        <div className="col-span-6">
          <p className="text-[24px] leading-snug font-light mb-[40px]">
            We provide strategic design and technical excellence for global brands. Our process is rooted in logic, ensuring every pixel serves a purpose.
          </p>
          <div className="grid grid-cols-3 gap-[32px]">
            {[1, 2, 3].map(i => (
              <div key={i} className="border-t border-black pt-[24px]">
                <div className="text-[12px] font-bold mb-[8px]">0{i} / CORE VALUE</div>
                <p className="text-[14px] text-gray-500">Structural integrity defines the beauty of our digital architecture.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>

    <CTAArea />
  </Layout>
);
