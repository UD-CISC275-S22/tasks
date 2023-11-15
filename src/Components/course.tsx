import courseListAll from "../data/AllCourseList.json";
import { Course, Department } from "../Interfaces/course";

/*
making a Course[] constant of the AllCourses json file
DON'T remake this courseList in another file. Just import this constant and you can copy it into a const if you want
then work on that list in that file (this acts more like an interface)
*/

export const courseList: Course[] = courseListAll.map(
    //remember you only need to deep copy data structures over
    (course): Course => ({
        ...course,
        semester: course.semester,
        department: course.department as Department,
        prereq: course.prereq,
        coreq: course.coreq,
        requirements: course.requirements
    })
);

//sees if an id (passed in as a paramtetr) is in the total courseList - based on json file
export function findCourse(courseList: Course[], id: number): Course | number {
    const filteredList = courseList.filter((course) => course.id === id);
    if (filteredList.length > 1) {
        return 0;
    } else if (filteredList.length == 0) {
        return 0;
    } else {
        return filteredList[0];
    }
}

//Students can edit the course code, course title, and credits of a course in the plan
export function editCourse(
    course: Course,
    newTitle: string,
    newName: string,
    newCredits: number
): Course {
    const newCourse: Course = {
        ...course,
        title: newTitle,
        name: newName,
        credits: newCredits
    };
    return newCourse;
}
