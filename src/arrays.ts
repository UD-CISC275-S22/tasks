/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const answer: number[] = [];
    let answer_2: number[] = [];
    if (numbers.length == 0) {
        return answer;
    }
    if (numbers.length == 1) {
        return [numbers[0], numbers[0]];
    } else {
        answer_2 = [numbers[0], numbers[numbers.length - 1]];
        return answer_2;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const answer = numbers.map(
        (baby_answer: number): number => baby_answer * 3
    );
    return answer;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const intie = numbers.map((babyintie: string): number =>
        parseInt(babyintie)
    );
    const intie_2 = intie.map((baby_intie: number): number =>
        isNaN(baby_intie) ? (baby_intie = 0) : baby_intie
    );
    return intie_2;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const finna_dolla = amounts.map((dolla: string): string =>
        dolla.includes("$") ? dolla.replace("$", "") : dolla
    );
    const finna_finna_dolla = finna_dolla.map((bb: string): number =>
        parseInt(bb)
    );
    const finna_finna_finna_dolla = finna_finna_dolla.map(
        (dolla_dolla: number): number =>
            isNaN(dolla_dolla) ? (dolla_dolla = 0) : dolla_dolla
    );

    return finna_finna_finna_dolla;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const finna_message = messages.map((baby_message: string): string =>
        baby_message.includes("!") ? baby_message.toUpperCase() : baby_message
    );
    const question_finna = finna_message.filter(
        (m: string): boolean => !m.includes("?")
    );
    return question_finna;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let x = 0;
    words.map((b: string): number => (b.length < 4 ? x++ : x));
    return x;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const checker2 = colors.map(
        (c: string): boolean => c == "red" || c == "green" || c == "blue"
    );
    if (checker2.includes(false)) {
        return false;
    } else {
        return true;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let temp = 0;
    addends.map((int: number): number => (temp = temp + int));
    const adding = addends.map((num: number): string => num.toString() + "+");
    const newtemp = temp.toString();
    const newtemp2 = adding.toString();
    const newadding = newtemp2.replaceAll(",", "");
    const answerss = (newtemp + "=" + newadding).slice(0, -1);
    if (addends.length == 0) {
        return "0=0";
    }
    return answerss;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const isNeg = values.map((num: number): boolean => num > 0);
    const arr = [...values];
    if (!isNeg) {
        const find_negative = values.findIndex((n: number): boolean => n < 0);
        const filtered_array = arr.filter(
            (n: number): boolean =>
                arr.indexOf(n) < arr.indexOf(find_negative) - 2
        );
        const total = filtered_array.reduce(
            (total: number, num: number) => total + num,
            0
        );
        return values.splice(find_negative + 1, 0, total);
    } else {
        let count_for_none = 0;
        values.map(
            (n: number): number => (count_for_none = count_for_none + n)
        );
        return [...values, count_for_none];
    }
}
/**
    let total = 0;
    let count = 0;
    const copy = [...values];
    const map_0 = values.map((num: number): boolean => num > 0);
    if (!map_0) {
        const firstneg = copy.findIndex((num: number): boolean => num < 0);
        const map = copy.map((num: number): number =>
            copy.indexOf(num) < copy.indexOf(firstneg)
                ? (total = total + num)
                : total
        );
        const map_2 = map.map((num: number): number =>
            copy.indexOf(num) < copy.indexOf(firstneg) ? count++ : count
        );
        copy.splice(count, 0, total);
        return copy;
    } else {
        const map_3 = copy.map((num: number): number =>
            num >= 0 ? (total = total + num) : total
        );

        return [...values, total];
    }
}
*/
