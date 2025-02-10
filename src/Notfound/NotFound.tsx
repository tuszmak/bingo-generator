import { Button } from '@/components/ui/button';

export default function Notfound() {
  return (
    <div className='flex flex-col h-screen items-center justify-center gap-8'>
      Uh oh, this site contains nothing!
      <a href='/'>
        <Button>Click on me to return to the home page.</Button>
      </a>
    </div>
  );
}
