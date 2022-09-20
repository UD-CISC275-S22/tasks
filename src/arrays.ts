/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    numbers = [...numbers];
    if (numbers.length === 1) {
        numbers = [...numbers, ...numbers];
    } else {
        numbers = [...numbers];
        numbers = numbers.filter(
            (val: number): boolean =>
                numbers.indexOf(val) === 0 ||
                numbers.indexOf(val) === numbers.length - 1
        );
    }
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    numbers = [...numbers];
    numbers = numbers.map((val: number): number => val * 3);
    return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    numbers = [...numbers];
    const number_num = numbers.map((val: string): number =>
        Number.isNaN(Number(val)) ? 0 : +val
    );
    return number_num;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    amounts = [...amounts];
    amounts = amounts.map((val: string) =>
        Array.from(val)[0] === "$" ? val.slice(1) : val
    );
    const amounts_int = stringsToIntegers(amounts);
    return amounts_int;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    messages = [...messages];
    messages = messages.filter(
        (val: string): boolean => Array.from(val)[val.length - 1] !== "?"
    );
    messages = messages.map((val: string) =>
        Array.from(val)[val.length - 1] === "!" ? val.toUpperCase() : val
    );
    return messages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    words = [...words];
    words = words.filter((val: string): boolean => val.length < 4);
    return words.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let bl = false;
    colors = [...colors];
    colors = colors.filter(
        (val: string): boolean =>
            !(val === "red" || val === "blue" || val === "green")
    );
    colors.length === 0 ? (bl = true) : (bl = false);
    return bl;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    addends = [...addends];
    let sum = 0;
    let addstr = "0";
    if (addends.length !== 0) {
        sum = addends.reduce(
            (currentTotal: number, val: number) => currentTotal + val,
            0
        );
        const addends_str = addends.map((val: number): string =>
            val.toString()
        );
        addstr = addends_str.join("+");
    }
    return sum + "=" + addstr;
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
    values = [...values];
    let negindex = values.findIndex((val: number): boolean => val < 0);
    negindex === -1 ? (negindex = values.length) : negindex;
    let tempvalues = [...values];
    tempvalues = tempvalues.filter(
        (val: number): boolean => tempvalues.indexOf(val) < negindex
    );
    const sum = tempvalues.reduce(
        (currentTotal: number, val: number) => currentTotal + val,
        0
    );
    values.splice(negindex + 1, 0, sum);
    return values;
}
