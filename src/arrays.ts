/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newNumbers = [...numbers];
    if (newNumbers.length === 1) {
        newNumbers.push(newNumbers[0]);
        return newNumbers;
    }
    if (newNumbers.length === 0) {
        return [];
    } else {
        return newNumbers.filter(
            (num: number): boolean =>
                newNumbers[0] === num ||
                newNumbers[newNumbers.length - 1] === num
        );
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((num: number): number => num * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const array = numbers.map((str: string): number => {
        const parse = parseInt(str);
        return isNaN(parse) ? 0 : parse;
    });
    return array;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const array = amounts.map((amount: string): number => {
        const parse = parseInt(amount.replace("$", ""));
        return isNaN(parse) ? 0 : parse;
    });
    return array;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removeQ = messages.filter(
        (message: string): boolean => message[message.length - 1] !== "?"
    );
    const shout = removeQ.map((loud: string): string =>
        loud[loud.length - 1] === "!" ? loud.toUpperCase() : loud
    );
    return shout;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.reduce(
        (sum: number, word: string) =>
            word.length < 4 ? (sum = sum + 1) : (sum += 0),
        0
    );
    return short;
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
    return colors.every(
        (color: string): boolean =>
            color === "red" || color === "green" || color === "blue"
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
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (total: number, num: number) => (total += num),
        0
    );
    return sum.toString() + "=" + addends.join("+");
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
    let array: number[] = [];
    let add = 0;
    const negative = values.findIndex((val: number): boolean => val < 0);
    if (negative === -1) {
        if (values.length === 0) {
            return [0];
        }
        add = values.reduce((current: number, val: number) => current + val);
        array = [...values, add];
    } else {
        if (negative !== 0) {
            const sliced = values.slice(0, negative);
            add = sliced.reduce(
                (current: number, val: number) => current + val
            );
        }
        array = [...values];
        array.splice(negative + 1, 0, add);
    }
    return array;
}
