/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    const div: number = 5 / 9;
    const subtract = temperature - 32;
    const celsius = subtract * div;
    return celsius;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let firstPositive: number;
    let secondPositive: number;
    let thirdPositive: number;
    if (first > 0) {
        firstPositive = first;
    } else {
        firstPositive = 0;
    }
    if (second > 0) {
        secondPositive = second;
    } else {
        secondPositive = 0;
    }
    if (third > 0) {
        thirdPositive = third;
    } else {
        thirdPositive = 0;
    }
    const sum = firstPositive + secondPositive + thirdPositive;
    return sum;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    const newMessage = message.toUpperCase() + "!";
    return newMessage;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    if (message.slice(-1) === "?") {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if (word.toLowerCase() === "yes") {
        return true;
    }
    if (word.toLowerCase() === "no") {
        return false;
    } else {
        return null;
    }
}
