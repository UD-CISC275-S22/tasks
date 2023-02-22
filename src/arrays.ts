/* eslint-disable indent */
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
    let tripled = [...numbers];
    tripled = numbers.map((tripled: number): number => tripled * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((numbers: string): number => {
        const num = parseInt(numbers);
        return Number.isFinite(num) ? num : 0;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amounts: string): number => {
        let num = 0;
        if (amounts.startsWith("$")) {
            amounts = amounts.substring(1);
        }
        num = parseInt(amounts, 10);
        return isNaN(num) ? 0 : num;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const filtered = messages.filter((msg) => !msg.endsWith("?"));
    const transformed = filtered.map((upmsg) =>
        upmsg.endsWith("!") ? upmsg.toUpperCase() : upmsg
    );
    return transformed;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word) => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const validColors = ["red", "blue", "green"];
    if (colors.length === 0) {
        return true;
    }
    const newColors = colors.map((color) =>
        validColors.includes(color) ? color : null
    );
    return newColors.every((color) => color !== null);
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        addends = [0];
    }
    const addition = addends.join("+");
    const numSum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const final = numSum.toString() + "=" + addition;
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
    const negativeIndex = values.findIndex((num) => num < 0);
    const sum = values.reduce((acc, num, index) => {
        if (index < negativeIndex || negativeIndex === -1) {
            return acc + num;
        }
        return acc;
    }, 0);
    return negativeIndex === -1
        ? [...values, sum]
        : [
              ...values.slice(0, negativeIndex + 1),
              sum,
              ...values.slice(negativeIndex + 1)
          ];
}
