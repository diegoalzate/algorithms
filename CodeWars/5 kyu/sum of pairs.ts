export function sumPairs(ints: number[], s: number): [number, number] | void {  
    const sorted = ints.map((val, i) => [i, ints.indexOf(s - val, i + 1)])
        .filter((val, i) => val[1] !== -1)
        .sort((a, b) => a[1] - b[1])

    return sorted && sorted[0] && [ints[sorted[0][0]], ints[sorted[0][1]]]
  }

  // best answer
//   export function sumPairs(ints: number[], s: number): [number, number] | void {  
//     const seen = new Set();
//     for (const n of ints) {
//       if (seen.has(s - n)) return [s - n, n];
//       seen.add(n);
//     }
//   }