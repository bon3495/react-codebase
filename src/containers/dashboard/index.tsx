import Button from '@/components/button';
import { cn } from '@/lib/utils';

const Dashboard = () => {
  return (
    <div>
      <Button className={cn('dark:bg-slate-500')}>Dark</Button>
      <Button>Light</Button>
      <Button>System</Button>
    </div>
  );
};

export default Dashboard;
