function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        const num = target - nums[i];
        const index = nums.indexOf(num, i + 1);
        if (index !== -1) return [i, index];
    }
    return [];
}


console.log(twoSum([2, 7, 11, 15], 9));


console.log(twoSum([3, 2, 4], 6));