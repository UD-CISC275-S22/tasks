import { Semester } from "../../Interfaces/semester";
import { Plan } from "../../Interfaces/plan";
import { courseList } from "../course";
import { blankCourse, fall1, spring1, fall2, spring2 } from "./plan";

//this is the plan for the AI concentration
export function AI(): Plan {
    //plan fields
    const title = "BS Computer Science";
    const concentration = "Artificial Intelligence and Robotics Concentration";
    const id = 0;

    //making the courses for each semester in each year (whole 4 year plan)
    const fall1AI = fall1();
    const spring1AI = spring1();
    const fall2AI = fall2();
    fall2AI.push(blankCourse);
    fall2AI.push(blankCourse);
    const spring2AI = spring2();
    spring2AI.push(blankCourse);
    spring2AI.push(blankCourse);
    spring2AI.push(blankCourse);
    const fall3AI = courseList.filter(
        //id 8 is CISC320 and id 35 is CISC304
        (course) => course.id == 8 || course.id == 35
    );
    fall3AI.push(blankCourse);
    fall3AI.push(blankCourse);
    fall3AI.push(blankCourse);
    const spring3AI = courseList.filter(
        //id 7 is CISC303 and id 40 is CISC481
        (course) => course.id == 7 || course.id == 40
    );
    spring3AI.push(blankCourse);
    spring3AI.push(blankCourse);
    spring3AI.push(blankCourse);
    const fall4AI = courseList.filter(
        //id 41 is CISC483 and id 16 is CISC498 and id 39 is CISC442
        (course) => course.id == 41 || course.id == 16 || course.id == 92
    );
    fall4AI.push(blankCourse);
    fall4AI.push(blankCourse);
    const spring4AI = courseList.filter(
        //id 42 is CISC484 and id 17 is CISC499
        (course) => course.id == 42 || course.id == 17
    );
    spring4AI.push(blankCourse);
    spring4AI.push(blankCourse);
    spring4AI.push(blankCourse);

    //making the actual semester types
    const fall1Sem: Semester = {
        type: ["Fall"],
        year: 1,
        totalCredits: 15,
        courseList: fall1AI
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
        courseList: spring1AI
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
        courseList: fall2AI
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
        courseList: spring2AI
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
        courseList: fall3AI
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
        courseList: spring3AI
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
        courseList: fall4AI
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
        courseList: spring4AI
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
    const AI_Semesters = [
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
        semesters: AI_Semesters,
        credits: 124
    };
}
/*
 * QUESTIONS
 * what do you mean by fall1/fall2/fall3...ect, are those seperated by year or
 * does that mean something else?
 * Are the general courses meant to be edited?
 */

/*
 * IDEAS FOR HOW TO CLEAR PLAN
 * repeat drop down idea to remove desired semester
 * create a button to remove the desired semester
 */

/*
 * DUMMY CODE
 * function dropPlanSemester () {
 * }
 */
