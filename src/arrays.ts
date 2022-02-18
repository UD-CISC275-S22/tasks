/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const arr = [...numbers];
    if (arr.length > 1) {
        const array = [arr[0], arr[arr.length - 1]];
        return array;
    }
    if (arr.length === 0) {
        return arr;
    }
    if (arr.length === 1) {
        const oneArray = [...arr, ...arr];
        return oneArray;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const toNum = numbers.map((num: string): number => parseInt(num));
    const zero = toNum.map((num: number): number =>
        Number.isNaN(num) ? (num = 0) : num
    );
    return zero;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const zero = amounts.map((num: string): string =>
        num.includes("$") ? num.replace("$", "") : num
    );
    const toNum = zero.map((num: string): number => parseInt(num));
    const final = toNum.map((num: number): number =>
        Number.isNaN(num) ? (num = 0) : num
    );
    return final;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const zero = messages.map((sms: string): string =>
        sms[sms.length - 1] === "!" ? sms.toUpperCase() : sms
    );
    const noQM = zero.filter(
        (sms: string): boolean => sms[sms.length - 1] !== "?"
    );
    return noQM;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lessFour = words.filter((word: string): boolean => word.length < 4);
    return lessFour.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const checkColor = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    if (checkColor === true) {
        return true;
    }

    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    let equation = addends.join("+");
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    equation = sum.toString() + "=" + equation;
    return equation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const temp = [...values];
    const isAllPositive = values.every((price: number): boolean => price > 0);
    if (isAllPositive) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        return [...values, sum];
    } else {
        const findFirstNegative = temp.findIndex(
            (value: number): boolean => value < 0
        );
        const ifNeg = temp.filter(
            (value: number): boolean =>
                temp.indexOf(value) < temp.indexOf(findFirstNegative) - 2
        );
        const sum = ifNeg.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        temp.splice(findFirstNegative + 1, 0, sum);
        return temp;
    }
    return [0];

    // const findNegative = values.find((value: number): boolean => value < 0);
    // const ifNeg = values.filter(
    //     (value: number): boolean =>
    //         value >= 0 && value < values.findIndex(findNegative)
    // );
    // const sum = values.reduce(
    //     (currentTotal: number, num: number) => currentTotal + num,
    //     0
    // );
    // const sumIfNeg = ifNeg.reduce(
    //     (currentTotal: number, num: number) => currentTotal + num,
    //     0
    // );
    // const negative = values.some((value: number): boolean => value < 0);
    // if (negative) {
    //     const negativeSum = [...values];
    //     negativeSum.splice(negativeSum.findIndex(fi), 0, sumIfNeg);
    //     return negativeSum;
    // }
    // if (!negative) {
    //     return [...values, sum];
    // }
}
