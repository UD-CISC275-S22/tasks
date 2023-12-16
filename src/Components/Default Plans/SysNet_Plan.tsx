import { Semester } from "../../Interfaces/semester";
import { Plan } from "../../Interfaces/plan";
import { courseList } from "../course";
import { blankCourse, fall1, spring1, fall2, spring2 } from "./plan";

export function SysNet(): Plan {
    //plan fields
    const title = "BS Computer Science";
    const concentration = "Systems and Networks";
    const id = 2;

    //making the courses for each semester in each year (whole 4 year plan)
    const fall1SysNet = fall1();
    const spring1SysNet = spring1();
    let fall2SysNet = fall2();
    fall2SysNet = [...fall2SysNet, blankCourse, blankCourse];
    let spring2SysNet = spring2();
    spring2SysNet = [...spring2SysNet, blankCourse, blankCourse, blankCourse];
    let fall3SysNet = courseList.filter(
        //id 2017 is CISC320, id 2022 is CISC361, and id 2015 is CISC303
        (course) => course.id == 2017 || course.id == 2022 || course.id == 2015
    );
    fall3SysNet = [...fall3SysNet, blankCourse, blankCourse];
    let spring3SysNet = courseList.filter(
        //id 2021 is CISC360 and id 2025 is CISC372
        (course) => course.id == 2021 || course.id == 2025
    );
    spring3SysNet = [...spring3SysNet, blankCourse, blankCourse, blankCourse];
    let fall4SysNet = courseList.filter(
        //id 6889 is UNVI401, id 2058 is CISC498, and id 2038 is CISC450
        (course) => course.id == 6889 || course.id == 2058 || course.id == 2038
    );
    fall4SysNet = [...fall4SysNet, blankCourse, blankCourse, blankCourse];
    let spring4SysNet = courseList.filter(
        //id 2059 is CISC499 and id 6890 is UNVI402 and id 2045 is CISC471
        (course) => course.id == 2059 || course.id == 6890 || course.id == 2045
    );
    spring4SysNet = [...spring4SysNet, blankCourse, blankCourse, blankCourse];

    //making the actual semester types
    const fall1Sem: Semester = {
        type: ["Fall"],
        year: 1,
        totalCredits: 15,
        courseList: fall1SysNet
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
        courseList: spring1SysNet
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
        courseList: fall2SysNet
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
        courseList: spring2SysNet
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
        courseList: fall3SysNet
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
        courseList: spring3SysNet
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
        courseList: fall4SysNet
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
        courseList: spring4SysNet
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

    //now the actual semester array for the AI plan
    const SysNet_Semesters = [
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
        semesters: SysNet_Semesters,
        credits: 124
    };
}
