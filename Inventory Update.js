function updateInventory(arr1, arr2) {
    arr2.map(([amount2,item2],i2) => {
        arr1.map(([amount1,item1],i1) => {
            if (item1 === item2) {
                arr1[i1] = [amount1+amount2, item1]
                arr2.splice(i2, 1)
            }
        }) 
    })
    const inventory = [...arr1, ...arr2].sort((a,b) => a[1] < b[1] ? -1 :  ( a[1] > b[1] ? 1 : 0 ) )
    console.log(inventory) 
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);