import React, { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    Button,
    ButtonGroup,
    Table
} from "react-bootstrap";
import { CoursePlan, SemesterI, seasonT, yearI } from "./interfaces/semester";
import { Course } from "./interfaces/course";
//import React, { useState } from "react";
import "./App.css";
import { ClearCourseModal } from "./ClearCourseModal";
import { AddCourseModal } from "./AddCourseModal";
import { UpdateCoureplanYear, removeSemesterYear } from "./DBmanage";
//import { JsxAttribute } from "typescript";
//const [CurrentModalCourse, setCurrentModalCourse] = useState<Course>();

function Semester({
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
        </Table>
    );
}

function Year({
    year,
    editCourse,
    selectedSemester,
    updateYear
}: {
    year: yearI;
    editCourse: (course: Course) => void;
    selectedSemester: (semester: SemesterI) => void;
    updateYear: (updateYear: yearI) => void;
}): JSX.Element {
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
    let columncount = 0;
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
                        {year.fall && (
                            <th onClick={() => selectedSemester(year.fall!)}>
                                Fall
                                <ButtonGroup style={{ display: "flex" }}>
                                    <Button
                                        onClick={() =>
                                            selectedSemester(year.fall!)
                                        }
                                        className="float-end"
                                    >
                                        AddQueue
                                    </Button>
                                    <Button
                                        variant="danger"
                                        className="float-end"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent event bubbling
                                            updateYear(
                                                removeSemesterYear(
                                                    year,
                                                    year.fall!
                                                )
                                            );
                                        }}
                                    >
                                        remove
                                    </Button>
                                </ButtonGroup>
                            </th>
                        )}
                        {year.winter && (
                            <th onClick={() => selectedSemester(year.winter!)}>
                                winter
                                <ButtonGroup style={{ display: "flex" }}>
                                    <Button
                                        onClick={() =>
                                            selectedSemester(year.winter!)
                                        }
                                        className="float-end"
                                    >
                                        AddQueue
                                    </Button>
                                    <Button
                                        variant="danger"
                                        className="float-end"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent event bubbling
                                            updateYear(
                                                removeSemesterYear(
                                                    year,
                                                    year.winter!
                                                )
                                            );
                                        }}
                                    >
                                        remove
                                    </Button>
                                </ButtonGroup>
                            </th>
                        )}
                        {year.spring && (
                            <th onClick={() => selectedSemester(year.spring!)}>
                                Spring
                                <ButtonGroup style={{ display: "flex" }}>
                                    <Button
                                        onClick={() =>
                                            selectedSemester(year.spring!)
                                        }
                                        className="float-end"
                                    >
                                        AddQueue
                                    </Button>
                                    <Button
                                        variant="danger"
                                        className="float-end"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent event bubbling
                                            updateYear(
                                                removeSemesterYear(
                                                    year,
                                                    year.spring!
                                                )
                                            );
                                        }}
                                    >
                                        remove
                                    </Button>
                                </ButtonGroup>
                            </th>
                        )}
                        {year.summer && (
                            <th>
                                Summer
                                <ButtonGroup style={{ display: "flex" }}>
                                    <Button
                                        onClick={() =>
                                            selectedSemester(year.summer!)
                                        }
                                        className="float-end"
                                    >
                                        AddQueue
                                    </Button>
                                    <Button
                                        variant="danger"
                                        className="float-end"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent event bubbling
                                            updateYear(
                                                removeSemesterYear(
                                                    year,
                                                    year.summer!
                                                )
                                            );
                                        }}
                                    >
                                        remove
                                    </Button>
                                </ButtonGroup>
                            </th>
                        )}
                    </tr>
                    <tr>
                        {["fall", "winter", "spring", "summer"].map(
                            (season: string) => {
                                return year[season as keyof yearI] ? (
                                    <td key={season}>
                                        <Semester
                                            rendSemester={
                                                year[
                                                    season as keyof yearI
                                                ] as SemesterI
                                            }
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
export function CourseplanClick({
    Courseplan,
    setCurrentCourseEdit,
    selectedSemester,
    UpdateCourseplan
}: {
    Courseplan: CoursePlan;
    setCurrentCourseEdit: (course: Course) => void;
    selectedSemester: (semester: SemesterI) => void;
    UpdateCourseplan: (courseplan: CoursePlan) => void;
}) {
    const [yearOne, updateYearOne] = useState<yearI>();
    const [showAddCourseModal, setShowAddCourseModal] =
        useState<boolean>(false);
    const handleCloseAddCourseModal = () => setShowAddCourseModal(false);
    const [showClearModal, setShowClearModal] = useState(false);

    return (
        <div>
            {/* <AddCourseModal
                show={showAddCourseModal}
                handleClose={handleCloseAddCourseModal}
                addCourse={handleAddNewCourse}
                ></AddCourseModal>*/}
            {Courseplan.years.map((curyear: yearI) => {
                return (
                    <Year
                        year={curyear}
                        editCourse={setCurrentCourseEdit}
                        key={curyear.name}
                        selectedSemester={selectedSemester}
                        updateYear={(year: yearI) => {
                            console.log("update year called");
                            UpdateCourseplan(
                                UpdateCoureplanYear(curyear, year, Courseplan)
                            );
                        }}
                    ></Year>
                );
            })}
        </div>
    );
}
