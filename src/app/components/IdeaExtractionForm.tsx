import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { ChevronRight, ChevronLeft, Zap, Orbit, Compass, Target, Layers, Heart, ShieldAlert, Settings } from 'lucide-react';

const STEPS = [
  {
    id: 'why',
    title: '① 存在理由 (WHY)',
    questions: [
      { key: 'purpose', label: 'なぜこの事業をしているのか？', placeholder: '事業の根源にある想い' },
      { key: 'origin', label: '原体験は何か？', placeholder: 'あなたの衝動が生まれた瞬間' },
      { key: 'loss', label: 'この事業が無くなると、誰が困る？', placeholder: 'あなたが守るべき価値' },
    ],
    icon: Zap,
    description: 'ここがサイトの“軸”になります。',
    accent: '#00ffff'
  },
  {
    id: 'vision',
    title: '② 目指す世界観 (VISION)',
    questions: [
      { key: 'future', label: '5年後どうなっていたいか？', placeholder: '到達すべき未来の姿' },
      { key: 'perception', label: '世界にどう見られたいか？', placeholder: '与えたい印象の定義' },
      { key: 'direction', label: '静／強／革新／安心 などどの方向性か？', placeholder: '核となる空気感' },
    ],
    icon: Orbit,
    description: 'トーン設計に直結します。',
    accent: '#ff00ff'
  },
  {
    id: 'target',
    title: '③ ターゲットの解像度',
    questions: [
      { key: 'who', label: '誰のためのサービスか？', placeholder: '理想の顧客像' },
      { key: 'pain', label: '年齢／業種ではなく「悩み」ベースで。', placeholder: '解決すべき渇望' },
      { key: 'night_thought', label: 'その人は夜に何を考えているか？', placeholder: '深層心理への潜行' },
    ],
    icon: Target,
    description: 'コピーと導線に直結します。',
    accent: '#00ffff'
  },
  {
    id: 'diff',
    title: '④ 差別化の核心',
    questions: [
      { key: 'difference', label: '競合と何が決定的に違う？', placeholder: '唯一無二の境界線' },
      { key: 'strength', label: '数値で語れる強みは？', placeholder: '客観的な証明' },
      { key: 'invisible', label: '言語化できない魅力は？', placeholder: '感性に訴える磁力' },
    ],
    icon: Compass,
    description: '構造設計に影響を与えます。',
    accent: '#ff00ff'
  },
  {
    id: 'structure',
    title: '⑤ 商品・サービス構造',
    questions: [
      { key: 'menu', label: '提供メニュー', placeholder: 'サービスの構成要素' },
      { key: 'price', label: '価格帯', placeholder: '価値の対価' },
      { key: 'options', label: 'オプション / 形態', placeholder: '継続型か単発か、付加価値' },
    ],
    icon: Layers,
    description: '情報設計の骨組みとなります。',
    accent: '#00ffff'
  },
  {
    id: 'emotion',
    title: '⑥ 感情のゴール',
    questions: [
      { key: 'goal', label: 'サイトを見た人に最終的にどう感じてほしいか？', placeholder: '信頼、革新性、高級感、安心、異質さ...' },
    ],
    icon: Heart,
    description: '演出設計の核となります。',
    accent: '#ff00ff'
  },
  {
    id: 'prohibitions',
    title: '⑦ 禁止事項',
    questions: [
      { key: 'no_go', label: '絶対にやりたくないデザイン', placeholder: '忌避すべき領域' },
      { key: 'bad_exp', label: '過去に嫌だったサイト / 演出', placeholder: '避けたい色・表現' },
    ],
    icon: ShieldAlert,
    description: '事故を未然に防ぎ、純度を高めます。',
    accent: '#00ffff'
  },
  {
    id: 'reality',
    title: '⑧ 運用現実',
    questions: [
      { key: 'update', label: '更新頻度 / 運用主体', placeholder: '誰が、どの程度触るか' },
      { key: 'budget', label: '予算レンジ', placeholder: '投資の規模感' },
      { key: 'tech_needs', label: '多言語／決済必要か', placeholder: '必要な機能の種別' },
    ],
    icon: Settings,
    description: '技術設計の現実的な基盤です。',
    accent: '#ff00ff'
  }
];

export const IdeologicalExtractionDevice = () => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { currency } = useApp();

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleFinalize();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else {
      setCurrentStep(-1);
    }
  };

  const handleFinalize = () => {
    setIsSubmitting(true);
    // Simulate extraction process
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(STEPS.length);
    }, 3000);
  };

  const progress = ((currentStep + 1) / STEPS.length) * 100;

  return (
    <div className="relative w-full min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Pulse Effect */}
      <AnimatePresence mode="wait">
        {currentStep >= 0 && currentStep < STEPS.length && (
          <motion.div
            key={`bg-${currentStep}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
            style={{ 
              background: `radial-gradient(circle at center, ${STEPS[currentStep].accent} 0%, transparent 70%)` 
            }}
          />
        )}
      </AnimatePresence>

      {/* Intro Screen */}
      <AnimatePresence mode="wait">
        {currentStep === -1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-2xl text-center space-y-12 z-20"
          >
            <div className="space-y-4">
              <h2 className="text-[10px] tracking-[0.8em] text-cyan-400 uppercase">Ideological Extraction Device</h2>
              <h1 className="text-[40px] font-light tracking-[0.3em] leading-tight">思想抽出装置</h1>
            </div>
            <p className="text-white/40 font-light leading-relaxed tracking-widest text-sm">
              これは単なる質問票ではありません。<br />
              あなたの内に眠る、言語化される前の「熱」を抽出し、<br />
              デジタル空間における「構造」へと変換するための儀式です。
            </p>
            <button
              onClick={() => setCurrentStep(0)}
              className="group relative px-12 py-5 border border-white/10 hover:border-cyan-400/50 transition-all duration-700 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-400/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              <span className="relative text-[12px] tracking-[0.5em] text-white/60 group-hover:text-cyan-400 transition-colors uppercase">
                Extraction Start
              </span>
            </button>
          </motion.div>
        )}

        {/* Step Screens */}
        {currentStep >= 0 && currentStep < STEPS.length && (
          <motion.div
            key={`step-${currentStep}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-4xl grid grid-cols-8 gap-12 z-20 px-6"
          >
            {/* Left Info Column */}
            <div className="col-span-3 space-y-8 pt-12">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/40">
                {React.createElement(STEPS[currentStep].icon, { size: 20, strokeWidth: 1 })}
              </div>
              <div className="space-y-4">
                <h3 className="text-[18px] font-light tracking-widest text-white">
                  {STEPS[currentStep].title}
                </h3>
                <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase leading-loose">
                  {STEPS[currentStep].description}
                </p>
              </div>
              
              {/* Progress Vertical Line */}
              <div className="relative h-32 w-[1px] bg-white/5 overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 w-full bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                  initial={{ height: 0 }}
                  animate={{ height: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Right Form Column */}
            <div className="col-span-5 space-y-16">
              {STEPS[currentStep].questions.map((q, idx) => (
                <div key={q.key} className="space-y-6">
                  <label className="block text-[10px] tracking-[0.4em] text-white/20 uppercase">
                    {q.label}
                  </label>
                  <textarea
                    className="w-full bg-transparent border-b border-white/10 focus:border-cyan-400/50 outline-none py-4 text-lg font-light tracking-widest transition-all duration-500 min-h-[60px] resize-none"
                    placeholder={q.placeholder}
                    value={formData[q.key] || ''}
                    onChange={(e) => handleInputChange(q.key, e.target.value)}
                  />
                </div>
              ))}

              <div className="flex gap-8 pt-12">
                <button
                  onClick={prevStep}
                  className="p-6 border border-white/5 text-white/20 hover:text-white hover:border-white/20 transition-all cursor-pointer"
                >
                  <ChevronLeft size={20} strokeWidth={1} />
                </button>
                <button
                  onClick={nextStep}
                  className="flex-1 py-6 border border-white/10 hover:border-cyan-400/50 text-white/40 hover:text-cyan-400 text-[10px] tracking-[0.8em] uppercase transition-all duration-500 cursor-pointer flex items-center justify-center gap-4"
                >
                  {currentStep === STEPS.length - 1 ? 'Execute Extraction' : 'Next Phase'}
                  <ChevronRight size={14} strokeWidth={1} />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Finalizing State */}
        {isSubmitting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-[#0a0a12] flex flex-col items-center justify-center space-y-12"
          >
            <div className="relative w-32 h-32">
              <motion.div
                className="absolute inset-0 border border-cyan-400/20 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-4 border border-magenta-400/40 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-1 bg-white shadow-[0_0_20px_#fff]" />
              </div>
            </div>
            <div className="text-center space-y-4">
              <p className="text-[10px] tracking-[1em] text-white/40 uppercase animate-pulse">Extracting Essence...</p>
              <p className="text-[8px] tracking-[0.2em] text-white/20">思想の構造化を実行中</p>
            </div>
          </motion.div>
        )}

        {/* Success Screen */}
        {currentStep === STEPS.length && !isSubmitting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl text-center space-y-12 z-20"
          >
            <div className="space-y-4">
              <div className="w-16 h-16 border border-cyan-400/50 rounded-full mx-auto flex items-center justify-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 bg-cyan-400 shadow-[0_0_15px_#00ffff]"
                />
              </div>
              <h1 className="text-[24px] font-light tracking-[0.4em] leading-tight">EXTRACTION COMPLETE</h1>
              <p className="text-white/40 font-light leading-relaxed tracking-widest text-sm mt-8">
                あなたの思想は正常に抽出され、<br />
                我々の構造エンジンに統合されました。<br />
                まもなく、形を持った未来としての対話が始まります。
              </p>
            </div>
            <button
              onClick={() => setCurrentStep(-1)}
              className="text-[10px] tracking-[0.5em] text-white/20 hover:text-white transition-colors uppercase border-b border-white/10 pb-2 cursor-pointer"
            >
              Re-initialize Device
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid Overlay for context */}
      <div className="absolute inset-0 grid grid-cols-8 pointer-events-none opacity-5">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="border-r border-white h-full" />
        ))}
      </div>
    </div>
  );
};
