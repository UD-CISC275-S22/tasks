/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    return (
        numbers.length === 0 ? []
        : numbers.length === 1 ? [numbers[0], numbers[0]]
        : [numbers[0], numbers[numbers.length - 1]]
    );
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((integers: number): number => integers * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((str) => {
        const parsed = parseInt(str, 10);
        return isNaN(parsed) ? 0 : parsed;
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
        // Remove "$" symbol if it exists
        const sanitizedStr = str.startsWith("$") ? str.slice(1) : str;
        // Parse the sanitized string as an integer
        const parsed = parseInt(sanitizedStr, 10);
        // Return 0 if parsing fails, otherwise return the parsed number
        return isNaN(parsed) ? 0 : parsed;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((message) => !message.endsWith("?")) // Remove strings that end with "?"
        .map((message) =>
            message.endsWith("!") ? message.toUpperCase() : message,
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word) => word.length < 4).length;
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
    const sum = addends.reduce((acc, num) => acc + num, 0);
    // Create a string representation of the numbers joined by "+"
    const addendsString = addends.join("+");
    // Handle the case where the array is empty
    const result = addends.length === 0 ? "0=0" : `${sum}=${addendsString}`;
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
    // Find the index of the first negative number
    const firstNegativeIndex = values.findIndex((num) => num < 0);

    const sumBeforeNegative =
        firstNegativeIndex === -1 ?
            values.reduce((acc, num) => acc + num, 0)
        :   values
                .slice(0, firstNegativeIndex)
                .reduce((acc, num) => acc + num, 0);

    // Create the result array based on the presence of a negative number
    return firstNegativeIndex === -1 ?
            [...values, sumBeforeNegative] // No negative number found, append sum to the end
        :   [
                ...values.slice(0, firstNegativeIndex + 1), // All elements up to and including the first negative
                sumBeforeNegative, // Insert the sum after the first negative number
                ...values.slice(firstNegativeIndex + 1), // All remaining elements
            ];
}
