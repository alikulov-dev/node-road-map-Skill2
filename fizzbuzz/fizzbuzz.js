/**
 * Fizz buzz function
 * @param {n} n - sequence number
 * @returns returns followings
 *  - Fizz - if n is divisible by 3
 *  - Buzz - if n is divisible by 5
 *  - FizzBuzz - if n is divisible by 15
 *  - n itself if n neither of above cases
 */
function fizbuzz(n) {
    // throw new Error("Not implemented yet");
    if (n % 15 == 0)
        return "FizzBuzz"
    else if (n % 3 == 0)
        return "Fizz"
    else if (n % 5 == 0)
        return "Buzz"
    else
        return n
}

module.exports = fizbuzz;
