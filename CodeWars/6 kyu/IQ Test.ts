export function iqTest(numbers: string): number {
    const integers = numbers.split(" ").map(Number)
    const oddNumbers = integers.filter(v => v % 2)
    const evenNumbers = integers.filter(v => !(v % 2))
    return oddNumbers.length === 1 ? integers.findIndex(v => v === oddNumbers[0]) : integers.findIndex(v => v === evenNumbers[0]) 
  }