export class G964 {
    public static howmuch(m: number, n: number): string[][] {
        let response = []
        for (let i = Math.min(m, n); i <= Math.max(m, n); i++) {
          if (
            i % 7 === 2 &&
            i % 9 === 1
          ) {
            response = [
              ...response,
              [`M: ${i}`, `B: ${(-2 + i) / 7}`, `C: ${(-1 + i) / 9}`],
            ];
          }
        }
        return response
    }
}