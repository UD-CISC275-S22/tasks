import isPrereq from "./Requirements";
import Course from "../Course/Interfaces/Course.ts";

//make a course variable

test("Testing isPrereq function", () => {
    expect(isPrereq(CISC106, CISC260)).toBe(true);
});
