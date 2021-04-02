/**
 * function that returns nth fibonacci number
 * @param {n} n - sequence number
 * @returns nth fibonacci number
 */
function fibonacci(n) {
    if (!Number.isInteger(n)) {
        throw "input must be integer"
    }

    try {
        if (n < 0)
            return -1
        
        if (n <= 1)
            return n;

        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    catch (e) {
        console.log(e);
    }
};

/**
 * function that returns nth fibonacci number
 * @param {n} n - sequence number
 * @returns nth fibonacci number
 */
function fibonacci_non_recursive(n) {

    if (!Number.isInteger(n)) {
        throw "input must be integer"
    }

    try {
        if (n < 0)
            return -1

        let fibonacci = [0, 1];
        let array = [0, 1];
        for (let i = 2; i <= n; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
            array.push(fibonacci[i]);
        }
        return array[n];
    }
    catch (e) {
        console.log(e);
    }
}
module.exports = {
    fibonacci,
    fibonacci_non_recursive
};
