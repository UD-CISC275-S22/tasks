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
    const spring1Theory = spring1();
    spring1Theory.pop(); //removes the extra blank course
    let temp = courseList.filter(
        //id 13 is MATH242
        (course) => course.id == 13
    );
    spring1Theory.push(temp[0]);
    const fall2Theory = fall2();
    fall2Theory.push(blankCourse);
    fall2Theory.push(blankCourse);
    const spring2Theory = spring2();
    temp = courseList.filter(
        //id 14 is MATH205
        (course) => course.id == 14
    );
    spring2Theory.push(temp[0]);
    spring2Theory.push(blankCourse);
    spring2Theory.push(blankCourse);

    const fall3Theory = courseList.filter(
        //id 8 is CISC320, id 35 is CISC304 and id 36 is MATH349
        (course) => course.id == 8 || course.id == 35 || course.id == 36
    );
    fall3Theory.push(blankCourse);
    fall3Theory.push(blankCourse);
    const spring3Theory = courseList.filter(
        //id 7 is CISC303,
        (course) => course.id == 7
    );
    spring3Theory.push(blankCourse);
    spring3Theory.push(blankCourse);
    spring3Theory.push(blankCourse);
    spring3Theory.push(blankCourse);
    const fall4Theory = courseList.filter(
        //id 16 is CISC498
        (course) => course.id == 16
    );
    fall4Theory.push(blankCourse);
    fall4Theory.push(blankCourse);
    fall4Theory.push(blankCourse);
    fall4Theory.push(blankCourse);
    const spring4Theory = courseList.filter(
        //id 17 is CISC499 and id 72 is CISC401
        (course) => course.id == 17 || course.id == 72
    );
    spring4Theory.push(blankCourse);
    spring4Theory.push(blankCourse);
    spring4Theory.push(blankCourse);

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
