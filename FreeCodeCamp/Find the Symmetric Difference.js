function sym(...args) {
  const ammountOfArrays = args.length
  let noDuplicates = []
  let i=0
  let first = args[0]
  for (let i = 1 ; i < ammountOfArrays ; i++) {
      noDuplicates = []
      let second = args[i]
      first.map(x=>{
      if(!second.includes(x) && !noDuplicates.includes(x)){
        noDuplicates.push(x)
      }
    })
    second.map(x=>{
      if(!first.includes(x) && !noDuplicates.includes(x)){
        noDuplicates.push(x)
      }
    })
    first = [...noDuplicates];
  }
  return (noDuplicates.sort())
}