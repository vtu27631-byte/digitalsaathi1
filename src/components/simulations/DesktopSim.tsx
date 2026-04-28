import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Folder, 
  FileText, 
  Image as ImageIcon, 
  FolderPlus, 
  Trash2, 
  Copy,
  LayoutGrid,
  Menu,
  X,
  Search,
  Globe
} from 'lucide-react';

import { UI_TRANSLATIONS } from '../../lib/translations';

interface Props {
  content: {
    files?: string[];
    drives?: string[];
    icons?: string[];
    appName?: string;
    hasUnsavedChanges?: boolean;
  };
  onAction: (id: string) => void;
  correctAction: string;
  wrongActions: { id: string }[];
  language: any;
}

export default function DesktopSim({ content, onAction, correctAction, wrongActions, language }: Props) {
  const t = UI_TRANSLATIONS[language as keyof typeof UI_TRANSLATIONS] || UI_TRANSLATIONS.english;
  const [showMenu, setShowMenu] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setClickPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setShowMenu(true);
  };

  const files = content.files || [];
  const drives = content.drives || [];
  const icons = content.icons || [];

  return (
    <div 
      className="w-full max-w-4xl h-[500px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col border-[6px] border-slate-800 relative group font-sans text-slate-200"
      onContextMenu={handleContextMenu}
    >
      {/* Taskbar */}
       <div className="absolute bottom-0 left-0 right-0 h-14 bg-slate-950/80 backdrop-blur-md border-t border-white/10 flex items-center px-4 justify-between z-20">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                <LayoutGrid size={20} />
             </div>
             <div className="w-64 h-9 bg-white/5 rounded-full flex items-center px-4 gap-3 border border-white/5">
                <Search size={16} className="text-slate-500" />
                <span className="text-xs text-slate-500 font-medium tracking-wide">{t.searchPlaceholder}</span>
             </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {icons.map((icon, i) => (
                <button 
                  key={i} 
                  onClick={() => onAction(`click-${icon.toLowerCase()}`)}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors text-slate-400"
                >
                  {icon === 'Speaker' && <Menu size={18} />}
                  {icon === 'Battery' && <div className="w-5 h-5 border-2 border-slate-500 rounded-sm relative"><div className="absolute right-[-4px] top-1 w-1 h-2 bg-slate-500 rounded-r-sm"></div></div>}
                  {icon === 'WiFi' && <Globe size={18} />}
                </button>
              ))}
            </div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">11:30 AM • 27/04/26</div>
          </div>
       </div>

       {/* Drawing Area / Desktop Icons */}
       <div className="flex-1 p-10 grid grid-cols-6 grid-rows-4 gap-8 content-start">
          {/* Files */}
          {files.map((file, i) => (
            <motion.button
              key={`file-${i}`}
              whileHover={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', scale: 1.05 }}
              onDoubleClick={() => onAction('double-click-file')}
              className="p-4 rounded-2xl flex flex-col items-center gap-3 group/icon text-center transition-all border border-transparent hover:border-indigo-500/30"
            >
               <div className="p-3 bg-slate-800/50 rounded-xl shadow-sm">
                 {file.endsWith('.jpg') ? <ImageIcon size={32} className="text-amber-400" /> : <FileText size={32} className="text-indigo-400" />}
               </div>
               <span className="text-[11px] font-bold text-slate-300 line-clamp-2 leading-tight">{file}</span>
            </motion.button>
          ))}

          {/* Drives */}
          {drives.map((drive, i) => (
            <motion.button
              key={`drive-${i}`}
              whileHover={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', scale: 1.05 }}
              onClick={() => onAction(drive.includes('USB') ? 'click-usb-drive' : 'click-local-disk')}
              className="p-4 rounded-2xl flex flex-col items-center gap-3 group/icon text-center transition-all border border-transparent hover:border-emerald-500/30"
            >
               <div className="p-3 bg-slate-800/50 rounded-xl shadow-sm relative">
                  <Folder size={32} className="text-emerald-400 fill-emerald-400/20" />
                  <div className="absolute bottom-1 right-2 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900"></div>
               </div>
               <span className="text-[11px] font-bold text-slate-300 line-clamp-2 leading-tight">{drive}</span>
            </motion.button>
          ))}

          {/* Simple App for "Close Apps" or "Save File" */}
          {(content.appName || content.hasUnsavedChanges) && (
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="col-span-4 row-span-3 bg-slate-800 rounded-3xl shadow-2xl border border-white/5 flex flex-col overflow-hidden m-4"
            >
              <div className="h-10 bg-slate-900 px-4 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{content.appName || 'Document Editor'}</span>
                <div className="flex gap-2">
                   <button onClick={() => onAction('click-minimize')} className="w-3 h-3 rounded-full bg-amber-500/50"></button>
                   <button onClick={() => onAction('click-x-button')} className="w-3 h-3 rounded-full bg-rose-500"></button>
                </div>
              </div>
              <div className="flex-1 p-6 space-y-4">
                 <div className="flex items-center gap-4 pb-4 border-b border-white/5">
                   <button 
                     onClick={() => onAction('click-file-save')}
                     className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20"
                   >
                     Save File
                   </button>
                 </div>
                 <div className="space-y-2 opacity-20">
                    <div className="h-3 bg-white w-full rounded-full"></div>
                    <div className="h-3 bg-white w-3/4 rounded-full"></div>
                    <div className="h-3 bg-white w-1/2 rounded-full"></div>
                 </div>
              </div>
              {content.hasUnsavedChanges && (
                <div className="p-2 bg-amber-500/10 text-amber-400 text-[10px] font-bold text-center uppercase tracking-widest">
                  {t.unsavedChanges}
                </div>
              )}
            </motion.div>
          )}
       </div>

       {/* Hint */}
       <div className="absolute top-6 right-6 bg-indigo-500/10 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] border border-indigo-500/20">
          {t.controlCenterActive}
       </div>

       {/* Context Menu */}
       <AnimatePresence>
          {showMenu && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                style={{ top: clickPos.y, left: clickPos.x }}
                className="absolute z-50 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden py-2"
              >
                 <button 
                   onClick={() => { onAction('right-click-new-folder'); setShowMenu(false); }}
                   className="w-full flex items-center gap-3 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                 >
                   <FolderPlus size={16} className="text-purple-500" />
                   {t.newFolder}
                 </button>
                 <button 
                   onClick={() => { onAction('right-click-new-text'); setShowMenu(false); }}
                   className="w-full flex items-center gap-3 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                 >
                   <FileText size={16} className="text-blue-500" />
                   {t.newTextDoc}
                 </button>
                 <div className="mx-2 my-1 border-t border-slate-50"></div>
                 <button className="w-full flex items-center gap-3 px-4 py-2 text-xs font-bold text-slate-400 cursor-not-allowed">
                   <Copy size={16} />
                   {t.paste}
                 </button>
                 <button className="w-full flex items-center gap-3 px-4 py-2 text-xs font-bold text-slate-400 cursor-not-allowed">
                   <Trash2 size={16} />
                   {t.emptyBin}
                 </button>
              </motion.div>
            </>
          )}
       </AnimatePresence>
    </div>
  );
}
