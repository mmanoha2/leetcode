function twoSum(nums: number[], target: number): number[] {
    let searching = true;
    let numbers: number[] = [];
    let counter = 0;
    while (searching) {
        let number = target - nums[0];
        nums.splice(0, 1);
        let index = nums.indexOf(number);
        if (index >= 0) {
            numbers = [counter, index + counter + 1];
            searching = false;
        } else {
            counter++;
        }
    }
    return numbers;
};


console.log(twoSum([2, 7, 11, 15], 9));


console.log(twoSum([3, 2, 4], 6));