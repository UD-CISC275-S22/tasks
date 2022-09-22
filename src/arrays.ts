/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length < 1) {
        return numbers.filter((price: number): boolean => !price);
    }
    const fl =
        numbers.length > 1
            ? [numbers[0], numbers[numbers.length - 1]]
            : [numbers[0], numbers[0]];
    return fl;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((p: number): number => p * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((q: number): numbers => (isNaN(+q) ? 0 : +q));
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const nodollar = amounts.map((p: string): string =>
        p[0] === "$" ? p.substring(1) : p
    );
    return nodollar.map((p: string): number => (isNaN(+p) ? 0 : +p));
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((sentence: string): boolean => !sentence.includes("?"))
        .map((sentence: string): string =>
            sentence.includes("!") ? sentence.toUpperCase() : sentence
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word: string[]): string => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every(
        (color: number): boolean =>
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
    return addends.length === 0
        ? "0=0"
        : addends.reduce((sum, num) => sum + num, 0) + "=" + addends.join("+");
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
    const neg = values.findIndex((price: number): boolean => price < 0);
    const sum = values
        .filter(
            (pre: number): boolean =>
                values.findIndex((ind: number): boolean => pre === ind) < neg
        )
        .reduce((currentTotal: number, num: number) => currentTotal + num, 0);

    const sumall = values.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );

    const injected = [...values];
    neg === -1 ? injected.push(sumall) : injected.splice(neg + 1, 0, sum);
    return injected;
}
