import { useRef } from 'react';
import { motion as Motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Layout, Section, WireframeButton, AxisLine } from '../Common';
import { WireframeBackground } from '../WireframeBackground';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

// ── 立体的 Structure Card ──────────────────────────────────────────────────
interface CardProps {
  number: string;
  title: string;
  titleJa: string;
  desc: string;
  items: { label: string; value: string }[];
  accent: string;
  delay: number;
}

const StructureCard3D = ({ number, title, titleJa, desc, items, accent, delay }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 240, damping: 26 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 240, damping: 26 });
  const glowX = useTransform(mx, [-0.5, 0.5], ['10%', '90%']);
  const glowY = useTransform(my, [-0.5, 0.5], ['10%', '90%']);
  const shadowX = useTransform(mx, [-0.5, 0.5], [-10, 10]);
  const shadowY = useTransform(my, [-0.5, 0.5], [-10, 10]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = cardRef.current!.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      style={{ perspective: '1000px' }}
    >
      <Motion.div
        className="absolute inset-0 border opacity-20"
        style={{ borderColor: accent, x: shadowX, y: shadowY, scale: 0.96 }}
      />
      <Motion.div
        style={{
          borderColor: accent,
          x: useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 30 }),
          y: useSpring(useTransform(my, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 30 }),
          scale: 0.98,
        }}
        className="absolute inset-0 border opacity-30"
      />
      <Motion.div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d', borderColor: `${accent}40` }}
        className="relative border bg-[#0a0a12] overflow-hidden cursor-default group"
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: `repeating-linear-gradient(0deg, ${accent} 0px, transparent 1px, transparent 8px)` }} />
        <div className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
        <Motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(ellipse 60% 50% at ${glowX} ${glowY}, ${accent}20, transparent)` }}
        />
        {[['top-2 left-2', 'border-t border-l'], ['top-2 right-2', 'border-t border-r'],
          ['bottom-2 left-2', 'border-b border-l'], ['bottom-2 right-2', 'border-b border-r']].map(([pos, border]) => (
          <div key={pos} className={`absolute w-3 h-3 ${pos} ${border} opacity-40`} style={{ borderColor: accent }} />
        ))}
        <div className="relative z-10 p-5 md:p-6">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
            <span className="text-[9px] tracking-[1em] uppercase font-mono" style={{ color: `${accent}90` }}>{number}</span>
            <span className="text-[9px] tracking-[0.5em] text-white/20 uppercase font-mono">{title}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold tracking-[0.12em] mb-3 leading-tight"
            style={{ color: accent, fontFamily: 'Syne, sans-serif' }}>
            {titleJa}
          </h3>
          <p className="text-[11px] font-light text-white/40 tracking-[0.1em] leading-relaxed mb-5">{desc}</p>
          <div className="space-y-0 border border-white/5">
            {items.map(({ label, value }, i) => (
              <div key={i} className="grid grid-cols-5 border-b border-white/5 last:border-b-0 hover:bg-white/3 transition-colors">
                <div className="col-span-2 px-3 py-2.5 border-r border-white/5">
                  <span className="text-[9px] tracking-[0.4em] text-white/30 uppercase block">{label}</span>
                </div>
                <div className="col-span-3 px-3 py-2.5">
                  <span className="text-[11px] font-light tracking-[0.08em]" style={{ color: `${accent}cc` }}>{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Motion.div>
    </Motion.div>
  );
};

// ── Main ───────────────────────────────────────────────────────────────────
export const Home = () => {
  const navigate = useNavigate();
  const { t } = useApp();

  const CARDS: CardProps[] = [
    {
      number: '01', title: 'IDENTITY', titleJa: t('home.card.01.titleJa'),
      desc: t('home.card.01.desc'),
      items: [
        { label: 'CORE', value: t('home.card.01.v0') },
        { label: 'AXIS', value: t('home.card.01.v1') },
        { label: 'POSITION', value: t('home.card.01.v2') },
      ],
      accent: '#00ffff', delay: 0.1,
    },
    {
      number: '02', title: 'STRUCTURE', titleJa: t('home.card.02.titleJa'),
      desc: t('home.card.02.desc'),
      items: [
        { label: 'LAYER', value: t('home.card.02.v0') },
        { label: 'FLOW', value: t('home.card.02.v1') },
        { label: 'MAP', value: t('home.card.02.v2') },
      ],
      accent: '#6495ff', delay: 0.2,
    },
    {
      number: '03', title: 'EMOTION', titleJa: t('home.card.03.titleJa'),
      desc: t('home.card.03.desc'),
      items: [
        { label: 'FIRST', value: t('home.card.03.v0') },
        { label: 'TRUST', value: t('home.card.03.v1') },
        { label: 'ACTION', value: t('home.card.03.v2') },
      ],
      accent: '#a855f7', delay: 0.3,
    },
    {
      number: '04', title: 'CONVERSION', titleJa: t('home.card.04.titleJa'),
      desc: t('home.card.04.desc'),
      items: [
        { label: 'CTA', value: t('home.card.04.v0') },
        { label: 'FRICTION', value: t('home.card.04.v1') },
        { label: 'DECISION', value: t('home.card.04.v2') },
      ],
      accent: '#f59e0b', delay: 0.4,
    },
  ];

  const STRENGTHS = [
    { num: '01', title: t('home.str.01.title'), en: t('home.str.01.en'), body: t('home.str.01.body') },
    { num: '02', title: t('home.str.02.title'), en: t('home.str.02.en'), body: t('home.str.02.body') },
    { num: '03', title: t('home.str.03.title'), en: t('home.str.03.en'), body: t('home.str.03.body') },
  ];

  return (
    <div className="relative">
      <AxisLine />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
        <WireframeBackground variant="default" />
        <Layout className="relative z-10">
          <div className="col-span-8 flex flex-col items-center justify-center text-center px-4">
            <Motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="text-[10px] tracking-[0.6em] text-white/30 uppercase mb-8"
            >
              {t('home.hero.eyebrow')}
            </Motion.p>
            <Motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="fs-display font-bold tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.35em] mb-8 uppercase leading-tight"
            >
              {t('home.hero.title')}
            </Motion.h1>
            <Motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
              className="fs-base font-light tracking-[0.2em] text-white/50 mb-12 leading-relaxed max-w-xl"
            >
              {t('home.hero.desc')}
            </Motion.p>
            <Motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <WireframeButton onClick={() => navigate('/price')} className="w-full sm:w-auto">
                {t('home.hero.cta.price')}
              </WireframeButton>
              <WireframeButton variant="secondary" onClick={() => navigate('/contact')} className="w-full sm:w-auto">
                {t('home.hero.cta.contact')}
              </WireframeButton>
            </Motion.div>
          </div>
        </Layout>
      </section>

      {/* Structure Cards */}
      <Section className="relative overflow-hidden">
        <WireframeBackground variant="minimal" />
        <Layout className="relative z-10">
          <div className="col-span-8 mb-12 md:mb-16 text-center px-4">
            <Motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-[10px] tracking-[0.6em] text-white/30 uppercase mb-4"
            >
              {t('home.cards.eyebrow')}
            </Motion.p>
            <h2 className="fs-h2 font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4">
              {t('home.cards.title')}
            </h2>
            <p className="text-xs font-light text-white/30 tracking-[0.15em]">
              {t('home.cards.desc')}
            </p>
          </div>
          <div className="col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {CARDS.map((card) => <StructureCard3D key={card.number} {...card} />)}
          </div>
        </Layout>
      </Section>

      {/* Strengths */}
      <Section className="relative overflow-hidden">
        <Layout className="relative z-10">
          <div className="col-span-8 mb-12 md:mb-20 text-center px-4">
            <h2 className="fs-h2 font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6">
              {t('home.strengths.title')}
            </h2>
            <p className="text-sm font-light text-white/40 tracking-[0.2em]">
              {t('home.strengths.desc')}
            </p>
          </div>
          <div className="col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {STRENGTHS.map(({ num, title, en, body }, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative border border-white/10 p-6 md:p-8 bg-white/5 overflow-hidden group"
              >
                <div className="absolute -right-4 -bottom-4 text-[80px] md:text-[100px] font-black tracking-tighter leading-none pointer-events-none select-none opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ fontFamily: 'Syne, sans-serif' }}>{num}</div>
                <div className="relative z-10">
                  <div className="text-[9px] tracking-[0.8em] text-white/20 uppercase mb-3">{en}</div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-[0.15em] uppercase mb-5"
                    style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h3>
                  <div className="h-px w-8 bg-white/20 mb-5" />
                  <p className="text-sm font-light text-white/50 leading-relaxed tracking-wide">{body}</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </Layout>
      </Section>

      {/* Process teaser */}
      <Section className="relative overflow-hidden">
        <WireframeBackground variant="minimal" />
        <Layout className="relative z-10">
          <div className="col-span-8 md:col-span-4 flex items-center mb-8 md:mb-0 px-4">
            <h2 className="fs-h2 font-bold tracking-[0.3em] uppercase">Process</h2>
          </div>
          <div className="col-span-8 md:col-span-4 space-y-6 md:space-y-8 md:pl-12 md:border-l border-white/5 px-4">
            <p className="text-sm md:text-base font-light leading-relaxed text-white/60 tracking-wide whitespace-pre-line">
              {t('home.process.body')}
            </p>
            <WireframeButton variant="secondary" onClick={() => navigate('/process')} className="w-full sm:w-auto">
              {t('home.process.cta')}
            </WireframeButton>
          </div>
        </Layout>
      </Section>

      {/* Price CTA */}
      <Section>
        <Layout>
          <div className="col-span-8 text-center py-12 md:py-20 border border-white/10 bg-white/5 mx-0 relative overflow-hidden">
            <WireframeBackground variant="minimal" />
            <div className="relative z-10 px-6 md:px-8">
              <p className="copy-singleline hidden">{t('home.pricecta.sl')}</p>
              <h2 className="fs-h3 font-bold tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 md:mb-8 leading-tight">
                {t('home.pricecta.title')}
              </h2>
              <p className="copy-multiline text-xs sm:text-sm font-light text-white/40 tracking-[0.15em] mb-8 md:mb-12 max-w-2xl mx-auto leading-loose">
                {t('home.pricecta.ml1')}<br />
                <br />
                {t('home.pricecta.ml2')}<br />
                {t('home.pricecta.ml3')}
              </p>
              <WireframeButton onClick={() => navigate('/price')} className="w-full sm:w-auto">
                {t('home.pricecta.btn')}
              </WireframeButton>
            </div>
          </div>
        </Layout>
      </Section>
    </div>
  );
};
