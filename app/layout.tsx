import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sBTC Yield Hub",
  description: "The unified yield intelligence layer for Bitcoin DeFi on Stacks. Compare protocols, simulate strategies, and save your yield plan onchain.",
  other: {
    "talentapp:project_verification": "780d803c76153720b6dcef165855fdca4755dac715f8b01b796b26ecf589b1d2460742e1864bcb36e7ede6d1aa70a07adf6744d74257ba6d4aaace106e0fcc5f",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30">
        <Navbar />
        <main className="flex-1 flex flex-col relative z-10 w-full py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
