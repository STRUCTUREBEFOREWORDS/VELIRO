import React from 'react';
import { Layout, Section, AxisLine, WireframeBox } from '../Common';

export const About = () => {
  return (
    <div className="relative pt-36">
      <AxisLine />
      <Section className="py-0 mb-32">
        <Layout>
          <div className="col-span-8 mb-40 text-center">
            <h1 className="text-6xl font-semibold tracking-[0.4em] mb-12 uppercase leading-tight">About</h1>
            <p className="text-lg font-light text-white/40 leading-relaxed max-w-xl mx-auto tracking-widest">
              技術と思想を芸術化する。
            </p>
          </div>

          <div className="col-span-8 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-3xl font-medium tracking-[0.3em] uppercase leading-tight">Founder Philosophy</h2>
              <p className="text-lg font-light leading-relaxed text-white/40">
                プログラミングは論理であると同時に、美的な表現でもあります。
              </p>
              <div className="h-px w-24 bg-white/10" />
            </div>
            <WireframeBox className="aspect-square flex items-center justify-center">
              <span className="text-[10px] tracking-[1em] text-white/10 uppercase">Portrait</span>
            </WireframeBox>
          </div>
        </Layout>
      </Section>
    </div>
  );
};
