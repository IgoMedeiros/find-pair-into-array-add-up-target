function findPairsWithSum(arr, targetSum) {
    const seen = new Set()
    
    for (let i = 0; i < arr.length; i++) {
        const complement = targetSum - arr[i];
        
        if (seen.has(complement)) {
            return true
        }
        
        seen.add(arr[i])
    }
    
    return false
}

// Test cases
const input1 = [1,2,3,9] // sum = 8 => false
const input2 = [1,2,4,4] // sum = 8 => true

console.log(findPairsWithSum(input1, 8)) // false
console.log(findPairsWithSum(input2, 8)) // true