import { motion } from 'motion/react';
import { 
  Globe, 
  RotateCw, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Search, 
  Lock, 
  Download,
  AlertCircle
} from 'lucide-react';

import { UI_TRANSLATIONS } from '../../lib/translations';

interface Props {
  content: {
    url?: string;
    fileName?: string;
    wifiName?: string;
  };
  onAction: (id: string) => void;
  correctAction: string;
  wrongActions: { id: string }[];
  language: any;
}

export default function BrowserSim({ content, onAction, correctAction, wrongActions, language }: Props) {
  const t = UI_TRANSLATIONS[language as keyof typeof UI_TRANSLATIONS] || UI_TRANSLATIONS.english;
  const allActions = [correctAction, ...wrongActions.map(a => a.id)];

  return (
    <div className="w-full max-w-4xl h-[550px] bg-slate-50 rounded-3xl overflow-hidden shadow-2xl flex flex-col border-[6px] border-slate-300">
      {/* Tabs */}
      <div className="h-10 bg-[#DEE1E6] flex items-center px-4 gap-2 shrink-0">
         <div className="bg-white px-4 h-8 rounded-t-xl flex items-center gap-2 text-xs font-bold text-slate-700 min-w-[150px]">
            <Globe size={12} className="text-blue-500" />
            <span className="truncate">{t.safeBrowser}</span>
         </div>
         <Plus size={16} className="text-slate-600" />
      </div>

      {/* Toolbar */}
      <div className="h-12 bg-white flex items-center px-4 gap-4 border-b border-slate-100 shrink-0">
         <div className="flex gap-4 text-slate-400">
            <ChevronLeft size={18} />
            <ChevronRight size={18} />
            <RotateCw size={18} />
         </div>
         <div className="flex-1 bg-[#F1F3F4] h-8 rounded-full flex items-center px-4 gap-2">
            <Lock size={12} className="text-green-600" />
            <span className="text-xs text-slate-600 font-bold">{content.url || 'google.com'}</span>
         </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 bg-white overflow-y-auto">
         {content.wifiName ? (
           <div className="p-12 max-w-xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                    <Globe size={24} />
                 </div>
                 <h1 className="text-2xl font-bold text-slate-900">{t.signInToBank}</h1>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-8 flex gap-3 text-blue-700 text-sm font-bold">
                 <div className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center text-[10px]">!</div>
                 {t.network}: {content.wifiName}
              </div>

              <div className="space-y-4 opacity-50 pointer-events-none mb-12">
                 <div className="h-12 bg-slate-100 rounded-xl w-full"></div>
                 <div className="h-12 bg-slate-100 rounded-xl w-full"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 {allActions.map(action => {
                   const isDangerous = action.includes('use-wifi');
                   const label = action === 'use-wifi' ? 'Log in anyway' : 
                                action === 'dont-use-wifi' ? 'Cancel' : 
                                action;

                   return (
                     <button 
                        key={action}
                        onClick={() => onAction(action)}
                        className={`py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 ${
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
           </div>
         ) : content.fileName ? (
           <div className="p-12 text-center">
              <div className="w-24 h-24 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                 <AlertCircle size={48} />
              </div>
              <h1 className="text-2xl font-black text-slate-900 mb-2">{t.notice}: {content.fileName}</h1>
              <p className="text-slate-500 mb-10">{t.fileReadyDownload}</p>
              
              <div className="flex flex-col items-center gap-4">
                 {allActions.map(action => {
                   const isPrimary = action.includes('download');
                   const label = action === 'click-download' ? 'Download PDF' : 
                                action === 'click-close' ? 'Close Window' : 
                                action;

                   return (
                     <button 
                        key={action}
                        onClick={() => onAction(action)}
                        className={`px-10 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 transition-all active:scale-95 ${
                          isPrimary 
                          ? 'bg-blue-600 text-white shadow-xl shadow-blue-100 hover:bg-blue-700' 
                          : 'text-slate-400 hover:text-slate-600'
                        }`}
                     >
                        {isPrimary && <Download size={20} />}
                        {label}
                     </button>
                   );
                 })}
              </div>
           </div>
         ) : (
           <div className="h-full flex flex-col items-center justify-center p-12">
              <h1 className="text-6xl font-black text-slate-900 mb-8 tracking-tighter">
                <span className="text-blue-500">S</span>
                <span className="text-red-500">e</span>
                <span className="text-yellow-500">a</span>
                <span className="text-blue-500">r</span>
                <span className="text-green-500">c</span>
                <span className="text-red-500">h</span>
              </h1>
              
              <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-full h-12 flex items-center px-6 gap-4 shadow-sm group hover:shadow-md transition-all">
                 <Search size={18} className="text-slate-300" />
                 <input 
                   onKeyDown={(e) => e.key === 'Enter' && onAction('type-in-search')}
                   className="flex-1 bg-transparent outline-none text-sm font-medium" 
                   placeholder={t.searchWorld} 
                 />
                 <button 
                    onClick={() => onAction('type-in-search')}
                    className="text-blue-500 font-bold text-xs uppercase"
                 >
                    {t.go}
                 </button>
              </div>
              
              <div className="mt-8 flex gap-4">
                 <button 
                    onClick={() => onAction('click-logo')}
                    className="px-4 py-2 bg-slate-50 text-slate-500 text-sm font-bold rounded-lg hover:bg-slate-100"
                 >
                    {t.feelingSafe}
                 </button>
              </div>
           </div>
         )}
      </div>
    </div>
  );
}
