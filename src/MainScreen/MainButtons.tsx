import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

export function MainButtons(): JSX.Element {
    const [semesterSchedule, setSemesterSchedule] = useState<boolean>(true);
    const [currentPlan, setCurrentPlan] = useState<boolean>(true);
    const [viewAll, setViewAll] = useState<boolean>(true);
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <Button
                                onClick={() => {
                                    setSemesterSchedule(!semesterSchedule);
                                }}
                            >
                                Schedule Semester
                            </Button>
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
                </Row>
            </Container>
        </div>
    );
}
