import { createContext } from "react";
import { WordBlock } from "./utils";

type StateContextType<T> = [T, StateSetterType<T>]
type StateSetterType<T> =  React.Dispatch<React.SetStateAction<T>>
export const BoardContext = createContext<StateContextType<WordBlock[][]>>([[], () => {}])

export const WinContext = createContext<StateSetterType<boolean>>( () => {})