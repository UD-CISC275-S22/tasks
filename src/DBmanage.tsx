import React from "react";
import { yearI } from "./interfaces/semester";
import { Course } from "./interfaces/course";
export interface dbMangement {
    Courseplan: yearI;
    stateSetter: (DB: yearI) => void;
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
