import { useContext, useState } from 'react';
import { BoardContext, WinContext } from './Contexts';
import { checkTableSolve, WordBlock } from './utils';

const defaultClassList =
  'w-24 h-24 flex justify-center items-center border border-white';

export default function Block({
  word,
  rowNum,
  colNum,
}: {
  word: WordBlock;
  rowNum: number;
  colNum: number;
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [words, setWords] = useContext(BoardContext);
  const setIsFinished = useContext(WinContext);

  const handleClick = () => {
    const wordsCopy = structuredClone(words);

    wordsCopy[rowNum][colNum].isClicked = !words[rowNum][colNum].isClicked;
    if (checkTableSolve(wordsCopy, rowNum, colNum)) {
      setIsFinished(true);
    }
    setWords(wordsCopy);
    setIsClicked(!isClicked);
  };

  return isClicked ? (
    <div
      className={defaultClassList + ' opacity-50 border-'}
      onClick={handleClick}
    >
      {word.word}
    </div>
  ) : (
    <div className={defaultClassList} onClick={handleClick}>
      {word.word}
    </div>
  );
}
