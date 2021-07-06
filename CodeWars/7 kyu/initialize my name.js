function initializeNames(name){
    return name.split(" ").map((name, i, names) => (i === 0 || i === names.length -1 ) ? 
    name : `${name.charAt(0)}.`).join(" ")
}