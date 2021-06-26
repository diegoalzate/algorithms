export function findOutlier(integers: number[]): number {
  // your code here
  let odd = 0
  let even = 0

  const isOdd = integers.map((curr, index): boolean => {
    Math.abs(curr % 2) === 0 ? even += 1 : odd += 1
    if (odd === 2) {
      return true
    }
    if (even === 2) {
      return false
    }
   }).find(value => typeof value === "boolean" )
   console.log(isOdd)
   const outlier = integers.find(value => Math.abs(value) % 2 === +isOdd )
   console.log(outlier)
  return outlier
}