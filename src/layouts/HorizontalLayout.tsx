import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { cn } from '@/lib/utils';

interface HorizontalLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const HorizontalLayout = React.forwardRef<
  HTMLDivElement,
  HorizontalLayoutProps
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <main className={cn('flex flex-col', className)} ref={ref} {...rest}>
      <div>HorizontalLayout</div>
      <Outlet />
    </main>
  );
});

// ** Display name on component is useful for React DevTools **
HorizontalLayout.displayName = 'HorizontalLayout';

export default HorizontalLayout;
