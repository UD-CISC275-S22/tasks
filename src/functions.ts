/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    
    return ((temperature -32) * (5/9));
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let ans: number;
    ans = 0;
    if(first > 0)
    {
        ans += first;
    }
    if(second > 0)
    {
        ans += second;
    }
    if(third > 0)
    {
        ans += third;
    }

    return ans;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    let ans: string = message.toUpperCase();
    ans += '!';
    return ans;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    /*
    let test: string = message.slice[-1];
    console.log(test);
    if(test === '?')
    {
        return true;
    }
    return false;
    */
   

    // Used chatgpt for this, tried using a method i found online which is commented out above but I couldn't grab the last index.
    return message.trim().endsWith("?");
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if(word.toLowerCase() === 'yes')
    {
        return true;
    }
    if(word.toLowerCase() === 'no')
    {
        return false;
    }
    return null;
}
