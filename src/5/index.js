// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
// ---------------------------------------------------------------------------------------------------------------------
// THOUGHTS
// Number has to be even                                                        -> x % 2 === 0
// Number has to be dividable by the largest odd number                         -> x = ? * 19
// Number has to end with 0 or 5, as otherwise it would not be dividable by 5   -> x = ? * 5

/**
 * Calculates the smallest positive number that is evenly divisible by all of the numbers from 1 to maxDivisor
 * @param {number} maxDivisor - Max. Divisor
 * @returns {number} smallest positive number that is evenly divisible by all of the numbers from 1 to maxDivisor
 */
function problem5(maxDivisor) {
    const maxOddDivisor = maxDivisor % 2 === 0 ? maxDivisor - 1 : maxDivisor;

    let solution = maxOddDivisor;

    let evenlyDivisible = false;

    for (let fac = 2; !evenlyDivisible; fac += 2) {
        solution = fac * maxOddDivisor;

        // Fast check
        if (maxDivisor >= 5 && solution % 5 !== 0) {
            continue;
        }

        let tempEvenDivisible = true;
        for (let divisor = maxDivisor; divisor > 1; divisor--) {
            if (solution % divisor !== 0) {
                tempEvenDivisible = false;
                break;
            }
        }

        if (tempEvenDivisible) {
            return solution;
        }

        tempEvenDivisible = false;
    }
}

const time = process.hrtime();
const solution = problem5(20);
const duration = process.hrtime(time);

console.log(`Solution: ${solution}`);
console.log(`Exec-Time: ${duration[0] * 1e9 + duration[1]}ns`);
