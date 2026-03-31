import React from 'react';
import { Layout, Section, AxisLine } from '../Common';

const SERVICES = [
  { title: 'Custom Design', desc: '一から設計・実装を行う唯一無二のデジタル拠点。' },
  { title: 'Brand Structure', desc: '思想を抽出し、論理的な構造へと変換。' },
  { title: 'Global Setup', desc: '多言語・多通貨対応の技術的基盤。' },
  { title: 'Optimization', desc: '成長し続けるデジタル資産の維持。' }
];

export const Service = () => {
  return (
    <div className="relative pt-36">
      <AxisLine />
      <Section className="py-0 mb-32">
        <Layout>
          <div className="col-span-8 mb-32">
            <h1 className="text-6xl font-semibold tracking-[0.4em] mb-12 uppercase leading-tight">Service</h1>
            <p className="text-lg font-light text-white/40 leading-relaxed max-w-xl tracking-widest">
              技術と美学、そして思想を一つに統合。
            </p>
          </div>

          <div className="col-span-8 grid grid-cols-1 md:grid-cols-2 gap-24">
            {SERVICES.map((service, i) => (
              <div key={i} className="space-y-8 pl-12 border-l border-white/5">
                <span className="text-[10px] tracking-[1em] text-white/20 uppercase font-light">Service 0{i + 1}</span>
                <h2 className="text-3xl font-medium tracking-[0.3em] uppercase leading-tight">{service.title}</h2>
                <p className="text-sm font-light text-white/40 leading-relaxed tracking-widest">{service.desc}</p>
              </div>
            ))}
          </div>
        </Layout>
      </Section>
    </div>
  );
};
