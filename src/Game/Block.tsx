import { useState } from "react"
import { WordBlock } from "./utils"

const defaultClassList = 'w-24 h-24 bg-orange-500 flex justify-center items-center'

export default function Block({word} : {word: WordBlock}) {
  const handleClick = ()=>{
    setIsClicked(!isClicked)
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
