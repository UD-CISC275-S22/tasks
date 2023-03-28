/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let result: number[] = [0];
    if (numbers.length == 0) {
        result = numbers;
    } else if (numbers.length == 1) {
        result[0] = numbers[0];
        result[1] = numbers[0];
    } else {
        result[0] = numbers[0];
        result[1] = numbers[numbers.length - 1];
    }
    return result;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const result = numbers.map((numbers: number): number => numbers * 3);
    return result;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const result = numbers.map((numbers: string): number =>
        !Number.isNaN(parseInt(numbers)) ? parseInt(numbers) : 0
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
    const result = amounts.filter(
        (amounts: string): boolean => amounts.charAt(0) != "$"
    );
    const result2 = result.map((result: string): number =>
        !Number.isNaN(parseInt(result)) ? parseInt(result) : 0
    );
    return result2;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let result = messages.map((messages: string): string =>
        messages.charAt(messages.length - 1) != "!"
            ? messages.toUpperCase()
            : messages
    );
    result = messages.filter(
        (messages: string): boolean =>
            messages.charAt(messages.length - 1) != "?"
    );
    return result;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const result = words.filter((words: string): boolean => words.length < 4);
    return result.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) {
        return false;
    }
    const result = colors.every(
        (colors: string): boolean =>
            colors == "red" || colors == "blue" || colors == "green"
    );
    return result;
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
    const sum = addends.reduce((CurrentTotal, num) => CurrentTotal + num, 0);
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
    const sum = values.reduce((CurrentTotal, num) => CurrentTotal + num, 0);
    const result = values;
    result.push(sum);
    return result;
}
