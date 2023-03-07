/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    }
    return [numbers[0], numbers[numbers.length - 1]];
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
    const ints = numbers.map(
        // If the string cannot be converted set int to 0, else convert to int and return list
        (int: string): number => (!+int ? 0 : +int)
    );
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const doubledLowPrices = amounts.map(
        // If that is the last index do not add the + behind
        (amount: string): string =>
            amount[0] == "$" ? amount.substring(1) : amount
    );

    //check parseability
    const finalNums = doubledLowPrices.map(
        // If the string cannot be converted set int to 0, else convert to int and return list
        (int: string): number => (+int ? +int : 0)
    );
    return finalNums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestionEnd = messages.filter(
        //filter out question mark ends.
        (message: string): boolean => message[message.length - 1] != "?"
    );
    const uppercaseExcla = noQuestionEnd.map(
        // upper case exclamation points
        (nq: string): string =>
            nq[nq.length - 1] == "!" ? nq.toUpperCase() : nq
    );
    return uppercaseExcla;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    let count: number;
    // eslint-disable-next-line prefer-const
    count = shortWords.length;
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const shortWords = colors.filter(
        (color: string): boolean =>
            color != "blue" && color != "red" && color != "green"
    );
    if (shortWords.length > 0) {
        return false;
    } else {
        return true;
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
    if (addends.length == 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (addendTotal: number, num: number) => addendTotal + num,
        0
    );
    const convertString = addends.join("+");
    return sum + "=" + convertString;
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
    //filter and reduce
    const negatives = values.findIndex((value: number): boolean => value < 0);
    const total =
        negatives == -1
            ? values.reduce((a, b) => a + b, 0)
            : values.slice(0, negatives).reduce((a, b) => a + b, 0);
    const injectpos = [...values];
    negatives == -1
        ? injectpos.push(total)
        : injectpos.splice(negatives + 1, 0, total);
    return injectpos;
}
