import Block from "./Block";
import { WordBlock } from "./utils";

export default function Table({words}: { words :  WordBlock[][]}) {
  console.log(words);
  
  return (
    <div className="flex-col">
      {words.map((row : WordBlock[]) => {
      return (
        <div className="flex">{row.map((word : WordBlock, i) => (<Block key={i} word={word}></Block>))}</div>
      )
    })}
    </div>
  )
}
