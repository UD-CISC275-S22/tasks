/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const result: number[] = [];
    if (numbers.length === 0) {
        return result;
    } else if (numbers.length === 1) {
        result.push(numbers[0]);
        result.push(numbers[0]);
    } else {
        const int1: number = numbers[0];
        const int2: number = numbers[numbers.length - 1];
        result.push(int1);
        result.push(int2);
    }
    return result;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((num: number): number => num * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const convert = numbers.map((text: string): number =>
        isNaN(parseInt(text)) === true ? 0 : parseInt(text)
    );
    return convert;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const check = amounts.map((character: string): string =>
        character.replace("$", "")
    );
    const result = check.map((text: string): number =>
        isNaN(parseInt(text)) === true ? 0 : parseInt(text)
    );
    return result;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const result = messages
        .filter((word: string): boolean => !word.endsWith("?"))
        .map((word: string): string =>
            word.endsWith("!") ? word.toUpperCase() : word
        );
    return result;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const result = words.filter((word: string): boolean => word.length < 4);
    return result.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const result = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return result;
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
    const start = [...addends];
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const result = start.join("+");
    return sum + "=" + result;
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
    const newArr = [...values];
    const positive = newArr.every((num: number): boolean => num > 0);
    if (positive === true) {
        const sum: number = newArr.reduce(
            (startingSum: number, num: number) => startingSum + num,
            0
        );
        newArr.push(sum);
    } else {
        const index = newArr.findIndex(
            (negative: number): boolean => negative < 0
        );
        const sum = newArr
            .slice(0, index)
            .reduce((startingNum: number, num: number) => startingNum + num, 0);
        newArr.splice(index + 1, 0, sum);
    }
    return newArr;
}
