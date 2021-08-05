export function duplicateEncode(word: string) {
    return word.toUpperCase().split("").map(ch =>  word.toUpperCase().split(ch).length - 1 > 1 ? ")" : "(").join('')
}