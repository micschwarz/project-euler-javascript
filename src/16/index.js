// DOES NOT WORK WITH BIG NUMBERS

function problem16(exponent) {
    return crossSum(Math.pow(2, exponent));
}

function crossSum(num) {
    if (num < 10) {
        return num;
    }

    let crossSum = 0;
    const digits = getDigit(num);

    while (true) {
        const digit = digits.next();
        if (digit.done) {
            return crossSum;
        }
        crossSum += digit.value;
    }
}

function* getDigit(number) {
    const digits = splitDigits(number);

    while (digits.length > 0) {
        yield parseInt(digits.shift());
    }
}

function splitDigits(number) {
    const digits = [];
    while (number > 0) {
        digits[digits.length] = number % 10;
        number = parseInt(number / 10);
    }
    digits.reverse();
    return digits;
}

const time = process.hrtime();
const solution = problem16(15);
const duration = process.hrtime(time);

console.log(`Solution: ${solution}`);
console.log(`Exec-Time: ${duration[0] * 1e9 + duration[1]}ns`);
