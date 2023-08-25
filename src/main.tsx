import React, { lazy, Suspense } from 'react';
import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Spinner from '@/components/spinner';

import '@/styles/global.css';

const App = lazy(() => import('@/containers/app'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
);
