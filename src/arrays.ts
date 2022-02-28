/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let numbersHold = numbers;
    if (numbers.length == 0) {
        return numbersHold;
    } else {
        numbersHold = [numbers[0]];
        numbersHold.push(numbers[numbers.length - 1]);
        return numbersHold;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    numbers = numbers.map((numbers: number): number => numbers * 3);
    return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numbersHold = numbers.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
    return numbersHold;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const dollars = amounts.map((dollar: string): string =>
        dollar[0] == "$" ? (dollar = dollar.slice(1)) : dollar
    );
    const numbersHold = dollars.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
    return numbersHold;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const upperCaseExca = messages.map((message: string): string =>
        message[message.length - 1] == "!" ? message.toUpperCase() : message
    );
    const result = upperCaseExca.filter((word) => word[word.length - 1] != "?");

    return result;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const countShortWords = words.filter((word) => word.length < 4);
    return countShortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const colorArray = colors.every(
        (color: string): boolean =>
            color == "red" || color == "green" || color == "blue"
    );
    return colorArray;
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
    const nums = addends.join("+");
    if (addends.length == 0) {
        return sum + "=" + 0;
    } else {
        return sum + "=" + nums;
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
    const injected = values;
    const firstNeg = injected.findIndex((num: number): boolean => num < 0);
    const inject = [...values];
    if (firstNeg != -1) {
        const sum = injected
            .slice(0, firstNeg)
            .reduce(
                (currentTotal: number, num: number) => currentTotal + num,
                0
            );
        inject.splice(firstNeg + 1, 0, sum);
    } else {
        const sum = injected
            .slice()
            .reduce(
                (currentTotal: number, num: number) => currentTotal + num,
                0
            );
        inject.splice(injected.length, 0, sum);
    }

    return inject;
}
