export function generateShape(int: number): string {
  let square = []
  let i = int
  while (i > 0) {
    square.push("+".repeat(int))
    i -= 1
  }
  return square.join("\n")
  }


  