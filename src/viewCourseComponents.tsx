import React, { useState } from "react";
import { Accordion, AccordionHeader, Table } from "react-bootstrap";
import { CoursePlan, SemesterI, yearI } from "./interfaces/semester";
import { Course } from "./interfaces/course";
import "./App.css";
import { ClearCourseModal } from "./ClearCourseModal";
import { AddCourseModal } from "./AddCourseModal";
import { JsxAttribute } from "typescript";
//const [CurrentModalCourse, setCurrentModalCourse] = useState<Course>();

export function Semester({
    rendSemester,
    edit
}: {
    rendSemester: SemesterI;
    edit: (course: Course) => void;
}): JSX.Element {
    return (
        <Table striped bordered hover className="tight">
            <thead>
                <tr>
                    <th>Course ID</th> <th>Name</th>
                    <th>Credits</th>
                </tr>
            </thead>
            <tbody>
                {rendSemester.courses.map((rendCourse: Course): JSX.Element => {
                    return (
                        <tr
                            onClick={() => {
                                edit(rendCourse);
                            }}
                            key={rendCourse.ticker}
                        >
                            <td>{rendCourse.ticker}</td>
                            <td>{rendCourse.name}</td>
                            <td>{rendCourse.credits}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}
export function Year({
    year,
    editCourse
}: {
    year: yearI;
    editCourse: (course: Course) => void;
}): JSX.Element {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th colSpan={2}>{year.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{year.firstsemester.season}</th>
                        <th>{year.secondsemester.season}</th>
                    </tr>
                    <tr>
                        <td>
                            <Semester
                                rendSemester={year.firstsemester}
                                edit={editCourse}
                            ></Semester>
                        </td>
                        <td>
                            <Semester
                                rendSemester={year.secondsemester}
                                edit={editCourse}
                            ></Semester>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
function Courseplan({
    Courseplan,
    setCurrentCourseEdit
}: {
    Courseplan: CoursePlan;
    setCurrentCourseEdit: (course: Course) => void;
}) {
    const [yearOne, updateYearOne] = useState<yearI>();
    const [showAddCourseModal, setShowAddCourseModal] =
        useState<boolean>(false);
    const handleShowAddCourseModal = () => setShowAddCourseModal(true);
    const handleCloseAddCourseModal = () => setShowAddCourseModal(false);
    //const handleShowAddModal = () => updateEditMogal(true);
    const [showClearModal, setShowClearModal] = useState(false);

    // const handleAddNewCourse = (
    //     newCourse: Course,
    //     semester: "firstsemester" | "secondsemester"
    // ) => {
    //     if (yearOne[semester].courses.length >= 5) {
    //         console.error("Cannot add more than 5 courses per semester");
    //         return;
    //     }

    //     const updatedCourses = [...yearOne[semester].courses, newCourse];

    //     const updatedSemester = {
    //         ...yearOne[semester],
    //         courses: updatedCourses
    //     };

    //     updateYearOne({ ...yearOne, [semester]: updatedSemester });
    //     handleCloseAddCourseModal();
    // };

    return (
        <div>
            <button onClick={handleShowAddCourseModal}>Add Course</button>
            {/* <AddCourseModal
                show={showAddCourseModal}
                handleClose={handleCloseAddCourseModal}
                addCourse={handleAddNewCourse}
            ></AddCourseModal> */}
            {Courseplan.years.map((curyear: yearI) => {
                return (
                    <Year
                        year={curyear}
                        editCourse={setCurrentCourseEdit}
                        key={curyear.name}
                    ></Year>
                );
            })}
        </div>
    );
}

export function MulitCourseplan({
    Courseplans,
    setCurrentCourseEdit
}: {
    Courseplans: CoursePlan[];
    setCurrentCourseEdit: (course: Course) => void;
}) {
    return (
        <div>
            <Accordion>
                {Courseplans.map((curplan: CoursePlan, index: number) => (
                    <Accordion.Item
                        eventKey={index.toString()}
                        key={index.toString()}
                        className="beigebackground"
                    >
                        <AccordionHeader>{curplan.name}</AccordionHeader>
                        <Accordion.Body>
                            <Courseplan
                                key={curplan.name} // assuming 'name' is a unique identifier
                                Courseplan={curplan}
                                setCurrentCourseEdit={setCurrentCourseEdit}
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}
