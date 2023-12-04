/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormControl, Row, Table } from "react-bootstrap";
import { CoursePlan, SemesterI, dbMangement } from "./interfaces/semester";
import catalog from "./data/catalog.json";
import { Course } from "./interfaces/course";
import { v4 as uuidv4 } from "uuid";
import { AddCourseToSemester } from "./DBmanage";
import { CourseplanClick } from "./EditCoursePlan";
import "./App.css";

interface CatalogCourse {
    code: string;
    name: string;
    descr: string;
    credits: string;
    preReq: string;
    restrict: string;
    breadth: string;
    typ: string;
}

interface CourseCategory {
    [courseCode: string]: CatalogCourse;
}

interface CatalogCourses {
    [category: string]: CourseCategory;
}

export function CoureseplansBoot({
    updateCoursePlan,
    setCourseEdit,
    curCoursePlan,
    setEditCoursePlan
}: {
    updateCoursePlan: (cousePlan: CoursePlan) => void;
    setCourseEdit: (course: Course) => void;
    curCoursePlan: CoursePlan;
    setEditCoursePlan: (coureseplan: CoursePlan) => void;
}) {
    const [curCatalog, setcatalog] = useState<CatalogCourses>(catalog);
    const [queue, setqueue] = useState<Course[]>([]);
    useEffect(() => setEditCoursePlan(curCoursePlan), [curCoursePlan]);
    function addtempCourse(course: Course) {
        setqueue([...queue, course]);
    }
    function Save() {
        updateCoursePlan(curCoursePlan);
    }
    function clickToAddToSemeser(curSemeser: SemesterI) {
        console.log("click registered");
        setEditCoursePlan(
            AddCourseToSemester(curSemeser, queue, curCoursePlan)
        );
        setqueue([]);
        //setEditCoursePlan();
    }
    function setCourseplanDebug(courseplan: CoursePlan) {
        console.log("debug");
        console.log(courseplan);
        setEditCoursePlan(courseplan);
    }
    // function updateCoursePlan(courseplan: CoursePlan) {
    //     setEditCoursePlan(courseplan);
    // }
    function removeQueue(removecourse: Course) {
        setqueue(queue.filter((course: Course) => removecourse !== course));
    }
    function EditModal(course: Course) {
        console.log(EditModal);
    }
    const [searchval, SetSeachval] = useState<string>("");

    function searchInput(event: React.ChangeEvent<HTMLInputElement>) {
        SetSeachval(event.target.value);
        setcatalog(searchCourses(catalog, event.target.value));
    }

    function searchCourses(
        catalog: CatalogCourses,
        searchTerm: string
    ): CatalogCourses {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const filteredCatalogEntries = Object.entries(catalog).map(
            ([category, courses]) => {
                const filteredCourses = Object.entries(courses).filter(
                    ([courseCode, course]) =>
                        course.code
                            .toLowerCase()
                            .includes(lowerCaseSearchTerm) ||
                        course.name
                            .toLowerCase()
                            .includes(lowerCaseSearchTerm) ||
                        course.descr
                            .toLowerCase()
                            .includes(lowerCaseSearchTerm) ||
                        course.credits
                            .toLowerCase()
                            .includes(lowerCaseSearchTerm)
                );

                return [category, Object.fromEntries(filteredCourses)];
            }
        );

        return Object.fromEntries(
            filteredCatalogEntries.filter(
                ([_, courses]) => Object.keys(courses).length > 0
            )
        );
    }

    return (
        <div>
            <Button onClick={Save} className="save-button">
                Save
            </Button>
            <Row>
                <Col sm={8}>
                    <div style={{ marginBottom: ".5rem" }}>
                        <Form.Group controlId="search" as={Row}>
                            <Col sm={3}>
                                <FormControl
                                    className="float-end"
                                    type="text"
                                    placeholder="Search"
                                    //value={searchval}
                                    onChange={searchInput}
                                />
                            </Col>
                        </Form.Group>
                    </div>
                    <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                        <Table striped bordered hover>
                            <thead
                                className="table-light"
                                style={{
                                    position: "sticky",
                                    top: -1,
                                    zIndex: 99
                                }}
                            >
                                <tr
                                    style={{
                                        marginBottom: "-1px"
                                    }}
                                >
                                    <th colSpan={5}>Course Catalog</th>
                                </tr>
                                <tr>
                                    <th>Course Code</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Credits</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(curCatalog).map(
                                    (category: string) => {
                                        return Object.values(
                                            curCatalog[category]
                                        ).map((course: CatalogCourse) => {
                                            return (
                                                <tr key={course.code}>
                                                    <td>{course.code}</td>
                                                    <td>{course.name}</td>
                                                    <td>{course.descr}</td>
                                                    <td>{course.credits}</td>
                                                    <td>
                                                        <Button
                                                            onClick={() => {
                                                                addtempCourse({
                                                                    ticker: course.code,
                                                                    name: course.name,
                                                                    credits:
                                                                        parseInt(
                                                                            course.credits
                                                                                .trim()
                                                                                .charAt(
                                                                                    0
                                                                                )
                                                                        ),
                                                                    prereq: course.preReq,
                                                                    UUID: uuidv4(),
                                                                    Description:
                                                                        course.descr
                                                                });
                                                            }}
                                                            className="add-button"
                                                        >
                                                            ADD
                                                        </Button>
                                                    </td>
                                                </tr>
                                            );
                                        });
                                    }
                                )}
                            </tbody>
                        </Table>
                    </div>
                </Col>
                <Col sm={4}>
                    <div
                        style={{
                            maxHeight: "300px",
                            overflowY: "auto",
                            marginTop: "2.85rem"
                        }}
                    >
                        <Table striped bordered hover>
                            <thead
                                className="table-light"
                                style={{
                                    position: "sticky",
                                    top: 0,
                                    zIndex: 99
                                }}
                            >
                                <tr>
                                    <th colSpan={4}>Courses to add</th>
                                </tr>
                                <tr>
                                    <th>Course Code</th>
                                    <th>Credits</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {queue.map((course: Course) => {
                                    return (
                                        <tr key={course.UUID}>
                                            <td>{course.ticker}</td>
                                            <td>{course.credits}</td>
                                            <td>
                                                <Button
                                                    onClick={() =>
                                                        removeQueue(course)
                                                    }
                                                    variant="danger"
                                                >
                                                    Remove
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
            <Row>
                <CourseplanClick
                    Courseplan={curCoursePlan}
                    setCurrentCourseEdit={setCourseEdit}
                    selectedSemester={clickToAddToSemeser}
                    UpdateCourseplan={setCourseplanDebug}
                ></CourseplanClick>
            </Row>
        </div>
    );
}
