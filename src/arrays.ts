/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */

export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers.slice(-1)[0]];
    }
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((triple: number): number => triple * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((str) => {
        const parsedInt = parseInt(str, 10);
        return isNaN(parsedInt) ? 0 : parsedInt;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((str) => {
        const stringWithoutDollars = str.replace(/^\$/, "");
        const parsedInt = parseInt(stringWithoutDollars, 10);
        return isNaN(parsedInt) ? 0 : parsedInt;
    });
};
/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((messages) => !messages.endsWith("?"))
        .map((messages) =>
            messages.endsWith("!") ? messages.toUpperCase() : messages
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word) => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const validColors = ["red", "blue", "green"];
    return colors.every((color) => validColors.includes(color));
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
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    if (addends.length === 0) {
        return `${sum}=0`;
    } else {
        const addendsString = addends.join("+");
        return `${sum}=${addendsString}`;
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
    const areAllPositive = values.every((value: number) => value > 0);

    if (areAllPositive) {
        const sum = values.reduce(
            (currentSum: number, value: number) => currentSum + value,
            0
        );
        const modifiedArray = [...values, sum];
        return modifiedArray;
    } else {
        const firstNegativeIndex = values.findIndex(
            (value: number) => value < 0
        );
        const subarrayBeforeNegative = values.slice(0, firstNegativeIndex);
        const sumBeforeNegative = subarrayBeforeNegative.reduce(
            (currentSum: number, value: number) => currentSum + value,
            0
        );
        const modifiedArray = [...values];
        modifiedArray.splice(firstNegativeIndex + 1, 0, sumBeforeNegative);
        return modifiedArray;
    }
}
const arr1 = [1, 9, -5, 7];
const arr2 = [1, 9, 7];
console.log(injectPositive(arr1));
console.log(injectPositive(arr2));
