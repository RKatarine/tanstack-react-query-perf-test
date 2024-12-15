import type { PropsWithChildren } from 'react'
import { useState } from 'react'
import type { DehydratedState, QueryClientConfig } from '@tanstack/react-query'
import {
  HydrationBoundary,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnReconnect: process.env.NODE_ENV === 'production',
      refetchOnWindowFocus: process.env.NODE_ENV === 'production',
    },
  },
}

interface IQueryClientInitializerProps {
  readonly dehydratedState: DehydratedState
}

export function QueryClientInitializer({
  dehydratedState,
  children,
}: PropsWithChildren<IQueryClientInitializerProps>) {
  // NEVER DO THIS:
  // const queryClient = new QueryClient()
  //
  // Creating the queryClient at the file root level makes the cache shared
  // between all requests and means _all_ data gets passed to _all_ users.
  // Besides being bad for performance, this also leaks any sensitive data.
  // https://tanstack.com/query/latest/docs/framework/react/guides/ssr#initial-setup
  const [queryCache] = useState(
    () => new QueryCache({
      onError: console.error,
    })
  )

  const [queryClient] = useState(
    () => new QueryClient({
      ...queryClientConfig,
      queryCache,
    })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        {children}
      </HydrationBoundary>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}
