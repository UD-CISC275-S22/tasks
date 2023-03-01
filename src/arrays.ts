/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */

export function bookEndList(numbers: number[]): number[] {
    const newArr: number[] = [...numbers];
    if (newArr.length === 0) {
        return [];
    } else if (newArr.length === 1) {
        const num: number = numbers[0];
        return [num, num];
    } else {
        const first = newArr[0];
        const last = newArr[newArr.length - 1];
        const fAndL: number[] = [first, last];
        return fAndL;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const newArr: number[] = [...numbers];
    const newNumbers = newArr.map((num: number): number => num * 3);
    return newNumbers;
}

/*
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newArr: string[] = [...numbers];
    const stringToInt: number[] = newArr.map((num: string): number =>
        parseInt(num)
    );
    const newNum: number[] = stringToInt.map((num) => (isNaN(num) ? 0 : num));
    return newNum;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const newAmounts: string[] = [...amounts];
    const removeQuestionMark: string[] = newAmounts.map((num: string) =>
        num.startsWith("$") ? num.slice(1) : num
    );
    const stringToInt: number[] = removeQuestionMark.map(
        (num: string): number => parseInt(num)
    );
    const newNum: number[] = stringToInt.map((num) => (isNaN(num) ? 0 : num));
    return newNum;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newMessages: string[] = [...messages];
    const messageToUpperCase: string[] = newMessages.map(
        (message: string): string =>
            message.endsWith("!") ? message.toUpperCase() : message
    );

    const removeQuestionSymbol: string[] = messageToUpperCase.filter(
        (message: string): boolean => !message.endsWith("?")
    );

    return removeQuestionSymbol;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const newWords = [...words];
    const result: string[] = newWords.filter(
        (words: string) => words.length < 4
    );
    return result.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const red = "red";
    const green = "green";
    const blue = "blue";

    const newColors: string[] = [...colors];

    const rgb: boolean = newColors.every(
        (color: string): boolean =>
            color === red || color === green || color === blue
    );
    if (rgb) {
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
    const newAddends: number[] = [...addends];
    const sum = newAddends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );

    let result;
    if (sum > 0) {
        const num = newAddends.join("+");
        result = `${sum}=${num}`;
    } else {
        result = `${sum}=0`;
    }
    return result;
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
    const newValues: number[] = [...values];
    let added = 0;
    let newArr: number[] = [];

    const checkForNegative: number = newValues.findIndex(
        (num: number): boolean => num < 0
    );
    if (checkForNegative === -1) {
        if (values.length === 0) {
            return [0];
        }
        added = values.reduce((current: number, val: number) => current + val);
        newArr = [...values, added];
    } else {
        if (checkForNegative !== 0) {
            const sliced = values.slice(0, checkForNegative);

            added = sliced.reduce(
                (current: number, val: number) => current + val
            );
        }
        newArr = [...newValues];
        newArr.splice(checkForNegative + 1, 0, added);
    }
    return newArr;
}
