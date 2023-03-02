/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    const celsius: number = ((temperature - 32) * 5) / 9;
    return celsius;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    if (first < 0) {
        first = 0;
    }
    if (second < 0) {
        second = 0;
    }
    if (third < 0) {
        third = 0;
    }
    return first + second + third;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    const upped: string = message.toUpperCase();
    return upped + "!";
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    return message.slice(-1) === "?";
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    let converted = true;
    if (word === "yes" || word === "YES") {
        converted = true;
        return converted;
    } else if (word === "no" || word === "NO") {
        converted = false;
        return converted;
    }
    return null;
}
