import { motion } from 'motion/react';
import { ChevronLeft, Info, HelpCircle, ArrowUpRight, X } from 'lucide-react';

import { UI_TRANSLATIONS } from '../../lib/translations';

interface Props {
  content: {
    amount: string;
    note: string;
    sender: string;
  };
  onAction: (id: string) => void;
  correctAction: string;
  wrongActions: { id: string }[];
  language: any;
}

export default function UPISim({ content, onAction, correctAction, wrongActions, language }: Props) {
  const t = UI_TRANSLATIONS[language as keyof typeof UI_TRANSLATIONS] || UI_TRANSLATIONS.english;
  const allActions = [correctAction, ...wrongActions.map(a => a.id)];

  return (
    <div className="w-full max-w-sm h-[600px] bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col border-[8px] border-slate-900 relative font-sans">
      {/* App Header */}
      <div className="p-6 flex items-center justify-between shrink-0">
        <ChevronLeft className="text-slate-900" />
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 bg-blue-600 rounded-md text-white flex items-center justify-center font-black text-[10px]">UPI</div>
           <span className="font-bold text-sm text-slate-800">SafePay</span>
        </div>
        <HelpCircle size={20} className="text-slate-400" />
      </div>

      <div className="flex-1 px-8 pt-4 overflow-y-auto">
        <div className="flex flex-col items-center text-center">
           <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-4 relative shadow-inner">
              <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${content.sender}`} alt="avatar" className="rounded-full w-full h-full" />
              <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full border shadow-sm">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <ArrowUpRight size={14} />
                </div>
              </div>
           </div>
           
           <h3 className="text-xl font-bold text-slate-900 mb-1">{content.sender}</h3>
           <p className="text-slate-500 text-sm mb-12">{t.requestMoney}</p>

           <div className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">
             ₹{content.amount}
           </div>

           <div className="bg-slate-50 px-4 py-2 rounded-xl text-slate-600 text-sm mb-12 border border-slate-100 italic">
             "{content.note}"
           </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-8 space-y-4 bg-white border-t border-slate-50">
          {allActions.map(action => {
            const isDangerous = action.includes('pay');
            const label = action === 'click-pay' ? `${t.pay} ₹${content.amount}` : 
                         action === 'decline-request' ? t.decline : 
                         action;

            return (
              <button 
                key={action}
                onClick={() => onAction(action)}
                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 ${
                  isDangerous 
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-100 hover:bg-rose-700' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {label}
              </button>
            );
          })}
      </div>

      <div className="p-4 text-center">
         <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
           <Info size={12} />
           {t.upiSecurityTip}
         </div>
      </div>
    </div>
  );
}
