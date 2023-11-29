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
                    <th>Course ID</th>
                    <th>Name</th>
                    <th>Credits</th>
                </tr>
            </thead>
            <tbody>
                {rendSemester.courses.map((rendCourse: Course): JSX.Element => {
                    //console.log("render course:");
                    //console.log(rendCourse);
                    return (
                        <tr
                            onClick={() => {
                                edit(rendCourse);
                            }}
                            key={rendCourse.UUID}
                        >
                            <td>{rendCourse.ticker}</td>
                            <td>{rendCourse.name}</td>
                            <td>{rendCourse.credits}</td>
                        </tr>
                    );
                })}
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan={2}>Totals Credits</th>
                    <td>
                        {rendSemester.courses.reduce(
                            (
                                creditsCount: number,
                                rendCourse: Course
                            ): number => creditsCount + rendCourse.credits,
                            0
                        )}
                    </td>
                </tr>
            </tfoot>
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
    let columncount = 0;
    function DisplaySemester(year: yearI, index: number): SemesterI | null {
        const seasons: SemesterI[] = [];

        if (year.winter) {
            seasons.push(year.winter);
        }
        if (year.spring) {
            seasons.push(year.spring);
        }
        if (year.summer) {
            seasons.push(year.summer);
        }
        if (year.fall) {
            seasons.push(year.fall);
        }
        return seasons.length > index ? seasons[index] : null;
    }
    if (year.winter) {
        columncount++;
    }
    if (year.spring) {
        columncount++;
    }
    if (year.summer) {
        columncount++;
    }
    if (year.fall) {
        columncount++;
    }
    return (
        <div>
            <Table style={{ tableLayout: "fixed" }} bordered size="sm">
                <thead>
                    <tr>
                        <th colSpan={columncount}>{year.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {year.fall && <th>Fall</th>}
                        {year.winter && <th>winter</th>}
                        {year.spring && <th>Spring</th>}
                        {year.summer && <th>Summer</th>}
                    </tr>
                    <tr>
                        {["fall", "winter", "spring", "summer"].map(
                            (season, index) => {
                                const semester = DisplaySemester(year, index);
                                return semester ? (
                                    <td key={season}>
                                        <Semester
                                            rendSemester={semester}
                                            edit={editCourse}
                                        ></Semester>
                                    </td>
                                ) : null;
                            }
                        )}
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
                                key={curplan.name}
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
