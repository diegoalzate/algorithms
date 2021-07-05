function olympicRing(a){
    const rings = {
        a: 1,
        o: 1,
        b: 1,
        p: 1,
        e: 1,
        A: 1,
        g: 1,
        B: 2,
        O: 1,
        R: 1,
        Q: 1
    }
    const score = Math.floor(a.split('').filter(c => c in rings ).map(c => rings[c]).reduce((acc, b) => acc += b, 0) / 2)
    if (score <= 1) return 'Not even a medal!'
    switch (score) {
        case 2: return 'Bronze!'
        case 3: return 'Silver!'
        default: return 'Gold!'
    }
}