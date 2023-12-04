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
    const spring1Bio = spring1();
    spring1Bio.pop(); //removes the extra blank course
    let temp = courseList.filter(
        //id 13 is MATH242
        (course) => course.id == 13
    );
    spring1Bio.push(temp[0]);
    const fall2Bio = fall2();
    temp = courseList.filter(
        //id 25 is CHEM133, id 24 is CHEM103
        (course) => course.id == 25 || course.id == 24
    );
    fall2Bio.push(temp[0]);
    fall2Bio.push(blankCourse);
    const spring2Bio = spring2();
    temp = courseList.filter(
        //id 26 is CHEM104, id 14 is MATH205
        (course) => course.id == 26 || course.id == 14
    );
    spring2Bio.push(temp[0]);
    spring2Bio.push(temp[1]);
    spring2Bio.push(blankCourse);
    const fall3Bio = courseList.filter(
        //id 8 is CISC320 and id 28 is BISC207, id 36 is MATH349, id 43 is CHEM213
        (course) =>
            course.id == 8 ||
            course.id == 28 ||
            course.id == 36 ||
            course.id == 43
    );
    const spring3Bio = courseList.filter(
        //id 7 is CISC303 and id 29 is BISC208, id 37 is ENGL312, id 41 is CISC483
        (course) =>
            course.id == 7 ||
            course.id == 29 ||
            course.id == 37 ||
            course.id == 41 ||
            course.id == 40
    );
    spring3Bio.push(blankCourse);
    const fall4Bio = courseList.filter(
        //id 18 is UNVI401, id 16 is CISC498, id 89 is BISC401
        (course) => course.id == 18 || course.id == 16 || course.id == 89
    );
    fall4Bio.push(blankCourse);
    fall4Bio.push(blankCourse);
    fall4Bio.push(blankCourse);
    const spring4Bio = courseList.filter(
        //id 17 is CISC499 and id 19 is UNVI402 and id 90 is CISC436
        (course) => course.id == 17 || course.id == 19 || course.id == 90
    );
    spring4Bio.push(blankCourse);
    spring4Bio.push(blankCourse);
    spring4Bio.push(blankCourse);

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
