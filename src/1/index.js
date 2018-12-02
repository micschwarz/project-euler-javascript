/**
 * Calculates the sum of all the multiples of 3 or 5 below n
 * @param {number} max - Max. multiplier
 * @return {number} sum of all the multiples of 3 or 5 below n
 */
function Problem1(max) {
    let sum = 0;

    for (let i = 1; i < max/3; i++) {
        sum += i*3;
        if (isMultipleOf5Allowed(i*5, max-1)) {
            sum += i*5;
        }
    }

    return sum;
}

/**
 * Check if multiple of 5 is allowed to be added to sum
 * @param {number} multiplication - multiple of 5
 * @param {number} max - Max. allowed multiplier
 * @returns {boolean} isMultipleOf5Allowed
 */
function isMultipleOf5Allowed(multiplication, max) {
    return multiplication < max && multiplication % 15 !== 0;
}

const time = process.hrtime();
const solution = Problem1(1000-1);
const duration = process.hrtime(time);

console.log(`Solution ${solution} found in ${duration[0]}s and ${duration[1]}ns`);
