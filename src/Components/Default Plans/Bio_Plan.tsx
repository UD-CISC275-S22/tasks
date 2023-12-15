import { Semester } from "../../Interfaces/semester";
import { Plan } from "../../Interfaces/plan";
import { courseList } from "../course";
import { blankCourse, fall1, spring1, fall2, spring2 } from "./plan";

//this is the plan for the Bio concentration
export function Bio(): Plan {
    //plan fields
    const title = "BS Computer Science";
    const concentration = "Bioinformatics";
    const id = 0;

    //making the courses for each semester in each year (whole 4 year plan)
    const fall1Bio = fall1();
    let spring1Bio = spring1();
    let temp = courseList.filter(
        //id 4882 is MATH242
        (course) => course.id == 4882
    );
    spring1Bio = [...spring1Bio, blankCourse, blankCourse];
    let fall2Bio = fall2();
    temp = courseList.filter(
        //id 1414 is CHEM133, id 1403 is CHEM103
        (course) => course.id == 1414 || course.id == 1403
    );

    fall2Bio = [...fall2Bio, ...temp, blankCourse];
    let spring2Bio = spring2();
    temp = courseList.filter(
        //id 1404 is CHEM104, id 4871 is MATH205
        (course) => course.id == 1404 || course.id == 4871
    );
    spring2Bio = [...spring2Bio, ...temp, blankCourse];
    const fall3Bio = courseList.filter(
        //id 2017 is CISC320 and id 991 is BISC207, id 4898 is MATH349, id 1419 is CHEM213
        (course) =>
            course.id == 2017 ||
            course.id == 991 ||
            course.id == 4898 ||
            course.id == 1419
    );
    let spring3Bio = courseList.filter(
        //id 2015 is CISC303 and id 992 is BISC208, id 2868 is ENGL312, id 2054 is CISC483
        (course) =>
            course.id == 2015 ||
            course.id == 992 ||
            course.id == 2868 ||
            course.id == 2054
    );
    spring3Bio = [...spring3Bio, blankCourse];
    let fall4Bio = courseList.filter(
        //id 6889 is UNVI401, id 2058 is CISC498, id 1007 is BISC401
        (course) => course.id == 6889 || course.id == 2058 || course.id == 1007
    );
    fall4Bio = [...fall4Bio, blankCourse, blankCourse, blankCourse];
    let spring4Bio = courseList.filter(
        //id 2059 is CISC499 and id 6890 is UNVI402 and id 2033 is CISC436
        (course) => course.id == 2059 || course.id == 6890 || course.id == 2033
    );
    spring4Bio = [...spring4Bio, blankCourse, blankCourse, blankCourse];
    //making the actual semester types
    const fall1Sem: Semester = {
        type: ["Fall"],
        year: 1,
        totalCredits: 15,
        courseList: fall1Bio
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
        courseList: spring1Bio
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
        courseList: fall2Bio
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
        courseList: spring2Bio
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
        courseList: fall3Bio
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
        courseList: spring3Bio
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
        courseList: fall4Bio
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
        courseList: spring4Bio
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

    //now the actual semester array for the Bio plan
    const Bio_Semesters = [
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
        semesters: Bio_Semesters,
        credits: 124
    };
}
