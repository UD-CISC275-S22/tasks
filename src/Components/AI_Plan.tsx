import { Semester } from "../Interfaces/semester";
import { Course } from "../Interfaces/course";
import { Plan } from "../Interfaces/plan";
import { courseList } from "./course";
import { blankCourse } from "./plan";
//need to go through and check to see if fall1, spring1, fall2 and spring2 are the same for each default plan

//later: make a state that from user input finds the course that they selected and input
//that into the courses that don't have a definitive course (Ex. if you need math205 or math350)
//the user would select math205 for example and that state variable would then be math205 and you
//change that math course in the semester to that specific course

//this is a general breadth constant course that you can keep for any semester or plan
//just make sure you change it so that the student can pick which breadth course they want to take

//default winter and summer course for making an empty array of one blank course
//maybe this can be used for the requirements?

//explain why fall1 and fall2 and spring1 etc.
//fall1 reprensents semester 1 fall
//this function returns first fall semester in year 1 of 4 year plan
export function fall1(): Course[] {
    //id 1 is CISC108, id 101 is EGGG101, id 0 is ENGL110, id 12 is MATH241
    const fall1Courses = courseList.filter(
        (course) =>
            course.id == 1 ||
            course.id == 101 ||
            course.id == 0 ||
            course.id == 12
    );
    fall1Courses.push(blankCourse);
    return fall1Courses;
}

//this function returns first spring semester in year 1 of 4 year plan
export function spring1(): Course[] {
    //id 2 is CISC181 and id 3 is CISC210
    const spring1Courses = courseList.filter(
        (course) => course.id == 2 || course.id == 3
    );
    spring1Courses.push(blankCourse);
    spring1Courses.push(blankCourse);
    spring1Courses.push(blankCourse);
    return spring1Courses;
}

//this function returns a portion of the second fall semester in year 1 of 4 year plan
//it returns a portion of the semester classes because the filtered classes are the only classes that every plan have in common
export function fall2(): Course[] {
    const partFall2Courses = courseList.filter(
        //id 4 is CISC220 and id 5 is CISC260 and id 11 is MATH210
        (course) => course.id == 4 || course.id == 5 || course.id == 11
    );
    return partFall2Courses;
}

//this function returns a portion of the second spring semester in year 1 of 4 year plan
//it returns a portion of the semester classes because the filtered classes are the only classes that every plan have in common
export function spring2(): Course[] {
    const partSpring2Courses = courseList.filter(
        //id 6 is CISC275 and id 34 is CISC355
        (course) => course.id == 6 || course.id == 34
    );
    /*during the second spring semester, students should take MATH 205 or MATh 350 so
    we will have a select option for students to decide which one they want to take to
    satisfy the requirement. However, if some classes require just MATH205 or both push
    those classes in those plan types*/
    return partSpring2Courses;
}

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
