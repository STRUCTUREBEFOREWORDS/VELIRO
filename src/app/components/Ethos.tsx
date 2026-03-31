import React from 'react';

export const Ethos = () => {
  return (
    <section id="ethos" className="py-[160px] px-[80px] bg-[#1A1A1A] text-white">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-8 gap-[40px]">
        <div className="col-span-8 lg:col-start-3 lg:col-span-4">
          <h2 className="text-[40px] leading-[1.2] tracking-tight font-light mb-16 border-l border-white/20 pl-8">
            THE PHILOSOPHY OF <br /> 
            ABSENCE.
          </h2>
          <div className="space-y-12 text-[18px] leading-[2.0] text-white/70">
            <p>
              「何もない」ということは、無であることを意味しない。
              そこには、光の軌跡、影の深度、そして空気の振動が存在する。
              私たちは、物質ではなく「関係性」を設計します。
            </p>
            <p>
              余白は、受け手の思考を誘発するための装置である。
              作り手がすべてを語り尽くすのではなく、
              空白を残すことで、初めて対話が成立する。
            </p>
            <div className="pt-8 border-t border-white/10 mt-16">
              <span className="text-[14px] tracking-[0.2em] text-white/40 uppercase">
                Ethos 01 / Minimal Tension
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
