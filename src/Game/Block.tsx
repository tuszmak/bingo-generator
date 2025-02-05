import { useContext, useState } from "react"
import { BoardContext } from "./Contexts"
import { checkTableSolve, WordBlock } from "./utils"

const defaultClassList = 'w-24 h-24 bg-orange-500 flex justify-center items-center'

export default function Block({word, rowNum, colNum} : {word: WordBlock, rowNum: number, colNum: number}) {
  const words = useContext(BoardContext)
  const handleClick = ()=>{
    words[rowNum][colNum].isClicked = !words[rowNum][colNum].isClicked
    console.log(words);
    
    setIsClicked(!isClicked)
    if(checkTableSolve(words)){
      alert("yippee")
    }
  }

    const [isClicked, setIsClicked] = useState(false)
  return (
    isClicked ?
    <div className={defaultClassList + ' opacity-50'}
     onClick={handleClick}>{word.word}</div> :
     <div className={defaultClassList}
     onClick={handleClick}>{word.word}</div>
  )
}
