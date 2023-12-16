import "../App.css";
import courseListAll from "../data/AllCourseList.json";
import { Course, Department } from "../Interfaces/course";

/*
making a Course[] constant of the AllCourses json file
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

//this is the default copy because course list is changed throughout. THIS LIST WILL REMAIN UNCHANGED - Malika
export const defaultCourseList: Course[] = courseListAll.map(
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
export function findCourse(courseList: Course[], id: number): Course | null {
    const filteredList = courseList.filter((course) => course.id === id);
    if (filteredList.length > 1) {
        return null;
    } else if (filteredList.length == 0) {
        return null;
    } else {
        return filteredList[0];
    }
}

//updates courseList value (used for save changes button) - Malika
export const updateCourseList = (
    courseList: Course[],
    editedCourse: Course
): Course[] => {
    //find index of the course to be updated
    const index = courseList.findIndex(
        (course) => course.id === editedCourse.id
    );
    console.log("index in updateCourseList in course.tsx: ", index);

    //if course is found, update in courseList
    if (index !== -1) {
        courseList[index] = {
            ...editedCourse,
            semester: editedCourse.semester,
            department: editedCourse.department as Department,
            prereq: editedCourse.prereq,
            coreq: editedCourse.coreq,
            requirements: editedCourse.requirements
        };
    } else {
        console.error("Course not find in courseList");
    }
    return courseList;
};
