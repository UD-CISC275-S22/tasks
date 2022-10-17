import { kStringMaxLength } from "buffer";
import { findSourceMap } from "module";
import { workerData } from "worker_threads";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const bookEnd: number[] = [];
    if (numbers.length > 0) {
        bookEnd.push(numbers[0]);
        bookEnd.push(numbers[numbers.length - 1]);
    }
    return bookEnd;
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
    const integers = numbers.map((letter: string): number => {
        if (isNaN(Number(letter))) {
            return 0;
        }
        return Number(letter);
    });
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removed = amounts.map((letter: string): string =>
        letter.includes("$") ? letter.replace("$", "") : letter
    );
    return stringsToIntegers(removed);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shout = messages.map((word: string): string =>
        word.endsWith("!") ? word.toUpperCase() : word
    );
    const finalShout = shout.filter(
        (word: string): boolean => !word.endsWith("?")
    );
    return finalShout;
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
    //returns true if list is empty
    if (colors.length === 0) {
        return true;
    }
    const color = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return color;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    //first, empty array
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (total: number, num: number): number => (total += num)
    );
    const strEquation: string[] = addends.map((num: number): string =>
        num.toString()
    );
    let finalstr: string = strEquation.join("+");
    finalstr = sum + "=" + finalstr;
    return finalstr;
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
    if (values.length === 0) {
        const result = [0];
        return result;
    }
    const onlyPos = values.every((num: number): boolean => num > 0);
    if (onlyPos) {
        const sum = values.reduce(
            (total: number, num: number): number => (total += num)
        );
        return [...values, sum];
    } else {
        const negativeInd = values.findIndex((num: number): boolean => num < 0);
        const startArr = values.slice(0, negativeInd);
        const sum = startArr.reduce(
            (total: number, num: number): number => (total += num),
            0
        );
        const endArr: number[] = [...values];
        endArr.splice(negativeInd + 1, 0, sum);
        return endArr;
    }
}
