export type WordBlock = {
    word: string,
    state: boolean
}

export function convertTableToCols(table : WordBlock[][]) : WordBlock[][] {
    
    const transposed = table[0].map((_, colIndex) =>
        table.map(row => row[colIndex])
    );
    console.log(transposed);
    
    return transposed;
}