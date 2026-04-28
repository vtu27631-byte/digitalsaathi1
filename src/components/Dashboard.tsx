import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserState, Scenario } from '../types';
import { SCENARIOS } from '../scenarios';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight,
  LogOut,
  Trophy,
  Monitor,
  Lock,
  Sparkles,
  User
} from 'lucide-react';

import { getLocalizedScenario } from '../lib/scenarioUtils';
import { UI_TRANSLATIONS } from '../lib/translations';
import ProfileView from './ProfileView';

interface Props {
  user: UserState;
  onStartScenario: (id: string) => void;
  onLogout: () => void;
}

export default function Dashboard({ user, onStartScenario, onLogout }: Props) {
  const [view, setView] = useState<'dashboard' | 'profile'>('dashboard');
  const t = UI_TRANSLATIONS[user.language] || UI_TRANSLATIONS.english;

  const basicsScenarios = SCENARIOS
    .filter(s => s.category === 'basics')
    .map(s => getLocalizedScenario(s, user.language));
  
  const securityScenarios = SCENARIOS
    .filter(s => s.category === 'security')
    .map(s => getLocalizedScenario(s, user.language));

  const total = SCENARIOS.length;
  const completed = user.completedScenarios.length;
  const progress = Math.round((completed / total) * 100);

  const getLocalizedRiskLevel = (level: string) => {
    if (level === 'Beginner') return t.beginner;
    if (level === 'Learning') return t.learning;
    if (level === 'Safe User') return t.safeUser;
    return level;
  };

  if (view === 'profile') {
    return <ProfileView user={user} onLogout={onLogout} onBack={() => setView('dashboard')} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Immersive Header */}
      <header className="h-20 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl flex items-center justify-between px-8 sticky top-0 z-50">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => setView('dashboard')}>
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">Digital <span className="text-indigo-600">Saathi</span></span>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em]">{t.learningLevel}</span>
              <span className="text-xs font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">{progress}%</span>
            </div>
            <div className="w-56 h-1.5 bg-slate-200 rounded-full overflow-hidden shadow-inner font-black">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
              />
            </div>
          </div>
          
          <div className="h-10 w-px bg-slate-200"></div>

          <button 
            onClick={() => setView('profile')}
            className="flex items-center gap-4 p-2 pr-4 bg-white border border-slate-200 rounded-2xl hover:border-indigo-300 transition-all group"
          >
            <div className="w-11 h-11 rounded-full border-2 border-indigo-500/30 p-0.5 shadow-sm overflow-hidden">
               <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="avatar" className="w-full h-full" />
            </div>
            <div className="text-left hidden md:block">
              <p className="text-sm font-black text-slate-900 leading-none mb-1 group-hover:text-indigo-600 transition-colors">{user.name}</p>
              <p className="text-[10px] text-emerald-600 font-black uppercase tracking-tighter">{getLocalizedRiskLevel(user.riskLevel)}</p>
            </div>
          </button>

          <button 
            onClick={onLogout}
            className="p-3 bg-rose-50 text-rose-500 rounded-xl hover:bg-rose-500 hover:text-white transition-all group border border-rose-100"
            title={t.logout}
          >
            <LogOut size={20} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-8 md:p-12">
        {/* Welcome Hero */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-[10px] font-black uppercase tracking-widest">
                <Sparkles size={14} />
                {t.welcomeBack}, {user.name.split(' ')[0]}
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">{t.educationHeader}</h1>
              <div className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-3xl max-w-xl shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-600/20">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 mb-1">Saathi Guide</p>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    "Welcome back! I've prepared <span className="text-indigo-600 font-bold">{total - completed}</span> modules for you today. Let's make the internet a safer place together!"
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-80 bg-white border border-slate-200 rounded-[40px] p-8 flex flex-col items-center text-center shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full blur-3xl group-hover:bg-indigo-600/10 transition-all"></div>
               <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mb-6 border border-indigo-100">
                 <Trophy size={40} className="text-indigo-600" />
               </div>
               <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{t.nextBadge}</div>
               <div className="text-xl font-black text-slate-900 tracking-tight">{t.protector}</div>
               <div className="mt-4 text-[10px] text-slate-500 font-bold leading-tight">{t.badgeUnlockHint.replace('{count}', '2')}</div>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Basics Container */}
          <div>
            <div className="flex items-center gap-4 mb-10 group text-slate-900">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center border border-indigo-100 group-hover:bg-indigo-100 transition-all">
                <Monitor className="text-indigo-600" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">{t.basicsTitle}</h2>
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mt-1">{t.basicsSub}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {basicsScenarios.map((s, idx) => (
                <ModuleCard 
                  key={s.id} 
                  scenario={s} 
                  index={idx + 1}
                  isCompleted={user.completedScenarios.includes(s.id)}
                  onClick={() => onStartScenario(s.id)}
                  startLabel={t.startSimulation}
                />
              ))}
            </div>
          </div>

          {/* Security Container */}
          <div>
            <div className="flex items-center gap-4 mb-10 group text-slate-900">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center border border-purple-100 group-hover:bg-purple-100 transition-all">
                <Lock className="text-purple-600" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">{t.securityTitle}</h2>
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mt-1">{t.securitySub}</p>
              </div>
            </div>

            <div className="space-y-4">
              {securityScenarios.map((s, idx) => (
                <ModuleCard 
                  key={s.id} 
                  scenario={s} 
                  index={idx + 1}
                  isCompleted={user.completedScenarios.includes(s.id)}
                  onClick={() => onStartScenario(s.id)}
                  startLabel={t.startSimulation}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ModuleCard({ scenario, index, isCompleted, onClick, startLabel }: { scenario: Scenario, index: number, isCompleted: boolean, onClick: () => void, startLabel: string }) {
  return (
    <motion.button
      whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full text-left p-6 rounded-[32px] border transition-all flex items-center justify-between group ${
        isCompleted 
        ? 'bg-emerald-50 border-emerald-100' 
        : 'bg-white border-slate-100 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-600/5 shadow-sm'
      }`}
    >
      <div className="flex items-center gap-6">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all relative ${
          isCompleted 
          ? 'bg-emerald-100 text-emerald-600 border border-emerald-200' 
          : 'bg-slate-50 text-slate-400 group-hover:text-indigo-600 border border-slate-100 group-hover:border-indigo-200'
        }`}>
          {isCompleted ? <CheckCircle2 size={24} /> : <span className="font-black text-lg">0{index}</span>}
          {!isCompleted && <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>}
        </div>
        <div>
          <h3 className={`font-black text-xl tracking-tight transition-colors ${isCompleted ? 'text-slate-400' : 'text-slate-900 group-hover:text-indigo-600'}`}>{scenario.title}</h3>
          <div className="flex items-center gap-3 mt-1 underline-offset-4">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{scenario.type.replace('-', ' ')}</span>
            <div className="w-1 h-1 rounded-full bg-slate-200"></div>
            <span className="text-[10px] font-black text-slate-400 group-hover:text-indigo-500 transition-colors uppercase tracking-tight">{startLabel}</span>
          </div>
        </div>
      </div>
      <div className={`p-2 rounded-full transition-all ${isCompleted ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-50 text-slate-300 group-hover:text-white group-hover:bg-indigo-600 shadow-xl shadow-indigo-600/0 group-hover:shadow-indigo-600/20'}`}>
        <ChevronRight size={20} />
      </div>
    </motion.button>
  );
}

