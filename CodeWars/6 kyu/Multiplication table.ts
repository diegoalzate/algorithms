export function multiplicationTable (size: number): number[][] {
    let multiplactionTable = [];
    for (let i = 1; i <= size; i++) {
        let row = []
        for (let j = 1; j <= size; j++) {
            row.push(i * j)
        }
        multiplactionTable.push(row)
    }
    return multiplactionTable;
  }