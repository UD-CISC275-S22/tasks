/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newarray: number[] = [];
    if (numbers.length == 0) {
        newarray = numbers;
    }
    if (numbers.length >= 1) {
        newarray = [numbers[0], numbers[numbers.length - 1]];
    }
    return newarray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return [...tripled];
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((num: string): number => parseInt(num));
    const intss = ints.map((num: number): number => (isNaN(num) ? 0 : num));
    return intss;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const amounts1 = amounts.map((amt: string): string => amt.replace("$", ""));
    const amounts2 = amounts1.map((amt: string): number => parseInt(amt));
    const amounts3 = amounts2.map((amt: number): number =>
        isNaN(amt) ? 0 : amt
    );
    return amounts3;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shouted = messages.map((msg: string): string =>
        msg.endsWith("!") ? msg.toUpperCase() : msg
    );
    const questionmark = shouted.filter(
        (msg: string): boolean => !msg.endsWith("?")
    );
    return questionmark;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lessthan4 = words.filter((wrd: string): boolean => wrd.length < 4);
    return lessthan4.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const RGB = ["red", "green", "blue"];
    if (colors.every((color) => RGB.includes(color))) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    let str = "";
    if (addends.length == 0) {
        str = "0=0";
    } else {
        str = sum + "=" + addends.join("+");
    }
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
    const value = [...values];
    let sumarray = [];
    const firstnegindex = values.findIndex((val: number): boolean => val < 0);
    if (values.every((val: number): boolean => val > 0)) {
        sumarray = [...values];
    } else {
        sumarray = values.slice(0, firstnegindex);
    }
    const sum = sumarray.reduce(
        (currentTotal: number, val: number) => currentTotal + val,
        0
    );
    if (values.every((val: number): boolean => val > 0)) {
        value.splice(value.length, 0, sum);
    } else {
        value.splice(firstnegindex + 1, 0, sum);
    }

    return value;
}
