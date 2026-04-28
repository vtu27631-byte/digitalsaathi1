import { motion } from 'motion/react';
import { ShieldCheck, Download, AlertCircle, ShieldAlert, Check, X, Shield } from 'lucide-react';

import { UI_TRANSLATIONS } from '../../lib/translations';

interface Props {
  content: {
    appName?: string;
    warning?: string;
    file?: string;
    source?: string;
  };
  onAction: (id: string) => void;
  correctAction: string;
  wrongActions: { id: string }[];
  language: any;
}

export default function AppInstallSim({ content, onAction, correctAction, wrongActions, language }: Props) {
  const t = UI_TRANSLATIONS[language as keyof typeof UI_TRANSLATIONS] || UI_TRANSLATIONS.english;
  const isSetup = !!content.file;
  const allActions = [correctAction, ...wrongActions.map(a => a.id)];

  return (
    <div className="w-full max-w-lg bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col border-[6px] border-slate-900 relative p-8">
      {isSetup ? (
        <div className="text-center py-10">
          <div className="w-32 h-32 bg-slate-100 rounded-[40px] flex items-center justify-center mx-auto mb-10 shadow-inner">
             <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                <Shield size={32} />
             </div>
          </div>
          
          <h1 className="text-3xl font-black text-slate-900 mb-2">{content.file}</h1>
          <p className="text-slate-500 mb-12 font-medium">{t.readyToInstall}</p>

          <div className="space-y-4">
             {allActions.map(action => {
               const isPrimary = action.includes('click') || action.includes('double');
               const label = action === 'double-click-exe' ? t.installNow : 
                            action === 'right-click-delete' ? t.deleteSetup : 
                            action;

               return (
                 <button 
                    key={action}
                    onClick={() => onAction(action)}
                    className={`w-full py-5 rounded-3xl font-bold text-xl transition-all flex items-center justify-center gap-3 active:scale-95 ${
                      isPrimary 
                      ? 'bg-blue-600 text-white shadow-xl shadow-blue-100 hover:bg-blue-700' 
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                 >
                    {isPrimary && <Download size={24} />}
                    {label}
                 </button>
               );
             })}
          </div>
        </div>
      ) : (
        <div>
           <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center">
                 <ShieldAlert size={28} />
              </div>
              <div>
                 <h2 className="text-xl font-black text-slate-900 leading-none mb-1">{t.systemAlert}</h2>
                 <div className="text-xs font-bold text-red-600 uppercase tracking-widest">{t.warning}</div>
              </div>
           </div>

           <div className="bg-red-50 p-6 rounded-3xl border-2 border-red-100 mb-10">
              <div className="text-2xl font-black text-red-600 mb-4 tracking-tight">{content.warning}</div>
              <p className="text-red-700 font-bold text-lg leading-snug">
                {t.deviceRiskTemplate.replace('{appName}', content.appName || '').replace('{source}', content.source || '')}
              </p>
           </div>

           <div className="grid grid-cols-2 gap-4">
              {allActions.map(action => {
                const isDangerous = action.includes('install');
                const label = action === 'install-app' ? t.protectPc : 
                             action === 'ignore-app' ? t.ignore : 
                             action;

                return (
                  <button 
                    key={action}
                    onClick={() => onAction(action)}
                    className={`py-4 rounded-2xl font-bold active:scale-95 transition-all ${
                      isDangerous 
                      ? 'bg-red-600 text-white shadow-lg shadow-red-100 hover:bg-red-700' 
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
           </div>
        </div>
      )}

      {/* Security Badge */}
      <div className="mt-12 pt-8 border-t border-slate-50 flex justify-center items-center gap-2 opacity-30 grayscale font-black text-[10px] uppercase tracking-[0.2em]">
         <ShieldCheck size={16} />
         {t.safeguardVerified}
      </div>
    </div>
  );
}
