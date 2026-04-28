import { motion } from 'motion/react';
import { User, LogIn, Chrome, Mail } from 'lucide-react';

interface Props {
  onGuest: () => void;
  onLogin: () => void;
}

export default function AuthPage({ onGuest, onLogin }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[80px] -ml-32 -mb-32"></div>

      <div className="w-full max-w-md z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-[48px] shadow-2xl shadow-indigo-600/5 border border-slate-100"
        >
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-100">
               <LogIn size={32} className="text-indigo-600" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Welcome</h2>
            <p className="text-slate-500 font-medium tracking-tight">Select your preferred entry method</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={onLogin}
              className="w-full py-4 px-6 bg-white border-2 border-slate-100 rounded-2xl font-black flex items-center justify-center gap-3 hover:border-indigo-500 hover:bg-slate-50 transition-all text-slate-700 shadow-sm"
            >
              <Chrome size={20} className="text-red-500" />
              Continue with Google
            </button>

            <button
              onClick={onLogin}
              className="w-full py-4 px-6 bg-indigo-600 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20"
            >
              <Mail size={20} />
              Login with Email
            </button>

            <div className="relative py-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest leading-none">
                <span className="bg-white px-4 text-slate-400">Security Gateway</span>
              </div>
            </div>

            <button
              onClick={onGuest}
              className="w-full py-4 px-6 bg-slate-50 text-slate-600 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-slate-100 transition-all border border-slate-100"
            >
              <User size={20} />
              Continue as Guest
            </button>
          </div>

          <p className="mt-10 text-center text-[10px] text-slate-400 font-black uppercase tracking-widest leading-relaxed">
            Protected by Digital Saathi <br />
            Security Protocol 1.0.4
          </p>
        </motion.div>
      </div>
    </div>
  );
}
