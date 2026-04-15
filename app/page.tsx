import Link from 'next/link';
import { ArrowRight, Zap, Target, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center animate-in fade-in duration-1000">
      <div className="space-y-4 mb-8">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-4 shadow-[0_0_15px_rgba(234,88,12,0.2)]">
          <span className="w-2 h-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
          The Unified Yield Layer on Stacks
        </div>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-md">
          Maximize your Bitcoin <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 drop-shadow-lg">
            DeFi Yields
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-foreground/70 leading-relaxed">
          Compare protocols, simulate strategies, and save your yield plan onchain — 
          all in one place to squeeze the best APY out of your sBTC.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-8 mb-24">
        <Link 
          href="/dashboard"
          className="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-orange-600 transition-all hover:scale-105 shadow-[0_0_30px_rgba(234,88,12,0.4)]"
        >
          Launch App <ArrowRight className="w-5 h-5" />
        </Link>
        <Link 
          href="/strategy"
          className="flex items-center justify-center gap-2 rounded-full border border-border bg-card shadow-lg px-8 py-4 text-base font-semibold hover:bg-accent transition-all hover:scale-105"
        >
          Build a Strategy
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="flex flex-col items-center p-8 rounded-3xl bg-card/80 backdrop-blur-md border border-border/50 text-center shadow-xl transition-transform hover:-translate-y-2">
          <div className="h-14 w-14 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 border border-orange-500/20 shadow-inner">
            <Zap className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Live APY Tracking</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">Real-time yields pulled directly from protocol smart contracts on the Stacks blockchain.</p>
        </div>
        <div className="flex flex-col items-center p-8 rounded-3xl bg-card/80 backdrop-blur-md border border-border/50 text-center shadow-xl transition-transform hover:-translate-y-2">
          <div className="h-14 w-14 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 border border-orange-500/20 shadow-inner">
            <Target className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Smart Allocation</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">Input your risk tolerance and let our engine build the optimal sBTC yielding strategy for you.</p>
        </div>
        <div className="flex flex-col items-center p-8 rounded-3xl bg-card/80 backdrop-blur-md border border-border/50 text-center shadow-xl transition-transform hover:-translate-y-2">
          <div className="h-14 w-14 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 border border-orange-500/20 shadow-inner">
            <Lock className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Onchain Verification</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">Save your personalized strategy directly to the Bitcoin L2 via Clarity smart contracts.</p>
        </div>
      </div>
    </div>
  );
}
