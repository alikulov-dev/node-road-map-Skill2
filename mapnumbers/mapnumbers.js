/**
 * Function that converts numbers into objects
 * @param {numbers} numbers - array of numbers
 * @returns array of objects
 */
function mapNumbersToJSON(numbers) {
    // throw new Error("Not implemented yet");
    var array = [];
    for (let i = 0; i < numbers.length; i = i + 1) {
        array.push({ id: numbers[i] })
    }
    return array
}

module.exports = mapNumbersToJSON;
