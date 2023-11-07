/* eslint-disable prettier/prettier */
//all prep stuff for courses will go in here and things like finding the course based off of an id

import courseListAll from "../data/AllCourseList.json";
import { Course, Department } from "../Interfaces/course";

//making a Course[] constant of the AllCourses json file
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
