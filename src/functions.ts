/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    let C = 0;
    C = (temperature - 32) * (5 / 9);
    return C;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let sum = 0;
    if (first > 0) {
        sum += first;
    }
    if (second > 0) {
        sum += second;
    }
    if (third > 0) {
        sum += third;
    }
    return sum;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    const newString: string = message.toUpperCase();
    return newString + "!";
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    const last = message.charAt(message.length - 1);
    return last === "?";
    //message.endsWith("?");
    //return true;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    const input: string = word.toLowerCase();

    if (input === "yes") {
        return true;
    } else if (input === "no") {
        return false;
    } else {
        return null;
    }
}
