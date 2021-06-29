export class Kata {
    static squareDigits(num: number) {
        return Number([...num.toString()].map(Number).map(n => n**2).join(''))
    }
  }