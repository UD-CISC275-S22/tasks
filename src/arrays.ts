import { isEmptyBindingElement } from "typescript";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const first_and_last =
        numbers.length > 0
            ? [numbers[0], numbers[numbers.length - 1]]
            : numbers;
    return first_and_last;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple_numbers = numbers.map((num: number): number => num * 3);
    return triple_numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const int_array = numbers.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
    return int_array;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const numbers = amounts.map((amount: string): number =>
        isNaN(parseInt(amount.replaceAll("$", "")))
            ? 0
            : parseInt(amount.replaceAll("$", ""))
    );
    return numbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const new_messages = messages.filter(
        (message: string): boolean => !message.endsWith("?")
    );
    const with_shouts = new_messages.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message
    );
    return with_shouts;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short_words = words.reduce(
        (current_total: number, word: string) =>
            word.length < 4 ? (current_total += 1) : current_total,
        0
    );
    return short_words;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const no_RGB = colors.filter(
        (color: string): boolean =>
            !(color === "red" || color === "green" || color === "blue")
    );
    return no_RGB.length === 0;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum =
        addends.length === 0
            ? 0
            : addends.reduce((current_total: number, num: number) => (current_total += num));
    const add_nums = addends.length === 0 ? "0" : addends.join("+");
    return sum.toString().concat("=", add_nums);
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
    const sum_index = values.findIndex((val: number): boolean => val < 0);
    const half = sum_index === -1 ? values : values.slice(0, sum_index);
    const sum_half =
        half.length === 0
            ? 0
            : half.reduce(
                (current_total: number, num: number) => (current_total += num)
            );
    const start = values.slice(0, sum_index + 1);
    const end = values.slice(sum_index + 1);
    const injected_array =
        sum_index === -1 ? [...values, sum_half] : [...start, sum_half, ...end];
    console.log(injected_array);
    console.log(values);
    return injected_array;
}
