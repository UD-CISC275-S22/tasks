import { Course, Department } from "../../Interfaces/course";
import { Plan } from "../../Interfaces/plan";
import { Semester } from "../../Interfaces/semester";
import { courseList } from "../course";

//default winter and summer course for making an empty array of one blank course
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

export const blankSemester: Semester = {
    type: [""],
    year: {} as number,
    totalCredits: {} as number,
    courseList: [blankCourse]
};

export const blankPlan: Plan = {
    title: "",
    concentration: "Custom",
    id: {} as number,
    semesters: [
        blankSemester,
        blankSemester,
        blankSemester,
        blankSemester,
        blankSemester,
        blankSemester,
        blankSemester,
        blankSemester,
        blankSemester,
        blankSemester,
        blankSemester,
        blankSemester,
        blankSemester,
        blankSemester,
        blankSemester,
        blankSemester,
        blankSemester,
        blankSemester,
        blankSemester
    ],
    credits: {} as number
};

//explain why fall1 and fall2 and spring1 etc.
//fall1 reprensents semester 1 fall
//this function returns first fall semester in year 1 of 4 year plan
export function fall1(): Course[] {
    //id 2002 is CISC108, id 2805 is EGGG101, id 2824 is ENGL110, id 4881 is MATH241
    let fall1Courses = courseList.filter(
        (course) =>
            course.id == 2805 ||
            course.id == 2002 ||
            course.id == 2824 ||
            course.id == 4881
    );
    fall1Courses = [...fall1Courses, blankCourse];
    return fall1Courses;
}

//this function returns first spring semester in year 1 of 4 year plan
export function spring1(): Course[] {
    //id 2005 is CISC181 and id 2007 is CISC210
    let spring1Courses = courseList.filter(
        (course) => course.id == 2005 || course.id == 2007
    );
    spring1Courses = [...spring1Courses, blankCourse, blankCourse, blankCourse];
    return spring1Courses;
}

//this function returns a portion of the second fall semester in year 1 of 4 year plan
//it returns a portion of the semester classes because the filtered classes are the only classes that every plan have in common
export function fall2(): Course[] {
    const partFall2Courses = courseList.filter(
        //id 2008 is CISC220 and id 2010 is CISC260 and id 11 is MATH210
        (course) => course.id == 2008 || course.id == 2010 || course.id == 4871
    );
    return partFall2Courses;
}

//this function returns a portion of the second spring semester in year 1 of 4 year plan
//it returns a portion of the semester classes because the filtered classes are the only classes that every plan have in common
export function spring2(): Course[] {
    const partSpring2Courses = courseList.filter(
        //id 2013 is CISC275 and id 2018 is CISC355
        (course) => course.id == 2013 || course.id == 2018
    );
    /*during the second spring semester, students should take MATH 205 or MATh 350 so
    we will have a select option for students to decide which one they want to take to
    satisfy the requirement. However, if some classes require just MATH205 or both push
    those classes in those plan types*/
    return partSpring2Courses;
}
