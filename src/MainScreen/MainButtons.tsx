/* eslint-disable no-extra-parens */
import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { AddSemesterModal } from "./Modal/addSemesterModal";
import { SemesterTable } from "../semester/SemesterTable";
import { FilteringSearch } from "../FilteringSearch/FilteringSearch";
import { ChosenMajor } from "../Audit/ChosenMajor";

export function MainButtons(): JSX.Element {
    const [semesterSchedule, setSemesterSchedule] = useState<boolean>(true);
    const [currentPlan, setCurrentPlan] = useState<boolean>(true);
    const [viewAll, setViewAll] = useState<boolean>(true);

    const [openModal, setOpenModal] = useState<boolean>(false);
    const handleOpenModal = () => setOpenModal(!openModal);
    const handleCloseModal = () => setOpenModal(!openModal);

    const [openMajor, setOpenMajor] = useState<boolean>(false);
    const handleOpenMajor = () => setOpenMajor(!openMajor);
    const handleCloseMajor = () => setOpenMajor(!openMajor);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <Button
                                onClick={() => {
                                    setSemesterSchedule(!semesterSchedule);
                                    <SemesterTable></SemesterTable>;
                                }}
                            >
                                Schedule Semester
                            </Button>
                            <div
                                style={{
                                    display: semesterSchedule ? "block" : "none"
                                }}
                            >
                                <SemesterTable></SemesterTable>
                            </div>
                            <div>
                                Click Here to create your schedule for the
                                upcoming and future semesters by adding your
                                desired courses.
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Button
                                onClick={() => {
                                    setCurrentPlan(!currentPlan);
                                }}
                            >
                                Current Plan
                            </Button>
                            <FilteringSearch></FilteringSearch>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Button
                                onClick={() => {
                                    setViewAll(!viewAll);
                                }}
                            >
                                Saved Plans
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Button
                                onClick={() => {
                                    handleOpenModal();
                                }}
                            >
                                Add Semester
                            </Button>
                            {openModal && (
                                <AddSemesterModal
                                    handleClose={handleCloseModal}
                                    show={openModal}
                                />
                            )}
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Button
                                onClick={() => {
                                    handleOpenMajor();
                                }}
                            >
                                Choose Major
                            </Button>
                            {openMajor && (
                                <ChosenMajor
                                    handleClose={handleCloseMajor}
                                    show={openMajor}
                                />
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
