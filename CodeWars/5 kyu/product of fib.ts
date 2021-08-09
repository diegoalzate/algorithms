export class G964 {

    public static productFib = (prod) => {
        const fib = [0, 1];
        while (fib[0] * fib[1] < prod) {
            [fib[0], fib[1]] = [fib[1], fib[0] + fib[1]]
        }
        return [fib[0], fib[1], fib[0] * fib[1] === prod]
    }
}