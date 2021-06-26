export class Kata {
    static getCount(str: string) {
      // your code here
        const vowels = ["a" , "e", "i", "o", "u"]
        const count = str.split('').filter(letter => vowels.indexOf(letter) > -1)
        return count.length
    }
  }