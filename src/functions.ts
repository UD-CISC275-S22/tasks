import { stringify } from "querystring";
import { FirstInputPolyfillCallback } from "web-vitals";

/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    console.log(((temperature - 32) * 5) / 9);
    return ((temperature - 32) * 5) / 9;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    const nums = [first, second, third];
    const numb = nums.filter((x) => x > 0);
    const result = numb.reduce((accumulator, current) => {
        return accumulator + current;
    }, 0);
    return result;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    const str = message;
    const ex = "!";
    const newstr = str.toUpperCase();
    const str3 = newstr.concat(ex.toString());
    return str3;
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
    word === ("YES" || "yes") ? true : false;
    word === ("NO" || "no") ? true : false;
    if (word === "YES" || word === "yes") {
        return true;
    } else if (word === "NO" || word === "no") {
        return false;
    } else {
        return null;
    }
}
function subtract(temperature: number, arg1: number): any {
    throw new Error("Function not implemented.");
}

function multiply(num: void, arg1: number): any {
    throw new Error("Function not implemented.");
}

function a(a: any, arg1: number[]) {
    throw new Error("Function not implemented.");
}
