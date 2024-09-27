/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    return ((temperature - 32) * 5) / 9;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    if (first > 0 && second > 0 && third > 0) {
        return first + second + third;
    }
    if (first > 0 && second < 0 && third > 0) {
        return first + third;
    }
    if (first > 0 && second > 0 && third < 0) {
        return first + second;
    }
    if (first < 0 && second > 0 && third > 0) {
        return second + third;
    }
    if (first < 0 && second < 0 && third > 0) {
        return third;
    }
    if (first < 0 && second > 0 && third < 0) {
        return second;
    }
    if (first > 0 && second < 0 && third < 0) {
        return first;
    }
    if (first < 0 && second < 0 && third < 0) {
        return 0;
    }
    return 0;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    return message.toUpperCase() + "!";
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    return message.endsWith("?");
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if (word.toLowerCase() == "yes") {
        return true;
    }
    if (word.toLowerCase() == "no") {
        return false;
    }
    if (word.toLowerCase() != "yes" && word.toLowerCase() != "no") {
        return null;
    }
    return true;
}
