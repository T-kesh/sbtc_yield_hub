'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RiskTolerance, StrategyPayload } from '../../lib/utils/types';
import { generateStrategy } from '../../lib/strategy/engine';
import { useStrategiesStore } from '../../store/strategies';
import { YieldProjection } from '../../components/strategy/YieldProjection';
import { ArrowRight, ArrowLeft, ShieldCheck, Zap, Activity, Save } from 'lucide-react';
import clsx from 'clsx';
import { MOCK_PROTOCOLS } from '../../lib/utils/constants';

export default function StrategyPage() {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState<number>(1);
  const [risk, setRisk] = useState<RiskTolerance>('balanced');
  const [strategy, setStrategy] = useState<StrategyPayload | null>(null);
  
  const { setSavedStrategy } = useStrategiesStore();
  const router = useRouter();

  const handleNext = () => {
    if (step === 1) setStep(2);
    if (step === 2) {
      setStrategy(generateStrategy(amount, risk));
      setStep(3);
    }
  };

  const handleSave = () => {
    if (strategy) {
      setSavedStrategy(strategy);
      router.push('/save');
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl animate-in fade-in duration-500">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Strategy Builder</h1>
        <p className="text-foreground/60">Generate the optimal yield strategy for your Bitcoin.</p>
      </div>

      <div className="bg-card border border-border/50 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 h-1 bg-border w-full">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out" 
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {step === 1 && (
          <div className="animate-in slide-in-from-right-8 duration-300">
            <h2 className="text-2xl font-bold mb-6">How much sBTC do you want to supply?</h2>
            <div className="relative mb-8">
              <input 
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full bg-background border border-border/50 rounded-xl px-6 py-4 text-2xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                min="0.01"
                step="0.01"
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-primary font-bold">
                sBTC
              </div>
            </div>
            
            <p className="text-sm text-foreground/60 mb-8">
              Enter the amount of sBTC you plan to use for your yield strategy. We'll use this to project your earnings.
            </p>

            <button 
              onClick={handleNext}
              disabled={amount <= 0}
              className="w-full rounded-xl bg-primary px-4 py-4 font-bold text-primary-foreground hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] flex items-center justify-center gap-2"
            >
              Continue to Risk Profile <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in slide-in-from-right-8 duration-300">
            <button onClick={() => setStep(1)} className="flex items-center gap-2 text-sm text-foreground/50 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <h2 className="text-2xl font-bold mb-6">What is your risk tolerance?</h2>
            
            <div className="space-y-4 mb-8">
              {[
                { id: 'conservative', title: 'Conservative', icon: ShieldCheck, desc: 'Focus on established protocols with lower TVL volatility. Over-collateralized lending mostly.' },
                { id: 'balanced', title: 'Balanced', icon: Activity, desc: 'A mix of lending and stable-swap liquidity providing. Best risk-adjusted returns.' },
                { id: 'aggressive', title: 'Aggressive', icon: Zap, desc: 'Maximize yields through derivative vaults and newer protocols. Higher risk, highest reward.' }
              ].map((profile) => (
                <div 
                  key={profile.id}
                  onClick={() => setRisk(profile.id as RiskTolerance)}
                  className={clsx(
                    "cursor-pointer rounded-xl border p-4 flex gap-4 transition-all",
                    risk === profile.id 
                      ? "border-primary bg-primary/10 shadow-[0_0_15px_rgba(234,88,12,0.15)]" 
                      : "border-border/50 bg-background hover:border-border hover:bg-accent"
                  )}
                >
                  <div className={clsx("mt-1", risk === profile.id ? "text-primary" : "text-foreground/50")}>
                    <profile.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={clsx("font-bold", risk === profile.id ? "text-primary" : "text-white")}>{profile.title}</h3>
                    <p className="text-sm text-foreground/60">{profile.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="w-full rounded-xl bg-primary px-4 py-4 font-bold text-primary-foreground hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(234,88,12,0.3)]"
            >
              Generate Strategy <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {step === 3 && strategy && (
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <button onClick={() => setStep(2)} className="flex items-center gap-2 text-sm text-foreground/50 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Edit Profile
            </button>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-white">Recommended Strategy</h2>
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                {strategy.risk}
              </span>
            </div>
            
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-extrabold text-primary">{strategy.projectedApy.toFixed(1)}%</span>
              <span className="text-foreground/60">Projected APY</span>
            </div>

            <h3 className="font-bold text-white mb-4">Allocation</h3>
            <div className="space-y-3 mb-8">
              {strategy.protocols.map(alloc => {
                const pInfo = MOCK_PROTOCOLS.find(p => p.id === alloc.id);
                return (
                  <div key={alloc.id} className="flex items-center justify-between p-4 rounded-xl bg-background border border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold border border-border">
                        {pInfo?.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold">{pInfo?.name}</div>
                        <div className="text-xs text-foreground/50">{alloc.expectedApy.toFixed(1)}% APY</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">{(alloc.allocationPercentage * 100).toFixed(0)}%</div>
                      <div className="text-xs text-foreground/50">{(alloc.allocationPercentage * strategy.amount).toFixed(2)} sBTC</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <h3 className="font-bold text-white mb-2">1 Year Projection</h3>
            <div className="p-4 rounded-xl bg-background border border-border/50 mb-8">
              <YieldProjection strategy={strategy} />
            </div>

            <button 
              onClick={handleSave}
              className="w-full rounded-xl bg-primary px-4 py-4 font-bold text-primary-foreground hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" /> Save Strategy Onchain
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
