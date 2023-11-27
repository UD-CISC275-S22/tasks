import AllCoursesList from "../data/AllCourseList.json";
import { Course } from "../Interfaces/course";
import "../App.css";

export function courseOrigin(currentCourse: Course, cOrigin: string[]) {
    type CourseRecord = Record<string, Record<string, Course>>;
    const AllCourseLst: CourseRecord = AllCoursesList;
    const addingCourseCheck = cOrigin[0].split(" ", 1);
    const originCourse = AllCourseLst[addingCourseCheck[0]][cOrigin[0]];

    currentCourse.id = originCourse.id;
    currentCourse.title = originCourse.title;
    currentCourse.name = originCourse.name;
    currentCourse.description = originCourse.description;
    currentCourse.credits = originCourse.credits;
    currentCourse.semester = originCourse.semester;
    currentCourse.department = originCourse.department;
    currentCourse.prereq = originCourse.prereq;
    currentCourse.coreq = originCourse.coreq;
    currentCourse.requirements = originCourse.requirements;
}