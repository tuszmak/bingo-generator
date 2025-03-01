import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import LikeHeartFilled from '@/logos/LikeHeartFilled';
import { SignedIn, SignedOut, SignInButton } from '@clerk/react-router';
import { useState } from 'react';

interface LikeButtonProps {
  likeCount: number;
  likeCountChange: (state: boolean) => void;
}

export default function LikeButton({
  likeCount,
  likeCountChange,
}: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    likeCountChange(!isLiked);
    setIsLiked(!isLiked);
  };

  return (
    <div className='flex gap-2 items-center'>
      <SignedIn>
        {isLiked && (
          <div onClick={handleClick}>
            <LikeHeartFilled fill='red' key='likeHeart' />
          </div>
        )}
        {!isLiked && (
          <img
            src='src/assets/like_heart.svg'
            width={20}
            height={20}
            onClick={handleClick}
          ></img>
        )}
        {likeCount}
      </SignedIn>
      <SignedOut>
        <Popover>
          <PopoverTrigger className='flex gap-2 items-center'>
            <img src='src/assets/like_heart.svg' width={20} height={20}></img>
            {likeCount}
          </PopoverTrigger>
          <PopoverContent>
            <div className='flex flex-col gap-4'>
              You need to log in, to like the pack.
              <SignInButton mode='modal'>
                <Button>Sign in</Button>
              </SignInButton>
            </div>
          </PopoverContent>
        </Popover>
      </SignedOut>
    </div>
  );
}
