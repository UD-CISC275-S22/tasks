/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const firstLast: number[] = [];
    if (numbers.length === 0) {
        return firstLast;
    }
    firstLast.push(numbers[0]);
    if (numbers.length === 1) {
        firstLast.push(numbers[0]);
        return firstLast;
    }
    firstLast.push(numbers[numbers.length - 1]);
    return firstLast;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((numbers: number): number => numbers * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const intNumbers = numbers.map(Number);
    return intNumbers.map((num: number): number => (isNaN(num) ? 0 : num));
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const dollarSignFree = amounts.map((amount: string): string =>
        amount.charAt(0) === "$" ? amount.substring(1) : amount
    );
    return stringsToIntegers(dollarSignFree);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestionMarks = messages.filter(
        (message: string): boolean => message.charAt(message.length - 1) !== "?"
    );
    return noQuestionMarks.map((message: string): string =>
        message.charAt(message.length - 1) === "!"
            ? message.toUpperCase()
            : message
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const sizeOfWords = words.map((word: string): number => word.length);
    return sizeOfWords.reduce(
        (totalNumShortWords: number, num: number): number =>
            num < 4 ? (totalNumShortWords += 1) : (totalNumShortWords += 0),
        0
    );
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every(
        (color: string): boolean =>
            color === "red" || color == "blue" || color == "green"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    //Gets the total sum
    const totalSum = addends.reduce(
        (sum: number, num: number): number => sum + num,
        0
    );
    //Converts to string and adds = to the end
    let totalSumAsString = totalSum.toString();
    totalSumAsString += "=";
    //Gets all numbers seperated by +
    let allNums = addends.join("+");
    if (allNums === null || allNums === "") {
        allNums = "0";
    }
    //Concats them
    totalSumAsString += allNums;
    return totalSumAsString;
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
    //Gets index of the first negative number
    let firstNegativeIndex = values.findIndex(
        (value: number): boolean => value < 0
    );
    if (firstNegativeIndex === -1) {
        firstNegativeIndex = values.length - 1;
    }
    firstNegativeIndex++;
    //Makes new array with values up till first negative
    const valuesPreNegative = values.slice(0, firstNegativeIndex);
    //Adds all values in new array together
    const sumPreNegative = valuesPreNegative.reduce(
        (totalPreNeg: number, value: number): number =>
            value >= 0 ? totalPreNeg + value : totalPreNeg + 0,
        0
    );
    //Copies values to new array and splices the sum after the first negative number
    const valuesInjected = values.slice(0, values.length);
    valuesInjected.splice(firstNegativeIndex, 0, sumPreNegative);
    return valuesInjected;
}
