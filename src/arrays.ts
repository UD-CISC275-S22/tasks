import { parseIsolatedEntityName } from "typescript";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    //FINISHED
    let book: number[] = [];
    if (numbers.length === 0) {
        book = [];
    }
    if (numbers.length === 1) {
        book = [numbers[0], numbers[0]];
    }
    if (numbers.length > 1) {
        book = [numbers[0], numbers[numbers.length - 1]];
    }

    return book;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    //FINISHED
    //triple each element and put in a new array
    //use a map
    const tripled = numbers.map((price: number): number => price * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    // FINISHED
    //map and change the values to the integer form
    //map AGAIN, use conditionally modify array, if it is NaN (use isNaN function)
    //then replace it with 0
    const ints = numbers.map((num: string): number => parseInt(num));
    const zeros = ints.map((num: number): number =>
        isNaN(num) ? (num = 0) : num
    );
    return zeros;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    //FINISHED
    const noDollars = amounts.map((num: string): string =>
        num.replace("$", "")
    );
    const toNumber = noDollars.map((num: string): number => parseInt(num));
    //add in same as above to remove zeros
    const zeros = toNumber.map((num: number): number =>
        isNaN(num) ? (num = 0) : num
    );
    return zeros;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    //FINISHED
    //map first and change everything to shouting
    const shout = messages.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );

    //filter and get rid of question
    const noQuest = shout.filter(
        (message: string): boolean => message[message.length - 1] !== "?"
    );

    return noQuest;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    //FINISHED
    const short = words.filter((word: string): boolean => word.length < 4);
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    //FINISHED
    //use every
    const allColors = colors.every(
        (color: string): boolean =>
            color === "blue" || color === "red" || color === "green"
    );
    return allColors;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    // FINISHED
    //use reduce
    //items: X[]
    //(resultsSoFar: Y, currentItem: x)-> Y
    //INitial value: x
    //return y

    const sum = addends.reduce(
        (CurrentTotal: number, num: number) => CurrentTotal + num,
        0
    );
    //sum is calculated, now let's convert the array to a string array

    const toStr = addends.map((num: number): string => num.toString());

    //now, reduce again, but make it a string
    let partialStr: str[] = toStr.reduce(
        (CurrentStr: string, str: string) => CurrentStr + str + "+",
        0
    );

    const partialSTR = partialStr.toString();
    const par = partialSTR.slice(1);
    let par2: string = par.slice(0, -1);

    if (addends.length === 0) {
        par2 = "0";
    }

    const totalStr = sum + "=" + par2;

    return totalStr;
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
    //how would i do this?
    //go through, and copy all the positive integers over (so if they are > 0, move it to the new array)
    //IF you reach a negative number, then INSERT the sum of previous numbers
    //copy the last element of the array

    //use spread?
    //spread: creates a new copy of an existing array

    //copy an array, and add a new element:
    //const pricesAtEnd = [...prices, 55];

    //insert a number after another:
    //make a duplicate of the original array ....
    //const pricesInside = [...prices]

    //use 'splice' method
    //3 arguments: new position, number of deletions, new element
    //pricesInside.splice(2, 0, 499)

    //integer that will hold the index of the negative value

    //new array

    //values.subarray(0, negative)

    //we will put the new value in here ^

    //use find, to find the negative element

    //copy the array
    let dup: number[] = [...values];

    //find the index negative number
    const negativeIndex = values.findIndex((num: number): boolean => num < 0);

    let temp: number[] = [];
    //subarray, to then sum
    if (negativeIndex !== -1) {
        temp = values.slice(0, negativeIndex);
    } else {
        temp = values;
    }

    //find the sum - go through temp
    const sum = temp.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );

    //add the sum to the array - splice

    if (negativeIndex === -1) {
        dup.splice(dup.length, 0, sum);
    } else {
        dup.splice(negativeIndex + 1, 0, sum);
    }

    return dup;
}
