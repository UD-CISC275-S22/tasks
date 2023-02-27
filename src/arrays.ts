/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const doubled = numbers.map((price: number): number => price * 3);
    return doubled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integers = numbers.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const output = amounts.map((num: string): number => {
        const string = num.replace("$", "");
        return isNaN(parseInt(string)) ? 0 : parseInt(string);
    });
    return output;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newMessages = messages.filter(
        (num: string): boolean => num[num.length - 1] !== "?"
    );
    const output = newMessages.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
    return output;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word) => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const colorsBool = colors.every(
        (color: string): boolean =>
            color == "red" || color == "blue" || color == "green"
    );
    return colorsBool;
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
    const addendStr = addends.join("+");
    if (addendStr === "") {
        return `${sum}=0`;
    } else {
        return `${sum}=${addendStr}`;
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
    let total = 0;
    const firstNegative = values.findIndex((num: number): boolean => num < 0);
    if (firstNegative === -1) {
        total = values.reduce((acc, curr) => acc + curr, 0);
        return [...values, total];
    }
    const valuesBefore = values.filter(
        (num: number): boolean => values.indexOf(num) < firstNegative
    );
    const valuesAfter = values.filter(
        (num: number): boolean => values.indexOf(num) > firstNegative
    );
    const sum = valuesBefore.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const output = [
        ...valuesBefore,
        values[firstNegative],
        sum,
        ...valuesAfter
    ];
    return output;
}
