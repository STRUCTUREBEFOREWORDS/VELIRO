import { Layout, Section, WireframeButton, AxisLine } from '../Common';
import { WireframeBackground } from '../WireframeBackground';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const Price = () => {
  const navigate = useNavigate();
  const { t, formatPrice } = useApp();

  const handleStripeCheckout = (planType: string) => {
    console.log(`Stripe checkout for plan: ${planType}`);
    alert(`Stripe決済ページへ移動します（${planType}プラン）\n※実装時は実際のStripe URLを設定してください`);
  };

  const PLANS = [
    {
      key: 'launch',
      accent: false,
      jpy: 10000,
      features: Array.from({ length: 6 }, (_, i) => t(`price.plan.launch.f${i}`)),
    },
    {
      key: 'business',
      accent: true,
      jpy: 15000,
      features: Array.from({ length: 9 }, (_, i) => t(`price.plan.business.f${i}`)),
    },
    {
      key: 'growth',
      accent: false,
      jpy: 20000,
      features: Array.from({ length: 10 }, (_, i) => t(`price.plan.growth.f${i}`)),
    },
  ];

  return (
    <div className="relative pt-20 md:pt-36">
      <AxisLine />
      <WireframeBackground variant="minimal" />
      <Section className="py-0 mb-32 relative z-10">
        <Layout>

          {/* ヘッダー */}
          <div className="col-span-8 mb-16 md:mb-24 text-center px-4">
            <h1 className="fs-h1 font-bold tracking-[0.3em] md:tracking-[0.4em] mb-8 md:mb-12 uppercase leading-tight">
              Price
            </h1>
            <p className="copy-singleline fs-base font-light text-white/40 tracking-[0.15em] max-w-2xl mx-auto leading-relaxed">
              {t('price.tagline.sl')}
            </p>
            <p className="copy-multiline hidden">
              {t('price.tagline.ml1')}<br /><br />
              {t('price.tagline.ml2')}<br />
              {t('price.tagline.ml3')}
            </p>
          </div>

          {/* プランカード */}
          <div className="col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch px-0">

            {PLANS.map(({ key, accent, jpy, features }) => (
              <div
                key={key}
                className={`flex flex-col ${
                  accent
                    ? 'p-8 md:p-10 border border-[#00ffff]/30 bg-[#00ffff]/5 relative md:scale-105'
                    : 'p-8 border border-white/10 bg-white/5'
                }`}
              >
                {accent && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ffff]/50 to-transparent" />
                )}

                <h3 className={`text-[10px] tracking-[0.8em] uppercase mb-2 ${accent ? 'text-[#00ffff]/60' : 'text-white/20'}`}>
                  {t(`price.plan.${key}.name`)}
                </h3>

                <div className="flex items-center gap-3 mb-6">
                  <h4 className={`text-base font-light tracking-wide ${accent ? 'text-white/90' : 'text-white/80'}`}>
                    {t(`price.plan.${key}.sub`)}
                  </h4>
                  {accent && (
                    <span className="text-[8px] tracking-[0.6em] text-[#00ffff] uppercase border border-[#00ffff]/40 px-2 py-1">
                      Most Popular
                    </span>
                  )}
                </div>

                <p className={`text-xs font-light leading-relaxed tracking-wide mb-6 ${accent ? 'text-white/50' : 'text-white/40'}`}>
                  {t(`price.plan.${key}.desc`)}
                </p>

                <div className="mb-2">
                  <div className={`text-[10px] tracking-[0.8em] uppercase mb-2 ${accent ? 'text-[#00ffff]/40' : 'text-white/30'}`}>
                    {t('price.monthly')}
                  </div>
                  <div className={`text-3xl md:text-4xl font-light tracking-tighter ${accent ? 'text-white' : ''}`}>
                    {formatPrice(jpy)}
                  </div>
                </div>

                <div className="mb-6">
                  <div className={`text-[10px] tracking-[0.8em] uppercase mb-1 ${accent ? 'text-[#00ffff]/40' : 'text-white/30'}`}>
                    {t('price.min.contract')}
                  </div>
                  <div className={`text-sm font-light ${accent ? 'text-white/70' : 'text-white/60'}`}>
                    {t('price.min.contract.val')}
                  </div>
                </div>

                <div className={`h-px w-16 mb-6 ${accent ? 'bg-[#00ffff]/40' : 'bg-white/20'}`} />

                <div className="flex-1 mb-10">
                  <div className={`text-[10px] tracking-[0.8em] uppercase mb-4 ${accent ? 'text-[#00ffff]/50' : 'text-white/40'}`}>
                    {t('price.includes')}
                  </div>
                  <div className="space-y-3">
                    {features.map((f, i) => (
                      <div key={i} className={`text-xs font-light tracking-wider leading-relaxed ${accent ? 'text-white/60' : 'text-white/50'}`}>
                        · {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <WireframeButton className="w-full" onClick={() => handleStripeCheckout(key)}>
                    {t('price.cta.apply')}
                  </WireframeButton>
                  <WireframeButton variant="secondary" className="w-full" onClick={() => navigate('/contact')}>
                    {t('price.cta.consult')}
                  </WireframeButton>
                </div>
              </div>
            ))}
          </div>

          {/* 価格の正当化 */}
          <div className="col-span-8 mt-24 md:mt-32 text-center px-4">
            <p className="copy-multiline text-sm font-light text-white/40 tracking-[0.2em] mb-4 leading-loose">
              {t('price.bottom.ml1')}<br /><br />
              {t('price.bottom.ml2')}<br />
              {t('price.bottom.ml3')}
            </p>
            <p className="copy-singleline hidden">{t('price.bottom.sl')}</p>
            <p className="text-xs font-light text-white/20 tracking-[0.15em] mb-8">
              {t('price.bottom.note')}
            </p>
            <WireframeButton variant="secondary" onClick={() => navigate('/process')}>
              {t('price.bottom.cta')}
            </WireframeButton>
          </div>

        </Layout>
      </Section>
    </div>
  );
};
