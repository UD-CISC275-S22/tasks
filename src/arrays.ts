/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const numbers2 = [...numbers];
    const numbers3 = [numbers2[0], numbers2[numbers2.length - 1]];
    // if (numbers2.length === 0) {
    //     return [];
    // }
    // const numbers4 = (numbers: number[]): boolean => numbers2.length === 10;
    // numbers2.length === 0 ? 0 : [];
    return numbers2.length === 0 ? [] : numbers3;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const numbers2 = [...numbers];
    const triple = numbers2.map((price: number): number => price * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numbers2 = [...numbers];
    const numbers3 = numbers2.map((str) => (parseInt(str) ? parseInt(str) : 0));

    return numbers3;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const amounts2 = [...amounts];
    return amounts2.map((str) =>
        str.startsWith("$") ? parseInt(str.slice(1)) || 0 : parseInt(str) || 0
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const numbers2 = [...messages];
    return numbers2
        .filter((num) => !num.endsWith("?"))
        .map((num) => (num.endsWith("!") ? num.toUpperCase() : num));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const numbers2 = [...words];
    return numbers2.reduce(
        (count, word) => (word.length < 4 ? count + 1 : count),
        0
    );
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const colors2 = [...colors];
    const colors3 = colors2.every((color) =>
        ["red", "blue", "green"].includes(color)
    );
    return colors2.length === 0 ? true : colors3;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    // const outcome = 0;
    const addends2 = [...addends];
    const addends3 = addends2.reduce((num1, num2) => num1 + num2, 0);
    // const together = addends2.map((num, index);
    return addends2.length > 0 ? `${addends3}=${addends2.join("+")}` : "0=0";
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
    let negativeFound = false;
    const values2 = [...values];
    const result: number[] = [];
    // values2.map((numbers: number): number =>
    //     numbers < 0 && !negativeFound
    //         ? result.push(numbers) && result.push(sum) && (sum += numbers)
    //         : result.push(numbers) && (sum += numbers)
    // );

    // If the price is less than 10, double the price, otherwise use the price unchanged

    for (let i = 0; i < values2.length; i++) {
        if (values2[i] < 0 && !negativeFound) {
            negativeFound = true;
            result.push(values2[i]);
            result.push(sum);
        } else {
            result.push(values2[i]);
        }

        sum += values2[i];
    }

    !negativeFound ? result.push(sum) : result;
    return result;
}

function index(value: number, index: number, array: number[]): unknown {
    throw new Error("Function not implemented.");
}
