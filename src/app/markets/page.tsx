'use client'

import Layout from '@/components/layout/Layout'

export default function MarketsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">
            Explore Markets
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Browse and trade on prediction markets. Coming soon! 🚀
          </p>

          {/* Placeholder Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all"
              >
                <div className="h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl">🎯</span>
                </div>
                <h3 className="text-white font-bold mb-2">Market #{i}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Will [event] happen by [date]?
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-bold">YES 65%</span>
                  <span className="text-red-400 font-bold">NO 35%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
