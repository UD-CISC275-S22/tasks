/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    //const listCount = numbers.length;
    const newArray = [];
    if (numbers.length > 0) {
        newArray.push(numbers[0], numbers[numbers.length - 1]);
    }
    return newArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    numbers = numbers.map((number: number): number => number * 3);
    return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    // const dollars = prices.map((price: number): string => "$"+price.toString());
    //doubledLowPrices = prices.map((price: number): number => (price < 10) ? (2 * price) : price
    const Integers = numbers.map((num: string): number =>
        isNaN(Number(num)) ? 0 : parseInt(num)
    );
    return Integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const newArray = amounts.map((amount: string): string =>
        amount.replace("$", "")
    );

    const numsArray = newArray.map((num: string): number =>
        isNaN(Number(num)) ? 0 : Number(num)
    );
    return numsArray;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newArray = messages.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message
    );

    const finalArray = newArray.filter(
        (message: string): boolean => !message.endsWith("?")
    );
    return finalArray;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const newArray = words.filter((word: string): boolean => word.length < 4);
    return newArray.length;
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
    const color = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );

    return color;
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
        (total: number, num: number): number => (total += num)
    );

    const str: string[] = addends.map((num: number): string => num.toString());
    let final: string = str.join("+");
    final = sum + "=" + final;
    return final;
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
    if (values.length === 0) {
        const answer = [0];
        return answer;
    }
    const nonNegative = values.every((num: number): boolean => num > 0);
    if (nonNegative) {
        const sum = values.reduce(
            (total: number, num: number): number => (total += num)
        );
        return [...values, sum];
    } else {
        const Negative = values.findIndex((num: number): boolean => num < 0);
        const tmp = values.slice(0, Negative);
        const sum = tmp.reduce(
            (total: number, num: number): number => (total += num),
            0
        );
        const final: number[] = [...values];
        final.splice(Negative + 1, 0, sum);
        return final;
    }
    return [];
}
