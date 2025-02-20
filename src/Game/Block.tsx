import { cn } from '@/lib/utils';
import { useContext } from 'react';
import { GameContext } from './Contexts';
import { checkTableSolve, WordBlock } from './utils';

interface BlockProps {
  word: WordBlock;
  rowNum: number;
  colNum: number;
}

const defaultClassList =
  'w-28 h-28 flex justify-center items-center border border-white break-all text-center p-2';

export default function Block({ word, rowNum, colNum }: BlockProps) {
  const { board, setBoard, setIsFinished } = useContext(GameContext);

  const handleClick = () => {
    const boardCopy = structuredClone(board);
    boardCopy[rowNum][colNum].isClicked = !board[rowNum][colNum].isClicked;

    if (checkTableSolve(boardCopy, rowNum, colNum)) {
      setIsFinished(true);
    }
    setBoard(boardCopy);
  };

  return (
    <div
      className={cn(
        defaultClassList,
        word.isClicked && 'backdrop-hue-rotate-30'
      )}
      onClick={handleClick}
    >
      {word.word}
    </div>
  );
}
