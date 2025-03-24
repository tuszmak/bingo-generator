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
import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import LikeButton from './LikeButton';
import { PackContent } from './types';

export default function Pack({ pack }: { pack: PackContent }) {
  const { code, content, name } = pack;
  const [width, setWidth] = useState(1);
  const [likeCount, setLikeCount] = useState(pack.likeCount ?? 0);

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

  const handleLike = (packLikeState: boolean): void => {
    if (packLikeState) {
      setLikeCount(likeCount + 1);
    } else setLikeCount(likeCount - 1);
  };

  return (
    <div>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
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
              <LikeButton likeCount={likeCount} likeCountChange={handleLike} />
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
