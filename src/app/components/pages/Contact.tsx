import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { Layout, Section, AxisLine, WireframeButton } from '../Common';
import { WireframeBackground } from '../WireframeBackground';
import { useApp } from '../../context/AppContext';

// ── 共通フィールドコンポーネント ────────────────────────────────────────────

const FieldLabel = ({ children, required }: { children: React.ReactNode; required?: boolean }) => {
  const { t } = useApp();
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="text-[10px] tracking-[0.6em] text-white/40 uppercase">{children}</span>
      {required && (
        <span className="text-[8px] tracking-[0.4em] text-[#00ffff]/60 uppercase border border-[#00ffff]/20 px-1.5 py-0.5">
          {t('contact.required')}
        </span>
      )}
    </div>
  );
};

const inputCls = "w-full bg-transparent border-b border-white/10 outline-none text-white text-sm tracking-wide py-3 placeholder:text-white/20 focus:border-[#00ffff]/50 transition-colors duration-300";
const selectCls = "w-full bg-[#0a0a12] border border-white/10 outline-none text-white text-sm tracking-wide py-3 px-4 focus:border-[#00ffff]/50 transition-colors duration-300 appearance-none cursor-pointer";
const textareaCls = "w-full bg-white/3 border border-white/10 outline-none text-white text-sm tracking-wide py-4 px-5 placeholder:text-white/20 min-h-[140px] resize-none focus:border-[#00ffff]/50 focus:bg-white/5 transition-colors duration-300";

// ── セクション区切り ─────────────────────────────────────────────────────────

const Divider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-4 py-2">
    <div className="flex-1 h-px bg-white/5" />
    <span className="text-[8px] tracking-[0.8em] text-white/20 uppercase">{label}</span>
    <div className="flex-1 h-px bg-white/5" />
  </div>
);

// ── お問い合わせフォーム ──────────────────────────────────────────────────────

const InquiryForm = () => {
  const { t } = useApp();
  const [data, setData] = useState({ name: '', email: '', type: '', message: '' });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('contact.alert.inquiry'));
  };

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      {/* 氏名 */}
      <div>
        <FieldLabel required>{t('contact.f.name')}</FieldLabel>
        <input
          type="text" name="name" value={data.name} onChange={onChange}
          placeholder={t('contact.ph.name')} className={inputCls} required
        />
      </div>

      {/* メール */}
      <div>
        <FieldLabel required>{t('contact.f.email')}</FieldLabel>
        <input
          type="email" name="email" value={data.email} onChange={onChange}
          placeholder={t('contact.ph.email')} className={inputCls} required
        />
      </div>

      {/* 種別 */}
      <div className="relative">
        <FieldLabel required>{t('contact.f.type')}</FieldLabel>
        <div className="relative">
          <select name="type" value={data.type} onChange={onChange} className={selectCls} required>
            <option value="">{t('contact.ph.select')}</option>
            <option value="service">{t('contact.type.service')}</option>
            <option value="improvement">{t('contact.type.improvement')}</option>
            <option value="estimate">{t('contact.type.estimate')}</option>
            <option value="trouble">{t('contact.type.trouble')}</option>
            <option value="maintenance">{t('contact.type.maintenance')}</option>
            <option value="partner">{t('contact.type.partner')}</option>
            <option value="media">{t('contact.type.media')}</option>
            <option value="other">{t('contact.type.other')}</option>
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xs">▼</div>
        </div>
      </div>

      {/* 内容 */}
      <div>
        <FieldLabel required>{t('contact.f.message')}</FieldLabel>
        <textarea
          name="message" value={data.message} onChange={onChange}
          placeholder={t('contact.ph.message')} className={textareaCls} required
        />
      </div>

      <div className="pt-4">
        <WireframeButton type="submit" className="w-full">{t('contact.btn.submit')}</WireframeButton>
        <p className="text-[10px] tracking-[0.5em] text-white/20 uppercase text-center mt-6">{t('contact.response')}</p>
      </div>
    </form>
  );
};

// ── 制作依頼フォーム（既存） ─────────────────────────────────────────────────

const OrderForm = () => {
  const { t } = useApp();
  const [data, setData] = useState({
    companyName: '', personName: '', email: '', currentPhase: '',
    industry: '', sitePurpose: '', pageScale: '', updateFrequency: '',
    supportLevel: '', deadline: '', requirements: '', referenceUrl: '', coreValue: ''
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('contact.alert.order'));
  };

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      {/* 基本情報 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <FieldLabel required>{t('contact.f.company')}</FieldLabel>
          <input type="text" name="companyName" value={data.companyName} onChange={onChange}
            placeholder={t('contact.ph.company')} className={inputCls} required />
        </div>
        <div>
          <FieldLabel required>{t('contact.f.person')}</FieldLabel>
          <input type="text" name="personName" value={data.personName} onChange={onChange}
            placeholder={t('contact.ph.person')} className={inputCls} required />
        </div>
      </div>

      <div>
        <FieldLabel required>{t('contact.f.email')}</FieldLabel>
        <input type="email" name="email" value={data.email} onChange={onChange}
          placeholder={t('contact.ph.email')} className={inputCls} required />
      </div>

      <Divider label={t('contact.section.project')} />

      <div className="relative">
        <FieldLabel required>{t('contact.f.phase')}</FieldLabel>
        <div className="relative">
          <select name="currentPhase" value={data.currentPhase} onChange={onChange}
            className={selectCls} required>
            <option value="">{t('contact.ph.select')}</option>
            <option value="launch">{t('contact.phase.launch')}</option>
            <option value="renewal">{t('contact.phase.renewal')}</option>
            <option value="growth">{t('contact.phase.growth')}</option>
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xs">▼</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <FieldLabel>{t('contact.f.industry')}</FieldLabel>
          <input type="text" name="industry" value={data.industry} onChange={onChange}
            placeholder={t('contact.ph.industry')} className={inputCls} />
        </div>
        <div>
          <FieldLabel>{t('contact.f.purpose')}</FieldLabel>
          <input type="text" name="sitePurpose" value={data.sitePurpose} onChange={onChange}
            placeholder={t('contact.ph.purpose')} className={inputCls} />
        </div>
      </div>

      <div className="relative">
        <FieldLabel>{t('contact.f.scale')}</FieldLabel>
        <div className="relative">
          <select name="pageScale" value={data.pageScale} onChange={onChange} className={selectCls}>
            <option value="">{t('contact.ph.select')}</option>
            <option value="small">{t('contact.scale.small')}</option>
            <option value="medium">{t('contact.scale.medium')}</option>
            <option value="large">{t('contact.scale.large')}</option>
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xs">▼</div>
        </div>
      </div>

      <div className="relative">
        <FieldLabel>{t('contact.f.update')}</FieldLabel>
        <div className="relative">
          <select name="updateFrequency" value={data.updateFrequency} onChange={onChange} className={selectCls}>
            <option value="">{t('contact.ph.select')}</option>
            <option value="fixed">{t('contact.update.fixed')}</option>
            <option value="regular">{t('contact.update.regular')}</option>
            <option value="frequent">{t('contact.update.frequent')}</option>
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xs">▼</div>
        </div>
      </div>

      <div className="relative">
        <FieldLabel>{t('contact.f.support')}</FieldLabel>
        <div className="relative">
          <select name="supportLevel" value={data.supportLevel} onChange={onChange} className={selectCls}>
            <option value="">{t('contact.ph.select')}</option>
            <option value="minimum">{t('contact.support.minimum')}</option>
            <option value="balanced">{t('contact.support.balanced')}</option>
            <option value="full">{t('contact.support.full')}</option>
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xs">▼</div>
        </div>
      </div>

      <Divider label={t('contact.section.detail')} />

      <div>
        <FieldLabel>{t('contact.f.deadline')}</FieldLabel>
        <input type="text" name="deadline" value={data.deadline} onChange={onChange}
          placeholder={t('contact.ph.deadline')} className={inputCls} />
      </div>

      <div>
        <FieldLabel>{t('contact.f.requirements')}</FieldLabel>
        <textarea name="requirements" value={data.requirements} onChange={onChange}
          placeholder={t('contact.ph.requirements')} className={textareaCls} />
      </div>

      <div>
        <FieldLabel>{t('contact.f.reference')}</FieldLabel>
        <input type="text" name="referenceUrl" value={data.referenceUrl} onChange={onChange}
          placeholder={t('contact.ph.reference')} className={inputCls} />
      </div>

      <div>
        <FieldLabel>{t('contact.f.corevalue')}</FieldLabel>
        <textarea name="coreValue" value={data.coreValue} onChange={onChange}
          placeholder={t('contact.ph.corevalue')} className={textareaCls} />
      </div>

      <div className="pt-4">
        <WireframeButton type="submit" className="w-full">{t('contact.btn.submit')}</WireframeButton>
        <p className="text-[10px] tracking-[0.5em] text-white/20 uppercase text-center mt-6">{t('contact.response')}</p>
      </div>
    </form>
  );
};

// ── タブ定義 ─────────────────────────────────────────────────────────────────

const TAB_IDS = ['inquiry', 'order'] as const;
type TabId = typeof TAB_IDS[number];

// ── メイン ───────────────────────────────────────────────────────────────────

export const Contact = () => {
  const { t } = useApp();
  const [tab, setTab] = useState<TabId>('inquiry');

  const TABS = [
    { id: 'inquiry' as TabId, label: t('contact.tab.inquiry'), en: t('contact.tab.inquiry.en') },
    { id: 'order' as TabId,   label: t('contact.tab.order'),   en: t('contact.tab.order.en') },
  ];

  return (
    <div className="relative pt-20 md:pt-36">
      <AxisLine />
      <WireframeBackground variant="minimal" />

      <Section className="py-0 mb-32 relative z-10">
        <Layout>

          {/* ヘッダー */}
          <div className="col-span-8 mb-16 md:mb-20 text-center px-4">
            {/* 上部アクセントライン */}
            <div className="relative inline-block mb-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-transparent to-[#00ffff]/40" />
              <span className="text-[9px] tracking-[1em] text-[#00ffff]/50 uppercase">Contact</span>
            </div>

            <h1 className="fs-h1 font-bold tracking-[0.3em] md:tracking-[0.4em] mb-6 uppercase leading-tight">
              {tab === 'inquiry' ? t('contact.title.inquiry') : t('contact.title.order')}
            </h1>
            <p className="text-xs font-light text-white/30 tracking-[0.3em] leading-loose">
              {tab === 'inquiry' ? t('contact.inquiry.desc') : t('contact.order.desc')}
            </p>
          </div>

          {/* タブ */}
          <div className="col-span-8 mb-12">
            <div className="max-w-4xl mx-auto px-4">
              <div className="grid grid-cols-2 border border-white/10">
                {TABS.map(({ id, label, en }) => {
                  const active = tab === id;
                  return (
                    <button
                      key={id}
                      onClick={() => setTab(id)}
                      className={`relative py-5 flex flex-col items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                        active ? 'bg-white/5' : 'bg-transparent hover:bg-white/3'
                      }`}
                    >
                      {/* アクティブ上部ライン */}
                      {active && (
                        <Motion.div
                          layoutId="tab-line"
                          className="absolute top-0 left-0 right-0 h-px bg-[#00ffff]"
                          style={{ boxShadow: '0 0 8px rgba(0,255,255,0.6)' }}
                        />
                      )}
                      <span className={`text-[9px] tracking-[0.8em] uppercase transition-colors duration-300 ${
                        active ? 'text-[#00ffff]/70' : 'text-white/20'
                      }`}>
                        {en}
                      </span>
                      <span className={`text-sm font-light tracking-[0.15em] transition-colors duration-300 ${
                        active ? 'text-white' : 'text-white/30'
                      }`}>
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* フォームエリア */}
          <div className="col-span-8">
            <div className="max-w-4xl mx-auto px-4">
              {/* フォームコンテナ */}
              <div className="relative border border-white/10 overflow-hidden">
                {/* 上部グロー */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ffff]/20 to-transparent" />
                {/* 左端アクセント */}
                <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-[#00ffff]/20 via-transparent to-transparent" />

                {/* コーナーマーカー */}
                {[
                  'top-3 left-3 border-t border-l',
                  'top-3 right-3 border-t border-r',
                  'bottom-3 left-3 border-b border-l',
                  'bottom-3 right-3 border-b border-r',
                ].map((cls) => (
                  <div key={cls} className={`absolute w-4 h-4 ${cls} border-white/20`} />
                ))}

                <div className="relative p-8 md:p-14 bg-white/[0.02]">
                  <AnimatePresence mode="wait">
                    <Motion.div
                      key={tab}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {tab === 'inquiry' ? <InquiryForm /> : <OrderForm />}
                    </Motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

        </Layout>
      </Section>
    </div>
  );
};
