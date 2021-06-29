function removeSmallest(numbers) {
    const tempList = [...numbers]
    tempList.splice(tempList.indexOf(Math.min(...tempList)) , 1)
    return tempList
}