/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    //correct
    if (numbers.length > 1) {
        return [numbers[0], numbers[numbers.length - 1]];
    } else if (numbers.length > 0) {
        return [numbers[0], numbers[0]];
    } else {
        return [];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    //correct
    const tripled = numbers.map((ele) => ele * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    //correct
    const integers = numbers.map((ele) =>
        Number.isNaN(Number(ele)) ? 0 : parseInt(ele)
    );
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    //please tell me how to do this in one line I'm losing it
    //also the ternary statement wouldn't let me get away without a :
    //forgive my spaghetti code; it works I promise
    const prices = amounts.map((ele) =>
        ele.includes("$") ? ele.replace("$", "") : ele
    );
    const prices2 = prices.map((ele) => parseInt(ele));
    const prices3 = prices2.map((ele) => (Number.isNaN(Number(ele)) ? 0 : ele));
    return prices3;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    //correct
    const reciepts = messages.filter(
        (message: string): boolean => !message.includes("?")
    );
    const theDMS = reciepts.map((ele) =>
        ele.includes("!") ? (ele = ele.toUpperCase()) : ele
    );
    return theDMS;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    //correct
    const shorties = words.filter((word: string): boolean => word.length < 4);
    return shorties.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) {
        return true;
    }
    const filterRed = colors.filter((color: string): boolean => color != "red");
    const filterBlue = filterRed.filter(
        (color: string): boolean => color != "blue"
    );
    const filterGreen = filterBlue.filter(
        (color: string): boolean => color != "green"
    );
    if (filterGreen.length > 0) {
        return false;
    } else {
        return true;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    //if empty array
    if (addends.length < 1) {
        return "0=0";
    }

    //if only one element
    if (addends.length == 1) {
        return addends[0].toString() + "=" + addends[0].toString();
    }

    const sum = addends.reduce((a, b) => a + b, 0);

    //forgive me for this code idk how to do it in one line

    //convert to string
    const answer = addends.map((ele) => ele.toString());
    //add plus signs
    const finalAnswer = answer.map((ele) => ele + "+");
    //add equal sign and sum
    finalAnswer.unshift(sum.toString() + "=");
    //kill plus sign at the end
    finalAnswer[finalAnswer.length - 1] = finalAnswer[
        finalAnswer.length - 1
    ].replace("+", "");
    //put everything into one string without commas
    const finalfinalAnswer = finalAnswer.join("");
    return finalfinalAnswer;
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
    let sumneg = 0;
    let flag = false;
    const injected = values.map((ele: number): number => {
        if (ele < 0 && flag == false) {
            flag = true;
            sumneg = sum;
            sum += ele;
            return ele;
        } else {
            sum += ele;
            return ele;
        }
    });
    if (flag == false) {
        injected.push(sum);
    } else {
        const negative = injected.findIndex((inject: number) => inject < 0);
        injected.splice(negative + 1, 0, sumneg);
    }
    return injected;
}
