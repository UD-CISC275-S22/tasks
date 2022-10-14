/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const fandl: number[] = [];
    if (numbers.length > 1) {
        fandl.splice(0, 0, numbers[0]);
        fandl.splice(1, 0, numbers[numbers.length - 1]);
        return fandl;
    } else if (numbers.length === 1) {
        fandl.splice(0, 0, numbers[0]);
        fandl.splice(1, 0, numbers[0]);
        return fandl;
    } else {
        return fandl;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((numbers: number): number => numbers * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const strings = numbers.map((numbers: string): number =>
        isNaN(Number(numbers)) ? 0 : parseInt(numbers)
    );
    return strings;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const numbers = amounts.map((amounts: string): string =>
        amounts.replace("$", "")
    );
    const clean = numbers.map((numbers: string): number =>
        isNaN(Number(numbers)) ? 0 : Number(numbers)
    );
    return clean;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const loud = messages.map((messages: string): string =>
        messages.endsWith("!") ? messages.toUpperCase() : messages
    );
    const clean = loud.filter(
        (messages: string): boolean => !messages.endsWith("?")
    );
    return clean;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
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
    const rgb = colors.every(
        (rgb: string): boolean =>
            rgb === "red" || rgb === "green" || rgb === "blue"
    );
    return rgb;
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
    const addendsSum = addends.reduce(
        (sum: number, num: number): number => (sum += num)
    );
    const actualSum: string[] = addends.map((num: number): string =>
        num.toString()
    );
    const math = addendsSum + "=" + actualSum.join("+");
    return math;
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
    const allPositive = values.every((value: number): boolean => value > 0);
    if (allPositive) {
        const sum = values.reduce(
            (sum: number, value: number): number => (sum += value)
        );
        return [...values, sum];
    } else {
        const negative = values.findIndex(
            (value: number): boolean => value < 0
        );
        const between = values.slice(0, negative);
        const sum = between.reduce(
            (sum: number, value: number): number => (sum += value),
            0
        );
        const injected: number[] = [...values];
        injected.splice(negative + 1, 0, sum);
        return injected;
    }
    return [];
}
