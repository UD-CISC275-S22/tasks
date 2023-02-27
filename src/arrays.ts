/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) return [];
    return numbers.length > 1
        ? [numbers[0], numbers[numbers.length - 1]]
        : [numbers[0], numbers[0]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((x) => (x *= 3));
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((x) => (!isNaN(Number(x)) ? Number(x) : 0));
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const clean_bills: string[] = amounts.map((x) =>
        x[0] === "$" ? x.slice(1, x.length) : x
    );
    return clean_bills.map((x) => (!isNaN(Number(x)) ? Number(x) : 0));
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((x) => x[x.length - 1] != "?")
        .map((x) => (x[x.length - 1] === "!" ? x.toUpperCase() : x));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.reduce((ret: number, x) => (x.length < 4 ? ret + 1 : ret), 0);
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.reduce(
        (ret: boolean, x) =>
            (ret = ["red", "blue", "green"].includes(x) && ret ? ret : !ret),
        true
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
    const sum = addends.reduce((curr: number, x: number) => curr + x, 0);
    const ret_arr: number[] = sum === 0 ? [0] : addends;
    const eq = ret_arr.reduce(
        (curr: string, x: number) => curr + x.toString() + "+",
        sum.toString() + "="
    );
    return eq.slice(0, eq.length - 1);
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
    let good = true;
    const pos: number[] = values.filter((x) => {
        if (x < 0) good = false;
        return x >= 0 && good;
    });
    const sum = pos.reduce((curr: number, x) => (curr += x), 0);
    const clone_arr = [...values];
    clone_arr.splice(pos.length + 1, 0, sum);
    return clone_arr;
}
