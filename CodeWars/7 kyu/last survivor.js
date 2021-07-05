function lastSurvivor(letters, coords) {
    let str = [...letters]
    while (coords.length > 0) {
        str.splice(coords[0], 1)
        coords.shift()
    }
    return str.join('')
}