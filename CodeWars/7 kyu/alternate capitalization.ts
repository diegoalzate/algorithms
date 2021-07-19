export function capitalize(s: string) {
    // capitalize even indexes and capitalize odd indexes
    const even = s.split('').map((c, i) => i % 2 === 0 ? c.toUpperCase() : c).join('');
    const odd =  s.split('').map((c, i) => i % 2 !== 0 ? c.toUpperCase() : c).join('');
    return [even, odd]
}   