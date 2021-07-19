export function adjacentElementsProduct(arr: number[]) {
    // multiply adjacent elements in array
    const multiplies = arr.map((a, i) => {
        if (i < arr.length - 1) {
            return a * arr[i + 1];
        }
        return a;
    });
    multiplies.pop();
    return Math.max(...multiplies);

}