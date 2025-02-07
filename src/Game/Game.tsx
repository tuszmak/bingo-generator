import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { GameContext } from './Contexts';
import { DEFAULT_BOARD_STRING_ARRAY } from './defaultBoard';
import Table from './Table';
import { generateShuffledBoard, WordBlock } from './utils';

export default function Game() {
  const [board, setBoard] = useState<WordBlock[][]>(
    generateShuffledBoard(DEFAULT_BOARD_STRING_ARRAY)
  );
  const [isFinished, setIsFinished] = useState(false);

  const resetBoard = () => {
    const board = generateShuffledBoard(DEFAULT_BOARD_STRING_ARRAY);
    setBoard(board);
    setIsFinished(false);
  };

  return (
    <div className='h-screen text-white dark dark:bg-slate-500'>
      <div>
        <a href='/'>
          <Button>Back</Button>
        </a>
      </div>
      <div className='flex flex-col gap-8 justify-center items-center'>
        <h1 className='text-4xl'>ENGINEER GAMING</h1>
        {isFinished && (
          <div>
            <h1>Congrats, you won!</h1>
            <Button onClick={resetBoard}>Reset</Button>
            <Button>Shuffle Board</Button>
          </div>
        )}
        <GameContext.Provider value={{ board, setBoard, setIsFinished }}>
          <Table />
        </GameContext.Provider>
      </div>
    </div>
  );
}
