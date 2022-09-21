/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let temp: number[] = [];

    if (numbers.length === 0) {
        temp = [];
        return temp;
    }

    temp = [numbers[0], numbers[numbers.length - 1]];

    return temp;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const temp = numbers.map((value: number): number => value * 3);

    return temp;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const temp = numbers.map((value: string): number =>
        isNaN(Number(value)) ? 0 : Number(value)
    );
    return temp;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let temp = amounts.map((value: string): number =>
        value[0] === "$" ? Number(value.slice(1)) : Number(value)
    );
    temp = temp.map((value: number): number => (isNaN(value) ? 0 : value));
    return temp;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let temp: string[] = messages.map((value: string): string =>
        value.slice(-1) === "!" ? value.toUpperCase() : value
    );
    temp = temp.filter((value: string): boolean => value.slice(-1) !== "?");
    return temp;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const temp = words.map((word: string): number => word.length);
    const val = temp.reduce(
        (total: number, num: number) => (num >= 4 ? total + 0 : total + 1),
        0
    );
    return val;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const temp = colors.filter(
        (color: string): boolean =>
            color !== "red" && color !== "green" && color !== "blue"
    );
    if (temp.length !== 0) {
        return false;
    }
    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((total: number, num: number) => total + num, 0);
    const nums = addends.map((num: number): string => num.toString());
    let exp = nums.reduce(
        (result: string, value: string) => result + "+" + value,
        ""
    );

    exp = exp.slice(1);

    if (exp.length === 0) {
        exp = "0";
    }

    exp = "=".concat(exp);
    exp = sum.toString().concat(exp);

    return exp;
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
    const temp = [...values];
    if (temp.every((value: number): boolean => value > 0)) {
        temp.push(
            temp.reduce(
                (total: number, num: number) => (total = total + num),
                0
            )
        );
        return temp;
    }

    const index = temp.findIndex((value: number): boolean => value < 0);

    const subTemp = temp.slice(0, index);

    const sum = subTemp.reduce(
        (total: number, num: number) => (total = total + num),
        0
    );

    temp.splice(index + 1, 0, sum);

    return temp;
}
