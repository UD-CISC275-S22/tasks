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
    const bookEnd = [numbers[0], numbers[numbers.length - 1]];
    return bookEnd;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numbers: number): number => numbers * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const nums = numbers.map((numbers: string): number =>
        isNaN(parseInt(numbers)) === true ? 0 : parseInt(numbers)
    );
    return nums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    if (amounts.length === 0) {
        return [];
    }
    const nums = amounts.map((amounts: string): string =>
        amounts[0] === "$" ? amounts.slice(1) : amounts
    );
    const wo$ = stringsToIntegers(nums);
    return wo$;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQ = messages.filter(
        (messages: string): boolean => messages[messages.length - 1] !== "?"
    );
    const noQ2 = noQ.map((noQ: string): string =>
        noQ[noQ.length - 1] === "!" ? noQ.toUpperCase() : noQ
    );
    return noQ2;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter(
        (words: string): boolean => words.length < 4
    );
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true. weeeeee
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const color = colors.filter(
        (colors: string): boolean =>
            colors === "red" || colors === "blue" || colors === "green"
    );
    if (color.length < colors.length) {
        return false;
    }
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
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (total: number, number: number) => total + number,
        0
    );
    const numsInList = addends.map((addends: number): string =>
        addends.toString()
    );
    const total = sum.toString() + "=";
    const newString = numsInList.join("+");
    return total + newString;
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
    if (values.length === 0) {
        return [0];
    }
    const negIndex = values.findIndex(
        (values: number): boolean => values < 0,
        0
    );
    let sum;
    if (negIndex === -1) {
        sum = values.reduce(
            (currentTotal: number, value: number) => currentTotal + value
        );
    } else {
        if (negIndex === 0) {
            sum = 0;
        } else {
            sum = values
                .slice(0, negIndex)
                .reduce(
                    (currentTotal: number, value: number) =>
                        currentTotal + value
                );
        }
    }

    const newValues = [...values];

    negIndex !== -1
        ? newValues.splice(negIndex + 1, 0, sum)
        : newValues.push(sum);

    return newValues;
}
