import AllCoursesList from "../data/AllCourseList.json";
import { Course } from "../Interfaces/course";
import "../App.css";

export function CourseOrigin(currentCourse: Course, cOrigin: string[]) {
    type CourseRecord = Record<string, Record<string, Course>>;
    const ALLCOURSELST: CourseRecord = AllCoursesList;
    const addingCourseCheck = cOrigin[0].split(" ", 1);
    const originalCourse = ALLCOURSELST[addingCourseCheck[0]][cOrigin[0]];

    currentCourse.title = originalCourse.title;
    currentCourse.name = originalCourse.name;
    currentCourse.description = originalCourse.description;
    currentCourse.credits = originalCourse.credits;
    currentCourse.semester = originalCourse.semester;
    currentCourse.department = originalCourse.department;
    currentCourse.prereq = originalCourse.prereq;
    currentCourse.coreq = originalCourse.coreq;
    currentCourse.requirements = originalCourse.requirements;
}
