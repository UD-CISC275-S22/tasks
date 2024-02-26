/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const last = numbers.length - 1;
    if (numbers.length == 0) {
        return [];
    } else if (numbers.length == 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[last]];
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
    const strNum: number[] = numbers.map((num: string): number => {
        const parseNum = parseInt(num);
        return parseNum !== parseNum ? 0 : parseNum;
    });
    return strNum;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const numAmount = amounts.map((amount: string): number => {
        const parseAmt = parseInt(amount.replace("$", ""));
        return isNaN(parseAmt) ? 0 : parseAmt;
    });
    return numAmount;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const remove = messages.filter((message) => !message.endsWith("?"));
    const newList = remove.map((message) =>
        message.endsWith("!") ? message.toUpperCase() : message
    );

    return newList;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lt4 = words.filter((word: string) => word.length < 4);
    return lt4.length;
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
    const colorsArr = ["red", "blue", "green"];
    const rgb = colors.filter((color) => colorsArr.includes(color));

    return rgb.length === colors.length;
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
    const sum = addends.reduce((num: number, curr: number) => num + curr, 0);
    const addendStr = addends.join("+");
    return sum + "=" + addendStr;
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
export function injectPositive(oldValues: number[]): number[] {
    //find index of neg num
    const index = oldValues.findIndex((num) => num < 0);

    const values = [...oldValues];

    //used to determine if there is a neg num present
    if (index !== -1) {
        //calculate sum of numbers before neg num
        const sum = values.slice(0, index).reduce((num, curr) => num + curr, 0);
        // Insert sum at index of the first neg num
        values.splice(index + 1, 0, sum);
    } else {
        // Calculate sum
        const sum = values.reduce((num, curr) => num + curr, 0);
        //add sum to array
        values.push(sum);
    }

    return values;
}
