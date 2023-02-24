/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const length: number = numbers.length;
    let FirstLast: number[] = [];
    if (length === 0) {
        return FirstLast;
    } else {
        return (FirstLast = [numbers[0], numbers[length - 1]]);
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripleArr = numbers.map((nums: number): number => nums * 3);
    return tripleArr;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const intArr: number[] = numbers.map((wrds: string): number => {
        if (isNaN(parseInt(wrds))) {
            wrds = "0";
            return parseInt(wrds);
        } else {
            return parseInt(wrds);
        }
    });
    return intArr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const filterArr: string[] = amounts.map((wrdz: string): string => {
        if (wrdz.includes("$")) {
            return wrdz.replace("$", "");
        } else {
            return wrdz;
        }
    });
    const intArr: number[] = stringsToIntegers(filterArr);
    return intArr;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let shoutArr: string[] = messages.filter(
        (wrdz: string): boolean => !wrdz.includes("?")
    );
    shoutArr = shoutArr.map((wrdz: string): string =>
        wrdz.includes("!") ? wrdz.toUpperCase() : wrdz
    );
    return shoutArr;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const countArr: string[] = words.filter(
        (wrdz: string): boolean => wrdz.length < 4
    );
    return countArr.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let RGB: string[] = colors.filter(
        (wrdz: string): boolean => !(wrdz === "red")
    );
    RGB = RGB.filter((wrdz: string): boolean => !(wrdz === "blue"));
    RGB = RGB.filter((wrdz: string): boolean => !(wrdz === "green"));
    if (RGB.length === 0) {
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
    const total: number = addends.length;
    const sum: number = addends.reduce(
        (total: number, num: number) => total + num,
        0
    );
    const stringCombined: string = addends.join("+");
    if (total === 0) {
        return "0=0";
    } else {
        return `${sum}=${stringCombined}`;
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
    let sumArr: number[] = [];
    let total: number;
    const idx: number = values.findIndex((num: number) => num < 0);
    if (idx === -1) {
        total = values.reduce(
            (currentTotal: number, currentidx: number): number =>
                currentTotal + currentidx,
            0
        );
        sumArr = [...values, total];
        return sumArr;
    } else {
        sumArr = [...values];
        sumArr = sumArr.slice(0, idx);
        total = sumArr.reduce(
            (currentTotal: number, currentidx: number) =>
                currentTotal + currentidx,
            0
        );
        sumArr = [...values];
        sumArr.splice(idx + 1, 0, total);
    }
    return sumArr;
}
