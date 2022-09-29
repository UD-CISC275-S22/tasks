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
    }
    const newlist = [numbers[0], numbers[numbers.length - 1]];
    return newlist;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const newAr = numbers.map((num: number): number => num * 3);
    return newAr;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const remD = numbers.map((amt: string): number => +amt);
    const arr = remD.map((amt2: number): number => (isNaN(amt2) ? 0 : amt2));

    return arr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    //remD removes the "$" sign
    const remD = amounts.map((amt: string): number =>
        amt[0] === "$" ? +amt.slice(1) : +amt
    );
    const arr = remD.map((amt2: number): number => (isNaN(amt2) ? 0 : amt2));
    //const nums = (amt1: number): boolean => isNaN(amt1) !== true;
    //const ret = remD.filter(nums);
    return arr;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    //Filter variable for " ? " char
    const remE = (ms: string): boolean => ms[ms.length - 1] !== "?";
    // Creating filtered array
    const remA = messages.filter(remE);
    //
    const ret = remA.map((ms1: string): string =>
        ms1[ms1.length - 1] === "!" ? ms1.toUpperCase() : ms1
    );
    return ret;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const filt = (word: string): boolean => word.length < 4;
    const ret = words.filter(filt);
    return ret.length;
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
    const filt = (color: string): boolean =>
        color === "red" || color === "blue" || color === "green";
    const newA = colors.filter(filt);
    if (newA.length === colors.length) {
        return true;
    }

    return false;
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
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const str = addends.reduce(
        (cusS: string, num: number) => cusS + num.toString() + "+",
        sum.toString() + "="
    );
    return str.substring(0, str.length - 1);
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
    const sum: number = values.reduce(
        (total: number, num: number) => total + num,
        0
    );
    let positivity: number[];
    if (values.every((element: number): boolean => element > 0)) {
        positivity = [...values, sum];
    } else if (values.findIndex((value: number): boolean => value < 0) == 0) {
        positivity = [...values];
        positivity.splice(1, 0, 0);
    } else {
        positivity = [...values];
        positivity.splice(
            values.findIndex((value: number): boolean => value < 0) + 1,
            0,
            sum +
                values[values.findIndex((value: number): boolean => value < 0)]
        );
    }
    return positivity;

    /*const filt = (num: number): boolean => num < 0;
    const NegA = values.filter(filt);
    if (NegA.length === 0) {
        //when no negative numbers in the list 
        const sum = values.reduce(
            (total: number, num: number) => total + num,
            0
        );
        const newA = [...values, sum];
        return newA;
    }

    const idx = values.indexOf(NegA[0]);
    //console.log(NegA[0], " ", idx);
    const tmp = values.slice(0, idx);
    //console.log(tmp);
    const sum = tmp.reduce((total: number, num: number) => total + num, 0);
    //console.log("sum is ", sum);
    values.splice(idx + 1, 0, sum);
    const newA = [...values];
    //console.log(newA);
    return values;*/
}
