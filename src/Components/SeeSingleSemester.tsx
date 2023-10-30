import React, { useState } from "react";
//import { Class } from "../interfaces/class";
import { /*Button,*/ Row, Col, Form, Button } from "react-bootstrap";

export function SeeSingleSemester(): JSX.Element {
    const [semester1, setSemester1] = useState<string>("");
    const [semArr, setSemArr] = useState<string[]>([]);
    const [semester2, setSemester2] = useState<string>("");
    const [clicked, setClicked] = useState<boolean>(false);
    //const [semesterClasses, setSemesterClasses] = useState<string[]>([]);
    function addtable() {
        return (
            <div>
                <Col>
                    <h4>
                        <u>{semester2}</u>
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
                End Semester
            </div>
        );
    }
    function updateSemester1(event: React.ChangeEvent<HTMLInputElement>) {
        setSemester1(event.target.value);
    }
    function updateSemester2(event: React.ChangeEvent<HTMLInputElement>) {
        setSemester2(event.target.value);
        setClicked(true);
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
                                    type="radio"
                                    name="semesters"
                                    onChange={updateSemester2}
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
                    ? addtable()
                    : "Enter and Click semester to view classes"}
            </div>
            {/* <Col>
                {semester2}
                <Row>
                    <Col style={{ border: "3px solid rgb(0, 0, 0)" }}>
                        Hello
                    </Col>
                    <Col style={{ border: "3px solid rgb(0, 0, 0)" }}>
                        world
                    </Col>
                </Row>
            </Col> */}
        </div>
    );
}
