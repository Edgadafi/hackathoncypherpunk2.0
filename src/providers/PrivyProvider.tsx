'use client'

import React from 'react'
import { PrivyProvider as PrivyProviderBase } from '@privy-io/react-auth'

interface PrivyProviderProps {
  children: React.ReactNode
}

export default function PrivyProvider({ children }: PrivyProviderProps) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''

  if (!appId) {
    console.warn(
      '⚠️ NEXT_PUBLIC_PRIVY_APP_ID is not set. Wallet connection will not work.'
    )
    // Return a basic wrapper to prevent crashes
    return <>{children}</>
  }

  return (
    <PrivyProviderBase
      appId={appId}
      config={{
        appearance: {
          theme: 'dark',
          accentColor: '#7c3aed',
          logo: '/images/prismafi-logo.svg',
          showWalletLoginFirst: true,
        },
        loginMethods: ['wallet', 'email', 'google', 'twitter'],
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        defaultChain: {
          id: 245022926, // Solana devnet
          name: 'Solana Devnet',
          network: 'solana-devnet',
          nativeCurrency: {
            decimals: 9,
            name: 'SOL',
            symbol: 'SOL',
          },
          rpcUrls: {
            default: {
              http: [
                process.env.NEXT_PUBLIC_SOLANA_RPC_URL ||
                  'https://api.devnet.solana.com',
              ],
            },
            public: {
              http: ['https://api.devnet.solana.com'],
            },
          },
        },
        supportedChains: [
          {
            id: 245022926,
            name: 'Solana Devnet',
            network: 'solana-devnet',
            nativeCurrency: {
              decimals: 9,
              name: 'SOL',
              symbol: 'SOL',
            },
            rpcUrls: {
              default: {
                http: ['https://api.devnet.solana.com'],
              },
              public: {
                http: ['https://api.devnet.solana.com'],
              },
            },
          },
          {
            id: 245022927,
            name: 'Solana Mainnet',
            network: 'solana-mainnet',
            nativeCurrency: {
              decimals: 9,
              name: 'SOL',
              symbol: 'SOL',
            },
            rpcUrls: {
              default: {
                http: ['https://api.mainnet-beta.solana.com'],
              },
              public: {
                http: ['https://api.mainnet-beta.solana.com'],
              },
            },
          },
        ],
      }}
    >
      {children}
    </PrivyProviderBase>
  )
}
