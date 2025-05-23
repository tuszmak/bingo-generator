import { Button } from '@/components/ui/button';

export default function Homepage() {
  return (
    <div className='flex flex-col items-center gap-9'>
      <h1 className='text-6xl'>Bingo Generator</h1>
      <p className='font-bold text-2xl'>
        The only bingo generator you'll ever need.
      </p>

      <div className='flex gap-4'>
        <a href='/setup'>
          <Button>Get Started</Button>
        </a>
        <a href='/packs'>
          <Button>View packs</Button>
        </a>
      </div>
    </div>
  );
}
