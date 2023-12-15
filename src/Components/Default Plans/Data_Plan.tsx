import { Semester } from "../../Interfaces/semester";
import { Plan } from "../../Interfaces/plan";
import { courseList } from "../course";
import { blankCourse, fall1, spring1, fall2, spring2 } from "./plan";

//this is the plan for the Data Science concentration
export function Data(): Plan {
    //plan fields
    const title = "BS Computer Science";
    const concentration = "Data Science Concentration";
    const id = 0;

    //making the courses for each semester in each year (whole 4 year plan)
    const fall1Data = fall1();
    const spring1Data = spring1();
    spring1Data.pop(); //removes the extra blank course
    let temp = courseList.filter(
        //id 13 is MATH242
        (course) => course.id == 13
    );
    spring1Data.push(temp[0]);
    const fall2Data = fall2();
    temp = courseList.filter(
        //id 57 is MATH243
        (course) => course.id == 57
    );
    fall2Data.push(temp[0]);
    fall2Data.push(blankCourse);
    const spring2Data = spring2();
    temp = courseList.filter(
        //id 14 is MATH205
        (course) => course.id == 14
    );
    spring2Data.push(temp[0]);
    spring2Data.push(blankCourse);
    spring2Data.push(blankCourse);

    const fall3Data = courseList.filter(
        //id 8 is CISC320, id 35 is CISC304 and id 36 is MATH349
        (course) => course.id == 8 || course.id == 35 || course.id == 36
    );
    fall3Data.push(blankCourse);
    fall3Data.push(blankCourse);
    const spring3Data = courseList.filter(
        //id 7 is CISC303, id 10 is CISC372, and id 56 == 437
        (course) => course.id == 7 || course.id == 10 || course.id == 56
    );
    spring3Data.push(blankCourse);
    spring3Data.push(blankCourse);
    const fall4Data = courseList.filter(
        //id 2058 is CISC498, id 40 = CISC481
        (course) => course.id == 2058 || course.id == 16
    );
    fall4Data.push(blankCourse);
    fall4Data.push(blankCourse);
    fall4Data.push(blankCourse);
    const spring4Data = courseList.filter(
        //id 2059 is CISC499
        (course) => course.id == 2059
    );
    spring4Data.push(blankCourse);
    spring4Data.push(blankCourse);
    spring4Data.push(blankCourse);
    spring4Data.push(blankCourse);

    //making the actual semester types
    const fall1Sem: Semester = {
        type: ["Fall"],
        year: 1,
        totalCredits: 15,
        courseList: fall1Data
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
        courseList: spring1Data
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
        courseList: fall2Data
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
        courseList: spring2Data
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
        courseList: fall3Data
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
        courseList: spring3Data
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
        courseList: fall4Data
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
        courseList: spring4Data
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

    //now the actual semester array for the Data plan
    const Data_Semesters = [
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
        semesters: Data_Semesters,
        credits: 124
    };
}
