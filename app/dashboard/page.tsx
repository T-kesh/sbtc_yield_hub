import { MOCK_PROTOCOLS } from '../../lib/utils/constants';
import { ProtocolCard } from '../../components/dashboard/ProtocolCard';
import { EcosystemStats } from '../../components/dashboard/EcosystemStats';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Protocol Dashboard</h1>
        <p className="text-foreground/60">Live yields and analytics across the Stacks Bitcoin DeFi ecosystem.</p>
      </div>

      <EcosystemStats />

      <h2 className="text-xl font-bold tracking-tight text-white mb-6">Explore Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PROTOCOLS.map(protocol => (
          <ProtocolCard key={protocol.id} protocol={protocol} />
        ))}
      </div>
    </div>
  );
}
