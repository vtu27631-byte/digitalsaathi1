import { motion } from 'motion/react';
import { UserState } from '../types';
import { 
  User, 
  Mail, 
  MapPin, 
  Shield, 
  Award, 
  Settings,
  Bell,
  Heart,
  ChevronRight,
  LogOut,
  Camera
} from 'lucide-react';
import { UI_TRANSLATIONS } from '../lib/translations';

interface Props {
  user: UserState;
  onLogout: () => void;
  onBack: () => void;
}

export default function ProfileView({ user, onLogout, onBack }: Props) {
  const t = UI_TRANSLATIONS[user.language] || UI_TRANSLATIONS.english;

  return (
    <div className="min-h-screen bg-white">
      {/* Profile Header */}
      <div className="h-64 bg-slate-900 relative">
        <button 
          onClick={onBack}
          className="absolute top-8 left-8 p-3 bg-white/10 hover:bg-white/20 rounded-2xl text-white backdrop-blur-md transition-all z-10"
        >
          <ChevronRight size={24} className="rotate-180" />
        </button>
        
        <div className="absolute -bottom-16 left-12 flex items-end gap-6">
          <div className="relative group">
            <div className="w-32 h-32 rounded-[40px] border-[6px] border-white bg-slate-100 shadow-xl overflow-hidden">
               <img 
                 src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} 
                 alt="avatar" 
                 className="w-full h-full"
               />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-indigo-600 text-white rounded-xl shadow-lg border-2 border-white hover:bg-indigo-700 transition-all opacity-0 group-hover:opacity-100">
               <Camera size={16} />
            </button>
          </div>
          <div className="mb-4">
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter">{user.name}</h1>
            <p className="text-indigo-600 font-bold tracking-tight bg-indigo-50 px-3 py-0.5 rounded-full inline-block mt-1">
              {user.riskLevel} • {t.level} {user.completedScenarios.length + 1}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-12 pt-24 pb-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="md:col-span-2 space-y-8">
            <section className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <User size={24} className="text-indigo-600" />
                Personal Information
              </h2>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Display Name</label>
                  <p className="font-bold text-slate-900 text-lg">{user.name}</p>
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Preferred Language</label>
                  <p className="font-bold text-slate-900 uppercase">{user.language}</p>
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Location</label>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <MapPin size={16} className="text-indigo-500" />
                    <span>New Delhi, India</span>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Account Version</label>
                  <p className="text-slate-700 font-bold">V1.0.4 Safe</p>
                </div>
              </div>
            </section>

            {/* Badge Collection */}
            <section className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-3">
                  <Award size={24} className="text-amber-500" />
                  Achievements
                </h2>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{user.completedScenarios.length} Unlocked</span>
              </div>
              <div className="grid grid-cols-4 gap-6">
                 {[
                   { name: 'First Steps', icon: <ChevronRight size={20} />, unlocked: user.completedScenarios.length >= 1 },
                   { name: 'Shield Hero', icon: <Shield size={20} />, unlocked: user.completedScenarios.length >= 3 },
                   { name: 'Security Pro', icon: <Award size={20} />, unlocked: user.completedScenarios.length >= 5 },
                   { name: 'Master Saathi', icon: <Award size={20} />, unlocked: user.completedScenarios.length >= 8 },
                 ].map((badge, idx) => (
                   <div key={idx} className={`aspect-square rounded-3xl flex flex-col items-center justify-center text-center p-2 transition-all ${badge.unlocked ? 'bg-amber-50 border-2 border-amber-200' : 'bg-slate-50 border-2 border-dashed border-slate-200 grayscale opacity-40'}`}>
                      <div className={`p-3 rounded-2xl mb-2 ${badge.unlocked ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
                        {badge.icon}
                      </div>
                      <span className="text-[10px] font-black text-slate-700 uppercase tracking-tight leading-none">{badge.name}</span>
                   </div>
                 ))}
              </div>
            </section>

            <section className="bg-indigo-600 p-8 rounded-[40px] text-white overflow-hidden relative shadow-2xl shadow-indigo-600/30">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
               <div className="relative z-10">
                 <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                   <Shield size={28} />
                   Security Status
                 </h2>
                 <p className="text-indigo-100 font-medium mb-8 max-w-md">Your digital safety score is calculated based on completed simulations and behavioral patterns.</p>
                 
                 <div className="flex items-center gap-12">
                   <div>
                     <div className="text-4xl font-black mb-1">820</div>
                     <div className="text-xs font-bold text-indigo-200 uppercase tracking-widest">Safety Credit Score</div>
                   </div>
                   <div className="w-px h-12 bg-white/20"></div>
                   <div>
                     <div className="text-4xl font-black mb-1">{user.completedScenarios.length}</div>
                     <div className="text-xs font-bold text-indigo-200 uppercase tracking-widest">Mastered Scenarios</div>
                   </div>
                 </div>
               </div>
            </section>
          </div>

          {/* Sidebar Settings */}
          <div className="space-y-6">
             {/* Saathi Tips Bot Card */}
             <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-[40px] border border-indigo-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg">
                      <Shield size={20} />
                   </div>
                   <div>
                      <h4 className="text-sm font-black text-slate-900 leading-none mb-1">Saathi Bot</h4>
                      <div className="flex items-center gap-1.5">
                         <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                         <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Online</span>
                      </div>
                   </div>
                </div>
                <p className="text-xs font-medium text-slate-600 leading-relaxed mb-4 italic">
                  "Remember {user.name.split(' ')[0]}, a secure password is your first line of defense. Use symbols and numbers!"
                </p>
                <div className="flex gap-2">
                   <div className="px-3 py-1 bg-white border border-indigo-100 rounded-full text-[9px] font-black text-indigo-600">Tip of the day</div>
                </div>
             </div>
             <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100">
               <button className="w-full flex items-center justify-between p-4 hover:bg-white rounded-2xl transition-all group">
                 <div className="flex items-center gap-4">
                   <div className="p-3 bg-white text-slate-600 rounded-xl group-hover:text-indigo-600 transition-all shadow-sm">
                     <Settings size={20} />
                   </div>
                   <span className="font-bold text-slate-700">Account Settings</span>
                 </div>
                 <ChevronRight size={18} className="text-slate-300 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
               </button>
               <button className="w-full flex items-center justify-between p-4 hover:bg-white rounded-2xl transition-all group mt-1">
                 <div className="flex items-center gap-4">
                   <div className="p-3 bg-white text-slate-600 rounded-xl group-hover:text-indigo-600 transition-all shadow-sm">
                     <Bell size={20} />
                   </div>
                   <span className="font-bold text-slate-700">Notifications</span>
                 </div>
                 <ChevronRight size={18} className="text-slate-300 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
               </button>
               <button className="w-full flex items-center justify-between p-4 hover:bg-white rounded-2xl transition-all group mt-1">
                 <div className="flex items-center gap-4">
                   <div className="p-3 bg-white text-slate-600 rounded-xl group-hover:text-indigo-600 transition-all shadow-sm">
                     <Heart size={20} />
                   </div>
                   <span className="font-bold text-slate-700">Favorites</span>
                 </div>
                 <ChevronRight size={18} className="text-slate-300 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
               </button>
             </div>

             <button 
               onClick={onLogout}
               className="w-full py-5 px-6 bg-rose-50 text-rose-600 rounded-[32px] font-black flex items-center justify-center gap-3 hover:bg-rose-100 transition-all border-2 border-rose-100/50"
             >
               <LogOut size={22} />
               Sign Out Securely
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
