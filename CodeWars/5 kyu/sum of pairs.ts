// timeout no finished
export function sumPairs(ints: number[], s: number): [number, number] | void {  
    const pairs: any = []
    for (let i in ints) {
        if (ints.indexOf(s - ints[i], +i + 1) !== -1) {
            pairs.push([+i, ints.indexOf(s - ints[i], +i + 1)])
            break
        }
    }
    const sorted = [...pairs.sort((a, b) => a[1] - b[1])]
    console.log(sorted)
    return sorted && sorted[0] && [ints[sorted[0][0]], ints[sorted[0][1]]]
  }