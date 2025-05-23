import PackDropdown from '@/common/PackDropdown';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { convertStringToTableFactory } from '@/Game/utils';
import { MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import LikeButton from './LikeButton';
import { PackContent, User } from './types';

interface PackProps {
  pack: PackContent;
  user: User | undefined;
}

export default function Pack({ pack, user }: PackProps) {
  const { code, content, name } = pack;
  const [width, setWidth] = useState(1);
  const [likeCount, setLikeCount] = useState(pack.likeCount ?? 0);
  const [isLikedByUser, setIsLikedByUser] = useState(false);

  const navigate = useNavigate();
  const convertStringToTable = convertStringToTableFactory(navigate);
  const wordCount = content.split(',').length;

  const getWordCountText = () => {
    switch (wordCount) {
      case 0:
        return 'No words';
      case 1:
        return '1 word';
      default:
        return `${wordCount} words`;
    }
  };

  const handlePick = (event: MouseEvent): void => {
    event.preventDefault();
    convertStringToTable(content, width);
  };

  const handleLike = async (packLikeState: boolean): Promise<void> => {
    await fetch('/api/v1/table/like', {
      method: 'post',
      body: JSON.stringify({
        userId: user?.userId,
        packId: pack.id,
        state: packLikeState,
      }),
    });
    if (packLikeState) {
      setLikeCount(likeCount + 1);
    } else setLikeCount(likeCount - 1);
  };

  useEffect(() => {
    if (user) {
      setIsLikedByUser(user.packIds.includes(pack.id));
    }
  }, [user, pack.id]);

  return (
    <div>
      <Card className='w-[350px]'>
        <CardHeader className='flex-row justify-between items-baseline'>
          <CardTitle className='w-14'>{name}</CardTitle>
          {user?.userId === pack.uploadedByUserId && (
            <PackDropdown pack={pack}></PackDropdown>
          )}
        </CardHeader>
        <CardContent>
          <form>
            <label htmlFor='width'>Width: </label>
            <Input
              type='number'
              name='width'
              max={Math.floor(Math.sqrt(wordCount))}
              min={1}
              onChange={(e) => setWidth(parseInt(e.target.value))}
              defaultValue={1}
            />
            <div className='flex w-full justify-between gap-4 font-semibold mt-4'>
              <LikeButton
                likeCount={likeCount}
                isLikedByUser={isLikedByUser}
                likeCountChange={handleLike}
              />
              {getWordCountText()}
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button
            variant='outline'
            onClick={() => {
              navigator.clipboard.writeText(code);
            }}
          >
            Copy code
          </Button>
          <Button
            variant='default'
            onClick={(e) => {
              handlePick(e);
            }}
          >
            Pick
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
