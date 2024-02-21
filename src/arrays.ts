/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let final: number[] = [];
    if (numbers.length === 0) return final;
    if (numbers.length === 1) {
        final = [...numbers, ...numbers];
        return final;
    } else {
        final = [numbers[0], numbers[numbers.length - 1]];
        return final;
    }
}

console.log(bookEndList([1, 2, 3]));

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let final: number[] = [];
    final = numbers.map((num: number): number => 3 * num);
    return final;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let final: number[] = [];
    final = numbers.map((num: string): number =>
        !isNaN(Number(num)) ? parseInt(num) : 0
    );
    return final;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let final: number[] = [];
    if (amounts.length === 0) return final;
    final = amounts.map((num: string): number => {
        const cleanedNum = num.startsWith("$") ? num.slice(1) : num;
        if (cleanedNum === "") return 0;
        return !isNaN(Number(cleanedNum)) ? parseInt(cleanedNum) : 0;
    });
    return final;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] =>
    messages
        .map((message: string): string =>
            message.endsWith("!") ? message.toUpperCase() : message
        )
        .filter((message: string): boolean => !message.endsWith("?"));

console.log(shoutIfExclaiming(["Hello", "you", "are", "great!"]));
/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let final: string[] = [];
    final = words.filter((word: string): boolean => word.length < 4);
    return final.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) return true;
    return colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
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
    if (addends.length === 0) return "0=0";
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const sumS = sum.toString();
    const joined = addends.join("+");
    const result = `${sumS}=` + joined;
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
    const negativeIndex = values.findIndex((num: number): boolean => num < 0);
    if (negativeIndex === -1) {
        // If there is no negative number, return the original array
        const sum = values.reduce((acc, num) => acc + num, 0);
        return [...values, sum];
    } else {
        const sumOfPrevious = values
            .filter((_, index) => index < negativeIndex)
            .reduce((acc, num) => acc + num, 0);
        const upToNegative = values.filter(
            (_, index) => index <= negativeIndex
        );
        const numbersAfterNegative = values.filter(
            (_, index) => index > negativeIndex
        );
        return [...upToNegative, sumOfPrevious, ...numbersAfterNegative];
    }
}
