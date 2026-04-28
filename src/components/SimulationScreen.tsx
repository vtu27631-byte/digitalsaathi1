import { useState } from 'react';
import { motion } from 'motion/react';
import { UserState, Scenario } from '../types';
import GuidePanel from './GuidePanel';
import AlertModal from './AlertModal';
import { ArrowLeft, Monitor } from 'lucide-react';
import { UI_TRANSLATIONS } from '../lib/translations';

// Simulations
import WhatsAppSim from './simulations/WhatsAppSim';
import UPISim from './simulations/UPISim';
import BankingSim from './simulations/BankingSim';
import DesktopSim from './simulations/DesktopSim';
import FolderSim from './simulations/FolderSim';
import EmailSim from './simulations/EmailSim';
import BrowserSim from './simulations/BrowserSim';
import AppInstallSim from './simulations/AppInstallSim';

interface Props {
  user: UserState;
  scenario: Scenario;
  onComplete: () => void;
  onExit: () => void;
}

export default function SimulationScreen({ user, scenario, onComplete, onExit }: Props) {
  const t = UI_TRANSLATIONS[user.language] || UI_TRANSLATIONS.english;

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'error' | 'success';
    title: string;
    message: string;
    explanation: string;
  }>({
    isOpen: false,
    type: 'error',
    title: '',
    message: '',
    explanation: '',
  });

  const handleAction = (actionId: string) => {
    if (actionId === scenario.correctAction) {
      setModalState({
        isOpen: true,
        type: 'success',
        title: scenario.successMessage,
        message: t.correctDecision,
        explanation: scenario.successExplanation,
      });
    } else {
      const wrong = scenario.wrongActions.find(w => w.id === actionId);
      if (wrong) {
        setModalState({
          isOpen: true,
          type: 'error',
          title: wrong.alertTitle,
          message: wrong.alertMessage,
          explanation: wrong.explanation,
        });
      }
    }
  };

  const renderSimulation = () => {
    const simProps = {
      content: scenario.content,
      onAction: handleAction,
      correctAction: scenario.correctAction,
      correctActionLabel: scenario.correctActionLabel,
      wrongActions: scenario.wrongActions,
      language: user.language
    };

    switch (scenario.type) {
      case 'whatsapp':
        return <WhatsAppSim {...simProps} />;
      case 'upi':
        return <UPISim {...simProps} />;
      case 'banking':
        return <BankingSim {...simProps} />;
      case 'desktop':
        return <DesktopSim {...simProps} />;
      case 'folder':
        return <FolderSim {...simProps} />;
      case 'email':
        return <EmailSim {...simProps} />;
      case 'browser':
        return <BrowserSim {...simProps} />;
      case 'app-install':
        return <AppInstallSim {...simProps} />;
      default:
        return (
          <div className="bg-white/5 p-12 rounded-[40px] border-4 border-dashed border-white/5 text-slate-500 font-black uppercase tracking-tighter text-2xl flex flex-col items-center gap-4 text-center">
             <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center">
                <Monitor size={32} />
             </div>
             Development Phase: <br /> {scenario.type} interface
          </div>
        );
    }
  };

  return (
    <div className="flex h-full bg-slate-100 overflow-hidden text-slate-800">
      {/* Immersive Left Guide Panel */}
      <GuidePanel
        userName={user.name}
        intro={scenario.saathiIntro}
        prompt={scenario.saathiPrompt}
        isCorrect={modalState.isOpen && modalState.type === 'success'}
        onHelp={() => {}}
        gotItLabel={t.gotIt}
      />

      {/* Main Simulation Stage */}
      <div className="flex-1 flex flex-col min-w-0 h-full relative">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-40">
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-indigo-500/10 rounded-full blur-[160px]"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[140px]"></div>
        </div>

        {/* Tactical Header */}
        <div className="h-20 flex items-center justify-between px-8 bg-white/50 backdrop-blur-sm border-b border-slate-200 z-10 shrink-0">
           <button 
             onClick={onExit}
             className="flex items-center gap-3 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-500 hover:text-rose-600 hover:bg-rose-50 hover:border-rose-100 transition-all group"
           >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              {t.abortScenario}
           </button>
           
           <div className="flex flex-col items-center">
              <span className="text-[9px] font-black text-slate-400 tracking-[0.4em] uppercase mb-1 leading-none">{t.trainingStage}</span>
              <h1 className="text-lg font-black text-slate-900 tracking-tight uppercase">{scenario.title}</h1>
           </div>

           <div className="w-40 flex justify-end">
              <div className="h-10 px-4 bg-white border border-slate-200 rounded-xl flex items-center gap-3">
                 <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                 <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">{t.simLinkActive}</span>
              </div>
           </div>
        </div>

        {/* Content Viewport */}
        <div className="flex-1 flex items-center justify-center p-8 md:p-12 overflow-y-auto relative z-10">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             key={scenario.id}
             className="w-full flex justify-center"
           >
              {renderSimulation()}
           </motion.div>
        </div>

        {/* Floating Controls / HUD elements if any */}
        <div className="absolute bottom-8 right-8 z-20 pointer-events-none opacity-60">
           <div className="bg-white/80 border border-slate-200 p-4 rounded-3xl backdrop-blur-md flex items-center gap-4 shadow-xl shadow-slate-900/5">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100">
                 <Monitor size={16} className="text-indigo-600" />
              </div>
              <div>
                 <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest">{t.protocolVersion}</p>
                 <p className="text-[11px] text-slate-900 font-bold leading-none">D-SAATHI 1.0.4</p>
              </div>
           </div>
        </div>
      </div>


      <AlertModal
        isOpen={modalState.isOpen}
        type={modalState.type}
        title={modalState.title}
        message={modalState.message}
        explanation={modalState.explanation}
        onRetry={() => setModalState(prev => ({ ...prev, isOpen: false }))}
        onNext={() => {
          setModalState(prev => ({ ...prev, isOpen: false }));
          onComplete();
        }}
        retryLabel={t.retry}
        nextLabel={t.continue}
      />
    </div>
  );
}
