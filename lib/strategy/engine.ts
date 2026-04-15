import { RiskTolerance, StrategyPayload, StrategyAllocation } from '../utils/types';
import { MOCK_PROTOCOLS } from '../utils/constants';

export function generateStrategy(amount: number, risk: RiskTolerance): StrategyPayload {
  const allocations: StrategyAllocation[] = [];
  
  if (risk === 'conservative') {
    allocations.push({ id: 'zest', allocationPercentage: 0.6, expectedApy: 8.5 });
    allocations.push({ id: 'bitflow', allocationPercentage: 0.4, expectedApy: 6.4 });
  } else if (risk === 'balanced') {
    allocations.push({ id: 'zest', allocationPercentage: 0.4, expectedApy: 8.5 });
    allocations.push({ id: 'granite', allocationPercentage: 0.6, expectedApy: 12.2 });
  } else if (risk === 'aggressive') {
    allocations.push({ id: 'hermetica', allocationPercentage: 0.7, expectedApy: 15.8 });
    allocations.push({ id: 'granite', allocationPercentage: 0.3, expectedApy: 12.2 });
  }

  const projectedApy = allocations.reduce((acc, alloc) => acc + (alloc.allocationPercentage * alloc.expectedApy), 0);

  return {
    amount,
    risk,
    protocols: allocations,
    projectedApy
  };
}
