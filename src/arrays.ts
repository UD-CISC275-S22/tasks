/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const endlist = [...numbers];
    if (endlist.length === 0) {
        return endlist;
    } else if (endlist.length === 1) {
        endlist.push(endlist[0]);
        return endlist;
    } else {
        const replaced = endlist[endlist.length - 1];
        endlist.splice(1, endlist.length - 1, replaced);
        return endlist;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numba: number): number => numba * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const stringed = numbers.map((numba: string): number =>
        isNaN(parseInt(numba)) ? 0 : parseInt(numba),
    );
    return stringed;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const broke = amounts.map((dollar: string): string =>
        dollar.startsWith("$", 0) ? dollar.substring(1) : dollar,
    );
    const stringed = broke.map((numba: string): number =>
        isNaN(parseInt(numba)) ? 0 : parseInt(numba),
    );
    return stringed;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const filtered = messages.filter(
        (message: string): boolean => !message.endsWith("?"),
    );
    const exclaimed = filtered.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message,
    );
    return exclaimed;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const filtered = words.filter((word: string): boolean => word.length < 4);
    const short = filtered.length;
    return short;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const filtered = colors.filter(
            (color: string): boolean =>
                color !== "red" && color !== "blue" && color !== "green",
        );
        if (filtered.length !== 0) {
            return false;
        } else {
            return true;
        }
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
    if (addends.length === 0) {
        return "0=0";
    } else {
        const sum = addends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0,
        );
        const joined = addends.join("+");
        return sum.toString() + "=" + joined;
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
    const negIndex = values.findIndex((value: number): boolean => value < 0);
    if (negIndex === 0) {
        values.splice(negIndex + 1, 0, 0);
        return values;
    } else if (negIndex === -1) {
        const newArr = [...values];
        const sum = values.reduce(
            (currentTotal: number, value: number) => currentTotal + value,
            0,
        );
        newArr.push(sum);
        return newArr;
    } else {
        const newArr = [...values];
        newArr.splice(negIndex - 1, newArr.length, newArr[negIndex - 1]);
        const sum = newArr.reduce(
            (currentTotal: number, value: number) => currentTotal + value,
            0,
        );
        values.splice(negIndex + 1, 0, sum);
        return values;
    }
}
