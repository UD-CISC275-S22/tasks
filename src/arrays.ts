/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    } else if (numbers.length == 1) {
        const nums = [numbers[0], numbers[0]];
        return nums;
    } else {
        const nums2 = [numbers[0], numbers[numbers.length - 1]];
        return nums2;
    }
    //conditional checking for none
    //conditional checking for one (can use .length or whatever)
    //make new array+ append the first and last index of number array (length-1 to get last index, [0] to get first)t
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    //use map function !!!1!1!
    const tripled = numbers.map((NewNums: number): number => 3 * NewNums);
    //
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    //isNaN()-> stands for is not a num
    //Number();

    //make new array
    //check every item in array to see if convertable using NaN
    //change to num
    const strToInt = numbers.map((number: string): number =>
        Number.isNaN(Number(number)) ? 0 : Number(number)
    );

    //use map function !!!1!1!
    //
    return strToInt;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    //remove $ sign from beginning of string if applicable
    //can do that by using ternary if
    //take string array, return as number array
    //
    const numbers = amounts.map((amount: string): string =>
        amount[0] === "$" ? amount.replace("$", "") : amount
    );

    const strToInt = numbers.map((number: string): number =>
        Number.isNaN(Number(number)) ? 0 : Number(number)
    );

    //use map function !!!1!1!
    //
    return strToInt;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    //
    const NoQuestions = messages.filter(
        // Check if the string in `sentence` includes the substring "?"
        (sentence: string): boolean => !sentence.includes("?")
    );
    const exclamations = NoQuestions.map((message: string): string =>
        message.includes("!") ? message.toUpperCase() : message
    );

    return exclamations;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const sum = words.reduce(
        (currentTotal: number, word: string) =>
            word.length < 4 ? currentTotal + 1 : currentTotal,
        0
    );

    return sum;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    //check if list is empty conditional
    // if colors.length() === reduce function sum or whatever, true
    // else, not really
    const sum = colors.reduce(
        (currentTotal: number, color: string) =>
            color === "red" || color === "blue" || color === "green"
                ? currentTotal + 1
                : currentTotal,
        0
    );

    if (sum === colors.length) {
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
    //sum of all in array
    if (addends.length === 0) {
        return "0=0";
    }

    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    //makes into a string
    const sentence = addends.reduce(
        (currentTotal: string, nums: number) =>
            addends.indexOf(nums) === addends.length - 1
                ? currentTotal + nums.toString()
                : currentTotal + nums.toString() + "+",
        ""
    );

    return sum.toString() + "=" + sentence;
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
    //do the ... thing !!
    //Inserting into an Array
    //Adding an element to the end (push)
    const findNeg = values.findIndex((value: number): boolean => value < 0);

    const clonedPositives = [...values];

    if (findNeg === -1) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const AtEnd = [...values, sum];
        return AtEnd;
    } else {
        const sum = values.reduce(
            (currentTotal: number, num: number) =>
                values.indexOf(num) < findNeg
                    ? currentTotal + num
                    : currentTotal,
            0
        );
        clonedPositives.splice(findNeg + 1, 0, sum);
        return clonedPositives;
    }
}
