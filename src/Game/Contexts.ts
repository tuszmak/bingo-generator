import { createContext } from 'react';
import { StateSetterType } from './types';
import { WordBlock } from './utils';

export type StateContextType<T> = [T, StateSetterType<T>];

export interface GameContextType {
  board: WordBlock[][];
  setBoard: StateContextType<WordBlock[][]>[1];
  setIsFinished: StateSetterType<boolean>;
}
export interface SetupContextType {
  boardWidth: number;
  setBoardWidth: StateContextType<number>[1];
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

export const SetupContext = createContext<SetupContextType>({
  boardWidth: -1,
  setBoardWidth: () => {},
});
