/* eslint-disable no-extra-parens */
import React from "react";
import { course } from "./PlannerInterfaces/course";
import { semester } from "./PlannerInterfaces/semester";

export function PreReqs({
    allSemesters,
    semester
}: {
    allSemesters: semester[];
    semester: semester;
}): JSX.Element {
    const failedPreReqs: string[] = []; //All the messages of prereqs that are not met in the semester
    //Checks a single course prereq to see if it is fullfilled
    function checkCoursePreReq(course: course) {
        //If course has no prereq just return
        if (course.preReq === "") {
            return;
        }
        let preReqSem = false;
        let foundPreReq = false;
        allSemesters.forEach((sem: semester) => {
            if (sem.id === semester.id) {
                preReqSem = true; //Set to true once you are at your semester as only semester prior to your semester can fullfill prereq
            }
            if (preReqSem) {
                //Past or at your semester so don't check
                return;
            }
            //Check each courseId in the semester to see if it matches the prereq
            sem.courses.forEach((prevCourse: course) => {
                if (course.preReq.search(prevCourse.courseID) !== -1) {
                    foundPreReq = true; //Becomes true if courseID matched the prereq
                }
            });
        });
        //If prereq wasn't found add it to the list
        if (!foundPreReq) {
            failedPreReqs.push(course.courseID + " requires " + course.preReq);
        }
    }
    //Go through each course in the semester and see if prereqs are met
    semester.courses.forEach((currentCourse: course) =>
        checkCoursePreReq(currentCourse)
    );
    return (
        <div>
            {/*Return all missing prereq messages*/}
            {failedPreReqs.map((missingReq: string) => (
                <p key={missingReq}>{missingReq}</p>
            ))}
        </div>
    );
}
