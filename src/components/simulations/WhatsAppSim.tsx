import { motion } from 'motion/react';
import { Send, Phone, Video, MoreVertical, ChevronLeft, Paperclip, Camera, Mic } from 'lucide-react';

import { UI_TRANSLATIONS } from '../../lib/translations';

interface Props {
  content: {
    sender: string;
    text: string;
    timestamp: string;
    message?: string;
    amount?: string;
  };
  onAction: (id: string) => void;
  correctAction: string;
  correctActionLabel?: string;
  wrongActions: { id: string; label?: string }[];
  language: any;
}

export default function WhatsAppSim({ content, onAction, correctAction, correctActionLabel, wrongActions, language }: Props) {
  const t = UI_TRANSLATIONS[language as keyof typeof UI_TRANSLATIONS] || UI_TRANSLATIONS.english;
  const text = content.text || content.message || (content.amount ? `You won ${content.amount}!` : '');
  const timestamp = content.timestamp || '11:00 AM';

  const allActions = [
    { id: correctAction, label: correctActionLabel },
    ...wrongActions.map(a => ({ id: a.id, label: a.label }))
  ];
  const isSecurity = allActions.some(a => ['ignore-link', 'block-sender', 'ignore-qr'].includes(a.id));

  return (
    <div className="w-full max-w-sm h-[600px] bg-[#E5DDD5] rounded-[32px] overflow-hidden shadow-2xl flex flex-col border-[8px] border-slate-900 relative">
      {/* Header */}
      <div className="bg-[#075E54] text-white p-4 pt-10 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <ChevronLeft size={20} />
          <div className="w-8 h-8 rounded-full bg-slate-300 overflow-hidden text-slate-600 flex items-center justify-center font-bold text-xs uppercase">
            {content.sender?.[0] || '?'}
          </div>
          <div>
            <div className="text-xs font-bold leading-none">{content.sender}</div>
            <div className="text-[10px] opacity-70">{t.online}</div>
          </div>
        </div>
        <div className="flex gap-4">
          <Phone size={18} />
          <MoreVertical size={18} />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
        <div className="self-center bg-[#D1E9F6] text-[#4A5E6F] text-[10px] px-3 py-1 rounded-lg uppercase font-bold tracking-wider mb-2 text-center">
          {t.today}
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="self-start max-w-[85%] bg-white p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-sm relative border border-black/5"
        >
          <div className="text-sm text-slate-800 mb-1 leading-relaxed whitespace-pre-wrap">{text}</div>
          <div className="flex justify-between items-center gap-2 mt-2">
             <button 
               onClick={() => onAction('click-link')}
               className="text-blue-500 font-bold text-xs underline decoration-blue-300 hover:text-blue-600 truncate max-w-[150px] text-left"
             >
               {text.match(/https?:\/\/[^\s]+/)?.[0] || 'View Detail'}
             </button>
             <span className="text-[10px] text-slate-400 self-end whitespace-nowrap">{timestamp}</span>
          </div>
        </motion.div>
      </div>

      {/* Action Overlay for Scam Scenarios */}
      {isSecurity && (
        <div className="p-4 bg-white/90 backdrop-blur-sm border-t border-slate-200 grid grid-cols-2 gap-3 pb-6 shrink-0">
           {allActions.map(action => {
             const label = action.label || action.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
             const isDangerous = action.id.includes('click') || action.id.includes('send') || action.id.includes('scan');
             
             return (
               <button
                 key={action.id}
                 onClick={() => onAction(action.id)}
                 className={`py-3 px-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                   isDangerous 
                   ? 'bg-rose-50 text-rose-600 border border-rose-100 hover:bg-rose-100' 
                   : 'bg-emerald-50 text-emerald-600 border border-emerald-100 hover:bg-emerald-100'
                 }`}
               >
                 {label}
               </button>
             );
           })}
        </div>
      )}

      {/* Footer */}
      {!isSecurity && (
        <div className="bg-[#F0F2F5] p-3 flex items-center gap-3">
          <div className="flex-1 bg-white rounded-full px-4 py-2 flex items-center gap-3">
            <div className="text-slate-400"><Paperclip size={20} /></div>
            <input disabled placeholder={t.typeMessage} className="flex-1 bg-transparent text-sm" />
            <div className="text-slate-400"><Camera size={20} /></div>
          </div>
          <div className="w-10 h-10 bg-[#075E54] rounded-full flex items-center justify-center text-white">
            <Mic size={20} />
          </div>
        </div>
      )}
      
      {/* Simulation Banner */}
      <div className="absolute top-16 left-0 right-0 bg-yellow-100 text-yellow-800 text-[10px] font-bold py-1 px-4 text-center border-y border-yellow-200">
        {t.simulationMode}
      </div>
    </div>
  );
}
