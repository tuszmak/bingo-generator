import { createContext } from 'react';
import { WordBlock } from './utils';

type StateContextType<T> = [T, StateSetterType<T>];
type StateSetterType<T> = React.Dispatch<React.SetStateAction<T>>;
interface GameContextType {
  board: WordBlock[][];
  setBoard: StateContextType<WordBlock[][]>[1];
  setIsFinished: StateSetterType<boolean>;
}

export const BoardContext = createContext<StateContextType<WordBlock[][]>>([
  [],
  () => {},
]);

export const WinContext = createContext<StateSetterType<boolean>>(() => {});

export const GameContext = createContext<GameContextType>({
  board: [],
  setBoard: () => {},
  setIsFinished: () => {},
});
