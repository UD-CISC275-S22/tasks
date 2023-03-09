/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const new_array = [];
    let i = 0;
    while (i <= numbers.length - 1) {
        new_array.push(numbers[i] * 3);
        i += 1;
    }
    return new_array;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const int: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        const parsedInt: number = parseInt(numbers[i], 10);
        int.push(isNaN(parsedInt) ? 0 : parsedInt);
    }
    return int;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const int: number[] = [];
    for (let i = 0; i < amounts.length; i++) {
        const parsedInt: number = parseInt(amounts[i].replace(/^\$/, ""));
        int.push(isNaN(parsedInt) ? 0 : parsedInt);
    }
    return int;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const new_messages: string[] = [];
    for (const message of messages) {
        if (message.endsWith("?")) {
            continue;
        } else if (message.endsWith("!")) {
            new_messages.push(message.toUpperCase());
        } else {
            new_messages.push(message);
        }
    }
    return new_messages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count = 0;
    for (const word of words) {
        if (word.length < 4) {
            count += 1;
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
    if (colors.length === 0) {
        return true;
    }
    for (const color of colors) {
        if (color !== "red" && color !== "blue" && color !== "green") {
            return false;
        }
    }
    return true;
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
    let numbersStr = "";
    for (let i = 0; i < addends.length; i++) {
        sum += addends[i];
        numbersStr += `${addends[i]}`;
        if (i !== addends.length - 1) {
            numbersStr += "+";
        }
    }
    return `${sum}=${numbersStr || "0"}`;
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
        return [0];
    }
    const new_array = [...values];
    let neg = new_array.findIndex((x: number): boolean => x < 0);
    if (neg === -1) {
        neg = new_array.length;
    }
    const sliced = new_array.slice(0, neg);
    const sum = sliced.reduce((total: number, num: number) => total + num, 0);
    new_array.splice(neg + 1, 0, sum);
    return new_array;
}
