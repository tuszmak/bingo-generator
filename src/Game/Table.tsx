import Block from "./Block";
import { checkTableSolve, WordBlock } from "./utils";

export default function Table({words}: { words :  WordBlock[][]}) {  
  const handleClick = () => {
    if(checkTableSolve(words)){
      
    }
  }
  return (
    <div className="flex-col" key='table'>
      {words.map((row : WordBlock[], i) => (
        <div 
        className="flex" onClick={handleClick} 
        key={i}>
          {row.map((word : WordBlock, i) => (<Block key={i} word={word}></Block>))}
        </div>
    ))}
    </div>
  )
}
