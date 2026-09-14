/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are
 * no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newArray = [...numbers];
    if (numbers.length === 0) {
        return [];
    }

    if (numbers.length === 1) {
        //use normal

        newArray.push(numbers[0]);
        return newArray;
    }

    newArray.splice(1, numbers.length - 2);
    return newArray;
    //returning splice gives the deleted elements if u save it to a new array
    //make sure to return the original array u removed
    //const firstLast = numbers.filter((num: number): boolean => num[i] === 0 || num[i]===-1 );

    // const lowPrices = prices.filter((price: number): boolean => price < 10);
    //const doubled = prices.map((price: number): number => price * 2);
    //console.log(doubled);
}

/**
 * Consume an array of numbers, and return a new array
 *  where each
 * number has been tripled (multiplied by 3).
 * const tripled = numbers.map((num: number): number => num*3);
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
    //const doubled = prices.map((price: number): number => price * 2);
}

/**
 * Consume an array of strings and convert them to integers.
 * If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    // If the price is less than 10, double the price,
    //  otherwise use the price unchanged
    //if price <10 double it otherwise (?) keep iot
    //  (price: number): number => (price < 10 ? 2 * price : price),
    const toInt = numbers.map((num: string): number =>
        Number.isNaN(parseInt(num)) ? Number("0") : Number(num),
    );
    //? means else if statement.
    // it executes the code before the : if true, and the code
    //  after the : if falsey. so condition if true do this: else do this
    //  or just //Number(num). //const x ='5 const y=3 console.log(y+ -x) gives -2 while y+ +x gives 8
    //triple or strict  ==== normally checks by reference rather than content. so const x= '5' const y=4+1. x is not === y
    //even tho they have the same content
    ///double = only looks at if they look equal so 5 == '5' is true while 5 === '5' is false. so (0.1+0.2 === 0.3) is false 
    //mdn docs, pythontutor
    //z refers to the same object in memory as x. So anything that happpens to x happens to z
    //While y has the same contents as x, x refers to a different obj than y
    //references do not exppose thier memory address but pointers do allowing u do pointer arithmetic
    return toInt;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning,
 * in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noCash = amounts.map((amount: string): string =>
        amount[0] === "$" ? amount.slice(1) : amount,
    );
    const removeD = noCash.map((amount: string): number =>
        Number.isNaN(parseInt(amount)) ? Number("0") : Number(amount),
    );

    return removeD;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end-> Filter
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    //const removeQ = messages.map((message: string): string =>  message.slice(-1) === "?" ? message.slice(-1): message);
    const removeQ = messages.filter(
        (message: string): boolean => message.slice(-1) !== "?",
    ); //removes any string ending in ?, filter neds bool
    const makeUpper = removeQ.map((message: string): string =>
        message.slice(-1) === "!" ? message.toUpperCase() : message,
    );
    return makeUpper; //condition to check if passes do this: otherwise do this
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const less4 = words.filter((word: string): boolean => word.length < 4); //less4 becomes the new array
    //filter always returns a boolean
    return less4.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const isRGB = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
    );
    //every checks if every element passes a condition and returns the boolean
    //so we just return the result of doing every
    return isRGB;
}
//THESE ARE CALLED ARRAY OPERATIONS
/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        //empty array check
        return "0=0";
    }
    //likely have to use join to combine the elements
    //first find the total using reduce
    const getSum = addends.reduce(
        (currentTotal: number, num: number): number => (currentTotal += num),
        0,
    );
    //then join that result with the others using join
    let start: string = getSum.toString() + "=";
    const joined = addends.join("+");
    return start + joined;
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
    //likely need reduce to get total
    const getTotal = values.reduce(
        (currentTotal: number, num: number): number => (currentTotal += num),
        0,
    );
    const checkAllPos = values.every((value: number): boolean => value >= 0);

    const toAppend = values.map((value: number): number => value);
    if (checkAllPos) {
        toAppend.push(getTotal);
        return toAppend;
    }
    const getNegIndex = values.findIndex((value: number): boolean => value < 0);
    //insert the sum fo all previous numbers in the list directly after the first neg number
    //let prevTotal: number = toAppend.slice(0, getNegIndex);
    const prevTotal = toAppend
        .slice(0, getNegIndex)
        .reduce((currTotal: number, num: number): number => currTotal + num, 0);
    toAppend.splice(getNegIndex + 1, 0, prevTotal);
    //we want to insert after the neg index so +1, we delete nothing,
    //and insert the prev total

    //thenm a opeartion that checks for neg numbers or if all are positive
    return toAppend;
}


/*
console.log( "Should we go outside or play on the computer?",
        isRainy ? "No , stay indoors":  ( 
                humidity >50          ? "no def stay in doors":
                (temperature > 70   ? "oh heck no": "YEAH LETS GO TO THE")
        )
    condition, tert check, run if fails: else do this if passes


)


*/
