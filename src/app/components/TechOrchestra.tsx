import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  { name: 'TypeScript', x: '15%', y: '20%', speed: 12 },
  { name: 'React', x: '80%', y: '15%', speed: 15 },
  { name: 'Python', x: '10%', y: '70%', speed: 18 },
  { name: 'Node.js', x: '85%', y: '65%', speed: 14 },
  { name: 'Stripe', x: '20%', y: '45%', speed: 20 },
  { name: 'PostgreSQL', x: '75%', y: '40%', speed: 16 },
  { name: 'Vite', x: '30%', y: '10%', speed: 13 },
  { name: 'Tailwind', x: '70%', y: '85%', speed: 17 },
];

export const TechOrchestra = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {techs.map((tech, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.15, 0],
            y: [0, -20, 0],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: tech.speed,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
          className="absolute text-[10px] tracking-[0.4em] font-light text-white/40 uppercase"
          style={{ left: tech.x, top: tech.y }}
        >
          {tech.name}
        </motion.div>
      ))}
    </div>
  );
};
