import { useContext } from 'react';
import Block from './Block';
import { GameContext } from './Contexts';
import { WordBlock } from './utils';

export default function Table() {
  const { board } = useContext(GameContext);

  return (
    <div className='flex-col bg-radial-gradient' key='table'>
      {board.map((row: WordBlock[], i) => (
        <div className='flex' key={i}>
          {row.map((word: WordBlock, j) => (
            <Block key={j} word={word} rowNum={i} colNum={j}></Block>
          ))}
        </div>
      ))}
    </div>
  );
}
