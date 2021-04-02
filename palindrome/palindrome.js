/**
 * Function that checks if word is palindrome
 * @param {word} word - word - set of chars
 * @returns boolean - true if input palindrome otherwise false
 */
function isPalindrome(word) {
    const reverseString = word.split('').reverse().join('');

    if (word != reverseString) {
        return false
    } else {
        return true
    }
}

module.exports = isPalindrome;
