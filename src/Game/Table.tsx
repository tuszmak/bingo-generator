import Block from "./Block";
import { WordBlock } from "./utils";

export default function Table({words}: { words :  WordBlock[][]}) {  
  
  return (
    <div className="flex-col" key='table'>
      {words.map((row : WordBlock[], i) => (
        <div 
        className="flex" 
        key={i}>
          {row.map((word : WordBlock, j) => (<Block key={i *j} word={word} rowNum={i} colNum={j}></Block>))}
        </div>
    ))}
    </div>
  )
}
