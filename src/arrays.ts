/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const lastIndex = numbers.length - 1;
    const length = numbers.length;
    let newArr: number[];
    if (length == 1) {
        newArr = [numbers[0], numbers[0]];
    } else if (length != 0) {
        newArr = [numbers[0], numbers[lastIndex]];
    } else {
        newArr = [];
    }
    return newArr;
}

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
    if (numbers == []) {
        return [];
    }
    const s2n = numbers.map((str: string): number =>
        isNaN(parseInt(str, 10)) ? 0 : parseInt(str, 10)
    );
    return s2n;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    if (amounts == []) {
        return [0];
    }
    const removeDollar = amounts.map((str: string): string =>
        str.includes("$") ? str.slice(1) : str
    );
    const s2n = removeDollar.map((str: string): number =>
        isNaN(parseInt(str, 10)) ? 0 : parseInt(str, 10)
    );
    return s2n;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removeQST = messages.filter(
        (str: string): boolean => !str.includes("?")
    );
    const makeCapital = removeQST.map((str: string): string =>
        str.includes("!") ? str.toUpperCase() : str
    );
    return makeCapital;
};

/*
 *
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const fourLetters = words.filter((str: string): boolean => str.length < 4);
    return fourLetters.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const onlyRGB = colors.filter(
        (str: string): boolean =>
            str.toLowerCase() == "red" ||
            str.toLowerCase() == "blue" ||
            str.toLowerCase() == "green"
    );
    if (onlyRGB.length == colors.length) {
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
    if (addends.length == 0) {
        return "0=0";
    }
    const numbersAdded = addends.join("+");
    const sum = addends.reduce(
        (currentTotal: number, num: number): number => currentTotal + num,
        0
    );
    return sum + "=" + numbersAdded;
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
    if (values.length == 0) {
        return [0];
    }
    const sum = values.reduce(
        (currentTotal: number, num: number): number => currentTotal + num,
        0
    );
    const sortedArray = values.sort((a: number, b: number): number => a - b);
    const SmallestNumber = sortedArray[0];
    if (SmallestNumber > 0) {
        return [...values, sum];
    }
    const SmallestNumberIndex = values.findIndex(
        (a: number): boolean => a == SmallestNumber
    );
    const returnArray = [...values];
    returnArray.splice(SmallestNumberIndex, 0, sum);
    return [];
}
