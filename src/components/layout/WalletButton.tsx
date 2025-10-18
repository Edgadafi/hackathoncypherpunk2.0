'use client';

import React from 'react';
import { Wallet } from 'lucide-react';

export default function WalletButton() {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      alert('🚀 Wallet integration coming soon! We\'re working on it.');
      setIsLoading(false);
    }, 500);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Wallet className="h-4 w-4" />
      <span>{isLoading ? 'Loading...' : 'Connect Wallet'}</span>
    </button>
  );
}
