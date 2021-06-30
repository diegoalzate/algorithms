export function descendingOrder(n: number) {
    return +[...n.toString()].sort((a,b) => +b - +a).join('')
  }