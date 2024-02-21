/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let ends: number[] = [];
    if (numbers.length === 0) {
        return ends;
    } else if (numbers.length === 1) {
        ends = [...numbers, ...numbers];
        return ends;
    } else {
        ends = [numbers[0], numbers[numbers.length - 1]];
        return ends;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((number) => number * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((number) => {
        const parsedInt = parseInt(number, 10);
        return isNaN(parsedInt) ? 0 : parsedInt;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((number) => {
        //remove dollar sign
        const noDollarSign = number.startsWith("$") ? number.slice(1) : number;
        //convert from string to int
        const parsedInt = parseInt(noDollarSign, 10);
        //determine if not A Number
        return isNaN(parsedInt) ? 0 : parsedInt;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions = messages
        .map((message: string): string => {
            return message.endsWith("!") ? message.toUpperCase() : message;
        })
        .filter((messages) => !messages.endsWith("?"));
    return noQuestions;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
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
    return colors.every(
        (color: string): boolean =>
            color === "red" || color === "green" || color === "blue"
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
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const mathExpression = addends.join("+");
    return sum + "=" + mathExpression;
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
    //make a new array
    const newValues: number[] = [...values];
    //find the first negative number
    const findNegative = newValues.findIndex(
        (value: number): boolean => value < 0
    );
    //if no negatives, summate and push to end
    if (findNegative === -1) {
        const currSum = newValues.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        newValues.push(currSum);
    } else {
        const negNumArr = newValues
            .slice(0, findNegative)
            .reduce(
                (currentTotal: number, num: number) => currentTotal + num,
                0
            );
        newValues.splice(findNegative + 1, 0, negNumArr);
    }
    return newValues;
}
