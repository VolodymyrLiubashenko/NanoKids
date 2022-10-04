import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

interface QueryProviderInterface {
  children: React.ReactNode;
}

const QueryProvider: React.FC<QueryProviderInterface> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
