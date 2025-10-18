'use client'

import Layout from '@/components/layout/Layout'
import { useSolanaWallet } from '@/hooks/useSolanaWallet'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export default function PortfolioPage() {
  const { connected, address, shortAddress } = useSolanaWallet()

  return (
    <Layout>
      <div className="min-h-screen bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-white">Your Portfolio</h1>
            {connected && shortAddress && (
              <div className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2">
                <span className="text-gray-400 text-sm">Connected: </span>
                <span className="text-white font-mono">{shortAddress}</span>
              </div>
            )}
          </div>

          {/* Connect Wallet Prompt - Show only when NOT connected */}
          {!connected && (
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-12 text-center mb-8">
              <div className="text-6xl mb-4">👛</div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Connect Your Wallet
              </h2>
              <p className="text-gray-400 mb-6">
                Connect your Solana wallet to view your portfolio and trading
                history
              </p>
              <WalletMultiButton className="!bg-gradient-to-r !from-purple-600 !to-pink-600 hover:!from-purple-700 hover:!to-pink-700 !text-white !shadow-lg hover:!shadow-purple-500/25 !rounded-lg !font-medium !transition-all !duration-200" />
            </div>
          )}

          {/* Stats Preview - Show real data when connected */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              {
                label: 'Total Value',
                value: connected ? '$0.00' : '--',
                icon: '💰',
              },
              {
                label: 'Active Positions',
                value: connected ? '0' : '--',
                icon: '📊',
              },
              {
                label: 'Total Profit',
                value: connected ? '$0.00' : '--',
                icon: '📈',
              },
              { label: 'Win Rate', value: connected ? '0%' : '--', icon: '🎯' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
                <div className="text-white text-2xl font-bold">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* Active Positions Placeholder */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <h2 className="text-xl font-bold text-white mb-4">
              Active Positions
            </h2>
            <div className="text-center py-12">
              <div className="text-5xl mb-4">📭</div>
              <p className="text-gray-400">
                {connected
                  ? 'No active positions yet'
                  : 'Connect your wallet to see your positions'}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                {connected
                  ? 'Start trading to see your positions here'
                  : 'Your portfolio data will appear here once connected'}
              </p>
            </div>
          </div>

          {/* Wallet Info Card - Only show when connected */}
          {connected && address && (
            <div className="mt-8 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                Wallet Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Address:</span>
                  <span className="text-white font-mono text-sm">
                    {address}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Network:</span>
                  <span className="text-white">Mainnet Beta</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-green-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Connected
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
