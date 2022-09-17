/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    numbers = numbers.map((x) => x * 3);
    return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const nownums: number[] = numbers.map((x: string) =>
        isNaN(parseInt(x)) ? 0 : parseInt(x)
    );
    return nownums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    amounts = amounts.map((x) => x.replace("$", ""));
    const dols: number[] = amounts.map((x: string) =>
        isNaN(parseInt(x)) ? 0 : parseInt(x)
    );
    return dols;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    messages = messages.filter((str: string): boolean => str.slice(-1) != "?");
    const newlst: string[] = messages.map((x: string) =>
        x.slice(-1) === "!" ? x.toUpperCase() : x
    );
    return newlst;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lst: string[] = words.filter(
        (str: string): boolean => str.length < 4
    );
    return lst.length;
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
    const all: boolean = colors.every(
        (b: string) => b === "red" || b === "green" || b === "blue",
        true
    );
    return all;
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
    const sum: number = addends.reduce((s: number, x: number) => (s += x), 0);
    let str: string = addends.join("+");
    str = sum.toString() + "=" + str;
    return str;
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
    let ind: number = values.findIndex((num: number): boolean => num < 0);
    ind = ind === -1 ? values.length : ind;
    const sum: number = values
        .slice(0, ind)
        .reduce((s: number, num: number) => (s += num), 0);
    let withsum: number[] = [...values];
    if (ind === values.length) {
        withsum = [...withsum, sum];
    } else {
        withsum.splice(ind + 1, 0, sum);
    }
    return withsum;
}
