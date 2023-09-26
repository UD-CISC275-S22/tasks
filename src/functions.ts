/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    const final = (temperature - 32) * (5 / 9);
    return final;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    // Create an array to store the numbers.
    const numbers = [first, second, third];

    // Use the reduce method to sum only the numbers that are greater than zero.
    const sum = numbers.reduce((accumulator, currentValue) => {
        if (currentValue > 0) {
            return accumulator + currentValue;
        }
        return accumulator;
    }, 0);

    return sum;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    // Convert the string to uppercase and add an exclamation mark.
    return message.toUpperCase() + "!";
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    // Convert the string to an array of characters, and check if the last character is a question mark.
    const characters = message.split("");
    return characters[characters.length - 1] === "?";
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    const lowerCaseWord = word.toLowerCase();
    if (lowerCaseWord === "yes") {
        return true;
    } else if (lowerCaseWord === "no") {
        return false;
    } else {
        return null;
    }
}
