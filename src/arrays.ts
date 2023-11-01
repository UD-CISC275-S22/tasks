/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const a = numbers[0];
    const b = numbers[numbers.length - 1];
    if (numbers.length > 1) {
        return [a, b];
    } else if (numbers.length == 1) {
        return [a, a];
    } else {
        return [];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const convertToInt = numbers.map(
        (str: string): number => parseInt(str) || 0
    );
    return convertToInt;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removed = amounts.map((str: string): string => str.replace("$", ""));
    return stringsToIntegers(removed);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const filt = (str: string): boolean => str.endsWith("?");
    let shouting = messages.filter(filt);
    shouting = messages.filter((e) => !filt(e));
    const shh = shouting.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
    return shh;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const filt = words.filter((str: string): boolean => str.length < 4);
    const count = filt.length;
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const truth = colors.every(
        (str: string): boolean =>
            str === "red" || str === "blue" || str === "green"
    );
    return truth;
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
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num
    );
    const adding = addends.join("+");
    return sum + "=" + adding;
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
    if (values.every((num: number): boolean => num >= 0)) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num
        );
        const added = [...values, sum];
        return added;
    } else {
        const negIndex = values.findIndex((num: number): boolean => num < 0);
        let beforeNeg = [...values];
        beforeNeg = beforeNeg.slice(0, negIndex);
        if (beforeNeg.length === 0) {
            const sum = 0;
            const added = [...values];
            added.splice(negIndex + 1, 0, sum);
            return added;
        }
        const sum = beforeNeg.reduce(
            (currentTotal: number, num: number) => currentTotal + num
        );
        const added = [...values];
        added.splice(negIndex + 1, 0, sum);
        return added;
    }
}
