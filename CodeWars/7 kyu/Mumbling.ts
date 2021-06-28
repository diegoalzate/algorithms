// My solution
export function accum(s: string): string {
    const mumble = s.split('').reduce((acc, curr,index) => {
        const uppercase = curr.toUpperCase()
        const repeated = curr.toLocaleLowerCase().repeat(index)
        const completeString = uppercase + repeated
        acc += acc ?  `-${completeString}` :  completeString
        return acc
    })
    return mumble
}

// Best case 
// export function accum(s: string): string {
//     return s.split('')
//     .map((elem, index) => elem.toUpperCase() + (elem.toLowerCase()).repeat(index))
//     .join('-');
//   }