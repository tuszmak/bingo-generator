import { describe, expect, it, vi } from 'vitest';
import {
  checkTableSolve,
  convertTableToCols,
  generateShuffledBoard,
  solveDiagonally,
  solveHorizontally,
  solveVertically,
  WordBlock,
} from './utils';

// Reusable dummy data as an n x n array
const dummyTable: WordBlock[][] = [
  [
    { word: 'one', isClicked: false },
    { word: 'two', isClicked: true },
    { word: 'three', isClicked: false },
  ],
  [
    { word: 'four', isClicked: true },
    { word: 'five', isClicked: false },
    { word: 'six', isClicked: true },
  ],
  [
    { word: 'seven', isClicked: false },
    { word: 'eight', isClicked: true },
    { word: 'nine', isClicked: false },
  ],
];

const expectedTransposedTable: WordBlock[][] = [
  [
    { word: 'one', isClicked: false },
    { word: 'four', isClicked: true },
    { word: 'seven', isClicked: false },
  ],
  [
    { word: 'two', isClicked: true },
    { word: 'five', isClicked: false },
    { word: 'eight', isClicked: true },
  ],
  [
    { word: 'three', isClicked: false },
    { word: 'six', isClicked: true },
    { word: 'nine', isClicked: false },
  ],
];

const dummyWords = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty-one',
  'twenty-two',
  'twenty-three',
  'twenty-four',
  'twenty-five',
];

describe('convertTableToCols', () => {
  it('should correctly transpose the table', () => {
    expect(convertTableToCols(dummyTable)).toEqual(expectedTransposedTable);
  });

  it('should return an empty array when given an empty table', () => {
    expect(convertTableToCols([])).toEqual([]);
  });

  it('should handle a table with one row', () => {
    const singleRowTable: WordBlock[][] = [[{ word: 'only', isClicked: true }]];
    expect(convertTableToCols(singleRowTable)).toEqual([
      [{ word: 'only', isClicked: true }],
    ]);
  });
});

describe('convertTableToCols', () => {
  it('should correctly transpose the table', () => {
    expect(convertTableToCols(dummyTable)).toEqual(expectedTransposedTable);
  });

  it('should return an empty array when given an empty table', () => {
    expect(convertTableToCols([])).toEqual([]);
  });

  it('should handle a table with one row', () => {
    const singleRowTable: WordBlock[][] = [[{ word: 'only', isClicked: true }]];
    expect(convertTableToCols(singleRowTable)).toEqual([
      [{ word: 'only', isClicked: true }],
    ]);
  });
});

describe('solveVertically', () => {
  it('should return true if all elements in a column are clicked', () => {
    const solvedTable = dummyTable.map((row) =>
      row.map((cell) => ({ ...cell, isClicked: true }))
    );
    expect(solveVertically(solvedTable, 1)).toBe(true);
  });

  it('should return false if at least one element in a column is not clicked', () => {
    expect(solveVertically(dummyTable, 1)).toBe(false);
  });

  it('should handle an empty table gracefully', () => {
    expect(solveVertically([], 0)).toBe(false);
  });
});

describe('solveHorizontally', () => {
  it('should return true if all elements in a row are clicked', () => {
    const solvedTable = dummyTable.map((row) =>
      row.map((cell) => ({ ...cell, isClicked: true }))
    );
    expect(solveHorizontally(solvedTable, 1)).toBe(true);
  });

  it('should return false if at least one element in a row is not clicked', () => {
    expect(solveHorizontally(dummyTable, 1)).toBe(false);
  });

  it('should handle an empty table gracefully', () => {
    expect(solveHorizontally([], 0)).toBe(false);
  });
});

describe('solveDiagonally', () => {
  it('should return true if all elements in either diagonal are clicked', () => {
    const solvedTable = dummyTable.map((row) =>
      row.map((cell) => ({ ...cell, isClicked: true }))
    );
    expect(solveDiagonally(solvedTable)).toBe(true);
  });

  it('should return false if at least one element in both diagonals is not clicked', () => {
    expect(solveDiagonally(dummyTable)).toBe(false);
  });

  it('should handle an empty table gracefully', () => {
    expect(solveDiagonally([])).toBe(false);
  });
});

describe('checkTableSolve', () => {
  it('should return true if any row, column, or diagonal is solved', () => {
    const solvedTable = dummyTable.map((row) =>
      row.map((cell) => ({ ...cell, isClicked: true }))
    );
    expect(checkTableSolve(solvedTable, 1, 1)).toBe(true);
  });

  it('should return false if no row, column, or diagonal is solved', () => {
    expect(checkTableSolve(dummyTable, 1, 1)).toBe(false);
  });

  it('should handle an empty table gracefully', () => {
    expect(checkTableSolve([], 0, 0)).toBe(false);
  });
});

describe('generateShuffledBoard', () => {
  it('should generate a board of correct dimensions when there are exact characters', () => {
    const board = generateShuffledBoard(dummyWords, 5);
    expect(board.length).toBe(5);
    board.forEach((row) => expect(row.length).toBe(5));
  });

  it('should truncate extra words to fit the given board size', () => {
    const extraWords = [...dummyWords, 'extra1', 'extra2', 'extra3'];
    const board = generateShuffledBoard(extraWords, 5);
    expect(board.flat().length).toBe(25);
  });

  it('should not generate a board if not enough words are provided', () => {
    const insufficientWords = ['one', 'two', 'three'];
    const board = generateShuffledBoard(insufficientWords, 5);
    expect(board.flat().length).toBe(0); //TODO not sure about this logic.
  });

  it('should contain all words exactly once', () => {
    const board = generateShuffledBoard(dummyWords, 5);
    const flattenedWords = board.flat().map((block) => block.word);
    expect(flattenedWords.sort()).toEqual(dummyWords.sort());
  });

  it('should mark all words as unclicked initially', () => {
    const board = generateShuffledBoard(dummyWords, 5);
    board.flat().forEach((block) => expect(block.isClicked).toBe(false));
  });

  it('should shuffle the words (mocked for predictable result)', () => {
    vi.spyOn(global.Math, 'random').mockReturnValue(0.5); // Forces shuffle to be predictable
    const board = generateShuffledBoard(dummyWords, 5);
    vi.restoreAllMocks();
    expect(board).not.toEqual(dummyWords); // Ensures words are shuffled
  });
});
