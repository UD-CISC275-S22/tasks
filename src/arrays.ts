/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length != 0) {
        const newarray = [numbers[0], numbers[numbers.length - 1]];
        return newarray;
    }
    return [];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newarray = numbers.map((num: string): number => Number(num));
    const newarray2 = newarray.map((num: number): number =>
        isNaN(num) ? (num = 0) : num
    );
    return newarray2;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const newamounts = amounts.map((num: string): string =>
        num.includes("$") ? num.replace("$", "") : num
    );
    const newarray = newamounts.map((num: string): number => Number(num));
    const newarray2 = newarray.map((num: number): number =>
        isNaN(num) ? (num = 0) : num
    );
    return newarray2;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newarray = messages.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message
    );
    const newarray2 = newarray.filter(
        (message: string): boolean => message.endsWith("?") != true
    );
    return newarray2;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const newarray = words.filter((word: string): boolean => word.length < 4);
    return newarray.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const allrbgval = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return allrbgval;
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
        addends = [...addends, 0];
    }
    const sum = addends.reduce(
        (currTotal: number, num: number) => currTotal + num,
        0
    );
    const theAddends = addends.join("+");
    return sum + "=" + theAddends;
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
    if (values.some((val: number): boolean => val < 0) === false) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const newarray = [...values, sum];
        return newarray;
    }
    const index = values.findIndex((val: number): boolean => val < 0);
    const newarray = values.filter(
        (val: number): boolean => values.indexOf(val) < index
    );
    const sum = newarray.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const copyarray = [...values];
    copyarray.splice(index + 1, 0, sum);
    return copyarray;
}
