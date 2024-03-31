/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing
exactly four of the five integers. Then print the respective minimum and maximum values as a single line
of two space-separated long integers.
For example arr = [1, 3, 5, 7, 9], . Our minimum sum is 1 + 3 + 5 + 7 = 16 and our maximum sum is 3 + 5 + 7 + 9 = 24

We would print
16 24
*/

const miniMaxSum = (arr) => {
    let sumArr = arr[0];
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sumArr += arr[i];   // Caculate total of array
        if (arr[i] < min) min = arr[i]; // Find min element of array
        if (arr[i] > max) max = arr[i]; // Find max element of array
    }
    const minSum = sumArr - max;
    const maxSum = sumArr - min;

    console.log(`${minSum} ${maxSum}`);
}
const arr = [1, 2, 3, 4, 5]
miniMaxSum(arr);

