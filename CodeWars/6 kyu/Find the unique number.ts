export function findUniq(arr: number[]): number {
    // Do the magic
    return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num))!
  }