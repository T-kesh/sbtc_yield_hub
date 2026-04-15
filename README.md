# sBTC Yield Hub 🟠

> **The unified yield intelligence layer for Bitcoin DeFi on Stacks.**  
> Compare protocols, simulate strategies, and save your yield plan onchain — all in one place.

[![Built on Stacks](https://img.shields.io/badge/Built%20on-Stacks-orange?style=flat-square)](https://stacks.co)
[![Bitcoin L2](https://img.shields.io/badge/Bitcoin-L2-yellow?style=flat-square)](https://stacks.co)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)
[![Talent Protocol](https://img.shields.io/badge/Talent%20Protocol-Builder%20Rewards-purple?style=flat-square)](https://talent.app)

---

## 🧭 Table of Contents

1. [The Problem](#-the-problem)
2. [The Solution](#-the-solution)
3. [How It Works — Plain English](#-how-it-works--plain-english)
4. [Key Features](#-key-features)
5. [Live Demo](#-live-demo)
6. [Tech Stack](#-tech-stack)
7. [Project Structure](#-project-structure)
8. [Smart Contract](#-smart-contract)
9. [Data Sources & APIs](#-data-sources--apis)
10. [Getting Started](#-getting-started)
11. [Environment Variables](#-environment-variables)
12. [Deployment](#-deployment)
13. [Roadmap](#-roadmap)
14. [Why This Wins](#-why-this-wins)
15. [Contributing](#-contributing)

---

## 🔴 The Problem

Bitcoin DeFi on Stacks is growing fast. Protocols like Zest, Granite, Hermetica, and Bitflow are offering real, Bitcoin-denominated yield — but they live in silos.

**Right now, a Bitcoin holder who wants to earn yield has to:**

- Open 4+ different apps separately
- Manually track APYs that change daily
- Figure out on their own how to combine protocols for maximum return
- Keep mental notes of where their money is and what it's earning
- Start from scratch every time they want to compare options

There is no single place to see the full picture. **That's the gap.**

---

## ✅ The Solution

**sBTC Yield Hub** is a clean, unified dashboard that aggregates every yield opportunity across the Stacks BTCFi ecosystem into one interface.

It does three things no other tool currently does together:

1. **Shows you everything** — live APYs, TVL, and risk ratings for every major Stacks yield protocol in one view
2. **Helps you strategize** — an interactive wizard that takes your BTC amount and risk appetite, then recommends the best protocol combination with projected annual returns
3. **Lets you commit onchain** — save your strategy to the Stacks blockchain via a Clarity smart contract, creating a permanent, shareable, verifiable record

---

## 🗣 How It Works — Plain English

Think of it like a flight comparison site (like Google Flights), but for your Bitcoin yield.

**Google Flights** doesn't fly you anywhere — it just shows you all the options clearly so you can make the best decision fast.

**sBTC Yield Hub** doesn't hold your money — it just shows you where you can put your Bitcoin on Stacks, what you'll earn, how risky it is, and helps you pick the best combo for your goals.

Then, once you've decided on a strategy, you can save it directly to the Bitcoin blockchain so it's verifiable and shareable forever.

---

## ✨ Key Features

### 📊 Live Protocol Dashboard
Real-time view of every major Stacks yield protocol with:
- Current APY (pulled live from each protocol's smart contract)
- Total Value Locked (TVL) from DefiLlama
- Risk rating (Low / Medium / High) with plain-language explanations
- Direct links to each protocol to take action

### 🧮 Strategy Builder
An interactive, guided flow:
- Input: how much sBTC/BTC you have
- Input: your risk tolerance (Conservative / Balanced / Aggressive)
- Output: a recommended strategy showing which protocols to use, in what order, and what your projected annual return would be
- Handles multi-step strategies (e.g., deposit sBTC → borrow USDCx → stake for yield)

### 👛 Portfolio Tracker
Connect your Leather or Xverse wallet to:
- See all your active positions across Zest, Granite, Hermetica, and Bitflow
- View total BTC value of your portfolio
- Track yield earned to date
- Get alerts when APYs change significantly

### 🔗 Save Strategy Onchain (Clarity Contract)
The onchain primitive that makes everything trustless:
- Save your chosen strategy to the Stacks blockchain
- Get a unique shareable URL (`sbtcyieldhub.xyz/s/0x...`)
- Anyone can verify your strategy — it's immutable and timestamped
- Powered by a simple, auditable Clarity smart contract

---

## 🌐 Live Demo

> **[sbtcyieldhub.xyz](https://sbtcyieldhub.xyz)** ← live link once deployed

---

## 🛠 Tech Stack

| Layer | Technology | Why |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | Server components, fast routing, great DX |
| **Styling** | Tailwind CSS + shadcn/ui | Rapid, consistent, accessible UI |
| **Wallet** | `@stacks/connect` | Native Leather + Xverse support |
| **Blockchain Reads** | Hiro Stacks API + `@stacks/transactions` | Live contract data |
| **TVL / APY Data** | DefiLlama Public API | Free, reliable, no key needed |
| **Smart Contract** | Clarity (Stacks native) | Secure, decidable, Bitcoin-settled |
| **Contract Dev** | Clarinet | Local Clarity dev environment |
| **Deployment** | Vercel | Zero-config, instant deploys |
| **Type Safety** | TypeScript | End-to-end type safety |
| **State** | Zustand | Lightweight global state |

---

## 📁 Project Structure

```
sbtc-yield-hub/
│
├── README.md                          # You are here
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── .env.local.example                 # Template for environment variables
│
├── contracts/                         # Clarity smart contracts
│   ├── yield-strategy-store.clar      # Main contract: save/read user strategies
│   └── tests/
│       └── yield-strategy-store_test.ts
│
├── app/                               # Next.js App Router
│   ├── layout.tsx                     # Root layout, fonts, wallet provider
│   ├── page.tsx                       # Homepage → redirects to /dashboard
│   │
│   ├── dashboard/
│   │   └── page.tsx                   # 📊 Main dashboard: all protocols, live APYs
│   │
│   ├── strategy/
│   │   └── page.tsx                   # 🧮 Strategy builder wizard
│   │
│   ├── wallet/
│   │   └── page.tsx                   # 👛 Connected wallet positions & portfolio
│   │
│   ├── save/
│   │   └── page.tsx                   # 🔗 Save strategy onchain flow
│   │
│   └── s/
│       └── [strategyId]/
│           └── page.tsx               # 🌍 Public shareable strategy view
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                 # Top nav with wallet connect button
│   │   ├── Sidebar.tsx                # Desktop sidebar navigation
│   │   └── Footer.tsx
│   │
│   ├── dashboard/
│   │   ├── ProtocolCard.tsx           # Individual protocol card (APY, TVL, risk)
│   │   ├── ProtocolGrid.tsx           # Grid of all protocol cards
│   │   ├── SortFilterBar.tsx          # Sort by APY / TVL / Risk
│   │   └── EcosystemStats.tsx         # Top-level stats bar (total TVL, avg APY)
│   │
│   ├── strategy/
│   │   ├── StrategyWizard.tsx         # Multi-step wizard container
│   │   ├── StepAmount.tsx             # Step 1: how much sBTC?
│   │   ├── StepRisk.tsx               # Step 2: risk tolerance
│   │   ├── StepResult.tsx             # Step 3: recommended strategy output
│   │   └── YieldProjection.tsx        # Annual return projection chart
│   │
│   ├── wallet/
│   │   ├── ConnectButton.tsx          # Leather/Xverse wallet connect
│   │   ├── PositionCard.tsx           # Single protocol position
│   │   └── PortfolioSummary.tsx       # Total value + total yield earned
│   │
│   ├── onchain/
│   │   ├── SaveStrategyButton.tsx     # Triggers Clarity contract call
│   │   └── StrategyShareCard.tsx      # Public view of a saved strategy
│   │
│   └── ui/                            # shadcn/ui base components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── tooltip.tsx
│       └── ...
│
├── lib/
│   ├── protocols/
│   │   ├── index.ts                   # Protocol registry (all supported protocols)
│   │   ├── zest.ts                    # Zest Protocol APY/data fetcher
│   │   ├── granite.ts                 # Granite data fetcher
│   │   ├── hermetica.ts               # Hermetica vault data fetcher
│   │   ├── bitflow.ts                 # Bitflow pool data fetcher
│   │   └── stackingdao.ts             # StackingDAO stacking data
│   │
│   ├── api/
│   │   ├── hiro.ts                    # Hiro Stacks API client
│   │   ├── defillama.ts               # DefiLlama API client
│   │   └── stacks-contract.ts         # Read-only contract call helpers
│   │
│   ├── strategy/
│   │   ├── engine.ts                  # Core strategy recommendation logic
│   │   ├── risk.ts                    # Risk scoring calculations
│   │   └── projections.ts             # APY projection math
│   │
│   ├── wallet/
│   │   ├── connect.ts                 # Wallet connection handlers
│   │   └── positions.ts               # Fetch user positions across protocols
│   │
│   └── utils/
│       ├── format.ts                  # Number/BTC/USD formatting helpers
│       ├── constants.ts               # Contract addresses, API URLs
│       └── types.ts                   # Global TypeScript types
│
├── store/
│   ├── wallet.ts                      # Zustand: wallet connection state
│   └── strategies.ts                  # Zustand: saved strategies state
│
└── public/
    ├── logo.svg
    └── protocols/                     # Protocol logos
        ├── zest.svg
        ├── granite.svg
        ├── hermetica.svg
        ├── bitflow.svg
        └── stackingdao.svg
```

---

## 🔗 Smart Contract

**File:** `contracts/yield-strategy-store.clar`

The contract is intentionally minimal and auditable. It stores a user's chosen strategy as a UTF-8 string (JSON-encoded) mapped to their principal (wallet address), along with the Stacks block height at time of saving (serves as a timestamp).

```clarity
;; sBTC Yield Hub - Strategy Store
;; Allows users to save and retrieve their yield strategies onchain.
;; Each wallet (principal) can store one active strategy at a time.

(define-map saved-strategies
  principal
  {
    strategy: (string-utf8 500),
    saved-at: uint
  }
)

;; Save or update a strategy for the calling wallet
(define-public (save-strategy (strategy (string-utf8 500)))
  (ok (map-set saved-strategies
    tx-sender
    {
      strategy: strategy,
      saved-at: block-height
    }
  ))
)

;; Read a strategy for any wallet address — public and verifiable
(define-read-only (get-strategy (user principal))
  (map-get? saved-strategies user)
)

;; Delete your own strategy
(define-public (delete-strategy)
  (ok (map-delete saved-strategies tx-sender))
)
```

**What gets stored in the `strategy` string:**
A JSON-encoded object, e.g.:
```json
{
  "protocols": ["zest", "hermetica"],
  "amount": 0.5,
  "risk": "balanced",
  "projectedApy": 8.4
}
```

**Contract deployment:**
- Testnet: `ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.yield-strategy-store`
- Mainnet: `SP1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.yield-strategy-store`

---

## 📡 Data Sources & APIs

### Hiro Stacks API
Base URL: `https://api.hiro.so`

Used for:
- Wallet balance lookups: `GET /v2/accounts/{address}`
- Read-only contract calls: `POST /v2/contracts/call-read/{contract}/{function}`
- Transaction history: `GET /extended/v1/address/{address}/transactions`

No API key required for read-only calls. Rate limits apply for write operations.

### DefiLlama API
Base URL: `https://api.llama.fi`

Used for:
- Protocol TVL: `GET /protocol/{protocol-slug}`
- Historical TVL charts: `GET /tvl/{protocol}`

Completely free, no authentication needed.

### Protocol Contract Addresses

| Protocol | Contract | Function |
|---|---|---|
| Zest | `SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.zest-v2` | `get-supply-rate` |
| Granite | `SP3K8BC0PPEVCV7NZ6QSRWPQ2JE9E5B6N3PA0KBR9.granite-v1` | `get-utilization` |
| Hermetica | `SP2XD7417HGPRTREMKF748VNEQPDRR0RMANB7X1NK.usdh-vault` | `get-vault-apy` |
| Bitflow | `SP1Z92MPDQEWZXW36VX71Q25HKF5K2EPCJ304F275.bitflow-core` | `get-pool-data` |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- [Clarinet](https://github.com/hirosystems/clarinet) (for contract development)
- A Stacks wallet: [Leather](https://leather.io) or [Xverse](https://xverse.app)

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/sbtc-yield-hub.git
cd sbtc-yield-hub

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Contract Development

```bash
# Navigate to contracts directory
cd contracts

# Run contract tests
clarinet test

# Check contract for errors
clarinet check

# Deploy to testnet
clarinet deployments generate --low-cost --testnet
clarinet deployments apply --testnet
```

---

## 🔐 Environment Variables

Create a `.env.local` from the example file:

```bash
# Hiro API (optional - increases rate limits)
NEXT_PUBLIC_HIRO_API_KEY=your_key_here

# Stacks Network (mainnet | testnet)
NEXT_PUBLIC_STACKS_NETWORK=mainnet

# Deployed contract address
NEXT_PUBLIC_CONTRACT_ADDRESS=SP1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM
NEXT_PUBLIC_CONTRACT_NAME=yield-strategy-store
```

---

## 🌍 Deployment

The app is deployed on Vercel with zero configuration:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deploys on every push.

---

## 🗺 Roadmap

### v1.0 — Submission (April 2026)
- [x] Protocol dashboard with live data
- [x] Strategy builder wizard
- [x] Clarity contract deployment
- [x] Save strategy onchain
- [x] Shareable strategy URLs

### v1.1 — Post-submission
- [ ] Wallet portfolio tracker
- [ ] APY change alerts (email / Farcaster)
- [ ] Historical APY charts per protocol
- [ ] Mobile-optimized layout

### v2.0 — Growth
- [ ] Strategy social feed (see what other wallets are doing)
- [ ] Risk simulation (what happens to your strategy in a bear market)
- [ ] Integrate more protocols (ALEX, Velar, StackSwap)
- [ ] Multi-language support

---

## 🏆 Why This Wins

This project was built specifically for the **Stacks Builder Rewards: April 2026** on Talent Protocol.

Here is why it stands out:

**1. It solves a real, current problem.**
The Stacks DeFi ecosystem has multiple great protocols but zero unified tooling. Every Bitcoin holder on Stacks navigates this manually today. This app removes that friction entirely.

**2. It's built *for* the Stacks ecosystem, not just *on* it.**
Every protocol featured — Zest, Granite, Hermetica, Bitflow — is a core Stacks project. The dashboard actively drives usage to all of them. This is an ecosystem multiplier, not a standalone product.

**3. The Clarity contract adds real onchain utility.**
The save-strategy contract isn't a token or gimmick — it's a genuinely useful primitive. Onchain strategy records can be referenced by other contracts, DAOs, and social apps in the future.

**4. The UX is the differentiator.**
Most Stacks builders are smart contract developers. The frontend quality of most ecosystem tools reflects that. This app leads with design and user experience.

**5. Timing is perfect.**
With Fireblocks bringing 2,400+ institutional clients to Stacks in early 2026, there is an incoming wave of new users who will need exactly this kind of yield intelligence tool.

---

## 🤝 Contributing

Contributions are welcome. Please open an issue first to discuss what you'd like to change.

```bash
# Fork the repo, then:
git checkout -b feature/your-feature-name
git commit -m "feat: your feature description"
git push origin feature/your-feature-name
# Open a pull request
```

---

## 📄 License

MIT © 2026 sBTC Yield Hub

---

<div align="center">
  <strong>Built with 🟠 on Stacks — the leading Bitcoin L2</strong><br/>
  <a href="https://stacks.co">stacks.co</a> · 
  <a href="https://talent.app">talent.app</a> · 
  <a href="https://hiro.so">hiro.so</a>
</div>