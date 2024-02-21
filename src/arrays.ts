import { join } from "path";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const tempArray =
        numbers.length > 0 ? [numbers[0], numbers[numbers.length - 1]] : [];
    return tempArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripleNum = numbers.map((num) => num * 3);
    return tripleNum;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const toStr = numbers.map((num) =>
        isNaN(num) === false ? parseInt(num) : 0
    );
    return toStr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((dollar) => {
        const filteredAmount = parseInt(dollar.replace("$", ""), 10);
        return isNaN(filteredAmount) ? 0 : filteredAmount;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const filteredMessage = messages.filter(
        (message) => message[message.length - 1] !== "?"
    );
    return filteredMessage.map((msg) =>
        msg[msg.length - 1] === "!" ? msg.toUpperCase() : msg
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word) => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every(
        (color) => color === "red" || color === "blue" || color === "green"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.

 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const total = addends.reduce((nums, sum = 0) => (sum = sum + nums), 0);
    const joined = addends.join("+");
    return addends.length > 0 ? `${total}=${joined}` : "0=0";
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
    const newArr = [...values];
    const firstNegative = newArr.findIndex((value) => value < 0);
    const smallArr = newArr.slice(
        0,
        firstNegative < 0 ? newArr.length : firstNegative
    );
    const total = smallArr.reduce((sum, value) => sum + value, 0);
    if (firstNegative < 0) {
        return [...smallArr, total];
    } else {
        newArr.splice(firstNegative + 1, 0, total);
        return newArr;
    }
}

function num(value: string, index: number, array: string[]): value is string {
    throw new Error("Function not implemented.");
}
