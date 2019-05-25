function twoSum(arr, target) {
    const cache = {}
    for (let i = 0; i < arr.length; i++) {
      const diff = target - arr[i]
      if (cache[diff] !== undefined) {
        const index = cache[diff]
        return [i, index]
      }
      else if (!cache[arr[i]]) cache[arr[i]] = i
    }
    return []
  }