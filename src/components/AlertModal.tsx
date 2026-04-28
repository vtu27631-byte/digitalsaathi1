import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, CheckCircle2, ArrowRight, RotateCcw, X, ShieldAlert } from 'lucide-react';

interface Props {
  isOpen: boolean;
  type: 'error' | 'success';
  title: string;
  message: string;
  explanation: string;
  onRetry: () => void;
  onNext: () => void;
  retryLabel?: string;
  nextLabel?: string;
}

export default function AlertModal({ 
  isOpen, 
  type, 
  title, 
  message, 
  explanation, 
  onRetry, 
  onNext,
  retryLabel = 'RETRY PROTOCOL',
  nextLabel = 'SECURE NEXT STEP'
}: Props) {
  const isError = type === 'error';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ 
               scale: 1, 
               opacity: 1, 
               y: 0,
               rotate: isError ? [0, -2, 2, -1, 1, 0] : 0
            }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`w-full max-w-xl rounded-[40px] shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-hidden border-2 relative ${
              isError 
              ? 'bg-[#110505] border-red-500/50 shadow-red-500/10' 
              : 'bg-[#051108] border-emerald-500/50 shadow-emerald-500/10'
            }`}
          >
            {/* Background Glow */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 blur-[80px] opacity-30 pointer-events-none rounded-full ${
              isError ? 'bg-red-500' : 'bg-emerald-500'
            }`}></div>

            <div className="p-10 relative z-10">
              <div className="flex flex-col items-center text-center mb-10">
                 <motion.div 
                   initial={{ scale: 0 }}
                   animate={{ scale: 1 }}
                   transition={{ delay: 0.2, type: 'spring' }}
                   className={`w-24 h-24 rounded-[32px] flex items-center justify-center mb-8 border-2 ${
                    isError 
                    ? 'bg-red-500/10 text-red-500 border-red-500/30' 
                    : 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30'
                  }`}>
                    {isError ? <ShieldAlert size={48} /> : <CheckCircle2 size={48} />}
                 </motion.div>
                 
                 <h2 className={`text-4xl font-black tracking-tighter leading-none mb-4 uppercase ${
                   isError ? 'text-red-500' : 'text-emerald-500'
                 }`}>
                   {isError ? 'Danger Alert' : 'Mission Success'}
                 </h2>
                 <p className="text-xl font-bold text-white tracking-tight leading-tight px-4">{title}</p>
              </div>

              <div className="space-y-8">
                <div className={`p-8 rounded-[32px] border backdrop-blur-sm ${
                   isError ? 'bg-red-500/[0.03] border-red-500/10' : 'bg-emerald-500/[0.03] border-emerald-500/10'
                }`}>
                  <p className="text-lg font-black text-slate-100 mb-4 tracking-tight">"{message}"</p>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed italic border-l-2 pl-4 border-white/10 uppercase tracking-widest">{explanation}</p>
                </div>

                <div className="flex gap-4">
                  {isError ? (
                    <button
                      onClick={onRetry}
                      className="w-full py-5 bg-red-600 text-white rounded-[24px] font-black text-lg flex items-center justify-center gap-3 shadow-2xl shadow-red-600/30 hover:bg-red-700 active:scale-95 transition-all uppercase tracking-tight"
                    >
                      <RotateCcw size={24} />
                      {retryLabel}
                    </button>
                  ) : (
                    <button
                      onClick={onNext}
                      className="w-full py-5 bg-emerald-600 text-white rounded-[24px] font-black text-lg flex items-center justify-center gap-3 shadow-2xl shadow-emerald-600/30 hover:bg-emerald-700 active:scale-95 transition-all uppercase tracking-tight"
                    >
                      {nextLabel}
                      <ArrowRight size={24} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Corner Decorative */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-10 font-black text-[8px] uppercase tracking-[0.5em] text-white">
              Data Integrity Verified • Saathi System
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
