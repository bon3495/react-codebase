import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { cn } from '@/lib/utils';

interface VerticalLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const VerticalLayout = React.forwardRef<HTMLDivElement, VerticalLayoutProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    return (
      <main className={cn('flex', className)} ref={ref} {...rest}>
        <div>VerticalLayout</div>
        <Outlet />
      </main>
    );
  },
);

// ** Display name on component is useful for React DevTools **
VerticalLayout.displayName = 'VerticalLayout';

export default VerticalLayout;
