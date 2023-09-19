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
        return [...numbers, ...numbers];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number): number => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const toInt = numbers.map((str: string): number =>
        parseInt(str, 10) ? parseInt(str, 10) : 0
    );
    return toInt;
}
//!isNaN
/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const toInt = amounts.map((str: string): number => {
        if (str.startsWith("$")) {
            return parseInt(str.slice(1)) ? parseInt(str.slice(1), 10) : 0;
        } else {
            return parseInt(str) ? parseInt(str, 10) : 0;
        }
    });
    return toInt;
};
/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const modifiedMessages = messages.filter((str: string): boolean => {
        if (str.endsWith("!")) {
            return true;
        } else if (!str.endsWith("?")) {
            return true;
        }
        return false;
    });

    return modifiedMessages.map((str: string): string => {
        if (str.endsWith("!")) {
            return str.toUpperCase();
        }
        return str;
    });
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const count: number = words.reduce(
        (currentCount: number, word: string) =>
            word.length < 4 ? currentCount + 1 : currentCount,
        0
    );
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true; // Empty list, so it meets the condition by default
    }

    const validColorslist = ["red", "blue", "green"];

    const validColors = colors.every((color: string): boolean =>
        validColorslist.includes(color)
    );

    return validColors;
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
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const addendString = addends.join("+");
    return `${sum}=${addendString}`;
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
    let sum = 0;
    let foundNegative = false;
    let foo = 0;
    const result: number[] = [];

    const sauce = values.map((value: number) => {
        if (!foundNegative && value < 0) {
            foundNegative = true;
            foo++;
            result.push(value);
            result.push(sum);
        }
        sum += value;
        if (foo === 0) {
            result.push(value);
        }
        foo = 0;
        return value;
    });

    if (!foundNegative) {
        result.push(sum);
    }

    return result;
}
