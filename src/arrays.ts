/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        const clonedNumbers = [...numbers];
        return clonedNumbers;
    } else if (numbers.length === 1) {
        const clonedNumbers = [...numbers, numbers[0]];
        return clonedNumbers;
    } else {
        const clonedNumbers = [[...numbers][0], numbers[numbers.length - 1]];
        return clonedNumbers;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numbers: number): number => numbers * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const convertToNumbers = [...numbers].map((onenum: string): number =>
        !isNaN(parseInt(onenum)) ? parseInt(onenum) : 0
    );
    return convertToNumbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const convertToNumbers = [...amounts].map((num: string): number => {
        if (num.includes("$") && !isNaN(parseInt(num.replace("$", "")))) {
            return parseInt(num.replace("$", ""));
        } else if (num.includes("$") && isNaN(parseInt(num.replace("$", "")))) {
            return 0;
        } else if (!isNaN(parseInt(num))) {
            return parseInt(num);
        } else {
            return 0;
        }
    });
    return convertToNumbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const filterQuestions = [...messages].filter(
        (message: string): boolean => !message.includes("?")
    );

    const capitalizeWords = filterQuestions.map((message: string): string =>
        message.includes("!") ? message.toUpperCase() : message
    );

    return capitalizeWords;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const counting = [...words].filter(
        (word: string): boolean => word.length < 4
    );
    return counting.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const colorList = [...colors].every(
        (color: string): boolean =>
            color.toUpperCase() === "RED" ||
            color.toUpperCase() === "GREEN" ||
            color.toUpperCase() === "BLUE"
    );

    return colorList;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if ([...addends].length === 0) {
        return "0=0";
    } else {
        const numbersinlist = [...addends].join("+");
        const sum = [...addends].reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        return sum + "=" + numbersinlist;
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
    if (values.some((num: number): boolean => num < 0)) {
        const copyofnumbers = [...values];
        const index = [...values].findIndex((num: number): boolean => num < 0);
        const copyofnumbers2 = [...values];
        copyofnumbers2.splice(index, copyofnumbers.length);
        const total = copyofnumbers2.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        copyofnumbers.splice(index + 1, 0, total);
        return copyofnumbers;
    } else {
        const copyofnumbers = [...values];
        const total = copyofnumbers.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        copyofnumbers.splice(values.length, 0, total);
        return copyofnumbers;
    }
}
