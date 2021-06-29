export class Kata {
    static disemvowel(str: string) {
        const vowels = ['a', 'e', 'i', 'o', 'u']
        return  [...str].filter(letter => vowels.indexOf(letter.toLowerCase()) === -1).join('')
    }
  }