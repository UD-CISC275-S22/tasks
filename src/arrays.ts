/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let firstLast = [...numbers];
    if (firstLast.length === 0) return [];
    else if (firstLast.length === 1) return [...numbers, ...numbers];
    firstLast.splice(1, firstLast.length - 2);
    return firstLast;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let newAmounts = [...amounts];
    newAmounts = newAmounts.map((num: string): string =>
        num.startsWith("$") ? num.replace("$", "") : num
    );
    return newAmounts.map((num: string): number =>
        isNaN(Number(num)) ? 0 : Number(num)
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let shouts = [...messages];
    shouts = shouts.filter(
        (text: string): boolean => text[text.length - 1] != "?"
    );
    return shouts.map((text: string): string =>
        text[text.length - 1] === "!" ? text.toUpperCase() : text
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) return true;
    let newColors = [...colors];
    newColors = newColors.filter(
        (color: string): boolean =>
            color != "red" && color != "green" && color != "blue"
    );
    if (newColors.length > 0) return false;
    return true;
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
    let sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num
    );
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
    if (values.length > 0) {
        if (values.every((num: number): boolean => num >= 0)) {
            let sum = values.reduce(
                (currTotal: number, num: number) => currTotal + num
            );
            return [...values, sum];
        }
        let negIndex = values.findIndex((num: number): boolean => num < 0);
        const smallValues = [...values];
        const valuesWithSum = [...values];
        smallValues.splice(negIndex, values.length - negIndex);
        const sum = smallValues.reduce(
            (currTotal: number, num: number) => currTotal + num,
            0
        );
        valuesWithSum.splice(negIndex + 1, 0, sum);
        return valuesWithSum;
    }
    return [0];
    /*let negIndex = values.findIndex((num: number): boolean => num < 0);
    let smallValues = values.splice(0, values.length - negIndex);
    return values.splice(
        negIndex,
        0,
        smallValues.reduce((currTotal: number, num: number) => currTotal + num)
    );*/
}
