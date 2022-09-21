/* eslint-disable no-constant-condition */

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length > 1) {
        return [numbers[0], numbers[numbers.length - 1]];
    } else if (numbers.length === 1) {
        return [numbers[numbers.length - 1], numbers[numbers.length - 1]];
    } else {
        return [];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((numbers: number): number => numbers * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const result = numbers.map((str: string): number =>
        Number(str) ? Number(str) : 0
    );
    return result;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    //Find a way to store the Number(str) values in an array and return that as your solution. Make sure to cover the cases where the result can't be an int.
    /* const rmv = amounts.map((str: string): number[] => {
        console.log(amounts);
        if (str[0] != "$") {
            result.push(Number(str));
            if (isNaN(Number(str.slice(1)))) {
                result.push(0);
            }
        } else if (!isNaN(Number(str.slice(1)))) {
            result.push(Number(str.slice(1)));
        }
        console.log(result);
        return result;
    });
    return result;
    */
    const preRes = amounts.map((str: string): string => str.replace("$", ""));
    const result = preRes.map((str: string): number =>
        Number(str) ? Number(str) : 0
    );
    return result;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    /*1) Line that filters out strings that end in ?
    2) Store new array without the strings that end in ?
    3) Find a way to go through the new array that makes anything ending in ! ALL CAPS*/
    const findQm = messages.filter(
        (str: string): boolean => str[str.length - 1] != "?"
    );
    const result = findQm.map((str: string): string =>
        str[str.length - 1] === "!" ? str.toUpperCase() : str
    );
    return result;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lessLetter = words.filter((word: string): boolean => word.length < 4);
    const result = lessLetter.length;
    return result;
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
    if (
        colors.every(
            (color: string): boolean =>
                color == "red" || color == "blue" || color == "green"
        )
    ) {
        return true;
    } else {
        return false;
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
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const perRes = addends.map((num: number): string => num.toString());
    const result = perRes.join("+");
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
    const numberInside = [...values];
    const findNe = values.findIndex((num: number): boolean => num < 0);
    if (findNe < 0) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const numberAtend = [...values, sum];
        return numberAtend;
        //numberInside.splice(values.length + 1, 0, sum);
    } else {
        const findPn = values.map((num: number): number =>
            values.indexOf(num) < findNe ? num : 0
        );
        const sum2 = findPn.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        numberInside.splice(findNe + 1, 0, sum2);
        return numberInside;
    }
}
