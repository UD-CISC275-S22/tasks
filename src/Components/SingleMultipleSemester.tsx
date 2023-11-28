import React, { useState } from "react";
import { Class } from "../interfaces/class";
import QuickAdd from "./QuickAdd";
import SlowAdd from "./SlowAdd";

import { Button, Row, Col, Form /*Button*/ } from "react-bootstrap";
// import { degreePlan } from "../interfaces/degreePlan";
import { semester } from "../interfaces/semster";

export function SingleMultipleSemester(): JSX.Element {
    const [semester1, setSemester1] = useState<string>("");
    const [semArr, setSemArr] = useState<semester[]>([]);
    const [semArrClicked, setSemArrClicked] = useState<semester[]>(semArr);
    const [clicked, setClicked] = useState<boolean>(false);
    //const [degreePlan, setDegreePlan] = useState<degreePlan>();
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
    function addClasstoTable(semesters: semester[]) {
        const finalTable = semesters.map((sem: semester): JSX.Element[] =>
            addRowPerClass(sem.classes)
        );
        return finalTable;
    }
    function addtable(semester: semester) {
        console.log(semester.classes);
        return (
            <div>
                <div>
                    <Col>
                        <h4>
                            <u>{semester.name}</u>
                        </h4>
                        <div></div>
                        <Row>
                            <Col>Course</Col>
                            <Col>Number of Credits</Col>
                        </Row>
                        {addClasstoTable([semester])}
                        <Button onClick={() => clearAllClassesButton(semester)}>
                            Test
                        </Button>
                    </Col>
                </div>
            </div>
        );
    }
    function createSemester(name: string, classes: Class[]) {
        return { name: name, classes: classes };
    }
    function addToCorrectSem(course: Class, semArr0: semester[]) {
        const updatedSem = semArr0.map((sem: semester): semester => {
            if (sem.name === course.semester) {
                sem.classes.push(course);
                setSemArr([...semArr]);
            }
            return sem;
        });
        setSemArr(updatedSem);
        console.log(semArr);
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
                                addToCorrectSem(courseInfo, semArr);
                            }}
                        />
                    </div>
                    <div className="separator"></div>
                    <div style={{ marginLeft: "5px" }}>
                        <SlowAdd
                            onCourseInfo={function (courseInfo: Class): void {
                                // setSemester1(courseInfo.semester);
                                // setYear1(courseInfo.year);
                                // addSemLabel(semester1, year1);
                                addToCorrectSem(courseInfo, semArr);
                                console.log(semArr);
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }

    function clearAllClassesButton(sem: semester) {
        //Im thinking make a button to clear semesters and then add that to the add table function
        //when clicked update it so classes is an empty array or if that doesn't work create a new semester
        sem.classes = [];
        return sem;
    }

    // Make a helper function to add information to the table.(Add/Remove from array?)
    function addForClickedSem(clickedArr: semester[]) {
        console.log(semArr.map((e) => e.name));
        const tables = clickedArr.map((clickedSem: semester): JSX.Element => {
            const semester = semArr.find(
                (element) => element.name === clickedSem.name
            );
            if (semester) {
                return addtable(semester);
            }
            return <></>;
        });
        return tables;
    }
    function toLabels(semArr1: semester[]) {
        const labelArr = semArr1.map((sem: semester): string => sem.name);
        return labelArr;
    }
    function updateSemClicked(event: React.ChangeEvent<HTMLInputElement>) {
        setClicked(true);
        const sem = event.target.value;
        const labelArr = toLabels(semArrClicked);
        if (!labelArr.includes(sem)) {
            setSemArrClicked([...semArrClicked, createSemester(sem, [])]);
        } else {
            setSemArrClicked(semArrClicked.filter((e) => e.name !== sem));
        }
    }
    function addSemLabel(sem1: string) {
        if (!semArr.map((e) => e.name).includes(sem1)) {
            const sems = [...semArr, createSemester(sem1, [])];
            setSemArr(sems);
        }
    }
    function updateSemester1(event: React.ChangeEvent<HTMLInputElement>) {
        setSemester1(event.target.value);
    }
    return (
        <div>
            {addCourse()}
            <h3>Single Semester</h3>
            <Form.Group controlId="formCreateSemester">
                <Form.Label>Input Semester:</Form.Label>
                <Button onClick={() => addSemLabel(semester1)}>Enter</Button>
                <Form.Control value={semester1} onChange={updateSemester1} />
                Semester
                <Col>
                    {semArr.map((sem: semester) => {
                        return (
                            <div key={sem.name} style={{ marginBottom: "4px" }}>
                                <Form.Check
                                    inline
                                    type="checkbox"
                                    name="semesters"
                                    onChange={updateSemClicked}
                                    id="semseter-buttons"
                                    label={sem.name}
                                    value={sem.name}
                                />
                            </div>
                        );
                    })}
                    <div></div>
                </Col>
            </Form.Group>
            <div>
                {clicked
                    ? addForClickedSem(semArrClicked)
                    : "Enter and Click semester(s) to view classes"}
            </div>
            {/* <div>{RemoveSemester()}</div> */}
        </div>
    );
}
