/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */

export function bookEndList(numbers: number[]): number[] {
    let ans = [...numbers];
    if (ans.length === 0) {
        ans = [];
    } else if (ans.length === 1) {
        ans = [ans[0], ans[0]];
    } else {
        ans = [ans[0], ans[ans.length - 1]];
    }
    return ans;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledNum = numbers.map((number: number): number => number * 3);
    return tripledNum;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const parsedStr = numbers.map((numb: string): number =>
        parseInt(numb) ? parseInt(numb) : 0
    );
    return parsedStr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removedStr = amounts.map((amount: string): string =>
        amount.includes("$") ? amount.slice(1) : amount
    );
    const parsedStr = removedStr.map((amount: string): number =>
        parseInt(amount) ? parseInt(amount) : 0
    );
    return parsedStr;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQues = messages.filter(
        (message: string): boolean =>
            message.substring(message.length - 1) !== "?"
    );
    const shout = noQues.map((message: string): string =>
        message.substring(message.length - 1) === "!"
            ? message.toUpperCase()
            : message
    );
    return shout;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    const numOfShortWords: number = shortWords.length;
    return numOfShortWords;
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
    const noRed = colors.filter((color: string): boolean => color != "red");
    const noBlue = noRed.filter((color: string): boolean => color != "blue");
    const noGreen = noBlue.filter((color: string): boolean => color != "green");
    return noGreen.length === 0 ? true : false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0 || (addends.length === 1 && addends[0] === 0)) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const toString = addends.map(
        (number: number): string => number.toString() + "+"
    );
    const ans: string = sum + "=" + toString;
    return ans.substring(0, ans.length - 1).replace(/,/g, "");
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
    const newValue = [...values];
    const newValue2 = [...values];
    const ifNegtive = newValue.find((value: number): boolean => value < 0);
    if (ifNegtive) {
        const nIndex = newValue.findIndex(
            (value: number): boolean => value < 0
        );
        const storePre = newValue.slice(0, nIndex);
        const sum = storePre.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        newValue2.splice(nIndex + 1, 0, sum);
        return newValue2;
    } else {
        const sum = newValue.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        return [...newValue, sum];
    }
}
