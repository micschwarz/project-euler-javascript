/**
 * Calculate the sum of the even fibonacci-numbers up to maxFib
 * @param {number} maxFib - Max. Number has to be in
 * @returns {number} sum of the even fibonacci-numbers up to maxFib
 */
function problem2(maxFib) {
    let fib = [1, 1];
    let sum = 0;

    while (true) {
        fib[2] = fib[0] + fib[1];

        if (fib[2] >= maxFib) {
            break;
        }

        if (fib[2] % 2 === 0) {
            sum += fib[2];
        }

        fib.shift();
    }

    return sum;
}

const time = process.hrtime();
const solution = problem2(4000000);
const duration = process.hrtime(time);

console.log(`Solution: ${solution}`);
console.log(`Exec-Time: ${duration[0] * 1e9 + duration[1]}ns`);
