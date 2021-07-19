export function sumTriangularNumbers(n:number):number {
    // add triangular numbers from 1 to n
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * (i + 1) / 2;
    }
    return sum;
  }