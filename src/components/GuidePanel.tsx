import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, MessageSquare, Sparkles } from 'lucide-react';

interface Props {
  userName: string;
  intro: string;
  prompt: string;
  isCorrect: boolean | null;
  onHelp: () => void;
  gotItLabel?: string;
}

export default function GuidePanel({ userName, intro, prompt, isCorrect, onHelp, gotItLabel = 'Got It' }: Props) {
  return (
    <div className="w-80 h-full bg-[#111827] border-r border-white/10 flex flex-col z-20 overflow-hidden">
      <div className="p-8 flex-1 overflow-y-auto custom-scrollbar">
        {/* Saathi Character Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="relative">
            <motion.div 
              animate={{ 
                boxShadow: ['0 0 0px rgba(99, 102, 241, 0)', '0 0 20px rgba(99, 102, 241, 0.4)', '0 0 0px rgba(99, 102, 241, 0)']
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/40 shadow-inner group transition-all"
            >
              <Sparkles size={32} className="text-indigo-400 group-hover:scale-110 transition-transform" />
            </motion.div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-[#111827] animate-pulse shadow-lg"></div>
          </div>
          <div>
            <h2 className="font-black text-white tracking-widest uppercase text-[10px]">Saathi Guide</h2>
            <p className="text-emerald-400 text-[10px] font-black tracking-tighter uppercase mt-0.5">ONLINE & ACTIVE</p>
          </div>
        </div>

        <div className="space-y-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={intro}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="bg-indigo-500/10 border border-indigo-500/20 p-6 rounded-3xl relative shadow-xl">
                 <div className="absolute -left-2 top-6 w-4 h-4 bg-[#1a2333] border-l border-t border-indigo-500/20 rotate-[-45deg]"></div>
                 <p className="text-slate-300 leading-relaxed text-sm font-medium">
                   {intro.replace('Abhi', userName.split(' ')[0])}
                 </p>
              </div>

              <div className="space-y-4">
                 <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.25em] ml-1">Critical Insight</h3>
                 <div className="p-6 bg-white/[0.03] rounded-3xl border border-white/5 relative group hover:bg-white/[0.05] transition-all">
                    <p className="text-lg font-black text-white leading-snug italic tracking-tight">
                       "{prompt.replace('Abhi', userName.split(' ')[0])}"
                    </p>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/30 group-hover:scale-110 transition-transform">
                       <MessageSquare size={20} className="text-white" />
                    </div>
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="space-y-5 pt-10 border-t border-white/5">
            <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2 px-1">Case Protocol</h3>
            <div className="space-y-4">
              <CheckItem index={1} label="Analyze visual inconsistencies" />
              <CheckItem index={2} label="Verify digital identity" />
              <CheckItem index={3} label="Protocol: Stop, Think, Connect" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Module Context Footer */}
      <div className="p-8 bg-black/40 border-t border-white/5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Active Phase</p>
          <div className="flex gap-1">
             {[1,2,3].map(i => <div key={i} className={`w-1 h-1 rounded-full ${i === 1 ? 'bg-indigo-500' : 'bg-slate-800'}`}></div>)}
          </div>
        </div>
        <p className="text-sm font-black text-white tracking-tight">Cyber Safety: Phishing 101</p>
        <div className="flex items-center gap-2 mt-2">
           <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-indigo-500/50"></div>
           </div>
           <p className="text-[10px] text-indigo-400 font-bold uppercase whitespace-nowrap tracking-tighter">SIM 04 • LVL 1</p>
        </div>
      </div>
    </div>
  );
}

function CheckItem({ index, label }: { index: number, label: string }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="w-6 h-6 rounded-lg bg-indigo-500/10 flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-indigo-400 mt-0.5 border border-indigo-500/20 transition-all group-hover:bg-indigo-500/20 group-hover:text-indigo-300">
        {index}
      </div>
      <p className="text-[11px] text-slate-400 italic transition-colors font-medium leading-relaxed">
        {label}
      </p>
    </div>
  );
}
