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
        const newArrays = [numbers[0], numbers[0]];
        return newArrays;
    } else {
        const newArray = [numbers[0], numbers[numbers.length - 1]];
        return newArray;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const double = numbers.map((newArray: number): number => newArray * 3);
    return double;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const intArr: number[] = numbers.map((num: string): number =>
        Number.isNaN(Number(num)) ? 0 : Number(num)
    );
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
    const intArr: number[] = amounts.map((num: string): number => {
        const trimed = num.replace("$", "");
        if (Number.isNaN(Number(trimed))) {
            return 0;
        }
        return Number(trimed);
    });
    return intArr;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newArr = messages.map((newMess: string): string =>
        newMess[newMess.length - 1] === "!" ? newMess.toUpperCase() : newMess
    );
    const finalArr = newArr.filter((word) => word[word.length - 1] !== "?");
    return finalArr;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const filtered = words.filter((eachWord: string) => eachWord.length < 4);
    return filtered.length;
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
    const sameColor = colors.every(
        (color: string): boolean =>
            color == "red" || color === "blue" || color === "green"
    );
    return sameColor;
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
    const strArr = addends.map((number: number): string => number.toString());
    const thePrices = strArr.join("+");
    return `${addends.reduce(
        (number1: number, number2: number): number => number1 + number2
    )}=${thePrices}`;
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
    const vPrices = values.every((price: number): boolean => price > 0);
    if (vPrices) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const pricesAtEnd = [...values, sum];
        return pricesAtEnd;
    } else {
        const neg = values.findIndex((price: number): boolean => price < 0);
        const sum = values
            .slice(0, neg)
            .reduce(
                (currentTotal: number, num: number) => currentTotal + num,
                0
            );
        const numsInside = [...values];
        numsInside.splice(neg + 1, 0, sum);
        return numsInside;
    }
}
