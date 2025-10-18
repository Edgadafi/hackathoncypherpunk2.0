import Layout from '@/components/layout/Layout';

export default function PortfolioPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">
            Your Portfolio
          </h1>

          {/* Connect Wallet Prompt */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-12 text-center mb-8">
            <div className="text-6xl mb-4">👛</div>
            <h2 className="text-2xl font-bold text-white mb-4">Connect Your Wallet</h2>
            <p className="text-gray-400 mb-6">
              Connect your Solana wallet to view your portfolio and trading history
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all">
              Connect Wallet
            </button>
          </div>

          {/* Stats Preview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Value', value: '--', icon: '💰' },
              { label: 'Active Positions', value: '--', icon: '📊' },
              { label: 'Total Profit', value: '--', icon: '📈' },
              { label: 'Win Rate', value: '--', icon: '🎯' },
            ].map((stat, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
                <div className="text-white text-2xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Active Positions Placeholder */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <h2 className="text-xl font-bold text-white mb-4">Active Positions</h2>
            <div className="text-center py-12">
              <div className="text-5xl mb-4">📭</div>
              <p className="text-gray-400">No active positions yet</p>
              <p className="text-gray-500 text-sm mt-2">Start trading to see your positions here</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

