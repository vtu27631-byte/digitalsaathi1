import { motion } from 'motion/react';
import { CreditCard, Shield, PhoneCall, AlertCircle, X, ChevronRight } from 'lucide-react';

import { UI_TRANSLATIONS } from '../../lib/translations';

interface Props {
  content: {
    message?: string;
    otp?: string;
    sender?: string;
    caller?: string;
    tool?: string;
  };
  onAction: (id: string) => void;
  correctAction: string;
  wrongActions: { id: string }[];
  language: any;
}

export default function BankingSim({ content, onAction, correctAction, wrongActions, language }: Props) {
  const t = UI_TRANSLATIONS[language as keyof typeof UI_TRANSLATIONS] || UI_TRANSLATIONS.english;
  const isScreenSharing = !!content.tool;
  const caller = content.caller || '+91 99887-76655';
  
  const text = isScreenSharing 
    ? t.pcSupportScam.replace('{caller}', content.caller || '').replace('{tool}', content.tool || '')
    : t.otpCompromiseScam;

  const allActions = [correctAction, ...wrongActions.map(a => a.id)];

  return (
    <div className="w-full max-w-sm h-[600px] bg-slate-50 rounded-[32px] overflow-hidden shadow-2xl flex flex-col border-[8px] border-slate-900 relative font-sans">
      {/* OS Status Bar */}
      <div className="bg-white px-6 py-2 flex justify-between items-center border-b border-slate-100">
        <span className="text-[10px] font-bold">10:45 AM</span>
        <div className="flex gap-1 items-center">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
          <div className="w-8 h-2 bg-slate-200 rounded-full overflow-hidden">
             <div className="w-2/3 h-full bg-slate-400"></div>
          </div>
        </div>
      </div>

      {/* App Content */}
      <div className="flex-1 p-6 relative bg-white">
        <div className="flex items-center gap-2 mb-8">
           <div className="w-8 h-8 bg-indigo-700 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-700/20">
             <Shield size={18} />
           </div>
           <span className="font-black text-indigo-900 tracking-tighter uppercase">{t.secTitle}</span>
        </div>

        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-[24px] shadow-xl mb-6 text-white relative overflow-hidden">
           <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
           <div className="flex justify-between items-start mb-6">
              <div className="text-[10px] font-black uppercase tracking-widest opacity-60">{t.digitalWallet}</div>
              <CreditCard size={20} className="opacity-80" />
           </div>
           <div className="text-xl font-bold tracking-[0.2em] mb-4">XXXX XXXX XXXX 0123</div>
           <div className="flex justify-between items-end">
             <div className="text-xs font-medium opacity-80">ABHI SHARMA</div>
             <div className="text-[10px] font-black bg-white/20 px-2 py-0.5 rounded uppercase">{t.verified}</div>
           </div>
        </div>

        {/* Dynamic Overlay based on scam type */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 relative z-10"
        >
           <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center border border-rose-100">
                 <PhoneCall size={24} />
              </div>
              <div className="flex-1">
                 <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{t.incomingSignal}</div>
                 <div className="text-sm font-black text-slate-900 tracking-tight">{caller}</div>
              </div>
           </div>

           <div className="bg-slate-50 p-4 rounded-2xl mb-6 text-xs text-slate-600 leading-relaxed border-l-4 border-rose-500 font-medium italic">
             {text}
           </div>

           <div className="grid grid-cols-2 gap-4">
              {allActions.map(action => {
                const isDangerous = action.includes('share') || action.includes('give') || action.includes('click') || action.includes('pay');
                const label = action === 'refuse-otp' || action === 'refuse-access' ? t.decline : 
                             action === 'share-otp' ? t.shareOtp :
                             action === 'give-access' ? t.allowAccess : 
                             action;

                return (
                  <button 
                    key={action}
                    onClick={() => onAction(action)}
                    className={`py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg active:scale-95 transition-all ${
                      isDangerous 
                      ? 'bg-rose-600 text-white shadow-rose-200 hover:bg-rose-700' 
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
           </div>
        </motion.div>

        {/* Notification Banner */}
        <motion.div 
           initial={{ y: -100 }}
           animate={{ y: 0 }}
           transition={{ delay: 1 }}
           className="absolute top-2 left-2 right-2 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-100 flex gap-3"
        >
           <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertCircle size={20} />
           </div>
           <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                 <span className="text-[10px] font-black text-blue-700 uppercase tracking-tighter">{t.messagesNow}</span>
                 <X size={12} className="text-slate-300" />
              </div>
              <div className="text-[11px] font-bold text-slate-900 truncate">HDFC-NO: {content.otp} {t.isSecretCode}</div>
              <div className="text-[10px] text-slate-500 line-clamp-1">{t.doNotShare}</div>
           </div>
        </motion.div>
      </div>

      {/* Navigation Bar */}
      <div className="p-6 bg-white border-t border-slate-100 flex justify-around">
         <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
         <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
         <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
      </div>
    </div>
  );
}
