/**
 * Function that sorts the given input array of numbers
 * @param {numbers} numbers - array of numbers
 * @returns sorted array of numbers
 */
function sortNumbers(numbers) {
    let a = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] <= numbers[j]) {
                a = numbers[j];
                numbers[j] = numbers[i];
                numbers[i] = a
            }
        }
    }
    return numbers
}
// console.log(sortNumbers([1, 3, 5, 3, 4, 4, 2, 6, 8, 7, 6, 9, 10]));
module.exports = sortNumbers;
