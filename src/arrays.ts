/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    return numbers.length === 0
        ? []
        : [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const doubled = numbers.map((num: number): number => num * 3);
    return doubled;
}

export const toNum = (str: string): number => {
    const ret = !Number.isNaN(parseInt(str)) ? parseInt(str) : 0;
    return ret;
};
/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const parsedInts = numbers.map(toNum);
    return parsedInts;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollar = amounts.map((str: string): string =>
        str[0] === "$" ? str.slice(1) : str
    );
    const parsedInts = noDollar.map(toNum);
    return parsedInts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions = messages.filter(
        (message: string): boolean => !message.includes("?")
    );
    const shout = noQuestions.map((message: string): string =>
        message.includes("!") ? message.toUpperCase() : message
    );
    return shout;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter(
        (message: string): boolean => message.length < 4
    );
    const count = short.length;
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const notRGB = colors.filter(
        (color: string): boolean => !["red", "blue", "green"].includes(color)
    );
    const length = notRGB.length;
    return !length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((total: number, num: number) => total + num, 0);
    const join = addends.length === 0 ? "0" : addends.join("+");
    return `${sum}=${join}`;
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
    let firstNeg = values.findIndex((num: number): boolean => num < 0);
    const hasNeg = firstNeg === -1 ? false : true;
    firstNeg = hasNeg ? firstNeg : values.length - 1;
    console.log(hasNeg);
    const newArr = values.slice(0, hasNeg ? firstNeg : firstNeg + 1);
    const sum = newArr.reduce((total: number, num: number) => total + num, 0);
    const newValues = [...values];
    newValues.splice(firstNeg + 1, 0, sum);
    return newValues;
}
