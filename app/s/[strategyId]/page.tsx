'use client';

import { useParams } from 'next/navigation';
import { Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ShareableStrategyPage() {
  const { strategyId } = useParams();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mt-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex items-center justify-center gap-2 text-green-400 text-sm font-bold mb-8 bg-green-400/10 border border-green-400/20 py-2 rounded-full w-fit mx-auto px-6">
        <Lock className="w-4 h-4" /> Verifiable Onchain Strategy
      </div>

      <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-[0_0_50px_-12px_rgba(234,88,12,0.15)] mb-8 border-t-4 border-t-primary">
        <h1 className="text-3xl font-bold text-white mb-2">My sBTC Yield Strategy</h1>
        <p className="text-foreground/50 text-sm mb-8 font-mono break-all">ID: {strategyId}</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
           <div className="bg-background border border-border/50 rounded-xl p-6 shadow-inner">
             <div className="text-sm text-foreground/50 mb-1">Total Allocated</div>
             <div className="text-2xl font-bold text-white">1.0 sBTC</div>
           </div>
           <div className="bg-background border border-border/50 rounded-xl p-6 shadow-inner">
             <div className="text-sm text-foreground/50 mb-1">Risk Profile</div>
             <div className="text-2xl font-bold text-primary capitalize">Balanced</div>
           </div>
        </div>

        <h3 className="font-bold text-white mb-4 text-xl">Allocation Breakdown</h3>
        <div className="space-y-3 mb-8">
           <div className="flex items-center justify-between p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-colors">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-sm font-bold border border-border text-white">
                 Z
               </div>
               <div>
                 <div className="font-bold text-lg text-white">Zest Protocol</div>
                 <div className="text-xs text-foreground/50">8.5% APY</div>
               </div>
             </div>
             <div className="text-right">
               <div className="font-bold text-primary text-lg">40%</div>
               <div className="text-xs text-foreground/50">0.40 sBTC</div>
             </div>
           </div>

           <div className="flex items-center justify-between p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-colors">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-sm font-bold border border-border text-white">
                 G
               </div>
               <div>
                 <div className="font-bold text-lg text-white">Granite</div>
                 <div className="text-xs text-foreground/50">12.2% APY</div>
               </div>
             </div>
             <div className="text-right">
               <div className="font-bold text-primary text-lg">60%</div>
               <div className="text-xs text-foreground/50">0.60 sBTC</div>
             </div>
           </div>
        </div>

        <div className="pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
           <div className="text-foreground/50 text-sm">
             Projected Earnings: <span className="text-green-400 font-bold ml-1">10.72% APY</span>
           </div>
        </div>
      </div>

      <div className="text-center">
        <Link 
          href="/strategy"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white hover:bg-accent/80 transition-colors shadow-lg"
        >
          Build Your Own Strategy <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
