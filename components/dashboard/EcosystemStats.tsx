import { MOCK_PROTOCOLS } from '../../lib/utils/constants';

export function EcosystemStats() {
  const totalTvl = MOCK_PROTOCOLS.reduce((sum, p) => sum + p.tvl, 0);
  const avgApy = MOCK_PROTOCOLS.reduce((sum, p) => sum + p.apy, 0) / MOCK_PROTOCOLS.length;

  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-gradient-to-r from-card to-accent border border-border mb-8 overflow-hidden relative shadow-lg">
      <div className="absolute right-0 top-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="flex-1">
        <h2 className="text-sm font-medium text-foreground/60 mb-1">Total Ecosystem TVL</h2>
        <div className="text-4xl font-extrabold tracking-tight text-white drop-shadow-sm">
          ${(totalTvl / 1000000).toFixed(2)}M
        </div>
      </div>
      
      <div className="hidden sm:block w-px bg-border"></div>
      
      <div className="flex-1">
        <h2 className="text-sm font-medium text-foreground/60 mb-1">Average Yield (APY)</h2>
        <div className="text-4xl font-extrabold tracking-tight text-primary drop-shadow-[0_0_15px_rgba(234,88,12,0.3)]">
          {avgApy.toFixed(1)}%
        </div>
      </div>
      
      <div className="hidden sm:block w-px bg-border"></div>
      
      <div className="flex-1">
        <h2 className="text-sm font-medium text-foreground/60 mb-1">Active Protocols</h2>
        <div className="text-4xl font-extrabold tracking-tight text-white drop-shadow-sm">
          {MOCK_PROTOCOLS.length}
        </div>
      </div>
    </div>
  );
}
