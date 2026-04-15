export type RiskTolerance = 'conservative' | 'balanced' | 'aggressive';

export interface ProtocolData {
  id: string; // e.g. 'zest'
  name: string; // e.g. 'Zest Protocol'
  apy: number;
  tvl: number;
  risk: RiskTolerance;
  token: string;
  url: string;
  description: string;
}

export interface StrategyAllocation {
  id: string; // protocol id
  allocationPercentage: number; // 0 to 1
  expectedApy: number;
}

export interface StrategyPayload {
  id?: string;
  amount: number;
  risk: RiskTolerance;
  protocols: StrategyAllocation[];
  projectedApy: number;
}
