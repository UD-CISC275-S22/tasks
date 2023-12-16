import { Semester } from "../../Interfaces/semester";
import { Plan } from "../../Interfaces/plan";
import { courseList } from "../course";
import { blankCourse, fall1, spring1, fall2, spring2 } from "./plan";

//this is the plan for the Theory and Computation concentration
export function Theory(): Plan {
    //plan fields
    const title = "BS Computer Science";
    const concentration = "Theory and Computation";
    const id = 0;

    //making the courses for each semester in each year (whole 4 year plan)
    const fall1Theory = fall1();
    let spring1Theory = spring1();
    spring1Theory.pop(); //removes the extra blank course
    let temp = courseList.filter(
        //id 4882 is MATH242
        (course) => course.id == 4882
    );
    spring1Theory = [...spring1Theory, ...temp];
    let fall2Theory = fall2();
    fall2Theory = [...fall2Theory, blankCourse, blankCourse];
    let spring2Theory = spring2();
    temp = courseList.filter(
        //id 4871 is MATH205
        (course) => course.id == 4871
    );

    spring2Theory = [...spring2Theory, ...temp, blankCourse, blankCourse];

    let fall3Theory = courseList.filter(
        //id 2017 is CISC320, id 2016 is CISC304 and id 4898 is MATH349
        (course) => course.id == 2017 || course.id == 2016 || course.id == 4898
    );
    fall3Theory = [...fall3Theory, ...temp, blankCourse, blankCourse];

    let spring3Theory = courseList.filter(
        //id 2015 is CISC303,
        (course) => course.id == 2015
    );

    spring3Theory = [...spring3Theory, blankCourse, blankCourse, blankCourse];
    let fall4Theory = courseList.filter(
        //id 2058 is CISC498
        (course) => course.id == 2058
    );

    fall4Theory = [
        ...fall4Theory,
        blankCourse,
        blankCourse,
        blankCourse,
        blankCourse
    ];

    let spring4Theory = courseList.filter(
        //id 2059 is CISC499 and id 2028 is CISC401
        (course) => course.id == 2059 || course.id == 2028
    );
    spring4Theory = [...spring4Theory, blankCourse, blankCourse, blankCourse];

    //making the actual semester types
    const fall1Sem: Semester = {
        type: ["Fall"],
        year: 1,
        totalCredits: 15,
        courseList: fall1Theory
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
        courseList: spring1Theory
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
        courseList: fall2Theory
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
        courseList: spring2Theory
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
        courseList: fall3Theory
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
        courseList: spring3Theory
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
        courseList: fall4Theory
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
        courseList: spring4Theory
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

    //now the actual semester array for the Theory plan
    const Theory_Semesters = [
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
        semesters: Theory_Semesters,
        credits: 124
    };
}
