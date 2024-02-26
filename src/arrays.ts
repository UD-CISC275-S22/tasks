/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    let newNums = [];
    newNums.push(numbers[0]);
    newNums.push(numbers[numbers.length - 1]);
    return newNums;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripNums = numbers.map((numbers: number): number => numbers * 3);
    return tripNums;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const intList1 = numbers.map((numbers: string): number =>
        parseInt(numbers)
    );
    const intList2 = intList1.map((intList1: number): number =>
        isNaN(intList1) ? 0 : intList1
    );
    return intList2;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noSigns = amounts.map((amount: string) =>
        amount.startsWith("$") ? amount.slice(1) : amount
    );
    const convNums = noSigns.map((amount: string): number => parseInt(amount));
    const checkZero = convNums.map((num: number): number =>
        isNaN(num) ? 0 : num
    );
    return checkZero;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const findQuest = messages.filter(
        (messages: string): boolean => messages[messages.length - 1] !== "?"
    );
    const exclam = findQuest.map((findQuest: string): string =>
        findQuest[findQuest.length - 1] === "!"
            ? findQuest.toUpperCase()
            : findQuest
    );
    return exclam;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const findShort = words.filter(
        (words: string): boolean => words.length < 4
    );
    return findShort.length;
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
    return colors.every(
        (colors) => colors === "red" || colors === "blue" || colors === "green"
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
    if (addends.length === 0) {
        return "0=0";
    }
    let retStr = "";
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    retStr = retStr + sum + "=";
    for (let i = 0; i < addends.length; i++) {
        retStr = retStr + addends[i] + "+";
    }
    const retStr2 = retStr.slice(0, -1);
    return retStr2;
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
    let retArr: number[] = [];
    let sum = 0;
    let foundNeg = false;
    let everNeg = false;

    for (let i = 0; i < values.length; i++) {
        if (values[i] < 0 && !foundNeg) {
            foundNeg = true;
        } else if (foundNeg) {
            retArr.push(sum);
            sum = 0;
            foundNeg = false;
            everNeg = true;
            i++;
        }

        retArr.push(values[i]);
        if (values[i] >= 0) {
            sum += values[i];
        }
    }

    if (!everNeg) {
        retArr.push(sum);
    }

    if (retArr.every((num) => num === 0)) {
        return [0];
    }

    return retArr;
}
