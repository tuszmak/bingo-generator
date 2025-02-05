import { createContext } from "react";
import { WordBlock } from "./utils";

export const BoardContext = createContext<WordBlock[][]>([])