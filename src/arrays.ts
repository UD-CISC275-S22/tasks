/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else {
        if (numbers.length === 1) {
            const numberDouble = [...numbers, ...numbers];
            return numberDouble;
        } else {
            const numberAtStart = numbers.slice(0, 1);
            const numberAtEnd = numbers.slice(numbers.length - 1);
            const numberAtStartEnd = [...numberAtStart, ...numberAtEnd];
            return numberAtStartEnd;
        }
    }
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
    const toInts = [...numbers].map((strng: string) =>
        isNaN(parseInt(strng)) ? 0 : parseInt(strng)
    );
    return toInts;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const dollarAmount = amounts.filter((amount: string): boolean =>
        amount.includes("$")
    );
    if (dollarAmount.length !== 0) {
        const amountNoDollar = amounts.map((amount: string): string =>
            amount.replace("$", "")
        );
        const toInts1 = stringsToIntegers(amountNoDollar);
        return toInts1;
    } else {
        const toInts2 = stringsToIntegers(amounts);
        return toInts2;
    }
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const endInExclamation = messages.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
    const endInInterrogation = endInExclamation.filter(
        (message: string): boolean => !(message[message.length - 1] === "?")
    );
    return endInInterrogation;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const testWords = words.filter((word: string): boolean => word.length < 4);
    const result: number = testWords.length;
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
    const colorTable: string[] = ["red", "green", "blue"];
    const check3Colors = colors.every((color: string): boolean =>
        colorTable.includes(color)
    );
    return check3Colors;
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
        (currentTotal: number, nb: number) => currentTotal + nb,
        0
    );
    const changeToString = addends.map((num: number): string => num.toString());
    const sumTable = changeToString.join("+");
    const combineSumAddends = sum.toString().concat("=", sumTable);
    return combineSumAddends;
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
    const newValues = [...values];
    const findNeg = values.filter((value: number): boolean => value < 0);
    if (findNeg.length === 0) {
        const doSum = values.reduce(
            (currentTotal: number, nb: number) => currentTotal + nb,
            0
        );
        const combineElements = [...values, doSum];
        return combineElements;
    } else {
        const findNegIndex = values.findIndex(
            (num: number): boolean => num === findNeg[0]
        );
        const sliceTillNeg = values.slice(0, findNegIndex);
        const findSumBeforeNeg = sliceTillNeg.reduce(
            (currentTotal: number, nb: number) => currentTotal + nb,
            0
        );
        newValues.splice(findNegIndex + 1, 0, findSumBeforeNeg);
        return newValues;
    }
}
