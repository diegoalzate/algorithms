// timeout not finished
export function sumPairs(ints: number[], s: number): [number, number] | void {  
    const sorted = ints.map((val, i) => [i, ints.indexOf(s - val, i + 1)])
        .filter((val, i) => val[1] !== -1)
        .sort((a, b) => a[1] - b[1])
    
    console.log(ints)
    return sorted && sorted[0] && [ints[sorted[0][0]], ints[sorted[0][1]]]
  }