'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'
import { Toaster } from '@/components/ui/toaster'
import CustomCursor from '@/components/custom-cursor'
import ProgressBar from '@/components/progress-bar'
import './i18n' // Initialize i18next

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomCursor />
      <ProgressBar />
      {children}
      <Toaster />
    </QueryClientProvider>
  )
}
