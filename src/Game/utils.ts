export type WordBlock = {
    word: string,
    isClicked: boolean
}

export const convertTableToCols = (table : WordBlock[][]) : WordBlock[][]  =>{
    
    const transposed = table[0].map((_, colIndex) =>
        table.map(row => row[colIndex])
    );
    return transposed;
}

/**
 * Check if the Bingo table horizontally, vertically or diagonally is solved
 */
export const checkTableSolve = (table : WordBlock[][], rowNum : number, colNum : number) : boolean =>{
    const isSolvedVertically = solveVertically(table)
    const isSolvedHorizontally = solveHorizontally(table)
    const isSolvedDiagonally = solveDiagonally(table)
    return isSolvedHorizontally
}

/**
 * Check if the Bingo table is solved from top to bottom
 */
export const solveVertically = (table : WordBlock[][], colNum : number): boolean =>{    
    for (let index = 0; index < table.length; index++) {        
        if(table[index][colNum].isClicked === false) return false;
    }
    return true;
}

/**
 * Check if the Bingo table is solved from left to right
 */
export const solveHorizontally = (table : WordBlock[][], rowNum : number, colNum : number): boolean =>{
    
    //TODO Optimize: Leadjuk a sor és az oszlopszámot, és az alapján ellenőrzünk.
    // Leadni propként vagy keresni a szövegre. Még id

    for (let index = 0; index < table.length; index++) {
        // console.log(table[index]);
        
        if(!table[index].every((e => e.isClicked === true)))
        return false;
    }
    return true
}

/**
 * Check if the Bingo table is solved from top-left -> bot-right or top-right -> left - bottom
 */
export const solveDiagonally = (table : WordBlock[][]): boolean =>{
    return false;
}