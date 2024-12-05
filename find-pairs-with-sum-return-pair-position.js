function findPairsWithSum(arr, targetSum) {
    const seen = new Map()
    
    for (let i = 0; i < arr.length; i++) {
        const complement = targetSum - arr[i]
        
        if (seen.has(complement)) {
            return [seen.get(complement), i]
        }
        
        seen.set(arr[i], i)
    }
    
    return null
}