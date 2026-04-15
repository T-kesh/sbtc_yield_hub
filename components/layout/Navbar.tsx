'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useWalletStore } from '../../store/wallet';
import { Activity, LayoutDashboard, Route } from 'lucide-react';
import clsx from 'clsx';

export function Navbar() {
  const { isConnected, connect, disconnect, address } = useWalletStore();
  const pathname = usePathname();

  const mockConnect = () => {
    connect('SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9');
  };

  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 text-white shadow-lg transition-transform group-hover:scale-105">
            <Activity className="h-5 w-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">sBTC Yield Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/dashboard" 
            className={clsx(
              "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
              pathname === '/dashboard' ? "text-primary" : "text-foreground/70"
            )}
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
          <Link 
            href="/strategy" 
            className={clsx(
              "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
              pathname.startsWith('/strategy') ? "text-primary" : "text-foreground/70"
            )}
          >
            <Route className="h-4 w-4" />
            Strategy Builder
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {isConnected && address ? (
             <button 
               onClick={disconnect}
               className="rounded-full bg-card border border-border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors flex items-center gap-2"
             >
               <span className="h-2 w-2 rounded-full bg-green-500"></span>
               {truncateAddress(address)}
             </button>
          ) : (
             <button 
               onClick={mockConnect}
               className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-orange-600 shadow-[0_0_20px_rgba(234,88,12,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(234,88,12,0.5)]"
             >
               Connect Wallet
             </button>
          )}
        </div>
      </div>
    </nav>
  );
}
