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
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    const rarr: number[] = [numbers[0], numbers[numbers.length - 1]];
    return rarr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const rarr = numbers.map((n: number): number => n * 3);
    return rarr;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const rarr = numbers.map((s: string): number =>
        !isNaN(parseInt(s)) ? parseInt(s) : 0
    );
    return rarr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const converter = (s: string): number => {
        if (s[0] === "$" && !isNaN(parseInt(s.substring(1)))) {
            return parseInt(s.substring(1));
        } else if (!isNaN(parseInt(s))) {
            return parseInt(s);
        } else {
            return 0;
        }
    };
    const rarr = amounts.map(converter);
    return rarr;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const rarr = messages
        .map((s: string): string =>
            s[s.length - 1] === "!" ? s.toUpperCase() : s
        )
        .filter((s: string): boolean => s[s.length - 1] !== "?");
    return rarr;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const w = words.filter((s: string): boolean => s.length < 4);
    return w.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const allc = colors.every(
        (s: string): boolean => s === "red" || s === "green" || s === "blue"
    );
    return allc;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    return "";
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
    return [];
}
