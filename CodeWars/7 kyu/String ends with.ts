export function solution(str: string, ending: string): boolean {
    return str.slice(str.length-ending.length) === ending ; // TODO: complete
  }