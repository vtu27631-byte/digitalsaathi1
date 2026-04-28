/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserState, Language, Scenario } from './types';
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';
import UserDetails from './components/UserDetails';
import Dashboard from './components/Dashboard';
import SimulationScreen from './components/SimulationScreen';
import { SCENARIOS } from './scenarios';
import { getLocalizedScenario } from './lib/scenarioUtils';
import { auth, loginWithGoogle, logout as firebaseLogout, syncUserProgress, createUserProfile, updateUserProgress } from './lib/firebase';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';

type Page = 'landing' | 'auth' | 'details' | 'dashboard' | 'simulation';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserState>({
    name: '',
    language: 'english',
    completedScenarios: [],
    currentScenarioId: null,
    riskLevel: 'Beginner',
  });

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setFirebaseUser(u);
      setLoading(false);
      if (u) {
        // If logged in, set up sync
        const stopSync = syncUserProgress(u.uid, (data) => {
          if (data) {
            setUser(data);
            setCurrentPage('dashboard');
          } else {
            // Logged in but no profile yet
            setCurrentPage('details');
          }
        });
        return () => stopSync();
      } else {
        // Not logged in
        if (currentPage !== 'landing') {
           setCurrentPage('auth');
        }
      }
    });
    return () => unsubscribe();
  }, []);

  // Calculate risk level based on progress
  useEffect(() => {
    const total = SCENARIOS.length;
    const completedCount = user.completedScenarios.length;
    let level: UserState['riskLevel'] = 'Beginner';
    
    if (completedCount > total * 0.7) level = 'Safe User';
    else if (completedCount > total * 0.3) level = 'Learning';
    
    if (level !== user.riskLevel) {
      if (firebaseUser) {
        updateUserProgress(firebaseUser.uid, { riskLevel: level });
      } else {
        setUser(prev => ({ ...prev, riskLevel: level }));
      }
    }
  }, [user.completedScenarios.length]);

  const handleStart = () => {
    setCurrentPage('auth');
  };

  const handleGuest = () => {
    setCurrentPage('details');
  };

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
      // Auth state listener handles navigation
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleLogout = async () => {
    await firebaseLogout();
    setUser({
      name: '',
      language: 'english',
      completedScenarios: [],
      currentScenarioId: null,
      riskLevel: 'Beginner',
    });
    setCurrentPage('landing');
  };

  const handleUserDetails = async (name: string, lang: Language) => {
    if (firebaseUser) {
      await createUserProfile(firebaseUser.uid, { name, language: lang });
    } else {
      setUser(prev => ({ ...prev, name, language: lang }));
      setCurrentPage('dashboard');
    }
  };

  const startScenario = (id: string) => {
    if (firebaseUser) {
      updateUserProgress(firebaseUser.uid, { currentScenarioId: id });
    } else {
      setUser(prev => ({ ...prev, currentScenarioId: id }));
    }
    setCurrentPage('simulation');
  };

  const completeScenario = async (id: string) => {
    if (user.completedScenarios.includes(id)) {
      setCurrentPage('dashboard');
      return;
    }

    const updatedCompleted = [...user.completedScenarios, id];
    
    if (firebaseUser) {
      await updateUserProgress(firebaseUser.uid, { 
        completedScenarios: updatedCompleted,
        currentScenarioId: null 
      });
    } else {
      setUser(prev => ({
        ...prev,
        completedScenarios: updatedCompleted,
        currentScenarioId: null
      }));
    }
    setCurrentPage('dashboard');
  };

  const rawScenario = SCENARIOS.find(s => s.id === user.currentScenarioId);
  const currentScenario = rawScenario ? getLocalizedScenario(rawScenario, user.language) : null;

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-500/30 selection:text-white">
      <AnimatePresence mode="wait">
        {currentPage === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LandingPage onStart={handleStart} />
          </motion.div>
        )}

        {currentPage === 'auth' && (
          <motion.div
            key="auth"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <AuthPage onGuest={handleGuest} onLogin={handleLogin} />
          </motion.div>
        )}

        {currentPage === 'details' && (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <UserDetails onSubmit={handleUserDetails} />
          </motion.div>
        )}

        {currentPage === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
          >
            <Dashboard 
              user={user} 
              onStartScenario={startScenario} 
              onLogout={handleLogout}
            />
          </motion.div>
        )}

        {currentPage === 'simulation' && currentScenario && (
          <motion.div
            key="simulation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="h-screen overflow-hidden"
          >
            <SimulationScreen
              user={user}
              scenario={currentScenario}
              onComplete={() => completeScenario(currentScenario.id)}
              onExit={() => {
                if (firebaseUser) {
                  updateUserProgress(firebaseUser.uid, { currentScenarioId: null });
                } else {
                  setUser(prev => ({ ...prev, currentScenarioId: null }));
                }
                setCurrentPage('dashboard');
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

