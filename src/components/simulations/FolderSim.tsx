import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Settings,
  MoreHorizontal,
  Folder,
  FileText,
  Copy,
  ChevronDown
} from 'lucide-react';

import { UI_TRANSLATIONS } from '../../lib/translations';

interface Props {
  content: {
    selectedFile: string;
    source: string;
    target: string;
  };
  onAction: (id: string) => void;
  correctAction: string;
  wrongActions: { id: string }[];
  language: any;
}

export default function FolderSim({ content, onAction, correctAction, wrongActions, language }: Props) {
  const t = UI_TRANSLATIONS[language as keyof typeof UI_TRANSLATIONS] || UI_TRANSLATIONS.english;
  return (
    <div className="w-full max-w-4xl h-[500px] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border-[6px] border-slate-200">
      {/* OS Header */}
      <div className="h-14 bg-slate-50 border-b border-slate-100 flex items-center px-6 justify-between">
         <div className="flex items-center gap-6">
            <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-slate-200"></div>
               <div className="w-3 h-3 rounded-full bg-slate-200"></div>
               <div className="w-3 h-3 rounded-full bg-slate-200"></div>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
               <ChevronLeft size={20} />
               <ChevronRight size={20} />
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-1.5 rounded-xl min-w-[200px]">
               <Folder size={14} className="text-blue-500 shadow-sm" />
               <span className="text-xs font-bold text-slate-700">{content.source}</span>
               <ChevronDown size={14} className="ml-auto" />
            </div>
         </div>
         <div className="w-48 h-8 bg-white border border-slate-200 rounded-xl flex items-center px-3 gap-2">
            <Search size={14} className="text-slate-300" />
            <span className="text-[10px] text-slate-300 font-medium tracking-tight uppercase">{t.search}</span>
         </div>
      </div>

      <div className="flex-1 flex">
         {/* Sidebar */}
         <div className="w-48 bg-slate-50 border-r border-slate-100 p-4 space-y-4">
            <div className="space-y-1">
               <div className="px-2 py-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.favorites}</div>
               <div className={`px-2 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold ${content.source === 'Documents' ? 'bg-blue-100 text-blue-700' : 'text-slate-600'}`}>
                  <Folder size={16} /> {t.documents}
               </div>
               <div className="px-2 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold text-slate-600 hover:bg-slate-100">
                  <Folder size={16} /> {t.downloads}
               </div>
               <div className={`px-2 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold ${content.source === 'Work' ? 'bg-blue-100 text-blue-700' : 'text-slate-600'}`}>
                  <Folder size={16} /> {t.work}
               </div>
            </div>
         </div>

         {/* Grid */}
         <div className="flex-1 p-6">
            <div className="flex items-center gap-4 mb-8">
               <h1 className="text-xl font-bold text-slate-900">{content.source}</h1>
               <div className="flex-1 border-b border-slate-100 h-px"></div>
            </div>

            <motion.div 
               whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
               className="w-32 p-4 rounded-2xl border-2 border-blue-200 bg-blue-50 flex flex-col items-center gap-3 group relative"
            >
               <FileText size={48} className="text-blue-500" />
               <span className="text-xs font-bold text-slate-900 text-center">{content.selectedFile}</span>
               
               {/* Tiny Context Menu Highlight */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -right-16 top-0 bg-slate-900 text-white p-2 rounded-xl text-[10px] font-bold shadow-xl"
               >
                  {t.rightClickCopy}
               </motion.div>
            </motion.div>
         </div>
      </div>

      {/* Footer / Actions Bar */}
      <div className="h-16 bg-slate-50 border-t border-slate-100 flex items-center px-6 justify-between">
         <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.itemSelected}</div>
         <div className="flex gap-4">
            <button 
              onClick={() => onAction('copy-command')}
              className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 flex items-center gap-2 hover:bg-slate-100 transition-all shadow-sm"
            >
               <Copy size={14} className="text-blue-500" />
               {t.copy}
            </button>
            <button 
              onClick={() => onAction('delete-command')}
              className="px-4 py-2 bg-red-50 text-red-600 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-red-100 transition-all border border-red-100"
            >
               {t.delete}
            </button>
         </div>
      </div>
    </div>
  );
}
