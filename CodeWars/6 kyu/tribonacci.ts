export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
    if (n === 0) return []
    if (n === 1) return [a]
    if (n === 2) return [a, b]

    const result = [a, b, c]
    for (let i = 3; i < n; i++) {
        result[i] = result[i-1] + result[i-2] + result[i-3]
    }
    return result
}