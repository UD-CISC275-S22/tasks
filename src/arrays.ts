/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const numbersLen = numbers.length;
    if (numbersLen === 0) {
        return [];
    }
    const newList = [numbers[0], numbers[numbersLen - 1]];
    return newList;
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
    // Number.isNaN(parseInt(str))?
    return numbers.map((str: string): number =>
        parseInt(str) ? parseInt(str) : 0
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
    const noSign = amounts.map((num: string): string =>
        num.charAt(0) === "$" ? num.substring(1) : num
    );
    //const intList = noSign.map((str: string): number =>
    //    parseInt(str) === NaN ? 0 : parseInt(str)
    //);

    return noSign.map((str: string): number =>
        parseInt(str) ? parseInt(str) : 0
    );
    //return intList;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    // cannot find name???
    const newArray = messages.map((message: string): string =>
        message.charAt(message.length - 1) === "!"
            ? (message = message.toUpperCase())
            : message
    );
    // idk what the second type means
    return newArray.filter(
        (message: string): boolean => message.charAt(message.length - 1) !== "?"
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let num = 0;
    num = words.reduce(
        (total: number, curr: string): number =>
            curr.length < 4 ? total + 1 : total,
        0
    );
    return num;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    //let tf = 0
    // use every?
    //let RGB = colors.map((color: string): string => (color === "red") ? (color) :
    //(color === "blue") ? (color) : (color === "green") ? (color) : (return false));

    return colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
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
    // type before arrow?
    let str = "";
    // needs to sum instead of making new array
    // reduce?
    const total = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    if (total === 0) {
        return "0=0";
    } else {
        str = str.concat(total.toString(), "=");
        // use reduce
        addends.map((nums: number) => {
            str = str.concat(nums.toString(), "+");
        });
        str = str.substring(0, str.length - 1);
        return str;
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
    // eslint-disable-next-line prefer-const
    let newArray = [...values];

    const tf = newArray.every((value: number): boolean => value >= 0);

    if (tf === true) {
        const sum = newArray.reduce((total, num) => total + num, 0);

        const final = [...newArray, sum];
        return final;
    } else {
        const negInd = newArray.findIndex((num: number): boolean => num < 0);
        const positiveList = newArray.slice(0, negInd);

        //const sum = positiveList.reduce((total, num) => total + num, 0);
        const sum = positiveList.reduce(
            (total: number, num: number): number => total + num,
            0
        );
        newArray.splice(negInd + 1, 0, sum);
        return newArray;
    }
}
