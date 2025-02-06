import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { GameContext } from './Contexts';
import { DEFAULT_BOARD } from './defaultBoard';
import Table from './Table';
import { WordBlock } from './utils';

export default function Game() {
  const [board, setBoard] = useState<WordBlock[][]>(DEFAULT_BOARD);
  const [isFinished, setIsFinished] = useState(false);

  const resetBoard = () => {
    setBoard(DEFAULT_BOARD);
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
          </div>
        )}
        <GameContext.Provider value={{ board, setBoard, setIsFinished }}>
          <Table />
        </GameContext.Provider>
      </div>
    </div>
  );
}
