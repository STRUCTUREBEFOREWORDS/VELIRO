import React from 'react';
import { Layout, Section, CTAArea } from '../WireframeLayout';

export const Vision = () => (
  <Layout>
    <Section>
      <div className="grid grid-cols-8 gap-[32px]">
        <div className="col-span-8 border-b border-black pb-[40px] mb-[80px]">
          <h1 className="text-[72px] font-light tracking-tighter uppercase">Vision</h1>
        </div>
        <div className="col-span-3">
          <h2 className="text-[14px] font-bold tracking-[0.2em] uppercase mb-[24px]">Our Philosophy</h2>
        </div>
        <div className="col-span-5">
          <p className="text-[32px] font-light leading-tight mb-[48px]">
            Design is not decoration. It is the visible expression of invisible structures.
          </p>
          <div className="space-y-[40px] text-[18px] text-gray-600 leading-relaxed">
            <p>We believe in the power of minimalism. By removing the unnecessary, we amplify the essential. Every decision we make is backed by research and structural logic.</p>
            <p>Our vision is to set a new standard for high-end web production, where performance and aesthetics coexist in perfect balance.</p>
          </div>
        </div>
      </div>
    </Section>

    <Section>
      <div className="grid grid-cols-8 gap-[32px]">
        <div className="col-span-2">
          <h2 className="text-[14px] font-bold tracking-[0.2em] uppercase mb-[24px]">Core Pillars</h2>
        </div>
        <div className="col-span-6 grid grid-cols-2 gap-[64px]">
          <div>
            <h3 className="text-[20px] font-bold mb-[16px]">01 / Logic First</h3>
            <p className="text-[14px] text-gray-500">Every design choice must be justifiable by functional requirements or brand strategy.</p>
          </div>
          <div>
            <h3 className="text-[20px] font-bold mb-[16px]">02 / Timelessness</h3>
            <p className="text-[14px] text-gray-500">We avoid fleeting trends in favor of sustainable, long-term digital value.</p>
          </div>
        </div>
      </div>
    </Section>

    <CTAArea />
  </Layout>
);
