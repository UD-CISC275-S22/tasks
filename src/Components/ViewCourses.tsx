// import courseListAll from "../data/AllCourseList.json";
// import { Course, Department } from "../Interfaces/course";

// /*
// making a Course[] constant of the AllCourses json file
// DON'T remake this courseList in another file. Just import this constant and you can copy it into a const if you want
// then work on that list in that file (this acts more like an interface)
// */

// export const courseList: Course[] = courseListAll.map(
//     //remember you only need to deep copy data structures over
//     (course): Course => ({
//         ...course,
//         semester: course.semester,
//         department: course.department as Department,
//         prereq: course.prereq,
//         coreq: course.coreq,
//         requirements: course.requirements
//     })
// );

// //sees if an id (passed in as a paramtetr) is in the total courseList - based on json file
// export function findCourse(courseList: Course[], id: number): Course | number {
//     const filteredList = courseList.filter((course) => course.id === id);
//     if (filteredList.length > 1) {
//         return 0;
//     } else if (filteredList.length == 0) {
//         return 0;
//     } else {
//         return filteredList[0];
//     }
// }

// //Students can edit the course code, course title, and credits of a course in the plan
// export function editCourse(
//     course: Course,
//     newTitle: string,
//     newName: string,
//     newCredits: number
// ): Course {
//     const newCourse: Course = {
//         ...course,
//         title: newTitle,
//         name: newName,
//         credits: newCredits
//     };
//     return newCourse;
// }

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
import { Plan } from "../Interfaces/plan";
import { ClearCourse } from "./removingCourse";
// import { CourseOrigin } from "./courseOrigin";
import { SwitchingSemesters } from "./SwitchingSemesters";
import "../App.css";

export function ViewCourses({
    course,
    courseSemester,
    currentPlan,
    settingPlan
}: {
    course: Course;
    courseSemester: Semester;
    currentPlan: Plan;
    settingPlan: (t: Plan) => void;
}): JSX.Element {
    const [title, settingTitle] = useState(course.title);
    const [name, settingName] = useState(course.name);
    const [description, settingDescription] = useState(course.description);
    const [credits, settingCredits] = useState(course.credits);
    const [offering, settingOffering] = useState(course.semester);
    const [department, settingDepartment] = useState(course.department);
    const [prereq, settingPrereq] = useState(course.prereq);
    const [coreq, settingCoreq] = useState(course.coreq);
    const [requirements, settingRequirements] = useState(course.requirements);
    const [editing, settingEditing] = useState<boolean>(false);
    const [editingMod, settingEditingMod] = useState<string>("Edit");
    const [addingMod, settingAddingMod] = useState(false);
    const [showSwitchMod, settingSwitchMod] = useState(false);
    const handleCloseAddMod = () => settingAddingMod(false);
    const handleShowAddingMod = () => settingAddingMod(true);
    const handleCloseSwitchMod = () => settingSwitchMod(false);
    const handleShowSwitchMod = () => settingSwitchMod(true);
    const [visible, settingVisibility] = useState<boolean>(false);

    function isVisibile(): void {
        settingVisibility(!visible);
        settingEditingMod("Edit");
        settingEditing(false);
        settingEditingMod("Edit");
    }

    function saveTitle(event: React.ChangeEvent<HTMLInputElement>) {
        course.title = event.target.value;
        settingTitle(event.target.value);
    }

    function saveName(event: React.ChangeEvent<HTMLInputElement>) {
        course.name = event.target.value;
        settingName(event.target.value);
    }

    function saveDescription(event: React.ChangeEvent<HTMLInputElement>) {
        course.description = event.target.value;
        settingDescription(event.target.value);
    }

    function saveOffering(event: React.ChangeEvent<HTMLInputElement>) {
        course.semester = event.target.value;
        settingOffering(event.target.value);
    }

    function saveDepartment(event: React.ChangeEvent<HTMLInputElement>) {
        course.department = event.target.value;
        settingDepartment(event.target.value);
    }

    function savePrereq(event: React.ChangeEvent<HTMLInputElement>) {
        course.prereq = event.target.value;
        settingPrereq(event.target.value);
    }

    function saveCoreq(event: React.ChangeEvent<HTMLInputElement>) {
        course.coreq = event.target.value;
        settingCoreq(event.target.value);
    }

    if (course.requirements) {
        if (course.requirements) {
            course.requirements.push("");
        } else {
            course.requirements = [""];
        }
    }

    function saveCredits(event: React.ChangeEvent<HTMLInputElement>) {
        let defaultCredits = event.target.value.replace(/\s/g, "");
        if (defaultCredits === "" || defaultCredits === undefined) {
            defaultCredits = "0";
        }
        settingCredits(defaultCredits);

        const courseIndexing = courseSemester.courseList.findIndex(
            (c: Course): boolean => c.title === course.title
        );

        const newSemester = { ...courseSemester };
        if (courseIndexing > -1) {
            newSemester.courseList[courseIndexing].credits = defaultCredits;
            settingCredits(Number(defaultCredits).toString());
        }

        settingPlan({
            ...currentPlan,
            semesters: currentPlan.semesters.map(
                (semester: Semester): Semester =>
                    semester.id === newSemester.id ? newSemester : semester
            )
        });
    }

    function savingEdits() {
        settingEditing(!editing);
        if (editingMod === "Edit") settingEditingMod("Save");
        else settingEditingMod("Edit");
    }

    function backtrackOrigin(): void {
        settingTitle(course.title);
        settingName(course.name);
        settingDescription(course.description);
        settingCredits(course.credits);
        settingOffering(course.semester);
        settingDepartment(course.department);
        settingPrereq(course.prereq);
        settingCoreq(course.coreq);
        settingRequirements(course.requirements);
    }

    return (
        <div>
            {courseSemester.courseList.findIndex(
                (c: Course): boolean => c.title === course.title
            ) != -1 && (
                <div>
                    <Button onClick={isVisibile}> {course.title} </Button>
                    {visible && (
                        <div>
                            <p></p>
                            <Button
                                onClick={handleShowSwitchMod}
                                data-testid="switchSemMod"
                                variant="secondary"
                            >
                                Switch Semester
                            </Button>
                            <SwitchingSemesters
                                show={showSwitchMod}
                                handleClose={handleCloseSwitchMod}
                                course={course}
                                currentPlan={currentPlan}
                                settingPlan={settingPlan}
                                courseSemester={courseSemester}
                            ></SwitchingSemesters>
                            <p></p>

                            <Button
                                onClick={savingEdits}
                                data-testid="editingMod"
                                variant="warning"
                            >
                                {editingMod}
                            </Button>
                            <p></p>

                            <Button
                                onClick={handleShowAddingMod}
                                data-testid="removingCourseMod"
                                variant="danger"
                            >
                                Remove Course
                            </Button>
                            <ClearCourse
                                show={addingMod}
                                handleClose={handleCloseAddMod}
                                plan={currentPlan}
                                settingPlan={settingPlan}
                                currentCourse={course}
                                currentSemester={courseSemester}
                            ></ClearCourse>
                            <p></p>

                            <Button
                                onClick={backtrackOrigin}
                                data-testid="backtrackOriginMod"
                                variant="success"
                            >
                                Reset
                            </Button>

                            {!editing && (
                                <div className="App-aligncenter">
                                    <div>
                                        <b>ID:</b> {course.title}
                                    </div>
                                    <div>
                                        <b>Name:</b> {course.name}
                                    </div>
                                    <div>
                                        <b>Credits:</b> {course.credits}
                                    </div>
                                    <div>
                                        <b>Offering:</b> {course.semester}
                                    </div>
                                    <div>
                                        <b>Department:</b> {course.department}
                                    </div>
                                    <div>
                                        <b>Prereq:</b> {course.prereq}
                                    </div>
                                    <div>
                                        <b>Coreq:</b> {course.coreq}
                                    </div>
                                    <div>
                                        <b>Description:</b> {course.description}
                                    </div>
                                    <div>
                                        <b>Requirements:</b>
                                        {course.requirements}
                                    </div>
                                </div>
                            )}
                            {editing && (
                                <div>
                                    <Form.Group controlId="courseTitle">
                                        <Form.Label>ID: </Form.Label>
                                        <Form.Control
                                            value={title}
                                            onChange={saveTitle}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="courseName">
                                        <Form.Label>Name: </Form.Label>
                                        <Form.Control
                                            value={name}
                                            onChange={saveName}
                                        />
                                        <Form.Group controlId="courseCredits">
                                            <Form.Label>Credits: </Form.Label>
                                            <Form.Control
                                                value={credits}
                                                onChange={saveCredits}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="courseOffering">
                                            <Form.Label>Offering: </Form.Label>
                                            <Form.Control
                                                value={offering}
                                                onChange={saveOffering}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="courseDepartment">
                                            <Form.Label>Department:</Form.Label>
                                            <Form.Control
                                                value={department}
                                                onChange={saveDepartment}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="coursePrereq">
                                            <Form.Label>Prereqs: </Form.Label>
                                            <Form.Control
                                                value={prereq}
                                                onChange={savePrereq}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="courseCoreq">
                                            <Form.Label>Coreqs: </Form.Label>
                                            <Form.Control
                                                value={coreq}
                                                onChange={saveCoreq}
                                            />
                                        </Form.Group>
                                    </Form.Group>
                                    <Form.Group controlId="courseDescription">
                                        <Form.Label>Description: </Form.Label>
                                        <Form.Control
                                            value={description}
                                            onChange={saveDescription}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="courseRequirements">
                                        <Form.Label>Requirements: </Form.Label>
                                        <Form.Control value={requirements} />
                                    </Form.Group>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
