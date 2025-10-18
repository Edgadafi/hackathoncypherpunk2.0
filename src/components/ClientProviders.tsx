'use client'

import { ReactNode } from 'react'
import PrivyProvider from '@/providers/PrivyProvider'

interface ClientProvidersProps {
  children: ReactNode
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return <PrivyProvider>{children}</PrivyProvider>
}

