import { Course, Department } from "../../Interfaces/course";
import { courseList } from "../course";

//later: make a state that from user input finds the course that they selected and input
//that into the courses that don't have a definitive course (Ex. if you need math205 or math350)
//the user would select math205 for example and that state variable would then be math205 and you
//change that math course in the semester to that specific course

//this is a general breadth constant course that you can keep for any semester or plan
//just make sure you change it so that the student can pick which breadth course they want to take

//default winter and summer course for making an empty array of one blank course
//maybe this can be used for the requirements?
export const blankCourse: Course = {
    id: {} as number,
    title: "",
    name: "",
    description: "",
    credits: 0,
    semester: [""],
    department: "" as Department,
    prereq: [""],
    coreq: [""],
    requirements: [""]
};

//explain why fall1 and fall2 and spring1 etc.
//fall1 reprensents semester 1 fall
//this function returns first fall semester in year 1 of 4 year plan
export function fall1(): Course[] {
    //id 1 is CISC108, id 101 is EGGG101, id 0 is ENGL110, id 12 is MATH241
    let fall1Courses = courseList.filter(
        (course) =>
            course.id == 1 ||
            course.id == 101 ||
            course.id == 0 ||
            course.id == 12
    );
    fall1Courses = [...fall1Courses, blankCourse];
    return fall1Courses;
}

//this function returns first spring semester in year 1 of 4 year plan
export function spring1(): Course[] {
    //id 2 is CISC181 and id 3 is CISC210
    let spring1Courses = courseList.filter(
        (course) => course.id == 2 || course.id == 3
    );
    spring1Courses = [...spring1Courses, blankCourse, blankCourse, blankCourse];
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
