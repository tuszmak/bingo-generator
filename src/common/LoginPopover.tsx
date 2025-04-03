import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { SignInButton } from '@clerk/react-router';

interface LoginPopoverProps {
  message: string;
  children: React.ReactNode; // The trigger content
}

export function LoginPopover({ message, children }: LoginPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger className='flex gap-2 items-center'>
        {children}
      </PopoverTrigger>
      <PopoverContent>
        <div className='flex flex-col gap-4'>
          {message}
          <SignInButton mode='modal'>
            <Button>Sign in</Button>
          </SignInButton>
        </div>
      </PopoverContent>
    </Popover>
  );
}
