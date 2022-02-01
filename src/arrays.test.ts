import { bookEndList } from "./arrays";

describe("Testing the array functions", () => {
    const NUMBERS_1 = [1, 2, 3];

    test("Testing the bookEndList function", () => {
        // Ensure that the original array was not changed
        expect(bookEndList(NUMBERS_1)).not.toBe(NUMBERS_1);
        // And that a correct new array was returned
        expect(bookEndList(NUMBERS_1)).toEqual([1, 3]);
    });
});
