/* eslint-disable @typescript-eslint/no-inferrable-types */
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
    //return numbers;
} //end of func1

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const toInt = numbers.map((num: string): number => parseInt(num) || 0);
    return toInt;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    // eslint-disable-next-line prettier/prettier
    const toInt = amounts.map(
        (num: string): number => parseInt(num.replace("$", "")) || 0
    ); //maps the amounts string array to an array of Ints, removing the $. If the string cant be parsed, it turns to 0
    return toInt;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shouted = messages
        .filter((message: string) => !message.endsWith("?"))
        .map((message: string) =>
            message.endsWith("!") ? message.toUpperCase() : message
        ); //filters the messages to those without ?s and then maps those to uppercase versions if endswith !

    return shouted;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shorts = words.filter((word: string) => word.length < 4);
    return shorts.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const isRGB = colors.filter(
        (color: string) =>
            color !== "blue" && color !== "red" && color !== "green"
    );
    if (isRGB.length === 0) {
        return true;
    } else {
        return false;
    }
} //end of rgb func

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const summer: number = addends.reduce(
        (currTot: number, sum: number) => currTot + sum,
        0 //2nd parameter (prettier likes it this way ...)
    );
    let equation: string = "";
    if (addends.length > 0) {
        equation = addends.join("+"); //joins elements with + sign
    } else {
        equation = "0";
    }
    return `${summer}=${equation}`; //${summer} gives value of sumer (the sum), =, and then ${equation} gives element+element+...
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
    //probably uses spread, filter
    const firstNeg: number = values.findIndex((value: number) => value < 0); //finds index of first neg. num.
    const summer = values.reduce(
        (currVal: number, num: number) => currVal + num,
        0 //2nd parameter
    );
    if (firstNeg == -1) {
        //if no negatives, return sum after all elements
        return [...values, summer];
    } //end of if
    const finArr = [...values]; //copies values array to finArr
    const afterSum = values
        .slice(firstNeg)
        .reduce((currVal: number, num: number) => currVal + num); //finds sum of array AFTER firstNeg
    finArr.splice(firstNeg + 1, 0, summer - afterSum); //inserts new value after firstNeg index, 0 deleted, and the value is the sum before firstNeg
    return finArr;
}
