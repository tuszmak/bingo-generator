import { LoginPopover } from '@/common/LoginPopover';
import LikeHeartFilled from '@/logos/LikeHeartFilled';
import { SignedIn, SignedOut } from '@clerk/react-router';
import { useEffect, useState } from 'react';

interface LikeButtonProps {
  likeCount: number;
  isLikedByUser: boolean;
  likeCountChange: (state: boolean) => void;
}

export default function LikeButton({
  likeCount,
  isLikedByUser,
  likeCountChange,
}: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    likeCountChange(!isLiked);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setIsLiked(isLikedByUser);
  }, [isLikedByUser]);

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
        <LoginPopover message='You must be logged in to like the pack.'>
          <img src='src/assets/like_heart.svg' width={20} height={20}></img>
          {likeCount}
        </LoginPopover>
      </SignedOut>
    </div>
  );
}
