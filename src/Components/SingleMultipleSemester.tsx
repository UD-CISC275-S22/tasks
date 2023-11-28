import React, { useState } from "react";
import { Class } from "../interfaces/class";
import QuickAdd from "./QuickAdd";
import SlowAdd from "./SlowAdd";
import DeleteCourses from "./DeleteCourses";

// ------------add this
import { degreePlan } from "../interfaces/degreePlan";
import { Views } from "../interfaces/viewProps";
//------------------------------------------------

import { Button, Row, Col, Form /*Button*/ } from "react-bootstrap";
// import { degreePlan } from "../interfaces/degreePlan";
import { semester } from "../interfaces/semster";

//-------------------------------------------------------------------------edit
export function SingleMultipleSemester({
    CurrentdegreePlan,
    setCurrentView,
    setCurrentDegreePlan,
    setDegreePlanList,
    DegreePlanList
}: {
    CurrentdegreePlan: degreePlan;
    setCurrentView: (view: Views) => void;
    setCurrentDegreePlan: (degreePlan: degreePlan) => void;
    setDegreePlanList: (degreePlan: degreePlan[]) => void;
    DegreePlanList: degreePlan[];
}): JSX.Element {
    //export function SingleMultipleSemester(): JSX.Element { ----------------adding to DegreePlan
    const [semester1, setSemester1] = useState<string>("");
    //const [semArr, setSemArr] = useState<semester[]>([]);-----------------------comment out
    const [semArr, setSemArr] = useState<semester[]>(
        CurrentdegreePlan.semesters
    );

    const [semArrClicked, setSemArrClicked] = useState<semester[]>(semArr);
    const [clicked, setClicked] = useState<boolean>(false);
    //add clear Semester here-----------------------------------------------------EDIT
    function clear() {
        setSemArr([]); //clears semester array, one issue: when wanting to go back, we need to save all the changes made,
        //back to the degreePlanList and currentDegreePlan
    }
    function goBackClick() {
        //go back button and Save function
        const newDegreePlan: degreePlan = {
            ...CurrentdegreePlan,
            semesters: semArr
        };
        const newDegreePlanList: degreePlan[] = DegreePlanList.map(
            (degreePlan: degreePlan): degreePlan =>
                degreePlan.name === CurrentdegreePlan.name
                    ? newDegreePlan
                    : degreePlan
        );
        setCurrentView(Views.degreePlanView);
        setCurrentDegreePlan(newDegreePlan);
        setDegreePlanList(newDegreePlanList);
        //abstract semArray to App.tsx, pull out and add to App.tsx
        //then clear it betweent degreePlans and set it to semesters of the degreePlan you click on
    }

    //----------------------------------------------------EDIT

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

    const onDeleteCourse = (courseCode: string) => {
        // Find and remove the course with the given courseCode from semArr
        const updatedSemArr = semArr.map((sem) => ({
            ...sem,
            classes: sem.classes.filter(
                (course) => course.courseCode !== courseCode
            )
        }));

        setSemArr(updatedSemArr);
    };

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
            {/* add Clear Semesters and goBack button */}
            <div>
                <Button onClick={clear}> Clear Existing Semesters </Button>
                <Button onClick={goBackClick}>Go Back to Degree Plans</Button>
            </div>
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
                                    data-testid="semesters"
                                    label={sem.name}
                                    value={sem.name}
                                />
                            </div>
                        );
                    })}
                    <div></div>
                </Col>
            </Form.Group>
            {"}"}
            <DeleteCourses onDeleteCourse={onDeleteCourse} />
            <div>
                {clicked
                    ? addForClickedSem(semArrClicked)
                    : "Enter and Click semester(s) to view classes"}
            </div>
            {/* <div>{RemoveSemester()}</div> */}
        </div>
    );
}
