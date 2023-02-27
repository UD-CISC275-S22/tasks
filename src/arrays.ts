/* eslint-disable prefer-const */
/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    const newarr = numbers.filter(
        (x: number): boolean =>
            x === numbers[0] || x === numbers[numbers.length - 1]
    );
    return newarr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const newarr = numbers.map((x: number): number => x * 3);
    return newarr;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newarr = numbers.map((n: string): number => (!isNaN(+n) ? +n : 0));
    return newarr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const finarr = amounts.map((x: string): string =>
        x[0] === "$" ? x.substring(1, x.length) : x
    );
    const finalarr = finarr.map((x: string): number => (!isNaN(+x) ? +x : 0));
    return finalarr;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noqs = messages.filter((x: string): boolean => !x.includes("?"));
    const finarr = noqs.map((x: string): string =>
        x.includes("!") ? x.toUpperCase() : x
    );
    return finarr;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const finarr = words.filter((x: string): boolean => x.length < 4);
    return finarr.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const finarr = colors.every(
        (x: string): boolean => x === "red" || x === "blue" || x === "green"
    );
    return finarr;
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
    const tot = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    return tot.toString() + "=" + addends.join("+");
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
    let i = temp.findIndex((val: number): boolean => val < 0);
    if (i < 0) {
        i = temp.length;
    }
    const tot = temp
        .slice(0, i)
        .reduce((total: number, num: number) => total + num, 0);
    temp.splice(i + 1, 0, tot);
    return temp;
}
