/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
        // eslint-disable-next-line prettier/prettier
    } else {
        const firstLast: number[] = [];
        firstLast.splice(0, 0, numbers[0]);
        firstLast.splice(1, 0, numbers[numbers.length - 1]);
        return firstLast;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((value: number): number => value * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integers = numbers.map((int: string): number =>
        Number.isNaN(parseInt(int)) ? 0 : parseInt(int)
    );
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const values = amounts.map((value: string): string =>
        value[0] === "$" ? value.replace("$", "") : value
    );
    const integers = values.map((int: string): number =>
        Number.isNaN(parseInt(int)) ? 0 : parseInt(int)
    );
    values;
    return integers;
    /** maybe do "if" statements rather than whats taught
     * since need to check if "$" is in string then get rid of it
     * as well as seeing if string is able to parse
     */
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions = messages.filter(
        (text: string): boolean => text.includes("?") === false
    );
    const shouting = noQuestions.map((sentence: string): string =>
        sentence.includes("!") ? sentence.toUpperCase() : sentence
    );
    noQuestions;
    return shouting;
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
    const isRGB = colors.every(
        (color: string): boolean =>
            color === "red" ||
            color === "blue" ||
            color === "green" ||
            color.length === 0
    );
    return isRGB;
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
    } else {
        const sum = addends.reduce(
            (value: number, total: number): number => (total = total + value)
        );
        const adding = addends.join("+");
        return sum + "=" + adding;
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
    const locateNegative = values.findIndex(
        (value: number): boolean => value < 0
    );
    if (values.length === 0) {
        return [0];
    }
    if (locateNegative >= 0) {
        //problem in totalBeforeNegative
        const beforeNegative = values.slice(0, locateNegative);
        if (beforeNegative.length !== 0) {
            const totalBeforeNegative = beforeNegative.reduce(
                (value: number, total: number): number =>
                    (total = total + value)
            );
            //all above is good, splice is fucky :/
            const addBeforeNegative = [...values];
            addBeforeNegative.splice(
                locateNegative + 1,
                0,
                totalBeforeNegative
            );
            return addBeforeNegative;
        }
        if (locateNegative === 0) {
            const addingAfterNeg = [...values];
            addingAfterNeg.splice(1, 0, 0);
            return addingAfterNeg;
        } else {
            return [];
        }

        //const test = [...values, 9, 10];
        //return test;
    }
    if (locateNegative < 0) {
        const sum = values.reduce(
            (value: number, total: number): number => (total = total + value)
        );
        const addToEnd = [...values, sum];
        return addToEnd;
    }
    /*
    const totalBeforeNegative = values.reduce(
        (beforeNeg: number, total: number): number =>
            beforeNeg !== locateNegative ? (total += beforeNeg) : beforeNeg
    );
    */
}
