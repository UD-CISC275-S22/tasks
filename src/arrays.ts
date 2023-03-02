/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newArray: number[];
    if (numbers.length === 0) {
        newArray = [];
    } else if (numbers.length === 1) {
        newArray = [numbers[0], numbers[0]];
    } else {
        newArray = [numbers[0], numbers[numbers.length - 1]];
    }
    return newArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const newArray = numbers.map((number: number): number => number * 3);
    return newArray;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let newArray = numbers.map((number: string): number => parseInt(number));
    newArray = newArray.map((number: number): number =>
        Number.isNaN(number) ? (number = 0) : number
    );
    return newArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const newArray = amounts.map((amount: string): string =>
        amount.includes("$") ? amount.substring(1) : amount
    );
    let newArray2 = newArray.map((amount: string): number => parseInt(amount));
    newArray2 = newArray2.map((amount: number): number =>
        Number.isNaN(amount) ? (amount = 0) : amount
    );
    return newArray2;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newArray = messages.map((message: string): string =>
        message.includes("!") ? message.toUpperCase() : message
    );
    newArray = newArray.filter(
        (message: string): boolean => !message.includes("?")
    );
    return newArray;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const newArray = words.filter((word: string): boolean => word.length < 4);
    return newArray.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const newArray = colors.filter(
        (color: string): boolean => color.includes("red") && color.length === 3
    );
    const newArray2 = colors.filter(
        (color: string): boolean => color.includes("blue") && color.length === 4
    );
    const newArray3 = colors.filter(
        (color: string): boolean =>
            color.includes("green") && color.length === 5
    );
    if (
        newArray.length + newArray2.length + newArray3.length ===
        colors.length
    ) {
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
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const newArray = addends;
    const sum2 = newArray.map((price: number, num: number): string =>
        num === 0 ? price.toString() : price.toString()
    );
    const sum3 = sum.toString() + "=";
    if (addends.length === 0) {
        return sum3 + sum;
    } else {
        return sum3 + sum2.join("+");
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
    const firstNegative = values.findIndex(
        (value: number): boolean => value < 0
    );
    let newArray: number[];
    if (firstNegative !== -1) {
        newArray = [...values].slice(0, firstNegative);
    } else {
        newArray = [...values];
    }
    const sum = newArray.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    let newArray2 = [...values];
    if (firstNegative !== -1) {
        newArray2.splice(firstNegative + 1, 0, sum);
    } else {
        newArray2 = [...values, sum];
    }
    return newArray2;
}
