import React, { useState } from "react";
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
    clearSemesterCourses,
    editingFunc
}: {
    semester: Semester;
    plan: Plan;
    settingPlan: (t: Plan) => void;
    plans: Plan[];
    settingPlans: (t: Plan[]) => void;
    editingSemester: (plan: Plan) => void;
    clearSemesterCourses: (id: string) => void;
    editingFunc: () => void;
}): JSX.Element {
    const courseSessions = ["Fall", "Winter", "Spring", "Summer"];
    const semesterCheck = semester.title.split(" ", 2);
    const semesterOffering = semesterCheck[0];
    const [session, settingSessions] = useState<string>(semesterOffering);
    const [year, settingYear] = useState<string>(semesterCheck[1]);

    function switchSemesterOffering(event: ChangeEvent) {
        settingSessions(event.target.value);
    }
    function switchYearOffering(event: ChangeEvent) {
        settingYear(event.target.value);
    }

    const [notes, settingNotes] = useState<string>(semester.notes);
    function editingNotes(event: ChangeEvent) {
        settingNotes(event.target.value);
    }

    function savingSemesterEdits() {
        let newPlan: Plan;
        if (session === "Fall") {
            const saveID = session + year;
            const originalID = plan.semesters.findIndex(
                (s: Semester): boolean => saveID === s.id
            );
            if (
                originalID === -1 ||
                plan.semesters[originalID].id === semester.id
            ) {
                const newSemester: Semester = {
                    id: saveID,
                    title: session,
                    notes: "",
                    courseList: semester.courseList
                };
                newPlan = {
                    ...plan,
                    semesters: plan.semesters.map(
                        (s: Semester): Semester =>
                            s.id === semester.id ? newSemester : s
                    )
                };
                settingPlan(newPlan);
                editingSemester(newPlan);
            }
        } else {
            const saveID = session[0] + year;
            const originalID = plan.semesters.findIndex(
                (s: Semester): boolean => saveID === s.id
            );
            if (
                originalID === -1 ||
                plan.semesters[originalID].id === semester.id
            ) {
                const newSemester: Semester = {
                    id: saveID,
                    title: session,
                    notes: "",
                    courseList: semester.courseList
                };
                newPlan = {
                    ...plan,
                    semesters: plan.semesters.map(
                        (s: Semester): Semester =>
                            s.id === semester.id ? newSemester : s
                    )
                };
                settingPlan(newPlan);
                editingSemester(newPlan);
            }
        }
        editingFunc();
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Form.Group controlId="semesterID" as={Row}>
                        <Form.Label column sm={1}>
                            Year:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={year}
                                type="number"
                                onChange={switchYearOffering}
                            ></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="semesterTitle" as={Row}>
                        <Form.Label column sm={1}>
                            Session:
                        </Form.Label>
                        <Col>
                            <Form.Select
                                value={session}
                                onChange={switchSemesterOffering}
                            >
                                {courseSessions.map((choice: string) => (
                                    <option key={choice} value={choice}>
                                        {choice}
                                    </option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="semesterNotes" as={Row}>
                        <Form.Label column sm={3}>
                            Notes:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={notes}
                                onChange={editingNotes}
                                as="textarea"
                                rows={4}
                            ></Form.Control>
                        </Col>
                    </Form.Group>

                    <Button
                        onClick={savingSemesterEdits}
                        variant="success"
                        data-testid="savingSemesterEditsMod"
                    >
                        Save
                    </Button>

                    <Button
                        onClick={() => clearSemesterCourses(semester.id)}
                        variant="danger"
                        data-testid="clearSemesterCoursesMod"
                    >
                        Clear Semester
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
