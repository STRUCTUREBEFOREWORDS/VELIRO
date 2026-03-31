import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '@/app/context/AppContext';
import { Plus, Trash2, Edit3, Database, Globe } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  lang: string;
}

export const CmsDashboard = () => {
  const { t } = useApp();
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, title: 'Global E-commerce Structure', category: 'EC', lang: 'EN' },
    { id: 2, title: '思想の空間化 - Branding', category: 'Corporate', lang: 'JP' },
  ]);

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      title: 'New Ideological Draft',
      category: 'Experimental',
      lang: 'EN',
    };
    setProjects([newProject, ...projects]);
  };

  const removeProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div className="relative pt-40 pb-20 px-10 max-w-[1440px] mx-auto min-h-screen">
      <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-8">
        <div>
          <h1 className="text-[32px] font-light tracking-[0.2em] text-white flex items-center gap-4">
            <Database className="w-8 h-8 text-[#00ffff]" />
            {t('cms.title')}
          </h1>
          <p className="text-white/40 text-[12px] tracking-[0.1em] mt-2 uppercase">Core System / Content Management</p>
        </div>
        <button 
          onClick={addProject}
          className="flex items-center gap-3 px-8 py-3 bg-[#00ffff]/10 border border-[#00ffff]/30 text-[#00ffff] text-[12px] tracking-widest hover:bg-[#00ffff]/20 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          {t('cms.add')}
        </button>
      </div>

      <div className="grid grid-cols-8 gap-8">
        <div className="col-span-2 space-y-4">
          <div className="p-6 border border-white/5 backdrop-blur-2xl bg-white/5 rounded-sm">
            <h2 className="text-white/20 text-[10px] tracking-widest uppercase mb-6">System Status</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-[11px]">
                <span className="text-white/40">Database</span>
                <span className="text-[#00ff00]">Online</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-white/40">Stripe Sync</span>
                <span className="text-[#00ffff]">Active</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-white/40">Multi-Lang</span>
                <span className="text-white/80">3 Active</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-6 space-y-4">
          {projects.map((project) => (
            <motion.div 
              layout
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              key={project.id} 
              className="group flex items-center justify-between p-8 border border-white/10 hover:border-[#00ffff]/30 backdrop-blur-3xl bg-white/[0.02] transition-all"
            >
              <div className="flex items-center gap-8">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-[10px] text-white/20">
                  {project.category.substring(0, 1)}
                </div>
                <div>
                  <h3 className="text-white text-[16px] font-light tracking-widest mb-1">{project.title}</h3>
                  <div className="flex gap-4">
                    <span className="text-[10px] text-[#00ffff] tracking-widest uppercase">{project.category}</span>
                    <span className="text-[10px] text-white/20 tracking-widest flex items-center gap-1">
                      <Globe className="w-3 h-3" /> {project.lang}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 text-white/40 hover:text-white transition-colors cursor-pointer"><Edit3 className="w-4 h-4" /></button>
                <button 
                  onClick={() => removeProject(project.id)}
                  className="p-2 text-white/40 hover:text-red-500 transition-colors cursor-pointer"
                ><Trash2 className="w-4 h-4" /></button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
