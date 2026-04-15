'use client';

import { StrategyPayload } from '../../lib/utils/types';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export function YieldProjection({ strategy }: { strategy: StrategyPayload }) {
  const data = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    // Simple compound interest for projection
    const noYield = strategy.amount;
    const withYield = strategy.amount * Math.pow(1 + (strategy.projectedApy / 100) / 12, month);
    return {
      month: `Month ${month}`,
      Baseline: noYield,
      Projected: Number(withYield.toFixed(4))
    };
  });

  return (
    <div className="w-full h-64 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
          <XAxis dataKey="month" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis 
            stroke="#71717a" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
            tickFormatter={(val) => val.toFixed(2)} 
            domain={['dataMin', 'dataMax']} 
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px' }}
            itemStyle={{ color: '#fafafa' }}
          />
          <Line type="monotone" dataKey="Baseline" stroke="#71717a" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="Projected" stroke="#f97316" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
