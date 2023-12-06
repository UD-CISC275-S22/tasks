import React from "react";
import { Button, Modal } from "react-bootstrap";
import "../App.css";
import { Semester } from "../Interfaces/semester";
import { Course } from "../Interfaces/course";
import { Plan } from "../Interfaces/plan";

export function RemovingPlan({
    show,
    handleClose,
    plan,
    settingPlan,
    plans,
    settingPlans
}: {
    show: boolean;
    handleClose: () => void;
    plan: Plan;
    settingPlan: (t: Plan) => void;
    plans: Plan[];
    settingPlans: (t: Plan[]) => void;
}): JSX.Element {
    const hello = 1;
}
