//import React from "react";
import { yearI } from "./interfaces/semester";
import { Course } from "./interfaces/course";
export interface dbMangement {
    Courseplan: yearI;
    stateSetter: (DB: yearI) => void;
}
export function deleteCourse(rW: dbMangement, idticker: string) {
    rW.stateSetter({
        name: rW.Courseplan.name,
        firstsemester: {
            ...rW.Courseplan.firstsemester,
            courses: rW.Courseplan.firstsemester.courses.filter(
                (course: Course): boolean => course.ticker !== idticker
            )
        },
        secondsemester: {
            ...rW.Courseplan.secondsemester,
            courses: rW.Courseplan.secondsemester.courses.filter(
                (course: Course): boolean => course.ticker !== idticker
            )
        }
    });
}
export function updateCourse(
    rW: dbMangement,
    Ncourse: Course,
    idticker: string
) {
    rW.stateSetter({
        name: rW.Courseplan.name,
        firstsemester: {
            ...rW.Courseplan.firstsemester,
            courses: rW.Courseplan.firstsemester.courses.map(
                (course: Course): Course =>
                    course.ticker === idticker ? Ncourse : course
            )
        },
        secondsemester: {
            ...rW.Courseplan.firstsemester,
            courses: rW.Courseplan.secondsemester.courses.map(
                (course: Course): Course =>
                    course.ticker === idticker ? Ncourse : course
            )
        }
    });
}
