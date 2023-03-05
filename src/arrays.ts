/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newArray: number[] = [];
    if (numbers.length === 0) {
        return newArray;
    } else {
        newArray.push(numbers[0]);
        newArray.push(numbers[numbers.length - 1]);
        return newArray;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const newArray = [...numbers];
    const tripled = newArray.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newArray = [...numbers];
    const integers = newArray.map((num: string): number => parseInt(num));
    const converted = integers.map((num: number): number =>
        isNaN(num) ? (num = 0) : num
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
    const newArray = [...amounts];
    const dollars = newArray.map((amount: string): number =>
        amount.startsWith("$")
            ? parseInt(amount.substring(1))
            : parseInt(amount)
    );
    const dollars2 = dollars.map((amount: number): number =>
        isNaN(amount) ? (amount = 0) : amount
    );
    return dollars2;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newArray = [...messages];
    const hasExclamationFilter = (message: string): boolean =>
        message.includes("!");
    const noExclamationFilter = (message: string): boolean =>
        !message.includes("!");
    const noQuestionFilter = (message: string): boolean =>
        !message.includes("?");
    const noExclamation = newArray.filter(noExclamationFilter);
    const noQuestions = noExclamation.filter(noQuestionFilter);
    const allExclamation = newArray.filter(hasExclamationFilter);
    const ExclamAndNoQuest = allExclamation.filter(noQuestionFilter);
    const newMessages = ExclamAndNoQuest.map((message: string): string =>
        message.toUpperCase()
    );
    return [...noQuestions, ...newMessages];
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lessThanFour = (word: string): boolean => word.length < 4;
    const count = words.filter(lessThanFour);
    return count.length;
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
    const rgb = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return rgb;
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
    const sum = addends.reduce((total: number, num: number) => total + num, 0);
    return sum + "=" + addends.join("+");
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
    const newArray = [...values];
    let checkNegatives = false;
    checkNegatives = newArray.every((value: number): boolean => value > 0);

    if (checkNegatives) {
        const sum = newArray.reduce(
            (total: number, num: number) => total + num,
            0
        );
        return [...newArray, sum];
    } else {
        const findFirstNegative = newArray.findIndex(
            (value: number): boolean => value < 0
        );
        const beforeNegative = newArray.slice(0, findFirstNegative);
        const sum = beforeNegative.reduce(
            (total: number, num: number) => total + num,
            0
        );
        newArray.splice(findFirstNegative + 1, 0, sum);
        return newArray;
    }
}
