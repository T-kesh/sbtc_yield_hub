import { ProtocolData } from '../../lib/utils/types';
import { ExternalLink, ShieldAlert, TrendingUp, DollarSign } from 'lucide-react';
import clsx from 'clsx';

const RISK_COLORS = {
  conservative: 'text-green-400 bg-green-400/10 border-green-400/20',
  balanced: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  aggressive: 'text-red-400 bg-red-400/10 border-red-400/20',
};

export function ProtocolCard({ protocol }: { protocol: ProtocolData }) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.2)]">
      {/* Decorative gradient blur */}
      <div className="absolute -inset-[1px] -z-10 rounded-2xl bg-gradient-to-b from-primary/20 to-transparent opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
      
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground border border-border shadow-inner">
              <span className="font-bold text-lg">{protocol.name.charAt(0)}</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">{protocol.name}</h3>
              <p className="text-xs text-foreground/50">{protocol.token}</p>
            </div>
          </div>
          <a 
            href={protocol.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-primary transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
        
        <p className="text-sm text-foreground/70 mb-6 h-10 line-clamp-2">
          {protocol.description}
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl bg-accent/50 p-4 border border-border/50 transition-colors group-hover:bg-accent">
            <div className="flex items-center gap-1.5 text-xs text-foreground/60 mb-1">
              <TrendingUp className="h-3 w-3 text-primary" /> APY
            </div>
            <div className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
              {protocol.apy.toFixed(2)}%
            </div>
          </div>
          <div className="rounded-xl bg-accent/50 p-4 border border-border/50 transition-colors group-hover:bg-accent">
            <div className="flex items-center gap-1.5 text-xs text-foreground/60 mb-1">
              <DollarSign className="h-3 w-3 text-green-400" /> TVL
            </div>
            <div className="text-xl font-bold text-white whitespace-nowrap">
              ${(protocol.tvl / 1000000).toFixed(1)}M
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-border/50">
        <div className={clsx("flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border", RISK_COLORS[protocol.risk])}>
          <ShieldAlert className="h-3.5 w-3.5" />
          <span className="capitalize">{protocol.risk} Risk</span>
        </div>
        <button className="text-sm font-medium text-primary hover:text-orange-400 transition-colors">
          View Details →
        </button>
      </div>
    </div>
  );
}
