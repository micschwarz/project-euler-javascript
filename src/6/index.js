/**
 * Calculates the difference between the sum of the squares of the first given natural numbers and the square of the sum.
 * @param {number} max - Max natural number
 * @returns {number} Difference between the sum of the squares of the first given natural numbers and the square of the sum
 */
function problem6(max) {
    let sumOfSquare = 0;
    let sum = 0;
    for (let i = 0; i <= max; i++) {
        sumOfSquare += i * i;
        sum += i;
    }

    let squareOfSum = sum * sum;

    return squareOfSum - sumOfSquare;
}

const time = process.hrtime();
const solution = problem6(100);
const duration = process.hrtime(time);

console.log(`Solution: ${solution}`);
console.log(`Exec-Time: ${duration[0] * 1e9 + duration[1]}ns`);
