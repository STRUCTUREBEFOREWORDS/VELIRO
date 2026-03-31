import React from 'react';
import { motion as Motion } from 'motion/react';
import { Layout, Section, WireframeButton, AxisLine, WireframeBox } from '../Common';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <AxisLine />
      
      {/* ヒーロー */}
      <section className="h-[90vh] flex items-center justify-center relative">
        <Layout className="h-full">
          <div className="col-span-8 flex flex-col items-center justify-center text-center">
            <Motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-7xl font-semibold tracking-[0.4em] mb-12 uppercase leading-tight"
            >
              解放せよ 感性と感覚を
            </Motion.h1>
            <Motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg font-light tracking-[0.3em] text-white/60 mb-16 leading-relaxed"
            >
              構造設計によってブランドの可能性を最大化する。
            </Motion.p>
            <Motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex gap-8"
            >
              <WireframeButton onClick={() => navigate('/price')}>
                PRICEを見る
              </WireframeButton>
              <WireframeButton variant="secondary" onClick={() => navigate('/contact')}>
                相談する
              </WireframeButton>
            </Motion.div>
          </div>
        </Layout>
      </section>

      {/* 強み（世界観 × 具体力 × 冷静な設計） */}
      <Section>
        <Layout>
          <div className="col-span-8 mb-20 text-center">
            <h2 className="text-4xl font-medium tracking-[0.3em] uppercase mb-6">Strengths</h2>
            <p className="text-sm font-light text-white/40 tracking-[0.2em]">
              世界観 × 具体力 × 冷静な設計
            </p>
          </div>

          <div className="col-span-8 grid grid-cols-3 gap-12">
            <div className="border border-white/10 p-8 bg-white/5">
              <h3 className="text-xl tracking-[0.3em] uppercase mb-6">世界観</h3>
              <p className="text-sm font-light text-white/50 leading-relaxed tracking-wide">
                ブランドの思想を視覚的な秩序として表現。
              </p>
            </div>
            <div className="border border-white/10 p-8 bg-white/5">
              <h3 className="text-xl tracking-[0.3em] uppercase mb-6">具体力</h3>
              <p className="text-sm font-light text-white/50 leading-relaxed tracking-wide">
                抽象を実装可能な構造へ変換。
              </p>
            </div>
            <div className="border border-white/10 p-8 bg-white/5">
              <h3 className="text-xl tracking-[0.3em] uppercase mb-6">冷静な設計</h3>
              <p className="text-sm font-light text-white/50 leading-relaxed tracking-wide">
                感情ではなく、論理で組み上げる。
              </p>
            </div>
          </div>
        </Layout>
      </Section>

      {/* PROCESSへの導線 */}
      <Section>
        <Layout>
          <div className="col-span-4 flex items-center">
            <h2 className="text-4xl font-medium tracking-[0.3em] uppercase">Process</h2>
          </div>
          <div className="col-span-4 space-y-8 pl-12 border-l border-white/5">
            <p className="text-lg font-light leading-relaxed text-white/60 tracking-wide">
              思想が形になるまでの厳格なプロセス。<br />
              透明性効果、価格の正当化、安心の可視化。
            </p>
            <WireframeButton variant="secondary" onClick={() => navigate('/process')}>
              PROCESSを体験する
            </WireframeButton>
          </div>
        </Layout>
      </Section>

      {/* PRICEへの自然接続 */}
      <Section>
        <Layout>
          <div className="col-span-8 text-center py-20 border border-white/10 bg-white/5">
            <h2 className="text-3xl font-medium tracking-[0.3em] uppercase mb-8">価格で勝たない。構造で圧倒する。</h2>
            <p className="text-sm font-light text-white/40 tracking-[0.2em] mb-12 max-w-2xl mx-auto leading-relaxed">
              完全オーダーメイドのみ。<br />
              サブスク化しない。工数と構造で説明する。
            </p>
            <WireframeButton onClick={() => navigate('/price')}>
              PRICEを見る
            </WireframeButton>
          </div>
        </Layout>
      </Section>
    </div>
  );
};