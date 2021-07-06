function crap(x, bags, cap) {
  const poop = []
  for (let i of x) {
    if (i.indexOf("D") !== -1) return "Dog!!"
    poop.push(...i.filter((s) => s === "@"))
  }
  return poop.length <= bags * cap ? "Clean" : "Cr@p"
}
