/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 * 1. take array
 * 2. find array length
 * 3. find first and last num or return empty array
 */
export function bookEndList(numbers: number[]): number[] {
    const numLen: number = numbers.length;
    let returnArray: number[];
    if (numLen >= 2) {
        const firstNum: number = numbers[0];
        const lastNum: number = numbers[numLen - 1];
        returnArray = [firstNum, lastNum];
    } else if (numLen === 1) {
        const firstNum: number = numbers[0];
        returnArray = [firstNum, firstNum];
    } else {
        returnArray = [];
    }
    return returnArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const trippled = numbers.map((num: number): number => num * 3);
    return trippled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const converted = numbers.map((numStr: string): number =>
        parseInt(numStr) ? parseInt(numStr) : 0
    );
    return converted;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollarsStr = amounts.map((dollarAmt: string): string =>
        dollarAmt[0] === "$" ? dollarAmt.slice(1) : dollarAmt
    );
    const justNums = noDollarsStr.map((numStr: string): number =>
        parseInt(numStr) ? parseInt(numStr) : 0
    );
    return justNums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions = messages.filter(
        (message: string): boolean => message.slice(-1) != "?"
    );
    const shouted = noQuestions.map((statement: string): string =>
        statement.slice(-1) === "!" ? statement.toUpperCase() : statement
    );
    return shouted;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const isRGB = colors.every(
        (color: string): boolean =>
            color === "red" || color === "green" || color === "blue"
    );
    return isRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum = 0;
    sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    let suffix = "0";
    if (addends.length != 0) {
        suffix = addends.join("+");
    }
    return sum + "=" + suffix;
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
    const nums = values.map((value: number): number => value);
    let index = nums.findIndex((val: number): boolean => val < 0);
    if (index === -1) {
        index = nums.length;
    }
    const vals = nums.slice(0, index);
    const total = vals.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    nums.splice(index + 1, 0, total);
    return nums;
}
