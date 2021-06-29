export function SeriesSum(n:number):string
{
    const sum = Array.from(Array(n).keys()).map(n => 1/(1+((n)*3))).reduce((a,b) => a + b, 0)
    return `${sum.toFixed(2)}`
}