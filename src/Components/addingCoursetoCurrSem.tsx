// import React from "react";
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
import { Plan } from "../Interfaces/plan";
import "../App.css";

export function AddingCoursetoCurrSem(
    course: Course,
    currentSemester: Semester,
    plan: Plan,
    settingPlan: (t: Plan) => void
) {
    const newSemester = { ...currentSemester };
    newSemester.courseList.push(course);
    settingPlan({
        ...plan,
        semesters: plan.semesters.map(
            (semester: Semester): Semester =>
                newSemester.id === newSemester.id ? newSemester : semester
        )
    });
}
