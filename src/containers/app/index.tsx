import { Suspense } from 'react';

// ** Custom Hook Dark Mode Import **
import useTheme from '@/hooks/useTheme';
// ** Router Import **
import Router from '@/router/Router';

const App = () => {
  useTheme();

  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );
};

export default App;
