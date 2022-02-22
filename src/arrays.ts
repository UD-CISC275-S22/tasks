/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */

/*
import { arrayBuffer } from "stream/consumers";
import { getSystemErrorMap } from "util";
*/

export function bookEndList(numbers: number[]): number[] {
    const newNumbers: number[] = [];
    if (numbers.length == 0) {
        return newNumbers;
    } else if (numbers.length == 1) {
        newNumbers.push(numbers[0]);
        newNumbers.push(numbers[0]);
        return newNumbers;
    } else {
        newNumbers.push(numbers[0]);
        newNumbers.push(numbers[numbers.length - 1]);
        return newNumbers;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const newNumbers: number[] = [];
    for (const num of numbers) {
        newNumbers.push(num * 3);
    }
    return newNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integers: number[] = [];
    for (const num of numbers) {
        if (isNaN(parseInt(num))) {
            integers.push(0);
        } else {
            integers.push(parseInt(num));
        }
    }
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
    const integers: number[] = [];
    for (let num of amounts) {
        if (num[0] == "$") {
            num = num.substring(1, num.length);
        }
        if (isNaN(parseInt(num))) {
            integers.push(0);
        } else {
            integers.push(parseInt(num));
        }
    }
    return integers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newMessages: string[] = [];
    for (const message of messages) {
        if (message[message.length - 1] == "?") {
            continue;
        } else if (message[message.length - 1] == "!") {
            newMessages.push(message.toUpperCase());
        } else {
            newMessages.push(message);
        }
    }
    return newMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count = 0;
    for (const word of words) {
        if (word.length < 4) {
            count = count + 1;
        }
    }
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let isGood = true;
    if (colors.length == 0) {
        return true;
    }
    for (const color of colors) {
        if (color == "red" || color == "blue" || color == "green") {
            continue;
        } else {
            isGood = false;
        }
    }
    return isGood;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let str = "";
    let sum = 0;
    if (addends.length == 0) {
        str = "0=0";
        return str;
    } else {
        for (let i = 0; i < addends.length; i++) {
            sum = sum + addends[i];
            str = str + addends[i] + "+";
        }
    }
    str = str.substring(0, str.length - 1);
    let strSum = sum.toString() + "=";
    strSum = strSum + str;
    return strSum;
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
    const newValues: number[] = [];
    let sum = 0;
    let isNegative = false;
    for (const value of values) {
        if (value < 0 && isNegative == false) {
            isNegative = true;
            newValues.push(value);
            newValues.push(sum);
        } else {
            sum = sum + value;
            newValues.push(value);
        }
    }
    if (isNegative == false) {
        newValues.push(sum);
    }
    return newValues;
}
