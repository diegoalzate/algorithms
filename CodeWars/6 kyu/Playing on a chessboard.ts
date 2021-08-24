export class G964 {
    public static game(n: number): number[] {
        const res = []
        for (let i of [...Array(n).keys()]) {
            res.push(((i*2)+1)/2)
        }
        return this.simplify(this.sum(res))
    }

    public static sum(board: number[]): number {
        return Number(board.reduce((prev,next) => prev + next,0).toFixed(2))
    }

    public static simplify(num: number): number[] {
        let [real, decimal] = (String(num).split('.') as string[]).map(Number)
        return !decimal ? [real] : [(real*2)+1, 2]
    }
}

// best answer
// export class G964 {
//     public static game(n: number): number[] {
//       return n % 2 == 0 ? [n*n/2] : [n*n, 2];
//     }
//   }