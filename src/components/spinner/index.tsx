import React from 'react';

import { cn } from '@/lib/utils';

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        'flex h-screen flex-1 flex-col items-center justify-center',
        className,
      )}
      ref={ref}
      {...rest}
    >
      <div className="h-12 w-12 rounded-full border-[3px] border-transparent">
        <div className="animate-rotate absolute h-12 w-12 rounded-full border-[3px] border-transparent border-l-orange-400"></div>
        <div className="animate-rotateOpacity1 absolute h-12 w-12 rounded-full border-[3px] border-transparent border-l-orange-400"></div>
        <div className="animate-rotateOpacity2 h-12 w-12 rounded-full border-[3px] border-transparent border-l-orange-400"></div>
      </div>
    </div>
  );
});

Spinner.displayName = 'Spinner';

export default Spinner;
