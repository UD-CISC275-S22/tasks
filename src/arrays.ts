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
    let newNumbers: number[] = [...numbers];
    newNumbers = newNumbers.map((num: number): number => num * 3);
    return newNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integers: number[] = [];
    numbers.map((num: string) =>
        !isNaN(parseInt(num)) ? integers.push(parseInt(num)) : integers.push(0)
    );
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
    amounts.map((amount: string) => {
        if (amount[0] == "$") {
            amount = amount.substring(1, amount.length);
        }
        if (isNaN(parseInt(amount))) {
            integers.push(0);
        } else {
            integers.push(parseInt(amount));
        }
    });
    return integers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newMessages: string[] = [];
    messages.map((message: string) => {
        if (message[message.length - 1] == "?") {
            message = message + "";
        } else if (message[message.length - 1] == "!") {
            newMessages.push(message.toUpperCase());
        } else {
            newMessages.push(message);
        }
    });
    return newMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count = 0;
    words.map((word: string) =>
        word.length < 4 ? count++ : (count = count + 0)
    );
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
    colors.map((color: string) =>
        color === "red" || color === "blue" || color === "green"
            ? (isGood = true)
            : (isGood = false)
    );
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
        addends.map(
            (addend: number) =>
                (str = str + addend.toString() + "+") && (sum = sum + addend)
        );
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
    values.map((value: number) => {
        if (value < 0 && isNegative == false) {
            isNegative = true;
            newValues.push(value);
            newValues.push(sum);
        } else {
            sum = sum + value;
            newValues.push(value);
        }
    });
    if (isNegative == false) {
        newValues.push(sum);
    }
    return newValues;
}
