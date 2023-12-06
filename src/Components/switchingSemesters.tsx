import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
import { Plan } from "../Interfaces/plan";
import "../App.css"

export function SwitchingSemesters({
    show,
    handleClose,
    currentPlan,
    settingPlan,
    course,
    courseSemester
}: {
    show: boolean;
    handleClose: () => void;
    currentPlan: Plan;
    settingPlan: (t: Plan) => void;
    course: Course;
    courseSemester: Semester;
}) {
    const [currentSemester, settingCurrentSemester] = useState(
        courseSemester.title
    );
    function savingSemester(event: React.ChangeEvent<HTMLSelectElement>) {
        settingCurrentSemester(event.target.value);
    }
    
    function savingEdits() {
        if (currentSemester != courseSemester.title) {
            if (currentSemester === "PoolingObjects")
        }
    }
}