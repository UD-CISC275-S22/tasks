/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 * test
 */
export function fahrenheitToCelius(temperature: number): number {
    const degreesC: number = (temperature - 32) * (5 / 9);
    return degreesC;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    // eslint-disable-next-line no-extra-parens
    first > 0 ? first : (first = 0);
    // eslint-disable-next-line no-extra-parens
    second > 0 ? second : (second = 0);
    // eslint-disable-next-line no-extra-parens
    third > 0 ? third : (third = 0);
    let d = 0;
    if (first > 0) {
        d = d + first;
    }
    if (second > 0) {
        d = d + second;
    }
    if (third > 0) {
        d = d + third;
    }
    return d;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    message = message.toUpperCase().concat("!");
    return message;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    const ans = message[message.length - 1] === "?" ? true : false;
    return ans;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    word = word.toLowerCase();
    if (word === "yes") {
        return true;
    } else if (word === "no") {
        return false;
    }
    return null;
}
