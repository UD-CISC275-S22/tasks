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
    if (numbers.length === 1) {
        return [numbers[0], numbers[numbers.length - 1]];
    }
    const newArr = [];
    newArr.push(numbers[0]);
    newArr.push(numbers[numbers.length - 1]);
    return newArr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((price: number): number => price * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newNum = numbers.map((amount: string): number =>
        Number.isNaN(parseInt(amount)) ? 0 : parseInt(amount)
    );
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
    const newNum = amounts.map((amount: string): number =>
        amount.startsWith("$") ? parseInt(amount.slice(1)) : parseInt(amount)
    );
    const newNum2 = newNum.map((amount: number): number =>
        Number.isNaN(amount) ? 0 : amount
    );
    return newNum2;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newNum = messages.map((amount: string): string =>
        amount.endsWith("!") ? amount.toUpperCase() : amount
    );
    const newList = newNum.filter(
        (word: string): boolean => word.endsWith("?") === false
    );
    return newList;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const newList = words.filter((word: string): boolean => word.length < 4);
    return newList.length;
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
    const isAllRGB = colors.every(
        (price: string): boolean =>
            price.toLowerCase() === "red" ||
            price.toLowerCase() === "green" ||
            price.toLowerCase() === "blue"
    );
    return isAllRGB;
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
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const message = sum.toString() + "=";
    const second = addends.join("+");
    return message + second;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] woud become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let removedColors: number[] = [];
    const firstNegative = values.findIndex(
        (price: number): boolean => price < 0
    );
    const clonedValues = [...values];
    if (firstNegative !== -1) {
        removedColors = clonedValues.splice(firstNegative);
    }
    const sum = clonedValues.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    if (firstNegative !== -1) {
        removedColors.splice(1, 0, sum);
        return clonedValues.concat(removedColors);
    } else {
        return [...values, sum];
    }
}
