function findPairsWithSum(arr, targetSum) {
    const seen = new Set()
    
    for (let i = 0; i < arr.length; i++) {
        const complement = targetSum - arr[i]
        
        if (seen.has(complement)) {
            return [complement, arr[i]]
        }
        
        seen.add(arr[i])
    }
    
    return null
}

// Test case 1
const input1 = [1, 2, 3, 9]
console.log(findPairsWithSum(input1, 8))

// Test case 2
const input2 = [1, 2, 4, 4]
console.log(findPairsWithSum(input2, 8))

// Test case 3
const input3 = [5, 7, 1, 2, 8]
console.log(findPairsWithSum(input3, 10))