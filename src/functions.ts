/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    let x: number = (temperature - 32) * (5 / 9);
    return x;
}

/**
 * Consumes three numbers and produces their sum. BUT you
 * should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let sum: number = 0;
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
 * Consumes a string and produces the same string in
 *  UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    let newM: string = message.toUpperCase();
    return newM + "!";
}

/**
 * Consumes a string (a message) and returns a boolean if the
 *  string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    // let len: number = message.length;
    let last: string = message.slice(-1); //extracts last to a str
    return last === "?";
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or
 * `null`. If the string
 * is "yes" (upper or lower case), then return `true`.
 * If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if (word.toLowerCase() === "yes" || word.toUpperCase() === "YES") {
        return true;
    } else if (word.toLowerCase() === "no" || word.toUpperCase() === "NO") {
        return false;
        //else if only runs if preceeding statements fail
    } else {
        return null;
    }
}
