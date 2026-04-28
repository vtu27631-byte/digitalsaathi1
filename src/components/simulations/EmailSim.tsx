import { motion } from 'motion/react';
import { Mail, Inbox, Star, Send, Trash, ChevronLeft, Search, MoreVertical, Archive } from 'lucide-react';

import { UI_TRANSLATIONS } from '../../lib/translations';

interface Props {
  content: {
    from: string;
    subject: string;
    body: string;
    fee?: string;
    payment?: string;
    offer?: string;
  };
  onAction: (id: string) => void;
  correctAction: string;
  wrongActions: { id: string }[];
  language: any;
}

export default function EmailSim({ content, onAction, correctAction, wrongActions, language }: Props) {
  const t = UI_TRANSLATIONS[language as keyof typeof UI_TRANSLATIONS] || UI_TRANSLATIONS.english;
  const allActions = [correctAction, ...wrongActions.map(a => a.id)];
  const from = content.from || 'Official Support <contact@service-portal.com>';
  const subject = content.subject || (content.offer ? `Job Offer: ${content.offer}` : 'Important Notification');
  const body = content.body || (content.payment ? `Congratulations! You have been selected for a position paying ${content.payment}. Please pay the processing fee of ${content.fee} to continue.` : 'Please review the information attached to this email and take necessary action.');

  const fromParts = from.includes('<') ? from.split('<') : [from, ''];
  const fromName = fromParts[0].trim();
  const fromEmail = fromParts[1].replace('>', '').trim();

  return (
    <div className="w-full max-w-4xl h-[550px] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border-[6px] border-slate-200">
      {/* Search Bar */}
      <div className="h-16 bg-[#F1F3F4] flex items-center px-6 gap-8 shrink-0">
         <div className="flex items-center gap-4">
            <MenuIcon />
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
         </div>
         <div className="flex-1 max-w-2xl bg-white rounded-xl h-10 flex items-center px-4 gap-4 shadow-sm">
            <Search size={18} className="text-slate-400" />
            <span className="text-sm text-slate-400">{t.searchMail}</span>
         </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
         {/* Sidebar */}
         <div className="w-64 p-4 space-y-1 bg-[#F8F9FA] h-full hidden md:block">
            <button className="w-full flex items-center gap-4 px-4 py-3 bg-blue-100 text-blue-700 rounded-full font-bold text-sm">
               <Inbox size={20} /> {t.inbox}
            </button>
            <div className="w-full flex items-center gap-4 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-full font-bold text-sm">
               <Star size={20} /> {t.starred}
            </div>
            <div className="w-full flex items-center gap-4 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-full font-bold text-sm">
               <Send size={20} /> {t.sent}
            </div>
         </div>

         {/* Content */}
         <div className="flex-1 border-l border-slate-100 bg-white h-full overflow-y-auto">
            <div className="p-4 border-b border-slate-100 flex gap-4 text-slate-400 sticky top-0 bg-white z-10 transition-colors">
               <ChevronLeft size={20} className="hover:text-slate-600 cursor-pointer" />
               <Archive size={20} className="hover:text-slate-600 cursor-pointer" />
               <Trash size={20} className="hover:text-slate-600 cursor-pointer" />
               <Mail size={20} className="hover:text-slate-600 cursor-pointer" />
               <MoreVertical size={20} className="hover:text-slate-600 cursor-pointer ml-auto" />
            </div>

            <div className="p-8">
               <h1 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">{subject}</h1>
               
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                     <Mail size={20} className="text-slate-400" />
                  </div>
                  <div>
                     <div className="text-sm font-bold text-slate-900">
                        {fromName}
                        {fromEmail && <span className="text-slate-400 font-medium ml-2 text-xs font-mono">&lt;{fromEmail}&gt;</span>}
                     </div>
                     <div className="text-xs text-slate-400">{t.toMe}</div>
                  </div>
               </div>

               <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 mb-8 shadow-inner overflow-hidden relative">
                  <p className="text-slate-700 leading-relaxed mb-8 whitespace-pre-wrap">{body}</p>
                  
                  <div className="flex flex-wrap gap-4">
                     {allActions.map(action => {
                       const isDangerous = action.includes('click') || action.includes('pay') || action.includes('send');
                       const label = action === 'pay-token' || action === 'pay-fee' ? `${t.pay} ${content.fee || ''}` :
                                    action === 'click-link' ? t.verifyAccount :
                                    action === 'ignore-link' || action === 'ignore-offer' ? t.deleteEmail :
                                    action;

                       return (
                         <button 
                           key={action}
                           onClick={() => onAction(action)}
                           className={`px-8 py-3 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-lg ${
                             isDangerous 
                             ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-100' 
                             : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                           }`}
                         >
                           {label}
                         </button>
                       );
                     })}
                  </div>
               </div>

               <div className="flex items-center gap-4 text-xs font-bold text-slate-300 uppercase tracking-widest mt-12 border-t pt-6">
                  <div className="w-2 h-2 bg-slate-100 rounded-full"></div>
                  {t.officialCommunication}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

function MenuIcon() {
  return (
    <div className="w-6 h-4 flex flex-col justify-between cursor-pointer opacity-40">
      <div className="h-0.5 bg-slate-900 w-full"></div>
      <div className="h-0.5 bg-slate-900 w-full"></div>
      <div className="h-0.5 bg-slate-900 w-full"></div>
    </div>
  );
}
