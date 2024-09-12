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
    return numbers.map((e) => e * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const a = numbers.map((num: string): number =>
        parseInt(num) ? parseInt(num) : 0
    );
    return a;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const b = amounts.map((amount: string): string =>
        amount[0] == "$" ? amount.substring(1) : amount
    );
    const c = b.map((amount: string): number =>
        parseInt(amount) % 1 == 0 ? parseInt(amount) : 0
    );
    return c;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const remove = messages.filter(
        (message: string): boolean => message.includes("?") == false
    );
    const loud = remove.map((message: string): string =>
        message.includes("!") ? (message = message.toUpperCase()) : message
    );
    return loud;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((e) => e.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const rgb = colors.every(
        (color: string): boolean =>
            color == "red" || color == "blue" || color == "green"
    );
    if (colors.length === 0) {
        return true;
    } else if (rgb) {
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
    const sum = addends.reduce((prv, nxt) => prv + nxt, 0);
    const add = addends.join("+");
    const addString = sum.toString();
    if (addends.length === 0) {
        return "0=0";
    } else {
        return addString + "=" + add;
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
    const list = [...values];
    const index = list.findIndex((a) => a < 0);

    let first = 0;
    let last = 0;
    let b = 0;
    values.map((value: number): number =>
        value < 0
            ? (b = values.indexOf(value) + 1) && (last = first)
            : (first += value)
    );

    if (b === 0) {
        list.splice(values.length, 0, first);
    } else if (b != index) {
        list.splice(index + 1, 0, last);
    } else {
        list.splice(b, 0, last);
    }
    return list;
}
