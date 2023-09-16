/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        const empty = numbers;
        return empty;
    } else if (numbers.length === 1) {
        const length1 = [...numbers, ...numbers];
        return length1;
    } else {
        const first = numbers[0];
        const last = numbers[numbers.length - 1];
        const newArray: number[] = [first, last];
        return newArray;
    }
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
    const sToI = numbers.map((word: string): number =>
        Number(word) ? Number(word) : 0
    );
    return sToI;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removeQ = amounts.map((amount: string): string =>
        amount[0] === "$" ? amount.substring(1, amount.length) : amount
    );
    const goodList = removeQ.map((word: string): number =>
        Number(word) ? Number(word) : 0
    );
    return goodList;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const exclam = messages.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
    const filtered = exclam.filter(
        (message: string): boolean => message[message.length - 1] !== "?"
    );
    return filtered;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lessT4 = words.filter(
        (message: string): boolean => message.length < 4
    );
    return lessT4.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const answer = colors.every(
            (color: string): boolean =>
                color === "red" || color === "blue" || color === "green"
        );
        return answer;
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
    if (addends.length === 0) {
        return "0=0";
    } else {
        const sum = addends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const theAddends = addends.join("+");
        return sum + "=" + theAddends;
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
    const answer = values.some((value: number): boolean => value < 0);
    if (answer === false) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const newList = [...values];
        newList.push(sum);
        return newList;
    } else {
        const firstNegative = values.findIndex(
            (value: number): boolean => value < 0
        );
        const list2 = [...values];
        const short = list2.slice(0, firstNegative);
        const shortSum = short.reduce(
            (currentTotal1: number, num1: number) => currentTotal1 + num1,
            0
        );
        const finalList = list2;
        finalList.splice(firstNegative + 1, 0, shortSum);
        return finalList;
    }
}
