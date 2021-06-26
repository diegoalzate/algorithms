export function findNb(m: number): number {
    // your code
    if (m % 3 !== 0) {
        return -1
    }
    let volume = 0
    let index = 0
    while (true) {
        index += 1
        volume += index ** 3
        if (volume === m) {
            return index
        } else if( volume > m ) {
            return -1
        }
    }
  }