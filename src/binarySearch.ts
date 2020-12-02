function search(nums: number[], target: number): number {
    let left: number = 0, right: number = nums.length -1
    while (left <= right) {
        let middle: number = left + Math.floor((right - left) / 2)
        if (nums[middle] == target) {
            return middle
        } else if (nums[middle] < target) {
            left = middle +1
        } else {
            right = middle -1
        }
    }
    return -1
};

console.log(search([-1,0,3,5,9,12], 9))