/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newNums: number[] = [];
    if (numbers.length > 2) {
        newNums = [numbers[0], numbers[numbers.length - 1]];
    } else if (numbers.length == 1) {
        newNums = [numbers[0], numbers[0]];
    } else {
        return [];
    }
    return newNums;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numbers): number => numbers * 3);
    console.log(tripled);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newNums = numbers.map((nums) => parseInt(nums));
    const returnList = newNums.map((x) => (isNaN(x) ? (x = 0) : x));
    return returnList;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    //if x starts with $, substring starting at 1, add to x
    const noDollar = amounts.map((x) => (x.includes("$") ? x.substring(1) : x));
    //parses all integers
    const newNums = noDollar.map((j) => parseInt(j));
    //if integer cannot be parsed, convert to 0
    const newDollars = newNums.map((z) => (isNaN(z) ? (z = 0) : z));
    return newDollars;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    /**
     * toUpperArray = messages.map((m: string): if endswith("!") { m.toUpperCase} else {m})
     * endsWith(!) ? toUpper : messageElement
     *
     * removeQArray = toUpperArray.filter((q: string) boolean => q.include("?") == false)
     *
     * return removeQArray
     */
    const noQuestions = messages.filter(
        (message: string): boolean => message[message.length - 1] != "?"
    );
    const newString = noQuestions.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
    return newString;
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
    if (colors == []) {
        return true;
    }
    const allRBG = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return allRBG;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const theNums = addends.join("+");
    console.log(theNums);
    const sum = addends.reduce((accumulaor, value) => {
        return accumulaor + value;
    }, 0);
    if (addends.length == 0) {
        return "0=0";
    } else {
        return sum + "=" + theNums;
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
//find index function to find index less than 0 , loc = findIndex neg
// if arr is data, data. slice [loc
//data.slice()
//reduce
export function injectPositive(values: number[]): number[] {
    const newVal = [...values];
    const loc = newVal.findIndex((x) => x < 0);
    const begin = newVal.slice(0, loc);
    if (loc === -1) {
        const sum = newVal.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        return [...newVal, sum];
    } else {
        const sum = begin.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        newVal.splice(loc + 1, 0, sum);
        return newVal;
    }
    /* if (loc === -1) {
        console.log([...values, sum]);
        return [...values, sum];
    } else {
        console.log([...begin, sum, ...end]);
        return [...begin, sum, ...end];
    } */
}
/*
function c(c: any, colors: string[]) {
    throw new Error("Function not implemented.");
}
*/
