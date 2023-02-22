/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    const Celsius = (temperature - 32) * (5 / 9);
    return Celsius;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let ammount = 0;
    if (first > 0) {
        ammount = ammount + first;
    }
    if (second > 0) {
        ammount = ammount + second;
    }
    if (third > 0) {
        ammount = ammount + third;
    }
    return ammount;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    let Loud = message.toUpperCase();
    Loud = Loud + "!";
    return Loud;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    let question = true;
    question = message.endsWith("?");
    return question;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    let truth = null;
    if (word.toUpperCase() == "YES") {
        truth = true;
    }
    if (word.toUpperCase() == "NO") {
        truth = false;
    }
    return truth;
}
