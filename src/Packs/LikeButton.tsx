import LikeHeartFilled from '@/logos/LikeHeartFilled';
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
    </div>
  );
}
