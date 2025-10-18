import Layout from '@/components/layout/Layout';

export default function ActivityPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">
            Recent Activity
          </h1>

          {/* Filter Tabs */}
          <div className="flex gap-4 mb-8">
            {['All', 'Trades', 'Markets Created', 'Resolutions'].map((tab) => (
              <button
                key={tab}
                className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-purple-500/50 transition-all"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Activity Feed */}
          <div className="space-y-4">
            {[
              { icon: '🎯', action: 'Market Created', user: '0x1234...5678', time: '2 hours ago', color: 'from-purple-500 to-pink-500' },
              { icon: '💰', action: 'Trade Executed', user: '0xabcd...efgh', time: '3 hours ago', color: 'from-green-500 to-emerald-500' },
              { icon: '✅', action: 'Market Resolved', user: '0x9876...5432', time: '5 hours ago', color: 'from-blue-500 to-cyan-500' },
              { icon: '📊', action: 'Position Opened', user: '0xfedc...ba98', time: '8 hours ago', color: 'from-purple-500 to-pink-500' },
              { icon: '🏆', action: 'Winnings Claimed', user: '0x1111...2222', time: '12 hours ago', color: 'from-yellow-500 to-orange-500' },
            ].map((activity, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex items-center gap-4 hover:border-gray-700 transition-all">
                <div className={`w-12 h-12 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center text-2xl`}>
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">{activity.action}</p>
                  <p className="text-gray-400 text-sm">by {activity.user}</p>
                </div>
                <div className="text-gray-500 text-sm">
                  {activity.time}
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white hover:border-purple-500/50 transition-all">
              Load More Activity
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

