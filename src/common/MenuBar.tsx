import { Button } from '@/components/ui/button';
import { Menubar } from '@/components/ui/menubar';
import { SignedOut, SignInButton, UserButton } from '@clerk/react-router';

export default function MenuBar() {
  return (
    <Menubar className='flex justify-center sticky top-0'>
      <div className='flex gap-6 left-0 absolute'>
        <a href='/'>
          <Button>Home</Button>
        </a>
        <a href='/setup'>
          <Button>Setup</Button>
        </a>
        <a href='/packs'>
          <Button>Packs</Button>
        </a>
      </div>
      <h1 className='text-xl block 1/2'>Bingo Generator</h1>
      <div className='right-7 absolute'>
        <SignedOut>
          <SignInButton mode='modal'>
            <Button>Sign in</Button>
          </SignInButton>
        </SignedOut>
        <UserButton userProfileUrl='/profile' />
      </div>
    </Menubar>
  );
}
