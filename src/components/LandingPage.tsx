import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Smartphone, Globe, Lock, Cpu } from 'lucide-react';

interface Props {
  onStart: () => void;
}

export default function LandingPage({ onStart }: Props) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden bg-slate-50">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-10 max-w-4xl"
      >
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <ShieldCheck size={14} />
          Digital Empowerment Platform
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
          Digital <br />
          <span className="text-indigo-600">Saathi</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          Master the digital world safely. Interactive simulations designed for everyone to learn internet basics and advanced cyber security.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(79, 70, 229, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="px-12 py-5 bg-indigo-600 text-white rounded-3xl font-black text-xl flex items-center gap-3 shadow-xl transition-all cursor-pointer"
          >
            Get Started
            <ArrowRight size={24} />
          </motion.button>
          
          <div className="flex -space-x-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-50 bg-slate-200 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400 italic">User</div>
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-slate-50 bg-indigo-600 flex items-center justify-center text-xs font-bold text-white">
              +1k
            </div>
          </div>
        </div>
      </motion.div>

      {/* Feature Grid */}
      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl z-10">
        <FeatureCard 
          icon={<Smartphone className="text-indigo-600" />} 
          title="Internet Basics" 
          desc="Learn how to navigate smartphones and computers from scratch." 
        />
        <FeatureCard 
          icon={<Globe className="text-purple-600" />} 
          title="Safe Browsing" 
          desc="Stay protected while searching and interacting in the digital world." 
        />
        <FeatureCard 
          icon={<Lock className="text-emerald-600" />} 
          title="Cyber Security" 
          desc="Recognize scams, phishing, and protect your digital assets." 
        />
      </div>

      <div className="mt-20 flex items-center gap-3 opacity-30 grayscale hover:grayscale-0 transition-all">
         <Cpu size={20} className="text-slate-900" />
         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Advanced AI Guide System</span>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-600/5 transition-all"
    >
      <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed font-medium">{desc}</p>
    </motion.div>
  );
}
