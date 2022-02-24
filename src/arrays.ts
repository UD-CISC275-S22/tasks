/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newbookList = [...numbers];
    if (newbookList.length == 0) {
        return [];
    } else {
        return [newbookList[0], newbookList[newbookList.length - 1]];
    }
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((element: number): number => element * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const result = numbers.map((element: string): number =>
        isNaN(parseInt(element)) ? 0 : parseInt(element)
    );
    return result;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const dollars = amounts.map((price: string): string =>
        price.substring(0, 1) === "$" ? price.substring(1) : price
    );
    const remove = dollars.map((num: string): number =>
        parseInt(num, 10).toString() === num ? parseInt(num, 10) : 0
    );
    return remove;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const question = messages.filter(
        (num: string): boolean => !num.includes("?")
    );
    const caps = question.map((num1: string): string =>
        num1.includes("!") ? num1.toUpperCase() : num1
    );
    return caps;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((num: string): boolean => num.length < 4);
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const RGB = colors.map((color: string): boolean =>
        color === "red" || color === "blue" || color === "green" ? true : false
    );
    const TOF = RGB.reduce((TOF: boolean, num: boolean) => TOF === num, true);
    return TOF;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum: number = addends.reduce(
        (total: number, num: number) => (total += num),
        0
    );
    if (addends.length == 0) {
        return "0=0";
    }
    return sum + "=" + addends.join("+");
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
    const value1 = [...values];
    const value2 = [...values];
    const negative: number = values.findIndex(
        (value: number): boolean => value < 0
    );
    if (negative === -1) {
        const sum = values.reduce(
            (total: number, num: number) => (total += num),
            0
        );
        value1.push(sum);
        return value1;
    }
    const sum = values.reduce(
        (total: number, num: number) =>
            values.indexOf(num) < negative ? (total += num) : (total += 0),
        0
    );
    value2.splice(negative + 1, 0, sum);
    return value2;
}
