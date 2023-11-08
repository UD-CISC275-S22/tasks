import React, { useState } from "react";
import { Class } from "../interfaces/class";
import QuickAdd from "./QuickAdd";
import SlowAdd from "./SlowAdd";

import { Button, Row, Col, Form /*Button*/ } from "react-bootstrap";
// import { degreePlan } from "../interfaces/degreePlan";
// import { semester } from "../interfaces/semster";

//UNCOMMENT SLOW, QUICK, CLASS WHEN READY TO WORK ON THEM

export function SingleMultipleSemester(): JSX.Element {
    const [semester1, setSemester1] = useState<string>("");
    const [year1, setYear1] = useState<string>("");
    const [semArr, setSemArr] = useState<string[]>([]);
    const [semArrClicked, setSemArrClicked] = useState<string[]>(semArr);
    const [clicked, setClicked] = useState<boolean>(false);
    //const [degreePlan, setDegreePlan] = useState<degreePlan>();
    const [semesterClasses, setSemesterClasses] = useState<Class[]>([]);
    function addRowPerClass(semClasses: Class[]) {
        const tableCell = semClasses.map(
            // eslint-disable-next-line no-extra-parens
            (course: Class): JSX.Element => (
                <Row key={course.semester}>
                    <Col>
                        {course.courseCode}
                        {": "}
                        {course.courseTitle}
                    </Col>
                    <Col>{course.credits}</Col>
                </Row>
            )
        );
        return tableCell;
    }
    function addtable(semester: string) {
        return (
            <div>
                {/* github is not letting me push it when this is active, uncomment when ready to work */}
                <div>
                    <Col>
                        <h4>
                            <u>{semester}</u>
                        </h4>
                        <div></div>
                        <Row>
                            <Col>Course</Col>
                            <Col>Number of Credits</Col>
                        </Row>
                        <div>{addRowPerClass(semesterClasses)}</div>
                        {/* <Row>
                            <Col>{semesterClasses[0].courseTitle}</Col>
                            <Col>{semesterClasses[0].credits}</Col>
                        </Row>
                        <Row>
                            <Col>{semesterClasses[1].courseTitle}</Col>
                            <Col>{semesterClasses[1].credits}</Col>
                        </Row>
                        <Row>
                            <Col>{semesterClasses[2].courseTitle}</Col>
                            <Col>{semesterClasses[2].credits}</Col>
                        </Row>
                        <Row>
                            <Col>{semesterClasses[3].courseTitle}</Col>
                            <Col>{semesterClasses[3].credits}</Col>
                        </Row>
                        <Row>
                            <Col>{semesterClasses[4].courseTitle}</Col>
                            <Col>{semesterClasses[4].credits}</Col>
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
                        </Row> */}
                    </Col>
                </div>
            </div>
        );
    }
    // ADD TO SEMESTER CLASSES USING A FUNCTION W/ SPREAD OPERATOR TO ADD TO ARRAY
    function addClassToSem(course: Class) {
        if (!semesterClasses.includes(course)) {
            const classArr = [...semesterClasses, course];
            setSemesterClasses(classArr);
            semesterClasses.length++;
        }
    }
    function addToCorrectSem(course: Class, semArr: string[]) {
        const classYearSem = course.semester + " " + course.year;
        if (semArr.includes(classYearSem)) {
            addClassToSem(course);
        }
    }
    function addCourse(): JSX.Element {
        //console.log(semesterClasses);
        return (
            <div>
                <h4>Search for your course, or manually input your course.</h4>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ marginRight: "5px" }}>
                        <QuickAdd
                            onCourseInfo={(
                                courseInfo: Class & {
                                    semester: string;
                                    year: string;
                                }
                            ): void => {
                                {
                                    console.log(courseInfo);
                                }
                                // setSemesterClasses((prevState) => [
                                //     ...prevState,
                                //     courseInfo
                                // ]);
                                //setSemester1(courseInfo.semester);
                                //setYear1(courseInfo.year);
                                // addSemLabel(semester1, year1);
                                addClassToSem(courseInfo);
                                addToCorrectSem(courseInfo, semArr);
                                {
                                    console.log(semesterClasses);
                                }
                            }}
                        />
                    </div>
                    <div className="separator"></div>
                    <div style={{ marginLeft: "5px" }}>
                        <SlowAdd
                            onCourseInfo={function (courseInfo: Class): void {
                                setSemesterClasses((prevState) => [
                                    ...prevState,
                                    courseInfo
                                ]);
                                setSemester1(courseInfo.semester);
                                setYear1(courseInfo.year);
                                addSemLabel(semester1, year1);
                            }}
                        />
                    </div>
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
    function updateYear1(event: React.ChangeEvent<HTMLInputElement>) {
        setYear1(event.target.value);
    }
    function updateSemClicked(event: React.ChangeEvent<HTMLInputElement>) {
        setClicked(true);
        const sem = event.target.value;
        if (semArrClicked.includes(sem)) {
            setSemArrClicked(semArrClicked.filter((e) => e !== sem));
        } else {
            setSemArrClicked([...semArrClicked, sem]);
        }
    }

    function addSemLabel(sem1: string, year1: string) {
        const semYearCombined = sem1 + " " + year1;
        if (!semArr.includes(semYearCombined)) {
            const sems = [...semArr, semYearCombined];
            setSemArr(sems);
        }
    }
    return (
        <div>
            {addCourse()}
            <h3>Single Semester</h3>
            <Form.Group controlId="formCreateSemester">
                <Form.Label>Input Semester:</Form.Label>
                <Button onClick={() => addSemLabel(semester1, year1)}>
                    Enter
                </Button>
                <Form.Control value={semester1} onChange={updateSemester1} />
                Semester
                <Form.Control value={year1} onChange={updateYear1} />
                Year
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
            {/* <div>{RemoveSemester()}</div> */}
        </div>
    );
}
