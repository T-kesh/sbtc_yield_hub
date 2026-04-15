import { create } from 'zustand';
import { StrategyPayload } from '../lib/utils/types';

interface StrategiesState {
  savedStrategy: StrategyPayload | null;
  setSavedStrategy: (strategy: StrategyPayload) => void;
  clearStrategy: () => void;
}

export const useStrategiesStore = create<StrategiesState>((set) => ({
  savedStrategy: null,
  setSavedStrategy: (strategy) => set({ savedStrategy: strategy }),
  clearStrategy: () => set({ savedStrategy: null }),
}));
