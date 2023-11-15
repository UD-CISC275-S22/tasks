//import React from "react";
import { courseList } from "./course";
import { findCourse } from "./course";

//example test case for the course.tsx file
//see note in the App.test.tsx file about unit tests (as to why we do not currently have more)
test("Can correctly find a course in the total course list", () => {
    expect(findCourse(courseList, 0)).not.toEqual(0); //if it did return 0 then it didn't find the course and didn't return correctly so we will test to make sure it doesn't throw an "erorr"
});
