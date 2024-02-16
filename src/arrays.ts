/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const numbersCopy: number[] = [];

    if (numbers.length === 0) {
        const numbersCopy2 = [...numbersCopy];
        return numbersCopy2;
    } else if (numbers.length === 1) {
        const numbersCopy2 = [...numbers, ...numbers];
        return numbersCopy2;
    } else {
        const numbersFirst: number = numbers[0];
        const numbersLast: number = numbers[numbers.length - 1];
        // eslint-disable-next-line prettier/prettier

        const numbersCopy2 = [numbersFirst, numbersLast];
        return numbersCopy2;
    }
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled: number[] = numbers.map((num: number): number => num * 3);
    //num is meant to represent the current element in the array as we go through the array
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints: number[] = numbers.map((str: string): number => parseInt(str));
    //currently contains NaN
    const ints2: number[] = ints.map((num: number): number =>
        Number.isNaN(num) ? (num = 0) : num
    ); //this will replace those NaN's with 0s

    return ints2;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removed: string[] = amounts.map((amount: string): string =>
        amount.replace("$", "")
    );
    const ints: number[] = removed.map((str: string): number => parseInt(str));
    //currently contains NaN
    const ints2: number[] = ints.map((num: number): number =>
        Number.isNaN(num) ? (num = 0) : num
    ); //this will replace those NaN's with 0s
    return ints2;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    //toUpperCase method works fine with strings that have '!'
    const removed: string[] = messages.filter(
        (message: string): boolean => message.includes("?") !== true
    ); //removes any strings that contain a question mark

    const uppercase: string[] = removed.map((message: string): string =>
        message.includes("!") == true ? message.toUpperCase() : message
    );

    return uppercase;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const onlyShortWords: string[] = words.filter(
        (word: string): boolean => word.length < 4
    );

    return onlyShortWords.length;
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

    const RGB = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );

    return RGB;
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
    } else if (addends.length === 1) {
        return addends[0] + "=" + addends[0];
    }
    const addendsCopy: number[] = [...addends];

    //const equation = "";

    const addendsFirst: number = addends[0];
    const addendsLast: number = addends[addends.length - 1];

    const sum: number = addendsCopy.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );

    const removedOuter2: number[] = addends.filter(
        (num: number): boolean => num !== addendsFirst && num !== addendsLast
    );

    const plusAdded: string[] = removedOuter2.map(
        (num: number): string => "+" + num
    );

    /*const commasRemoved: string[] = plusAdded.map((num: string): string =>
        num.replace(",", "")
    );*/

    return (
        sum +
        "=" +
        addendsFirst +
        plusAdded.toString() +
        "+" +
        addendsLast
    ).replaceAll(",", "");
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
    const valuesCopy: number[] = [...values];
    if (valuesCopy.length === 0) {
        const valuesCopy2: number[] = [...values, 0];
        return valuesCopy2;
        // eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line prettier/prettier, brace-style
    } else if (valuesCopy.length === 1) {
        const valuesCopy2: number[] = [...values, values[0]];
        return valuesCopy2;
    } else if (
        valuesCopy.every((value: number): boolean => value >= 0) === true
    ) {
        //case where there are no negatives
        const sum: number = valuesCopy.reduce(
            (currentTotal: number, num: number) => currentTotal + num
        );
        const valuesPositive: number[] = [...valuesCopy, sum];
        return valuesPositive;
    }
    const firstNegative: number = valuesCopy.findIndex(
        //first negative number's index
        (value: number): boolean => value < 0
    );
    const firstHalf: number[] = valuesCopy.slice(0, firstNegative); //gets the numbers up to (not including) the first negative

    const sum: number = firstHalf.reduce(
        //gives us the sum
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    valuesCopy.splice(firstNegative + 1, 0, sum); //inserts the sum in the correct position

    return valuesCopy;
}
