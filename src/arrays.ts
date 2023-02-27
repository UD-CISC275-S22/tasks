/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let result: number[] = [];
    if (numbers.length == 1) {
        result = [numbers[0], numbers[0]];
    } else if (numbers.length == 0) {
        result = [];
    } else {
        result = [numbers[0], numbers[-1]];
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
    result = numbers.map((elements: number): number => 3 * elements);
    console.log(result);
    return result;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
// how to check if a number can be converted
export function stringsToIntegers(numbers: string[]): number[] {
    const result = numbers.map((num: string): number => Number(num));
    //console.log(result);
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
    //let removed: number[] = [];
    const removed = amounts.map((amt: string): number =>
        amt.includes("?") ? Number(amt.slice(0)) : Number(amt)
    );
    //console.log("All prices are low:", allLowPrices);
    return removed;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQues = messages.map((msg: string): string => msg.slice(-1));
    const allLoud = noQues.map(
        (stmt: string): string => stmt.toUpperCase() + "!"
    );
    return allLoud;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((word: string): boolean => word.length < 4);
    const total = short.length;
    return total;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    //let valid: boolean = true;
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
            addends.every((num: number): string => num.toString() + "+")
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
    const injected = [...values];
    let total = 0;
    (num: number): number[] => {
        if (num < 0) {
            injected.splice(num, 0, total);
        } else {
            total += num;
        }
        return injected;
    };
    //if no negatives or negative was last push total
    injected.push(total);
    //for loop of values
    // if values was less then 0 -> return injected.push(total)
    // else total += values[i]
    return injected;
}
