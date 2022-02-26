/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let FLnumbers: number[];
    if (numbers.length === 0) {
        return numbers;
    } else {
        FLnumbers = [numbers[0], numbers[numbers.length - 1]];
        return FLnumbers;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledNumbers = numbers.map(
        (tripled: number): number => tripled * 3
    );
    return tripledNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const converted = numbers.map((conv: string): number =>
        parseInt(conv).toString() === conv ? parseInt(conv) : 0
    );
    return converted;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const remove = amounts.map((conv: string): string =>
        conv[0] === "$" ? conv.substring(1) : conv
    );
    const converted = stringsToIntegers(remove);
    return converted;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const yell = messages.map((shout: string): string =>
        shout[shout.length - 1] === "!" ? shout.toUpperCase() : shout
    );
    const noQuestions = yell.filter(
        (question: string): boolean => question[question.length - 1] !== "?"
    );
    return noQuestions;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    /*let sum = 0;
    let n = 0;
    for (n; n < words.length; n++) {
        if (words[n].length < 4) {
            sum++;
        }
    }*/
    const counted = words.filter((word: string): number => word.length < 4);
    return counted.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const n = colors.length;
    if (colors.length === 0) {
        return true;
    } else {
        const filtered = colors.filter(
            (word: string): boolean =>
                word === "red" || word === "blue" || word === "green"
        );
        if (filtered.length !== n) {
            return false;
        } else {
            return true;
        }
    }
    return false;
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
    const plus = addends.join("+");
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const sumTotal = sum + "=" + plus;
    return sumTotal;
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
    const anyNeg = values.some((num: number): boolean => num < 0);
    const negInd = values.findIndex((num: number): boolean => num < 0);
    const posValues = [...values];
    const negValues = values.slice(0, negInd);
    if (anyNeg) {
        const sum = negValues.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        posValues.splice(negInd + 1, 0, sum);
        return posValues;
    } else {
        const sum = posValues.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        posValues.push(sum);
        return posValues;
    }
}
