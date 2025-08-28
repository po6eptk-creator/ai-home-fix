'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type UserPlan = 'free' | 'pro' | 'business';

interface UserPlanContextType {
  userPlan: UserPlan;
  setUserPlan: (plan: UserPlan) => void;
  isPro: boolean;
  isBusiness: boolean;
  isFree: boolean;
}

const UserPlanContext = createContext<UserPlanContextType | undefined>(undefined);

interface UserPlanProviderProps {
  children: ReactNode;
}

export function UserPlanProvider({ children }: UserPlanProviderProps) {
  const [userPlan, setUserPlanState] = useState<UserPlan>('free');

  // Load user plan from localStorage on mount
  useEffect(() => {
    const savedPlan = localStorage.getItem('userPlan') as UserPlan;
    if (savedPlan && ['free', 'pro', 'business'].includes(savedPlan)) {
      setUserPlanState(savedPlan);
    }
  }, []);

  // Set user plan and persist to localStorage
  const setUserPlan = (plan: UserPlan) => {
    setUserPlanState(plan);
    localStorage.setItem('userPlan', plan);
    
    // Also update the legacy 'plan' key for backward compatibility
    if (plan === 'pro' || plan === 'business') {
      localStorage.setItem('plan', plan);
    } else {
      localStorage.removeItem('plan');
    }
  };

  const value: UserPlanContextType = {
    userPlan,
    setUserPlan,
    isPro: userPlan === 'pro',
    isBusiness: userPlan === 'business',
    isFree: userPlan === 'free'
  };

  return (
    <UserPlanContext.Provider value={value}>
      {children}
    </UserPlanContext.Provider>
  );
}

export function useUserPlan() {
  const context = useContext(UserPlanContext);
  if (context === undefined) {
    throw new Error('useUserPlan must be used within a UserPlanProvider');
  }
  return context;
}
