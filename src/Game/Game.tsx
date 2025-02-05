import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BoardContext } from "./Contexts";
import Table from "./Table";
import { WordBlock } from "./utils";


export default function Game() {
  const [words] = useState<WordBlock[][]>( [
    [{ word: 'banana', isClicked: false }, { word: 'xylophone', isClicked: false }, { word: 'zebra', isClicked: false }, { word: 'yacht', isClicked: false }, { word: 'tiger', isClicked: false }],
    [{ word: 'volcano', isClicked: false }, { word: 'tiger', isClicked: false }, { word: 'yacht', isClicked: false }, { word: 'ocean', isClicked: false }, { word: 'quasar', isClicked: false }],
    [{ word: 'volcano', isClicked: false }, { word: 'dog', isClicked: false }, { word: 'xylophone', isClicked: false }, { word: 'banana', isClicked: false }, { word: 'volcano', isClicked: false }],
    [{ word: 'waterfall', isClicked: false }, { word: 'notebook', isClicked: false }, { word: 'lemon', isClicked: false }, { word: 'waterfall', isClicked: false }, { word: 'yacht', isClicked: false }],
    [{ word: 'cherry', isClicked: false }, { word: 'umbrella', isClicked: false }, { word: 'elephant', isClicked: false }, { word: 'forest', isClicked: false }, { word: 'island', isClicked: false }]
]
)

  return (
    <div className="h-screen text-white dark dark:bg-slate-500">
    <div>
      <a href="/"><Button>Back</Button></a>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center ">
        <h1 className="text-4xl">ENGINEER GAMING</h1>
        <BoardContext.Provider value={words}>
        <Table key="table" words={words}></Table>
        </BoardContext.Provider>
      </div></div>
  )
}
