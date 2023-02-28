/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length >= 2) {
        numbers = [numbers[0], numbers[numbers.length - 1]];
        return numbers;
    }
    if (numbers.length === 1) {
        numbers = [...numbers, ...numbers];
        return numbers;
    }
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((triple: number): number => triple * 3);
    return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const arrNums = numbers.map((element: string): number => {
        if (isNaN(parseInt(element))) {
            return 0;
        } else {
            return parseInt(element);
        }
    });
    return [];
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const firstArr = amounts.map(
        (element: string): string =>
            element.includes("$") ? element.replace("$", "") : element //this line checks to see if there is a is a dollar sign in the array and if there is, then it will return a empty string
    );
    let secondArr = firstArr.map((element: string): number =>
        parseInt(element)
    );
    secondArr = secondArr.map((element: number): number => {
        if (isNaN(Number(element))) {
            return 0;
        } else {
            return Number(element);
        }
    });
    return [];
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let arrMessages = messages.map(
        (message: string): string =>
            message.endsWith("!") ? message.toUpperCase() : message //checks to see if the message ends with an ! and if it does, then make that string uppercase
    );
    arrMessages = arrMessages.filter(
        (message: string): boolean => message.charAt(message.length - 1) !== "?" //if the string ends with a question mark, then the string is not included in the new array
    );
    return [];
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    words = words.filter((letter: string): boolean => letter.length < 4); //This will give you number of words in the array that have a length less than 4 and then it will return the new array
    return 0;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let arrColor = false;
    if (arrColor === null) {
        return true;
    }
    arrColor = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
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
        addends = [...addends, 0];
    }
    const sum = addends.reduce(
        (total: number, nums: number) => total + nums,
        0
    );
    const add = addends.join("+");
    return "";
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
    const loc = values.findIndex(
        (negativeNum: number): boolean => negativeNum < 0 //this finds the index of the number and returns a boolean and if it is true then the number will be less than 0
    );
    if (loc === -1) {
        const addSum = values.reduce(
            (currentSum: number, num: number) => currentSum + num,
            0
        );
        return [...values, addSum];
    } else {
        const begin = values.slice(0, loc); //the beginning of the array before the negative number
        const end = values.slice(loc + 1, values.length); //the end of the array after the negative number
        //console.log(end);
        const addSum = begin.reduce(
            (currentSum: number, num: number) => currentSum + num,
            0
        );
        return [...begin, values[loc], addSum, ...end];
    }
}
