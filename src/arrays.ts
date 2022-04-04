/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let first: number[] = [];
    if (numbers.length <= 0) {
        first = [];
    } else {
        if (numbers.length == 1) {
            first = [numbers[0], numbers[0]];
        } else {
            first = [numbers[0], numbers[numbers.length - 1]];
        }
    }
    return first;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triples = numbers.map((numbers: number): number => numbers * 3);
    return triples;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const convert = numbers.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
    return convert;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const revert = amounts.map((num: string): string =>
        num.includes("$")
            ? num.substring(1, num.length)
            : (num = num.substring(0, num.length))
    );
    const revert1 = revert.map((num1: string): number =>
        isNaN(parseInt(num1)) ? 0 : parseInt(num1)
    );
    return revert1;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const remove = messages.filter(
        (num: string): boolean => !num.includes("?")
    );
    const caps = remove.map((num1: string): string =>
        num1.includes("!") ? num1.toUpperCase() : num1
    );
    return caps;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const remove = words.filter((num1: string): boolean => num1.length < 4);
    return remove.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const rgb = colors.map((num: string): boolean =>
        num === "red" || num === "green" || num === "blue" ? true : false
    );
    const isrgb = rgb.reduce(
        (isrgb: boolean, num: boolean) => isrgb === num,
        true
    );
    return isrgb;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length > 0) {
        const sum = addends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        return sum.toString() + "=" + addends.join("+");
    } else {
        return "0=0";
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
    const find = values.findIndex((price: number): boolean => price < 0);
    const copy = [...values];
    const copy1 = [...values];
    find === -1 ? copy : copy.splice(find);
    const sum = copy.reduce(
        (total: number, num: number): number => total + num,
        0
    );
    find === -1
        ? copy1.splice(copy.length, 0, sum)
        : copy1.splice(find + 1, 0, sum);
    return copy1;
}
