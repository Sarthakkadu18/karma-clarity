import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  username: string;
  email: string;
  karmaBalance: number;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateKarma: (amount: number) => void;
  deductKarma: (amount: number) => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      
      login: (user: User) => {
        set({ user, isAuthenticated: true });
      },
      
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
      
      updateKarma: (amount: number) => {
        const { user } = get();
        if (user) {
          set({
            user: {
              ...user,
              karmaBalance: user.karmaBalance + amount
            }
          });
        }
      },
      
      deductKarma: (amount: number) => {
        const { user } = get();
        if (user && user.karmaBalance >= amount) {
          set({
            user: {
              ...user,
              karmaBalance: user.karmaBalance - amount
            }
          });
          return true;
        }
        return false;
      }
    }),
    {
      name: 'mindversee-auth',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      })
    }
  )
);