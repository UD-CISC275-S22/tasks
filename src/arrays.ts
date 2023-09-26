/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num: string): number => {
        const parsed = Number(num);
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
    return amounts.map((num: string): number => {
        const parsed = num[0] == "$" ? Number(num.substring(1)) : Number(num);
        return isNaN(parsed) ? 0 : parsed;
    });
    return [];
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const filtered = messages.filter(
        (que: string): boolean => !que.includes("?")
    );
    return filtered.map((num: string): string => {
        return num[num.length - 1] == "!" ? num.toUpperCase() : num;
    });
    return [];
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((i: string): boolean => i.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    // Filter the array to include only 'red,' 'blue,' or 'green' colors
    const filteredColors = colors.filter((color) =>
        ["red", "blue", "green"].includes(color)
    );

    // Check if the length of the filtered array is equal to the length of the original array
    return filteredColors.length === colors.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    // Check if the addends array is empty
    if (addends.length === 0) {
        return "0=0";
    }

    // Calculate the sum of the numbers in the array
    const sum = addends.reduce((acc, num) => acc + num, 0);
    const addendStrings = addends.map((num) => num.toString());
    const additionString = addendStrings.join("+");
    const result = `${sum}=${additionString}`;

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
    let first = values.findIndex((price: number): boolean => price < 0);
    if (first == -1) {
        first = values.length;
    }

    const sum = values
        .slice(0, first)
        .reduce((tot: number, i: number): number => {
            return tot + i;
        }, 0);

    const result = [...values];
    result.splice(first + 1, 0, sum);

    return result;
}
