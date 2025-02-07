import { describe, expect, it } from 'vitest';
import {
  checkTableSolve,
  convertTableToCols,
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
