export function isPowerOfTwo(n: number): boolean {
    // Insert magic here
   return n !== 0 && (n & (n - 1)) === 0;
}
