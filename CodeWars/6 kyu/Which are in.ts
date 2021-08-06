export class G964 {
    public static inArray(a1: string[], a2: string[]): string[] {
        return a1.filter(first => a2.some(second => second.includes(first))).sort()

    }
  }