/**
 * Function that removes duplicates from array
 * @param {array} array - array of numbers
 * @returns returns array with unique elements
 */
function hasDuplicateInArray(array) {
    // throw new Error("Not implemented yet");
    let unique = (value, index, self) => {
        return self.indexOf(value) === index
    }

    let uniqueAges = array.filter(unique)
    return uniqueAges
}

module.exports = hasDuplicateInArray;
