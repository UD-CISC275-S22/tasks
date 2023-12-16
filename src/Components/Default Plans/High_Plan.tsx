import { Semester } from "../../Interfaces/semester";
import { Plan } from "../../Interfaces/plan";
import { courseList } from "../course";
import { blankCourse, fall1, spring1, fall2, spring2 } from "./plan";

//this is the plan for the High Performance Computing concentration
export function High(): Plan {
    //plan fields
    const title = "BS Computer Science";
    const concentration = "High Performance Computing";
    const id = 0;

    //making the courses for each semester in each year (whole 4 year plan)
    const fall1High = fall1();
    let spring1High = spring1();
    spring1High.pop(); //removes the extra blank course
    let temp = courseList.filter(
        //id 4882 is MATH242
        (course) => course.id == 4882
    );
    spring1High = [...spring1High, ...temp];

    let fall2High = fall2();
    temp = courseList.filter(
        //id 4883 is MATH243
        (course) => course.id == 4883
    );
    fall2High = [...fall2High, ...temp, blankCourse];

    let spring2High = spring2();
    temp = courseList.filter(
        //id 4871 is MATH205
        (course) => course.id == 4871
    );
    spring2High = [...spring2High, ...temp, blankCourse, blankCourse];

    let fall3High = courseList.filter(
        //id 2017 is CISC320, id 2022 is CISC361, and id 2015 is CISC303
        (course) => course.id == 2017 || course.id == 2022 || course.id == 2015
    );
    fall3High = [...fall3High, blankCourse, blankCourse];

    let spring3High = courseList.filter(
        //id 2021 is CISC360 and id 2025 is CISC372
        (course) => course.id == 2021 || course.id == 2025
    );
    spring3High = [...spring3High, blankCourse, blankCourse, blankCourse];

    let fall4High = courseList.filter(
        //id 25583 is CISC498
        (course) => course.id == 2558
    );

    fall4High = [
        ...fall4High,
        blankCourse,
        blankCourse,
        blankCourse,
        blankCourse
    ];

    let spring4High = courseList.filter(
        //id 2059 is CISC499 and id 2338 is CISC450 and id 2045 is CISC471
        (course) => course.id == 2059 || course.id == 2338 || course.id == 2045
    );
    spring4High = [...spring4High, blankCourse, blankCourse];

    //making the actual semester types
    const fall1Sem: Semester = {
        type: ["Fall"],
        year: 1,
        totalCredits: 15,
        courseList: fall1High
    };
    const winter1Sem: Semester = {
        type: ["Winter"],
        year: 1,
        totalCredits: 0,
        courseList: [blankCourse]
    };
    const spring1Sem: Semester = {
        type: ["Spring"],
        year: 1,
        totalCredits: 15,
        courseList: spring1High
    };
    const summer1Sem: Semester = {
        type: ["Summer"],
        year: 1,
        totalCredits: 0,
        courseList: [blankCourse]
    };
    const fall2Sem: Semester = {
        type: ["Fall"],
        year: 2,
        totalCredits: 15,
        courseList: fall2High
    };
    const winter2Sem: Semester = {
        type: ["Winter"],
        year: 2,
        totalCredits: 0,
        courseList: [blankCourse]
    };
    const spring2Sem: Semester = {
        type: ["Spring"],
        year: 2,
        totalCredits: 15,
        courseList: spring2High
    };
    const summer2Sem: Semester = {
        type: ["Summer"],
        year: 2,
        totalCredits: 0,
        courseList: [blankCourse]
    };
    const fall3Sem: Semester = {
        type: ["Fall"],
        year: 3,
        totalCredits: 15,
        courseList: fall3High
    };
    const winter3Sem: Semester = {
        type: ["Winter"],
        year: 3,
        totalCredits: 0,
        courseList: [blankCourse]
    };
    const spring3Sem: Semester = {
        type: ["Spring"],
        year: 3,
        totalCredits: 15,
        courseList: spring3High
    };
    const summer3Sem: Semester = {
        type: ["Summer"],
        year: 3,
        totalCredits: 0,
        courseList: [blankCourse]
    };
    const fall4Sem: Semester = {
        type: ["Fall"],
        year: 4,
        totalCredits: 15,
        courseList: fall4High
    };
    const winter4Sem: Semester = {
        type: ["Winter"],
        year: 4,
        totalCredits: 0,
        courseList: [blankCourse]
    };
    const spring4Sem: Semester = {
        type: ["Spring"],
        year: 4,
        totalCredits: 15,
        courseList: spring4High
    };
    const summer4Sem: Semester = {
        type: ["Summer"],
        year: 4,
        totalCredits: 0,
        courseList: [blankCourse]
    };
    const fall5Sem: Semester = {
        type: ["Fall"],
        year: 5,
        totalCredits: 15,
        courseList: [blankCourse]
    };
    const winter5Sem: Semester = {
        type: ["Winter"],
        year: 5,
        totalCredits: 0,
        courseList: [blankCourse]
    };
    const spring5Sem: Semester = {
        type: ["Spring"],
        year: 4,
        totalCredits: 15,
        courseList: [blankCourse]
    };

    //now the actual semester array for the High plan
    const High_Semesters = [
        fall1Sem, //INDEX 0
        winter1Sem, //INDEX 1
        spring1Sem, //INDEX 2
        summer1Sem, //INDEX 3
        fall2Sem, //INDEX 4
        winter2Sem, //INDEX 5
        spring2Sem, //INDEX 6
        summer2Sem, //INDEX 7
        fall3Sem, //INDEX 8
        winter3Sem, //INDEX 9
        spring3Sem, //INDEX 10
        summer3Sem, //INDEX 11
        fall4Sem, //INDEX 12
        winter4Sem, //INDEX 13
        spring4Sem, //INDEX 14
        summer4Sem, //INDEX 15
        fall5Sem, //INDEX 16
        winter5Sem, //INDEX 17
        spring5Sem //INDEX 18
    ];

    //returns the actual plan
    return {
        title: title,
        concentration: concentration,
        id: id,
        semesters: High_Semesters,
        credits: 124
    };
}
