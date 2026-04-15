'use client';

import { useStrategiesStore } from '../../store/strategies';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SaveStrategyButton } from '../../components/onchain/SaveStrategyButton';
import { CheckCircle2, Link as LinkIcon, Database } from 'lucide-react';
import Link from 'next/link';

export default function SavePage() {
  const { savedStrategy } = useStrategiesStore();
  const router = useRouter();
  const [txId, setTxId] = useState<string | null>(null);

  useEffect(() => {
    if (!savedStrategy) {
      router.push('/strategy');
    }
  }, [savedStrategy, router]);

  if (!savedStrategy) return null;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl animate-in fade-in duration-500">
      <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-center mt-12">
        {!txId ? (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
             <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <Database className="w-8 h-8" />
             </div>
             <h1 className="text-3xl font-bold tracking-tight text-white mb-4">Save to Stacks L2</h1>
             <p className="text-foreground/70 mb-8 max-w-md mx-auto">
               You are about to save your <span className="font-bold text-primary uppercase text-xs">{savedStrategy.risk}</span> strategy to the Bitcoin L2 blockchain. This will create a permanent, verifiable record linked to your wallet.
             </p>
             <SaveStrategyButton strategy={savedStrategy} onSave={(id) => setTxId(id)} />
          </div>
        ) : (
          <div className="animate-in zoom-in-95 duration-500">
             <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-6 border border-green-500/20">
                <CheckCircle2 className="w-10 h-10" />
             </div>
             <h1 className="text-3xl font-bold tracking-tight text-white mb-4">Strategy Saved!</h1>
             <p className="text-foreground/70 mb-8 max-w-md mx-auto">
               Your yield strategy is now permanently stored on the Stacks blockchain.
             </p>
             
             <div className="bg-background rounded-xl border border-border/50 p-4 mb-8 text-left break-all text-sm font-mono text-foreground/50">
               Tx: {txId}
             </div>

             <Link 
               href={`/s/${txId}`}
               className="w-full rounded-xl bg-accent border border-border/50 px-4 py-4 font-bold text-white hover:bg-accent/80 transition-all flex items-center justify-center gap-2"
             >
               <LinkIcon className="w-4 h-4" /> View Public Strategy Link
             </Link>
          </div>
        )}
      </div>
    </div>
  );
}
