/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return numbers;
    }
    const arr = [0, 0];
    if (numbers.length == 1) {
        arr[0] = numbers[0];
        arr[1] = numbers[0];
    }
    arr[0] = numbers[0];
    arr[1] = numbers[numbers.length - 1];
    return arr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    numbers = numbers.map((Element) => {
        return Element * 3;
    });
    return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numberNums = numbers.map((str) => {
        const parseMe = parseInt(str, 10);
        return isNaN(parseMe) ? 0 : parseMe;
        return typeof parseMe === "number" ? parseMe : 0;
    });
    return numberNums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const amountNums = amounts.map((str) => {
        if (str[0] == "$") {
            str = str.slice(1);
        }
        const parsedNum = parseInt(str);
        return isNaN(parsedNum) ? 0 : parsedNum;
    });
    return amountNums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    messages = messages.filter((x: string): boolean => x[x.length - 1] !== "?");
    const messagesNew = messages.map((str) => {
        if (str.endsWith("!")) {
            return str.toUpperCase();
        }
        return str;
    });
    return messagesNew;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let Nums = 0;
    words.map((str) => {
        if (str.length < 4) {
            Nums += 1;
        }
    });
    return Nums;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let isRGB = true;
    colors.map((str) => {
        if (str != "red" && str != "blue" && str != "green") {
            isRGB = false;
        }
    });
    return isRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let Sum = 0;
    addends.map((Element) => {
        Sum += Element;
    });
    let done = Sum.toString();
    done += "=";
    addends.map((Element) => {
        done += Element.toString();
        done += "+";
    });
    if (done[done.length - 1] === "+") {
        done = done.substring(0, done.length - 1);
    }
    if (addends.length === 0) {
        return "0=0";
    }
    return done;
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
    const negInd = values.findIndex((num) => num < 0);
    let sum = values.reduce((acc, val) => (val >= 0 ? acc + val : acc), 0);
    if (negInd === -1) {
        sum = values.reduce((acc, val) => acc + val, 0);
    } else {
        sum = values.slice(0, negInd).reduce((acc, val) => acc + val, 0);
    }
    const done = [...values];
    if (negInd === -1) {
        done.push(sum);
    } else {
        done.splice(negInd + 1, 0, sum);
    }
    return done;
}
