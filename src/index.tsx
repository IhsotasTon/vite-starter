import React from 'react';
import ReactDOM from 'react-dom';

import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Routes from './Routes';
import './index.css';

const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Routes></Routes>
      <ReactQueryDevtools initialIsOpen={import.meta.env.DEV} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
