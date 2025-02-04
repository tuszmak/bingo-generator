import { useState } from "react";
import Table from "./Table";
import { WordBlock } from "./utils";

export default function Game() {
  const [words] = useState<WordBlock[][]>( [
    [{ word: 'banana', state: false }, { word: 'xylophone', state: false }, { word: 'zebra', state: false }, { word: 'yacht', state: false }, { word: 'tiger', state: false }],
    [{ word: 'volcano', state: false }, { word: 'tiger', state: false }, { word: 'yacht', state: false }, { word: 'ocean', state: false }, { word: 'quasar', state: false }],
    [{ word: 'volcano', state: false }, { word: 'dog', state: false }, { word: 'xylophone', state: false }, { word: 'banana', state: false }, { word: 'volcano', state: false }],
    [{ word: 'waterfall', state: false }, { word: 'notebook', state: false }, { word: 'lemon', state: false }, { word: 'waterfall', state: false }, { word: 'yacht', state: false }],
    [{ word: 'cherry', state: false }, { word: 'umbrella', state: false }, { word: 'elephant', state: false }, { word: 'forest', state: false }, { word: 'island', state: false }]
]
)

  return (
    <div className="flex justify-center items-center">
      <Table key="table" words={words}></Table>
    </div>
  )
}
