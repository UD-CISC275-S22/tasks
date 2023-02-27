/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let result: number[];
    result = [...numbers];
    if (numbers.length > 1) {
        result = [numbers[0], numbers[numbers.length - 1]];
    } else if (numbers.length == 1) {
        result = [numbers[0], numbers[0]];
    } else {
        result = []; //ending with an undefined??
    }
    console.log(result);
    return result;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let result = [...numbers];
    //result = numbers.map((elements: number): number => 3 * elements);
    result = numbers.map((num: number): number => num * 3);
    console.log(result);
    return result;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
// how to check if a number can be converted
export function stringsToIntegers(numbers: string[]): number[] {
    let result = numbers.map((num: string): number => Number(num));
    result = result.map((val: number): number =>
        isNaN(val) ? (val = 0) : val
    );
    console.log(result);
    return result;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let removed: number[] = [];

    amounts = amounts.map((amts: string): string =>
        amts.charAt(0) == "$" ? amts.substring(1) : amts
    );
    removed = stringsToIntegers(amounts);
    console.log(removed);
    return removed;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    // adding "GREAT! " and a blank array ??
    messages = messages.filter(
        (msg: string): boolean => msg[msg.length - 1] != "?"
    );
    messages = messages.map((word: string): string =>
        word[word.length - 1] == "!" ? word.toUpperCase() : word
    );
    console.log(messages);
    return messages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((word: string): boolean => word.length < 4);
    const total = short.length;
    console.log(total);
    return total;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    //let valid: boolean = true;
    //console.log(Boolean);
    return colors.every(
        (color: string): boolean =>
            color == "red" || color == "blue" || color == "green"
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
    if (addends.length == 0) {
        return "0=0";
    } else {
        const total = addends.reduce((a, b) => a + b, 0);
        return (
            total +
            "=" +
            addends.map((num: number): string => num.toString()).join("+")
        );
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
    // new array of same numbers
    //const injected = [...values];
    //let total = 0;
    const negative = values.findIndex((val: number): boolean => val < 0);
    if (negative == -1) {
        const total = values.reduce(
            (curr: number, num: number) => curr + num,
            0
        );
        return [...values, total];
    }
    //values previous of negative number
    const prev = values.filter(
        (val: number): boolean => values.indexOf(val) < negative
    );
    const after = values.filter(
        (val: number): boolean => values.indexOf(val) > negative
    );
    //sum of values before negative
    const sum = prev.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const result = [...prev, values[negative], sum, ...after];
    console.log(result);
    return result;
}
