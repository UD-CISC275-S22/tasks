/* eslint-disable use-isnan */
//import { arrayBuffer } from "stream/consumers";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length > 1) {
        const ret: number[] = [numbers[0], numbers[numbers.length - 1]];
        return ret;
    } else if (numbers.length > 0) {
        const ret: number[] = [numbers[0], numbers[0]];
        return ret;
    } else {
        const ret: number[] = [];
        return ret;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const ret = numbers.map((numbers: number): number => numbers * 3);
    return ret;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let ret = numbers.map(Number);
    ret = ret.map((n: number): number => (isNaN(n) ? (n = 0) : n));
    return ret;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const doll = amounts.map((a: string): string =>
        a.includes("$") ? (a = a.replace("$", "")) : a
    );
    const nums = doll.map((a: string): number => Number(a));
    const val = nums.map((a: number): number => (isNaN(a) ? (a = 0) : a));
    return val;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQ = messages.filter(
        (s: string): boolean => !s.substring(s.length - 1).includes("?")
    );
    const ret = noQ.map((x: string): string =>
        x.includes("!") ? (x = x.toUpperCase()) : x
    );
    return ret;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((s: string): boolean => s.length < 4);
    const ret = short.length;
    return ret;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let noRGB: string[] = [];
    noRGB = colors.filter(
        (s: string): boolean => s != "red" && s != "blue" && s != "green"
    );
    if (noRGB.length == 0) {
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
    const sum = addends.reduce((n: number, num: number) => n + num, 0);
    let str = "";
    if (addends.length > 0) {
        str = addends.join();
    } else {
        str = "0";
    }
    const ret = str.replaceAll(",", "+");
    return "" + sum + "=" + ret;
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
    const ret = values.map((x: number): number => (x >= 0 ? x : x));
    let sum = 0;
    const firstNeg = values.find((val: number): boolean => val < 0);
    let firstNegIndex = values.findIndex((val: number): boolean => val < 0);
    if (firstNegIndex == -1) {
        firstNegIndex = 0;
    }
    const beforeNeg = values.slice(0, firstNegIndex);
    sum = beforeNeg.reduce((n: number, num: number) => n + num, 0);
    if (sum == 0 && firstNeg == undefined) {
        sum = values.reduce((n: number, num: number) => n + num, 0);
        ret.push(sum);
        return ret;
    }
    ret.splice(firstNegIndex + 1, 0, sum);
    return ret;
}
