/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let arr: number[] = [];
    if (numbers.length === 0) {
        return arr;
    } else {
        if (numbers.length === 1) {
            arr = [numbers[0], numbers[0]];
        } else {
            arr = [numbers[0], numbers[numbers.length - 1]];
        }
    }
    return arr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const arr: number[] = numbers.map((num: number): number => num * 3);
    return arr;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const new_numbers = numbers.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
    return new_numbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const money_signs = amounts.map((money: string): string =>
        money[0] === "$" ? money.replace("$", "") : money
    );
    return stringsToIntegers(money_signs);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const mod_arr = messages.map((msg: string): string =>
        msg[msg.length - 1] === "!" ? msg.toUpperCase() : msg
    );
    const qArr = mod_arr.filter(
        (msg: string): boolean => msg[msg.length - 1] !== "?"
    );

    return qArr;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    let count: number = 0;
    words.filter((word: string): number =>
        word.length < 4 ? (count += 1) : count
    );
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    let count: number = 0;
    if (colors.length === 0) {
        return true;
    }
    colors.filter((color: string): number =>
        color === "blue" || color === "red" || color === "green"
            ? (count += 1)
            : count
    );
    if (count === colors.length) {
        return true;
    }
    return false;
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
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    let finished_string: string = "";
    const sum = addends.reduce(
        (current: number, num: number) => current + num,
        0
    );
    finished_string += sum.toString() + "=";

    const str = addends.map((num: number): string => num.toString());
    finished_string += str;
    finished_string = finished_string.replace(/,/g, "+");

    return finished_string;
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
    const index = values.findIndex((num: number): boolean => num < 0);
    const copy = values.slice();
    if (index === -1) {
        const sum = values.reduce(
            (soFar: number, curr: number): number => soFar + curr,
            0
        );
        copy.splice(values.length, 0, sum);
    } else {
        const sum = values.reduce(
            (soFar: number, curr: number, i: number): number =>
                curr > 0 && i < index ? soFar + curr : soFar,
            0
        );
        copy.splice(index + 1, 0, sum);
    }
    return copy;
}
