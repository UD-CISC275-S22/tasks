/* eslint-disable indent */
/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const arr = [...numbers]; // Make a copy so we don't modify the original;
    const length = arr.length;
    const new_arr =
        length === 0
            ? []
            : length === 1
            ? [arr[0], arr[0]]
            : [arr[0], arr[length - 1]];
    return new_arr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const arr = [...numbers];
    const tripled = arr.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const arr = [...numbers];
    const values = arr.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
    return values;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const arr = [...amounts];
    const values = arr.map((value: string): string =>
        value[0] !== "$" ? value : value.slice(1)
    );
    const numbers = values.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
    return numbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const arr = [...messages];
    const values = arr.map((value: string): string =>
        value[value.length - 1] === "!" ? value.toUpperCase() : value
    );
    const variables = values.filter(
        (variable: string): boolean => variable[variable.length - 1] !== "?"
    );

    return variables;
    //.map((value: string): string =>
    //[value.length - 1] === "!" ? value.toUpperCase() : value);
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const arr = [...words];
    const letters = arr.filter((letter: string) => letter.length < 4);
    return letters.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const arr = [...colors];
    const all = arr.every(
        (al: string): boolean => al === "red" || al === "blue" || al === "green"
    );
    return all;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const arr = [...addends];
    const sum = arr.reduce(
        (curentTotal: number, num: number) => curentTotal + num,
        0
    );
    const together = arr.join("+");
    const final = arr.length >= 1 ? `${sum}=${together}` : "0=0";
    return final;
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
    const arr = [...values];
    const negatives = arr.findIndex((num: number): boolean => num < 0);
    const sum = arr.slice(0, negatives < 0 ? arr.length : negatives);
    const reduce = sum.reduce((total: number, num: number) => total + num, 0);
    if (negatives < 0) {
        return [...arr, reduce];
    } else {
        arr.splice(negatives + 1, 0, reduce);
        return arr;
    }
}
