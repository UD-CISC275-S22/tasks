/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return numbers.filter(
            (num: number): boolean =>
                num === numbers[0] || num === numbers[numbers.length - 1]
        );
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((nums: number) => nums * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    return numbers.map(
        (nums: string): number =>
            Number.isNaN(Number(nums)) ? 0 : Number(nums)
        // if string value converted to number is not a number,
        // it will return 0; else it will return the number
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
    if (amounts.length === 0) {
        return [];
    }
    const newAmount: string[] = amounts.map((str: string): string =>
        str[0] === "$" ? str.substring(1) : str
    );

    return newAmount.map((nums: string): number =>
        Number.isNaN(Number(nums)) ? 0 : Number(nums)
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newAmount = messages.filter(
        (str: string): boolean => str[str.length - 1] !== "?"
    );

    return newAmount.map((str: string): string =>
        str[str.length - 1] === "!" ? str.toUpperCase() : str
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((str: string): boolean => str.length < 4).length;
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

    return colors.every(
        (str: string): boolean =>
            str === "green" || str === "red" || str === "blue"
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
    } else {
        const sum = addends.reduce(
            (total: number, val: number) => total + val,
            0
        );
        const ans = addends.join("+");
        return sum.toString() + "=" + ans;
    }
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
    if (values.length === 0) {
        return [0];
    }
    const new_arr = [...values];
    let first_neg = new_arr.findIndex((val: number): boolean => val < 0);
    if (first_neg === -1) {
        first_neg = new_arr.length;
    }
    const sliced = new_arr.slice(0, first_neg);
    const sum = sliced.reduce((total: number, num: number) => total + num, 0);
    new_arr.splice(first_neg + 1, 0, sum);
    return new_arr;
}
