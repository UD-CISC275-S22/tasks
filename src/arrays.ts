/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const size = numbers.length;
    let book = [2];
    if (size == 0) {
        book = [];
    }
    if (size == 1) {
        book = [numbers[0], numbers[0]];
    }
    if (size > 1) {
        book = [numbers[0], numbers[size - 1]];
    }
    return book;
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
    // const integer = numbers.map((numbers: string): number[] =>
    //     parseInt(numbers)
    // );
    let arrOfNum = numbers.map(Number);
    arrOfNum = arrOfNum.map((element: number): number =>
        isNaN(element) ? (element = 0) : element
    );
    return arrOfNum;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    //use map, check if every element have $(price.includes("$")) price.replace("$", "")
    amounts = amounts.map((element: string): string =>
        element.includes("$") ? element.replace("$", "") : element
    );
    let arrOfNum = amounts.map(Number);
    arrOfNum = arrOfNum.map((element: number): number =>
        isNaN(element) ? (element = 0) : element
    );
    return arrOfNum;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */

export const shoutIfExclaiming = (messages: string[]): string[] => {
    const exclamation = messages.map((word: string): string =>
        word.endsWith("!") ? word.toUpperCase() : word
    );
    const questions = exclamation.filter(
        (word: string): boolean => word.includes("?") == false
    );
    return questions;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const letters = words.filter(
        (element: string): boolean => element.length < 4
    );
    const numbers = letters.length;
    return numbers;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const color = colors.every(
        (colour: string): boolean =>
            colour == "red" || colour == "blue" || colour == "green"
    );
    if (color == true) {
        return true;
    }
    if (colors.length === 0) {
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
    const add = addends.join("+");
    return sum + "=" + add;
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
    //if all positive,then find a negitive values.findIndex((val:number) : boolen => val < 0), filter array
    const positive = values.map((element: number): boolean =>
        element > 0 ? true : false
    );
    if (positive.includes(false)) {
        const negative = values.findIndex((val: number): boolean => val < 0);
        const arrOfNegative = values.filter(
            (val: number): boolean => values.indexOf(val) < negative
        );
        const sum = arrOfNegative.reduce(
            (total: number, element: number) => total + element,
            0
        );
        const arr_2 = [...values];
        arr_2.splice(negative + 1, 0, sum);
        return arr_2;
    } else {
        const sum2 = values.reduce(
            (total: number, element: number) => total + element,
            0
        );
        const arr_3 = [...values, sum2];
        return arr_3;
    }
}
