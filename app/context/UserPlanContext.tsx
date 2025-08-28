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
  const [hasError, setHasError] = useState(false);

  // Load user plan from localStorage on mount
  useEffect(() => {
    try {
      const savedPlan = localStorage.getItem('userPlan') as UserPlan;
      if (savedPlan && ['free', 'pro', 'business'].includes(savedPlan)) {
        setUserPlanState(savedPlan);
      }
    } catch (error) {
      console.warn('Failed to load user plan from localStorage:', error);
      setHasError(true);
    }
  }, []);

  // Set user plan and persist to localStorage
  const setUserPlan = (plan: UserPlan) => {
    setUserPlanState(plan);
    try {
      localStorage.setItem('userPlan', plan);
      
      // Also update the legacy 'plan' key for backward compatibility
      if (plan === 'pro' || plan === 'business') {
        localStorage.setItem('plan', plan);
      } else {
        localStorage.removeItem('plan');
      }
    } catch (error) {
      console.warn('Failed to save user plan to localStorage:', error);
      setHasError(true);
    }
  };

  const value: UserPlanContextType = {
    userPlan,
    setUserPlan,
    isPro: userPlan === 'pro',
    isBusiness: userPlan === 'business',
    isFree: userPlan === 'free'
  };

  // If there's an error, render children without context to prevent crashes
  if (hasError) {
    return <>{children}</>;
  }

  return (
    <UserPlanContext.Provider value={value}>
      {children}
    </UserPlanContext.Provider>
  );
}

export function useUserPlan() {
  const context = useContext(UserPlanContext);
  if (context === undefined) {
    // Return a fallback context instead of throwing
    return {
      userPlan: 'free' as UserPlan,
      setUserPlan: () => {},
      isPro: false,
      isBusiness: false,
      isFree: true
    };
  }
  return context;
}
