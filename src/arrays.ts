/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newArray: number[] = [];
    const firstElement: number = numbers[0];
    const lastElement: number = numbers[numbers.length - 1];
    if (numbers.length === 0) {
        return newArray;
    } else {
        newArray.splice(0, 0, firstElement);
        newArray.splice(1, 0, lastElement);
    }
    return newArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((str) => parseInt(str) || 0);
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amount) => {
        const amountWithoutDollars = amount.replace("$", "");
        const convertedInt = parseInt(amountWithoutDollars, 10);
        return isNaN(convertedInt) ? 0 : convertedInt;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const ExplinationArray = messages
        .map((message: string): string =>
            message.endsWith("!") ? message.toUpperCase() : message
        )
        .filter((messages) => !messages.endsWith("?"));
    return ExplinationArray;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lessThenFour = words.filter(
        (word: string): boolean => word.length < 4
    );
    return lessThenFour.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const newColors = colors.filter(
        (color: string): boolean =>
            color !== "red" && color !== "blue" && color !== "green"
    );

    if (newColors.length !== 0) {
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
    if (addends.length === 0) {
        return "0=0";
    } else {
        const sum = addends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const numbersJoined = addends.join("+");
        return sum + "=" + numbersJoined;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.

 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const newArray: number[] = [...values];
    const firstNegative = newArray.findIndex(
        (first: number): boolean => first < 0
    );
    if (firstNegative === -1) {
        const sum = newArray.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        newArray.push(sum);
    } else {
        const sum = newArray
            .slice(0, firstNegative)
            .reduce(
                (currentTotal: number, num: number) => currentTotal + num,
                0
            );
        newArray.splice(firstNegative + 1, 0, sum);
    }
    return newArray;
}
