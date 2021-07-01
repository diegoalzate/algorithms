function wordsToMarks(string){
    return [...string].map(a => a.charCodeAt(0) - 96).reduce((a,b) => a + b,0)
}