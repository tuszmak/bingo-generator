import { useContext, useState } from "react"
import { BoardContext } from "./Contexts"
import { checkTableSolve, WordBlock } from "./utils"

const defaultClassList = 'w-24 h-24 flex justify-center items-center border border-white'
const WIN_TEXT = "BINGOOO"

export default function Block({word, rowNum, colNum} : {word: WordBlock, rowNum: number, colNum: number}) {
  const [isClicked, setIsClicked] = useState(false)
  const words = useContext(BoardContext)

  const handleClick = ()=>{
    words[rowNum][colNum].isClicked = !words[rowNum][colNum].isClicked    
    setIsClicked(!isClicked)
    if(checkTableSolve(words, rowNum, colNum)){
      alert(WIN_TEXT) //TODO váltson win screenre or idk something
    }
  }

  return (
    isClicked ?
    <div className={defaultClassList + ' opacity-50 border-'}
     onClick={handleClick}>{word.word}</div> :
     <div className={defaultClassList}
     onClick={handleClick}>{word.word}</div>
  )
}
