/**
 * Define F(n) to be the number of integers x≤n that can be written in the form x = a^2 * b^3, where a and b are integers not necessarily different and both greater than 1.
 * @param {number} n - Max Value
 * @return {number} F(n)
 */
function Problem634(n) {
    const maxB = Math.floor(Math.pow((n / 4), 1/3));
    let b = 2;
    let solutions = 0;
    let multipleSolutions = 0;

    console.log(maxB);

    while (b <= maxB) {
        solutions += countASolutions(b, n);
        b++;
    }

    // TODO Calculate count of solutions with multiple occurrence

    return solutions - multipleSolutions;
}

/**
 * Count max. possible solutions for a in a^2 * b^3 ≤ n with given b
 * @param {number} b
 * @param {number} n
 * @returns {Number} Max solutions for a in a^2 * b^3 ≤ n with given b
 */
function countASolutions(b, n) {
    const maxAPower2 = Math.floor(n / Math.pow(b, 3));
    const maxA = Math.floor(Math.sqrt(maxAPower2));

    return maxA < 2 ? 0 : (maxA - 1);
}


/**
 * Calculate x = a^2 * b^3
 * @param {number} a
 * @param {number} b
 * @returns {number} x
 */
function x(a, b) {
    return Math.pow(a, 2) * Math.pow(b, 3);
}


const time = process.hrtime();
/*const solutions = Problem634(9*Math.pow(10,18));*/
const solutions = Problem634(3000000);
const duration = process.hrtime(time);

console.log(`Found possible ${solutions} in ${duration[0]}s and ${duration[1]}ns`);

