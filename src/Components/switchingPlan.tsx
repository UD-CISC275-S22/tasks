import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
import { Plan } from "../Interfaces/plan";
import "../App.css"

export function SwitchingPlan({
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