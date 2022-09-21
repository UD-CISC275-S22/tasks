import { privateDecrypt } from "crypto";
import { arrayBuffer } from "stream/consumers";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const arr: number[] = [numbers[0], numbers[numbers.length - 1]];
    if (numbers.length == 0) {
        return numbers.splice(0);
    } else {
        return arr;
    }
    //const arr = numbers.map((): number =>
    //    (numbers.length == 0) ? (arr.splice(0)) : arr[numbers[0], numbers[-1]]
    //);
    //const arr: number[] = [numbers[0], numbers[numbers.length]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numbers: number): number => numbers * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const arr = numbers.map((number: string): number =>
        parseInt(number) % 1 == 0 ? parseInt(number) : 0
    );
    return arr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const arr = amounts.map((amount: string): string =>
        amount[0] == "$" ? amount.substring(1) : amount
    );
    const final = arr.map((amount: string): number =>
        parseInt(amount) % 1 == 0 ? parseInt(amount) : 0
    );
    return final;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removedQuestions = messages.filter(
        (message: string): boolean => message[message.length - 1] != "?"
    );
    const arr = removedQuestions.map((message: string): string =>
        message[message.length - 1] == "!" ? message.toUpperCase() : message
    );
    return arr;
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
    const RGBtest = colors.every(
        (color: string): boolean =>
            color == "red" || color == "blue" || color == "green"
    );
    if (colors.length == 0) {
        return true;
    } else if (RGBtest) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const adding = addends.join("+");
    const sum = addends.reduce((a, b) => a + b, 0);
    const sumString = sum.toString();
    if (addends.length == 0) {
        return "0=0";
    } else {
        return sumString + "=" + adding;
    }
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
    let sumFinder = [...values];
    if (arr.some((value: number): boolean => value < 0) == true) {
        const index = arr.findIndex((value: number): boolean => value < 0);
        sumFinder = sumFinder.splice(0, index);
        const sum = sumFinder.reduce((a, b) => a + b, 0);
        //const sum = arr.slice(arr[0], arr[index]).reduce((a, b) => a + b, 0);
        /*
        const sum = arr.reduce(
            (total: number, num: number) => total + num,
            index
        );
        */
        arr.splice(index + 1, 0, sum);
    } else {
        const sum = arr.reduce((total: number, num: number) => total + num, 0);
        arr.push(sum);
    }
    return arr;
}
