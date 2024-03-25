/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) return [];
    if (numbers.length == 1) return [numbers[0], numbers[0]];
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number): number => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newStringsToInts = numbers.map(
        (str: string): number => parseInt(str, 10) || 0
    );
    return newStringsToInts;
}
/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amount) => {
        const repacedAmounts = amount.replace(/^\$/, "");
        const newAmount = parseInt(repacedAmounts, 10);
        return isNaN(newAmount) ? 0 : newAmount;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const messageQuestion = messages.filter(
        (message: string): boolean => !message.endsWith("?")
    );
    const shoutMessages = messageQuestion.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message
    );
    return shoutMessages;
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
    const removeNonRGB = colors.every((color) =>
        ["red", "blue", "green"].includes(color)
    );
    return removeNonRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((acc, curr) => acc + curr, 0);
    const equation = addends.length > 0 ? addends.join("+") : "0";
    return `${sum}=${equation}`;
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
export const injectPositive = (values: number[]): number[] => {
    const firstNegativeIndex = values.findIndex((value) => value < 0);
    const sumOfPrevious = values
        .slice(
            0,
            firstNegativeIndex !== -1 ? firstNegativeIndex : values.length
        )
        .reduce((acc, curr) => acc + curr, 0);

    if (firstNegativeIndex === -1) {
        return [...values, sumOfPrevious];
    } else {
        return [
            ...values.slice(0, firstNegativeIndex + 1),
            sumOfPrevious,
            ...values.slice(firstNegativeIndex + 1)
        ];
    }
};
