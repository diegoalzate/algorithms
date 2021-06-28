export class Kata {
    static dnaStrand(dna: string) {
      const pairMap: {[s: string]: string} = {
          A:"T",
          T:"A",
          G:"C",
          C:"G"
      }
      return [...dna].map(s => pairMap[s]).join('')
    }
  }