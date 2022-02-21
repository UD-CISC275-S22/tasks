/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return numbers;
    }
    if (numbers.length === 1) {
        const newArr = [...numbers];
        newArr.push(numbers[0]);
        return newArr;
    }
    const newArray = [];
    newArray.push(numbers[0]);
    newArray.push(numbers[numbers.length - 1]);
    return newArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const newNumbers = numbers.map((number: number): number => number * 3);
    return newNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((anum: string): number => parseInt(anum, 10) || 0);
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const anArr = amounts.map((word: string): string => word.replace("$", ""));
    return anArr.map((aStr: string): number => parseInt(aStr, 10) || 0);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const anArr = messages.map((word: string): string =>
        word.endsWith("!") ? word.toUpperCase() : word
    );
    return anArr.filter((word: string): boolean => !word.endsWith("?"));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const anArr = words.filter((word: string): boolean => word.length < 4);
    return anArr.length;
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
    const isColor = [...colors];
    return isColor.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
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
    const theNum = addends.join("+");
    const sum = addends.reduce(
        (currTotal: number, num: number) => currTotal + num,
        0
    );
    return sum + "=" + theNum;
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
    const findNeg = values.some((anum: number): boolean => anum < 0);
    if (findNeg === true) {
        const arr1 = [...values];
        //finding first index of neg number
        const firstInd = [...values].findIndex(
            (anum: number): boolean => anum < 0
        );
        //removing values to the right of number
        const arr2 = [...values];
        arr2.splice(firstInd, arr1.length);
        //sum of every positive number left
        const sum = arr2.reduce((total: number, num: number) => total + num, 0);
        //adding the sum to the right of the negative number
        arr1.splice(firstInd + 1, 0, sum);
        return arr1;
    } else {
        const arr4 = [...values];
        //else just add the values
        const sum2 = arr4.reduce(
            (posTotal: number, anum: number) => posTotal + anum,
            0
        );
        arr4.splice(values.length, 0, sum2);
        return arr4;
    }
}
