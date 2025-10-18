'use client'

import Layout from '@/components/layout/Layout'

export default function CreateMarketPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-black py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">
            Create Prediction Market
          </h1>
          <p className="text-gray-400 mb-8">
            Create your own prediction market with just a few clicks. Smart
            contract integration coming soon!
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Market Question
                </label>
                <input
                  type="text"
                  placeholder="e.g., Will Bitcoin reach $100k in 2025?"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Provide details about the market resolution criteria..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Resolution Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">
                    Initial Liquidity (SOL)
                  </label>
                  <input
                    type="number"
                    placeholder="10"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                <p className="text-purple-300 text-sm">
                  ⚠️ <strong>Coming Soon:</strong> Smart contract integration is
                  under development. This will enable on-chain market creation
                  on Solana.
                </p>
              </div>

              <button
                disabled
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600/50 to-pink-600/50 text-white font-semibold rounded-lg cursor-not-allowed"
              >
                🚧 Smart Contract Integration in Progress
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
