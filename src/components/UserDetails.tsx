import { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { User, Check, Globe, Sparkles } from 'lucide-react';

interface Props {
  onSubmit: (name: string, lang: Language) => void;
}

const LANGUAGES: { id: Language; label: string; native: string }[] = [
  { id: 'english', label: 'English', native: 'English' },
  { id: 'hindi', label: 'Hindi', native: 'हिन्दी' },
  { id: 'tamil', label: 'Tamil', native: 'தமிழ்' },
  { id: 'telugu', label: 'Telugu', native: 'తెలుగు' },
  { id: 'kannada', label: 'Kannada', native: 'ಕನ್ನಡ' },
];

export default function UserDetails({ onSubmit }: Props) {
  const [name, setName] = useState('');
  const [lang, setLang] = useState<Language>('english');

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg bg-white border border-slate-100 p-10 rounded-[40px] shadow-2xl shadow-indigo-600/5 z-10"
      >
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-indigo-100">
             <Sparkles size={32} className="text-indigo-600" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Complete Profile</h1>
          <p className="text-slate-500 font-medium tracking-wide">Tell us about yourself to personalize your journey</p>
        </div>

        <div className="space-y-8">
          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-1">Your Full Name</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <User size={20} className="text-slate-300 group-focus-within:text-indigo-600 transition-colors" />
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-14 pr-6 text-slate-900 font-bold outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all uppercase tracking-tight"
                placeholder="Abhi Sharma"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-1">Choose Learning Language</label>
            <div className="grid grid-cols-2 gap-4">
              {LANGUAGES.map((language) => (
                <button
                  key={language.id}
                  onClick={() => setLang(language.id)}
                  className={`py-4 px-6 rounded-2xl flex items-center justify-between font-bold text-sm transition-all border ${
                    lang === language.id 
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/20' 
                    : 'bg-slate-50 text-slate-400 border-slate-100 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex flex-col items-start leading-tight">
                    <span className="capitalize">{language.label}</span>
                    <span className="text-[10px] opacity-60 font-medium">{language.native}</span>
                  </div>
                  {lang === language.id && <Check size={16} />}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => name && onSubmit(name, lang)}
            disabled={!name}
            className={`w-full py-5 rounded-[24px] font-black text-xl tracking-tight transition-all shadow-xl ${
              name 
              ? 'bg-indigo-600 text-white shadow-indigo-600/20 hover:scale-[1.02] active:scale-95' 
              : 'bg-slate-100 text-slate-300 cursor-not-allowed'
            }`}
          >
            Start Learning
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 opacity-30 grayscale font-black text-[9px] uppercase tracking-[0.2em] text-slate-400">
           <Globe size={12} />
           Multilingual Support Enabled
        </div>
      </motion.div>
    </div>
  );
}
