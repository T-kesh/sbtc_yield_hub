'use client';

import { useState } from 'react';
import { useWalletStore } from '../../store/wallet';
import { StrategyPayload } from '../../lib/utils/types';

export function SaveStrategyButton({ strategy, onSave }: { strategy: StrategyPayload, onSave: (txId: string) => void }) {
  const { isConnected, address } = useWalletStore();
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!isConnected || !address) {
      alert("Please connect your wallet first.");
      return;
    }

    setIsSaving(true);
    
    // Simulating block mining delay for UX demonstration
    setTimeout(() => {
      setIsSaving(false);
      onSave(`0x${Math.random().toString(16).substring(2, 12)}...`);
    }, 2500);
  };

  return (
    <button 
      onClick={handleSave}
      disabled={isSaving}
      className={`w-full rounded-xl bg-primary px-4 py-4 font-bold text-primary-foreground transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)]
        ${isSaving ? 'opacity-70 cursor-not-allowed' : 'hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(234,88,12,0.5)]'}
      `}
    >
      {isSaving ? 'Broadcasting to Stacks network...' : 'Sign Onchain Transaction'}
    </button>
  );
}
