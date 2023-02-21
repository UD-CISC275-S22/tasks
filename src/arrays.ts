/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    return numbers.length > 0 ? [numbers[0], numbers[numbers.length - 1]] : [];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number) => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((str: string) =>
        isNaN(parseInt(str)) ? 0 : parseInt(str)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return stringsToIntegers(
        amounts.map((str: string) =>
            str.startsWith("$") ? str.replace("$", "") : str
        )
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .map((value: string) =>
            value.endsWith("!") ? value.toUpperCase() : value
        )
        .filter((value: string) => !value.endsWith("?"));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.reduce<number>(
        (currentTotal, value) =>
            value.length < 4 ? currentTotal + 1 : currentTotal,
        0
    );
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return (
        colors.filter(
            (value) => value !== "red" && value !== "blue" && value !== "green"
        ).length === 0
    );
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
    let reduced = addends.reduce<string>(
        (currentTotal, value) => currentTotal + `${value}+`,
        ""
    );
    reduced = reduced.substring(0, reduced.length - 1);
    return `${addends.reduce(
        (current, value) => current + value,
        0
    )}=${reduced}`;
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
    const dup = [...values];
    const i = values.findIndex((value) => value < 0);
    const sum = (i < 0 ? values : values.slice(0, i)).reduce(
        (accum, cur) => accum + cur,
        0
    );
    dup.splice(i < 0 ? dup.length : i + 1, 0, sum);
    return dup;
}
