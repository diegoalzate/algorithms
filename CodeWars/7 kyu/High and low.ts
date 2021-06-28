export class Kata {
    static highAndLow(numbers: string) {
      const integers = numbers.split(" ").map(Number)
      return `${Math.max(...integers)} ${Math.min(...integers)}`
    }
  }