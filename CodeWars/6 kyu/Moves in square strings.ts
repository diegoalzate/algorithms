export function rot90Clock(strng: string): string {
    const lines = strng.split('\n')
    const response = []
    for (let j in lines) {
        let temp = ''
        for (let i in [...lines[j]]) {
            temp += lines[Math.abs(Number(i) - (lines[j].length - 1))][j]
        }
        response.push(temp)
    }
    console.log(response)
    return response.join('\n')
}

export function diag1Sym(strng: string): string {
    const lines = strng.split('\n')
    const response = []
    for (let j in lines) {
        let temp = ''
        for (let i in [...lines[j]]) {
            temp += lines[Math.abs(Number(i))][j]
        }
        response.push(temp)
    }
    console.log(response)
    return response.join('\n')
}

export function selfieAndDiag1(strng: string): string {
    const diag = diag1Sym(strng)
    const diagLines = diag.split("\n")
    const lines = strng.split("\n")
    const response = []
    for (let j in lines) {
        response.push(`${lines[j]}|${diagLines[j]}`)
    }
    return response.join('\n')
}

export function oper(fct: (s: string) => string, s: string): string {
    return fct(s)
}

