export type WordBlock = {
  word: string;
  isClicked: boolean;
};

export const convertTableToCols = (table: WordBlock[][]): WordBlock[][] => {
  if (!table || !table[0]) {
    return [];
  }
  const transposed = table[0].map((_, colIndex) =>
    table.map((row) => row[colIndex])
  );
  return transposed;
};

/**
 * Check if the Bingo table horizontally, vertically or diagonally is solved
 */
export const checkTableSolve = (
  table: WordBlock[][],
  rowNum: number,
  colNum: number
): boolean => {
  const isSolvedVertically = solveVertically(table, colNum);
  const isSolvedHorizontally = solveHorizontally(table, rowNum);
  const isSolvedDiagonally = solveDiagonally(table);
  return isSolvedVertically || isSolvedHorizontally || isSolvedDiagonally;
};

/**
 * Check if the Bingo table is solved from top to bottom
 */
export const solveVertically = (
  table: WordBlock[][],
  colNum: number
): boolean => {
  if (!table[0]) {
    return false;
  }

  for (let index = 0; index < table.length; index++) {
    if (table[index][colNum].isClicked === false) return false;
  }
  return true;
};

/**
 * Check if the Bingo table is solved from left to right
 */
export const solveHorizontally = (
  table: WordBlock[][],
  rowNum: number
): boolean => {
  if (!table[0]) {
    return false;
  }

  for (let index = 0; index < table.length; index++) {
    if (table[rowNum][index].isClicked === false) return false;
  }
  return true;
};

/**
 * Check if the Bingo table is solved from top-left -> bot-right or top-right -> left - bottom
 */
export const solveDiagonally = (table: WordBlock[][]): boolean => {
  if (!table[0]) {
    return false;
  }

  const firstDiag = [];
  const secondDiag = [];
  for (let index = 0; index < table.length; index++) {
    firstDiag.push(table[index][index].isClicked);
    secondDiag.push(table[index][table.length - 1 - index].isClicked);
  }
  return (
    firstDiag.every((block) => block === true) ||
    secondDiag.every((block) => block === true)
  );
};

export const generateShuffledBoard = (words: string[], width: number = 5) => {
  //TODO Make sure the board is exactly width^2.

  const wordsCopy = shuffleWords(words);
  const board: WordBlock[][] = [];

  wordsCopy.forEach((word, i) => {
    const wordBlock = { word, isClicked: false } satisfies WordBlock;
    if (!board[i % width]) {
      board[i % width] = [wordBlock];
    } else {
      board[i % width].push(wordBlock);
    }
  });

  return board;
};

/**
 *
 * @param {string[]} words
 * This is an array shuffle based on the Fisher–Yates shuffle algorithm.
 */
export const shuffleWords = (words: string[]) => {
  const wordsCopy = [...words];
  for (let index = wordsCopy.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * wordsCopy.length);
    const temp = wordsCopy[index];
    wordsCopy[index] = wordsCopy[randomIndex];
    wordsCopy[randomIndex] = temp;
  }
  return wordsCopy;
};
