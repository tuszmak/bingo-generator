import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GameContext } from './Contexts';
import { DEFAULT_BOARD_STRING_ARRAY } from './defaultBoard';
import Table from './Table';
import { BaseTable } from './types';
import { generateShuffledBoard, resetBoard, WordBlock } from './utils';

export default function Game() {
  const [isFinished, setIsFinished] = useState(false);
  const [board, setBoard] = useState<WordBlock[][]>(generateBoard());
  const navigate = useNavigate();

  const resetCurrentBoard = () => {
    const newBoard = resetBoard(board);
    setBoard(newBoard);
    setIsFinished(false);
  };

  const shuffleBoard = () => {
    const board = generateBoard();
    setBoard(board);
    setIsFinished(false);
  };

  return (
    <div className='h-screen text-white dark dark:bg-slate-500'>
      <title>Good luck!</title>
      <div>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>
      <div className='flex flex-col gap-8 justify-center items-center'>
        <h1 className='text-4xl'>ENGINEER GAMING</h1>
        {isFinished && (
          <div>
            <h1>Congrats, you won!</h1>
            <Button onClick={resetCurrentBoard}>Reset</Button>
            <Button onClick={shuffleBoard}>Shuffle Board</Button>
          </div>
        )}
        <div className={clsx(!isFinished && 'mt-header')}></div>
        <GameContext.Provider value={{ board, setBoard, setIsFinished }}>
          <Table />
        </GameContext.Provider>
      </div>
    </div>
  );
}

function generateBoard() {
  const userData = localStorage.getItem('userSpecs');
  let userSpecs: BaseTable | null = null;
  if (userData) {
    userSpecs = JSON.parse(userData);
  }
  let currentBoard: WordBlock[][] = [];

  if (!userSpecs) {
    currentBoard = generateShuffledBoard(DEFAULT_BOARD_STRING_ARRAY);
  } else {
    currentBoard = generateShuffledBoard(userSpecs.board, userSpecs.width);
  }
  return currentBoard;
}
