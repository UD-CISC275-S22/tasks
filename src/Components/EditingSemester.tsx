import React from "react";
import { Col, Form, Row, Container, Button } from "react-bootstrap";
import "../App.css";

import { Semester } from "../Interfaces/semester";
import { Plan } from "../Interfaces/plan";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditingSemester({
    semester,
    plan,
    settingPlan,
    plans,
    settingPlans,
    editingSemester,
    clearSemesterCourses
}: {
    semester: Semester;
    plan: Plan;
    settingPlan: (t: Plan) => void;
    plans: Plan[];
    settingPlans: (t: Plan[]) => void;
    editingSemester: (plan: Plan) => void;
    clearSemesterCourses: (id: string) => void;
}): JSX.Element {
    const;
}