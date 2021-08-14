export class G964 {

    public static digPow = (n: number, p: number) => {
        // your code
        const sum = [...n.toString()]
            .reduce((prev,curr, i) => prev + Math.pow(+curr, p+i), 0)
        return sum % n ? -1 : sum/n
    }
}