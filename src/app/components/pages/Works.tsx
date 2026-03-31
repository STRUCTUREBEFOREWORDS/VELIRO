import React from 'react';
import { motion as Motion } from 'motion/react';
import { Layout, Section } from '../Common';

const CASES = [
  {
    id: 1,
    client: 'ARCADIA LUXURY HOTEL',
    industry: 'Hospitality',
    challenge: 'デジタル空間における「静寂」の欠如。',
    solution: '余白を大胆に配置した設計。',
    outcome: '予約単価が28%向上。',
    img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    client: 'NEXUS QUANTUM LAB',
    industry: 'Technology',
    challenge: '複雑な技術思想の視覚化。',
    solution: '「思想抽出」による構造化。',
    outcome: '採用応募数が200%増。',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200'
  }
];

export const Works = () => {
  return (
    <div className="pt-36">
      <Section className="py-0 mb-32">
        <Layout>
          <div className="col-span-8 mb-20">
            <h1 className="text-5xl font-semibold tracking-[0.4em] mb-12 uppercase">Works</h1>
            <p className="text-base font-light text-white/40 leading-relaxed max-w-[600px] tracking-widest">
              思想の具現化の記録。
            </p>
          </div>

          <div className="col-span-8 space-y-48">
            {CASES.map((item, i) => (
              <Motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-8 gap-6"
              >
                <div className="col-span-5 relative group overflow-hidden border border-white/10 aspect-video">
                  <Motion.img
                    src={item.img}
                    alt={item.client}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                <div className="col-span-3 flex flex-col justify-center space-y-8 pl-12">
                  <div>
                    <span className="text-[10px] tracking-[0.8em] text-white/20 uppercase mb-4 block">Client</span>
                    <h2 className="text-xl font-light tracking-[0.3em] uppercase">{item.client}</h2>
                  </div>
                  <div className="space-y-4 border-l border-white/10 pl-8">
                    <p className="text-sm font-light text-white/60">{item.challenge}</p>
                    <p className="text-sm font-light text-white/60">{item.solution}</p>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </Layout>
      </Section>
    </div>
  );
};
