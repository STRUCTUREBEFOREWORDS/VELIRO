import React from 'react';
import { motion } from 'framer-motion';

export const IdeologyAxis = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a12]" />
      
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[#00ffff] blur-[150px] rounded-full"
      />
      <motion.div 
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] bg-[#ff00ff] blur-[150px] rounded-full"
      />

      <div className="max-w-[1440px] mx-auto h-full grid grid-cols-8 gap-10 px-10 opacity-[0.02]">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="border-x border-white h-full" />
        ))}
      </div>

      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/30 to-transparent relative">
          <motion.div 
            animate={{
              boxShadow: [
                "0 0 0px #fff",
                "0 0 20px #00ffff",
                "0 0 0px #fff"
              ],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[2px] h-[30%] bg-[#00ffff] blur-[1px]"
          />
          <motion.div 
            animate={{
              boxShadow: [
                "0 0 0px #fff",
                "0 0 20px #ff00ff",
                "0 0 0px #fff"
              ],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[2px] h-[20%] bg-[#ff00ff] blur-[1px]"
          />
        </div>
      </div>
    </div>
  );
};
