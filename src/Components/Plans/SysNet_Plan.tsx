import { Semester } from "../../Interfaces/semester";
import { Plan } from "../../Interfaces/plan";
import { courseList } from "../course";
import { blankCourse, fall1, spring1, fall2, spring2 } from "./plan";

export function SysNet(): Plan {
    //plan fields
    const title = "BS Computer Science";
    const concentration = "Systems and Networks Concentration";
    const id = 2;

    //making the courses for each semester in each year (whole 4 year plan)
    const fall1SysNet = fall1();
    const spring1SysNet = spring1();
    const fall2SysNet = fall2();
    fall2SysNet.push(blankCourse);
    fall2SysNet.push(blankCourse);
    const spring2SysNet = spring2();
    spring2SysNet.push(blankCourse);
    spring2SysNet.push(blankCourse);
    spring2SysNet.push(blankCourse);
    const fall3SysNet = courseList.filter(
        //id 8 is CISC320, id 9 is CISC361, and id 7 is CISC303
        (course) => course.id == 8 || course.id == 9 || course.id == 7
    );
    fall3SysNet.push(blankCourse);
    fall3SysNet.push(blankCourse);
    const spring3SysNet = courseList.filter(
        //id 60 is CISC360 and id 10 is CISC372
        (course) => course.id == 60 || course.id == 10
    );
    spring3SysNet.push(blankCourse);
    spring3SysNet.push(blankCourse);
    spring3SysNet.push(blankCourse);
    const fall4SysNet = courseList.filter(
        //id 18 is UNVI401, id 16 is CISC498, and id 47 is CISC450
        (course) => course.id == 18 || course.id == 16 || course.id == 47
    );
    fall4SysNet.push(blankCourse);
    fall4SysNet.push(blankCourse);
    fall4SysNet.push(blankCourse);
    const spring4SysNet = courseList.filter(
        //id 17 is CISC499 and id 19 is UNVI402 and id 61 is CISC471
        (course) => course.id == 17 || course.id == 19 || course.id == 61
    );
    spring4SysNet.push(blankCourse);
    spring4SysNet.push(blankCourse);
    spring4SysNet.push(blankCourse);

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
