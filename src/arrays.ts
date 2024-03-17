/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((n: number): number => n * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((str: string): number =>
        isNaN(Number(str)) ? 0 : Number(str)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    amounts = amounts.map((str: string): string =>
        str.includes("$") ? str.replace("$", "") : str
    );

    return amounts.map((str: string): number =>
        isNaN(Number(str)) ? 0 : Number(str)
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    messages = messages.filter((str: string): boolean => !str.endsWith("?"));
    return messages.map((str: string): string =>
        str.includes("!") ? str.toUpperCase() : str
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((str: string): boolean => str.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every(
        (str: string): boolean =>
            str === "red" || str === "green" || str === "blue" || str === ""
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
    const sum = addends.reduce((accumular, current) => accumular + current, 0);
    return addends.length === 0 ? "0=0" : sum + "=" + addends.join("+");
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
    let sum = 0;
    const copiedArray = [...values];
    const copiedArray2 = [...values];
    const copiedArray3 = [...values];
    const first_n_index = copiedArray3.findIndex((n: number): boolean => n < 0);
    const first_part_slice = [...copiedArray.splice(0, first_n_index)];
    const second_part_slice = copiedArray2.splice(
        first_n_index + 1,
        values.length
    );
    if (first_n_index === -1) {
        sum = values.reduce(
            (accumular: number, current: number) => accumular + current,
            0
        );
    } else {
        sum = first_part_slice.reduce(
            (accumular: number, current: number) => accumular + current,
            0
        );
    }
    let finalArray = [];
    if (first_n_index === -1) {
        finalArray = [...values, sum];
    } else {
        finalArray = [
            ...first_part_slice,
            values[first_n_index],
            sum,
            ...second_part_slice
        ];
    }
    return finalArray;
    // const newArray: number[] = [...values];
    // const firstNegative = newArray.findIndex(
    //     (first: number): boolean => first < 0
    // );
    // if (firstNegative === -1) {
    //     const sum = newArray.reduce(
    //         (currentTotal: number, num: number) => currentTotal + num,
    //         0
    //     );
    //     newArray.push(sum);
    // } else {
    //     const sum = newArray
    //         .slice(0, firstNegative)
    //         .reduce(
    //             (currentTotal: number, num: number) => currentTotal + num,
    //             0
    //         );
    //     console.log(sum);
    //     newArray.splice(firstNegative + 1, 0, sum);
    // }
    // return newArray;
}
