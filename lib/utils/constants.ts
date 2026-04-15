import { ProtocolData } from './types';

export const PROTOCOLS_META = [
  { id: 'zest', name: 'Zest Protocol', url: 'https://zestprotocol.com', icon: '/protocols/zest.svg' },
  { id: 'granite', name: 'Granite', url: 'https://granite.fi', icon: '/protocols/granite.svg' },
  { id: 'hermetica', name: 'Hermetica', url: 'https://hermetica.fi', icon: '/protocols/hermetica.svg' },
  { id: 'bitflow', name: 'Bitflow', url: 'https://bitflow.finance', icon: '/protocols/bitflow.svg' },
  { id: 'stackingdao', name: 'StackingDAO', url: 'https://stackingdao.com', icon: '/protocols/stackingdao.svg' }
];

export const MOCK_PROTOCOLS: ProtocolData[] = [
  {
    id: 'zest',
    name: 'Zest Protocol',
    apy: 8.5,
    tvl: 35000000,
    risk: 'conservative',
    token: 'sBTC',
    url: 'https://zestprotocol.com',
    description: 'Earn native yield on your Bitcoin through secure over-collateralized lending.'
  },
  {
    id: 'granite',
    name: 'Granite',
    apy: 12.2,
    tvl: 18000000,
    risk: 'balanced',
    token: 'sBTC',
    url: 'https://granite.fi',
    description: 'Optimize your DeFi yields across the Stacks ecosystem with automated strategies.'
  },
  {
    id: 'hermetica',
    name: 'Hermetica',
    apy: 15.8,
    tvl: 8500000,
    risk: 'aggressive',
    token: 'sBTC',
    url: 'https://hermetica.fi',
    description: 'Advanced derivative vaults for maximum sBTC yields.'
  },
  {
    id: 'bitflow',
    name: 'Bitflow',
    apy: 6.4,
    tvl: 42000000,
    risk: 'conservative',
    token: 'STX-sBTC',
    url: 'https://bitflow.finance',
    description: 'Stable-swap protocol and decentralized exchange for the Stacks ecosystem.'
  }
];
