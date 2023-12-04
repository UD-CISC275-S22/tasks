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
    const spring1High = spring1();
    spring1High.pop(); //removes the extra blank course
    let temp = courseList.filter(
        //id 13 is MATH242
        (course) => course.id == 13
    );
    spring1High.push(temp[0]);
    const fall2High = fall2();
    temp = courseList.filter(
        //id 57 is MATH243
        (course) => course.id == 57
    );
    fall2High.push(temp[0]);
    fall2High.push(blankCourse);
    const spring2High = spring2();
    temp = courseList.filter(
        //id 14 is MATH205
        (course) => course.id == 14
    );
    spring2High.push(temp[0]);
    spring2High.push(blankCourse);
    spring2High.push(blankCourse);

    const fall3High = courseList.filter(
        //id 8 is CISC320, id 7 is CISC303 and id 9 is CISC361
        (course) => course.id == 8 || course.id == 7 || course.id == 9
    );
    fall3High.push(blankCourse);
    fall3High.push(blankCourse);
    const spring3High = courseList.filter(
        //id 60 is CISC360 and id 10 is CISC372
        (course) => course.id == 60 || course.id == 10
    );
    spring3High.push(blankCourse);
    spring3High.push(blankCourse);
    spring3High.push(blankCourse);
    const fall4High = courseList.filter(
        //id 16 is CISC498
        (course) => course.id == 16
    );
    fall4High.push(blankCourse);
    fall4High.push(blankCourse);
    fall4High.push(blankCourse);
    fall4High.push(blankCourse);
    const spring4High = courseList.filter(
        //id 17 is CISC499 and id 47 is CISC450 and id 61 is CISC471
        (course) => course.id == 17 || course.id == 47 || course.id == 61
    );
    spring4High.push(blankCourse);
    spring4High.push(blankCourse);

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
