/* eslint-disable */
/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return numbers;
    }
    const arr = [numbers[0], numbers[numbers.length - 1]];
    return arr;
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
    const stringsToInts = numbers.map((numbers: string): number =>
        isNaN(parseInt(numbers, 10)) ? 0 : parseInt(numbers, 10)
    );
    return stringsToInts;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const remove$ = amounts.map((amounts: string): string =>
        amounts.charAt(0) === "$" ? amounts.slice(1) : amounts
    );
    const removeToInts = remove$.map((remove$: string): number =>
        isNaN(parseInt(remove$, 10)) ? 0 : parseInt(remove$, 10)
    );
    return removeToInts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shout = messages.map((messages: string): string =>
        messages.charAt(messages.length - 1) === "!"
            ? messages.toUpperCase()
            : messages
    );
    const shoutNoQM = shout.filter(
        (shout: string): boolean => shout.charAt(shout.length - 1) !== "?"
    );
    return shoutNoQM;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter(
        (words: string): boolean => words.length < 4
    );
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const length = colors.length;
    if (colors.length === 0) {
        return true;
    }
    const arr = colors.filter(
        (colors: string): boolean =>
            colors === "red" || colors === "blue" || colors === "green"
    );
    if (arr.length === length) {
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
    let result: string;
    if (addends.length === 0) {
        result = "0=0";
        return result;
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    result = sum + "=";
    result += addends.join("+");
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
    let sum: number;
    const arr = [...values];
    const final = [...values];
    const negIndex = values.findIndex((values: number): boolean => values < 0);
    if (negIndex === -1) {
        sum = values.reduce((total: number, num: number) => total + num, 0);
        final.splice(values.length, 0, sum);
    } else {
        arr.splice(negIndex, values.length - negIndex);
        sum = arr.reduce((total: number, num: number) => total + num, 0);
        final.splice(negIndex + 1, 0, sum);
        console.log(final);
    }
    return final;
}
