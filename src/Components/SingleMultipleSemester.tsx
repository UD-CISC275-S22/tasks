import React, { useState } from "react";
import { Class } from "../interfaces/class";
import { /*Button,*/ Row, Col, Form, Button } from "react-bootstrap";
// import { degreePlan } from "../interfaces/degreePlan";
// import { semester } from "../interfaces/semster";
import QuickAdd from "./QuickAdd";
import SlowAdd from "./SlowAdd";

export function SingleMultipleSemester(): JSX.Element {
    const [semester1, setSemester1] = useState<string>("");
    const [semArr, setSemArr] = useState<string[]>([]);
    const [semArrClicked, setSemArrClicked] = useState<string[]>(semArr);
    const [clicked, setClicked] = useState<boolean>(false);
    //const [semesterClasses, setSemesterClasses] = useState<Class[]>([]);
    function addtable(semester: string) {
        return (
            <div>
                <div>
                    <h4>
                        Search for your course, or manually input your course.
                    </h4>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ marginRight: "5px" }}>
                            <QuickAdd
                                onCourseInfo={function (
                                    courseInfo: Class & {
                                        semester: string;
                                        year: string;
                                    }
                                ): void {
                                    throw new Error(
                                        "Function not implemented."
                                    );
                                }}
                            />
                        </div>
                        <div className="separator"></div>
                        <div style={{ marginLeft: "5px" }}>
                            <SlowAdd
                                onCourseInfo={function (
                                    courseInfo: Class
                                ): void {
                                    throw new Error(
                                        "Function not implemented."
                                    );
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <Col>
                        <h4>
                            <u>{semester}</u>
                        </h4>
                        <Row>
                            <Col>Course</Col>
                            <Col>Number of Credits</Col>
                        </Row>
                        <Row>
                            <Col>1</Col>
                            <Col>1.1</Col>
                        </Row>
                        <Row>
                            <Col>2</Col>
                            <Col>2.1</Col>
                        </Row>
                        <Row>
                            <Col>3</Col>
                            <Col>3.1</Col>
                        </Row>
                        <Row>
                            <Col>4</Col>
                            <Col>4.1</Col>
                        </Row>
                        <Row>
                            <Col>5</Col>
                            <Col>5.1</Col>
                        </Row>
                        <Row>
                            <Col>6</Col>
                            <Col>6.1</Col>
                        </Row>
                        <Row>
                            <Col>7</Col>
                            <Col>7.1</Col>
                        </Row>
                        <Row>
                            <Col>8</Col>
                            <Col>8.1</Col>
                        </Row>
                    </Col>
                </div>
            </div>
        );
    }
    // Make a helper function to add information to the table.(Add/Remove from array?)
    function addForClicked(clickedArr: string[]) {
        const tables = clickedArr.map(
            (clickedSem: string): JSX.Element =>
                clickedSem ? addtable(clickedSem) : addtable(clickedSem)
        );
        return tables;
    }
    function updateSemester1(event: React.ChangeEvent<HTMLInputElement>) {
        setSemester1(event.target.value);
    }
    function updateSemClicked(event: React.ChangeEvent<HTMLInputElement>) {
        setClicked(true);
        //setSemester2(event.target.value);
        const sem = event.target.value;
        if (semArrClicked.includes(sem)) {
            setSemArrClicked(semArrClicked.filter((e) => e !== sem));
        } else {
            setSemArrClicked([...semArrClicked, sem]);
        }
    }

    function addSemLabel(semester: string) {
        if (!semArr.includes(semester)) {
            const sems = [...semArr, semester];
            setSemArr(sems);
        }
    }
    return (
        <div>
            <h3>Single Semester</h3>
            <Form.Group controlId="formCreateSemester">
                <Form.Label>Input Semester:</Form.Label>
                <Button onClick={() => addSemLabel(semester1)}>Enter</Button>
                <Form.Control value={semester1} onChange={updateSemester1} />
                <Col>
                    {semArr.map((sem: string) => {
                        return (
                            <div key={sem} style={{ marginBottom: "4px" }}>
                                <Form.Check
                                    inline
                                    type="checkbox"
                                    name="semesters"
                                    onChange={updateSemClicked}
                                    id="semseter-buttons"
                                    label={sem}
                                    value={sem}
                                />
                            </div>
                        );
                    })}
                    <div></div>
                </Col>
            </Form.Group>
            <div>
                {clicked
                    ? addForClicked(semArrClicked)
                    : "Enter and Click semester(s) to view classes"}
            </div>
        </div>
    );
}
