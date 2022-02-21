import { notEqual } from "assert";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let list: number[];
    if (numbers.length === 0) {
        list = [];
    } else {
        list = [numbers[0], numbers[numbers.length - 1]];
    }
    return list;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled: number[] = numbers.map(
        (element: number): number => element * 3
    );
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const num = numbers.map((i): number =>
        isNaN(parseInt(i)) ? 0 : parseInt(i)
    );
    return num;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const namounts = amounts.map((i): string =>
        i[0] === "$" ? i.replace("$", "") : i
    );
    const arr = namounts.map((i): number =>
        isNaN(parseInt(i)) ? 0 : parseInt(i)
    );
    return arr;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const mmessage = [...messages];
    const nmessage = mmessage.filter(
        (arr_1: string): boolean => !arr_1.includes("?")
    );
    const finalmessage: string[] = nmessage.map((arr_2: string): string =>
        arr_2.includes("!") ? arr_2.toUpperCase() : arr_2
    );
    return finalmessage;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const strlist = words.filter((word: string): boolean => word.length < 4);
    const numword = strlist.length;
    return numword;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const colresult = colors.every(
        (color: string): boolean =>
            color == "red" || color == "blue" || color == "green"
    );
    return colresult;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    let result;
    if (addends.length !== 0) {
        result = sum + "=" + addends.join("+");
    } else {
        result = "0=0";
    }
    return result;
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
    const nnnum = [...values];
    const nnum = [...values];
    const negIntIndex = nnum.findIndex((value: number): boolean => value < 0);
    if (negIntIndex === -1) {
        nnum;
    } else {
        nnum.splice(negIntIndex);
    }
    const sum = nnum.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    if (negIntIndex === -1) {
        nnnum.splice(values.length, 0, sum);
    } else {
        nnnum.splice(negIntIndex + 1, 0, sum);
    }
    return nnnum;
}
