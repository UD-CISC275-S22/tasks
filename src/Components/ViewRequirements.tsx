import React, { useState } from "react";
import { Modal, Button, Form, Col, Container, Table } from "react-bootstrap";

import { ViewPooling } from "./ViewPooling";
import "../ViewRequirements.css";

import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
import { Plan } from "../Interfaces/plan";
import { PoolingObjects } from "../Interfaces/poolingObjects";
import {
    math,
    secondWriting,
    capstone,
    additionalReqs,
    labSciences,
    Concentrations,
    Degrees
} from "../Interfaces/requirements";
import {
    FYE,
    DLE,
    Multicultural,
    BreadthA,
    BreadthB,
    BreadthC,
    BreadthD
} from "../Interfaces/requirements";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement
>;

export function ViewRequirements({
    plan,
    settingPlan,
    poolingObjects
}: {
    plan: Plan;
    settingPlan: (t: Plan) => void;
    poolingObjects: PoolingObjects;
}) {
    const CSBSConcentrations = [
        "Artificial Intelligence",
        "Bioinformatics",
        "Cybersecurity",
        "Data Science",
        "High Performance Computing: Applied Math",
        "High Performance Computing: Data",
        "Systems & Networks",
        "Theory & Computation: Discrete",
        "Theory & Computation: Continuous",
        "None"
    ];

    const DegreePlans = ["BA Core", "BS Core"];

    const [concentrations, settingConcentrations] = useState(
        CSBSConcentrations[0]
    );
    const [concentrationInfo, settingConcentrationInfo] = useState(
        Concentrations[0]
    );

    const [degree, settingDegree] = useState(DegreePlans[0]);
    const [degreeInfo, settingDegreeInfo] = useState(Degrees[0]);
    const [displayDegree, settingDisplayDegree] = useState(false);
    const [displayMod, settingDisplayMod] = useState(false);
    const [poolingMod, settingPoolingMod] = useState(false);
    const handleDisplayMod = () => settingDisplayMod(true);
    const handleCloseDisplayMod = () => settingDisplayMod(false);
    const handlePoolingMod = () => settingPoolingMod(true);
    const handleClosePoolingMod = () => settingPoolingMod(false);
    const handleDisplayDegree = () => settingDisplayDegree(true);
    const handleCloseDisplayDegree = () => settingDisplayDegree(false);

    const currentCoursesPool: Course[][] = plan.semesters.map(
        (currentSemesterDisplayed: Semester) =>
            currentSemesterDisplayed.courseList.map((courseP: Course) => ({
                ...courseP
            }))
    );

    const allPools: string[][] = currentCoursesPool.map(
        (courseLst2: Course[]) =>
            courseLst2.map(
                (currentCoursesDisplay: Course) => currentCoursesDisplay.title
            )
    );

    const changingDimensions = [] as string[];
    const flattenCurrentCoursesPool = changingDimensions.concat(...allPools);

    const allCredits: string[][] = currentCoursesPool.map(
        (courseLst2: Course[]) =>
            courseLst2.map(
                (currentCoursesDisplayed: Course) =>
                    currentCoursesDisplayed.credits
            )
    );

    const changingDimTwo = [] as string[];
    const flattenedCredits = changingDimTwo.concat(...allCredits);
    const credits = flattenedCredits.reduce(
        (total: number, c: string) => total + Number(c),
        0
    );

    const setMath: [string] = [math[0] + " or " + math[1]];
    const setSecondWriting: [string] = [
        secondWriting[0] + " or " + secondWriting[1]
    ];
    const setAdditionalReqs: [string] = [
        additionalReqs[0] + " or " + additionalReqs[1]
    ];
    const setCapstone: [string] = [
        capstone[0] +
            "/" +
            capstone[1] +
            " or " +
            capstone[2] +
            "/" +
            capstone[3]
    ];

    function switchingDegreeInfo() {
        if (degree === "BA Core") {
            settingDegreeInfo(Degrees[0]);
        } else if (degree === "BS Core") {
            settingDegreeInfo(Degrees[1]);
        }
    }

    const switchingDegree = (event: ChangeEvent) => {
        settingDegree(event.target.value);
    };

    function switchingConcenInfo() {
        if (concentrations === "Artificial Intelligence") {
            settingConcentrationInfo(Concentrations[0]);
        } else if (concentrations === "Bioinformatics") {
            settingConcentrationInfo(Concentrations[1]);
        } else if (concentrations === "CyberSecurity") {
            settingConcentrationInfo(Concentrations[2]);
        } else if (concentrations === "Data Science") {
            settingConcentrationInfo(Concentrations[3]);
        } else if (
            concentrations === "High Performance Computing: Applied Math"
        ) {
            settingConcentrationInfo(Concentrations[4]);
        } else if (concentrations === "High Performance Computing: Data") {
            settingConcentrationInfo(Concentrations[5]);
        } else if (concentrations === "Systems & Networks") {
            settingConcentrationInfo(Concentrations[6]);
        } else if (concentrations === "Theory & Computation: Discrete") {
            settingConcentrationInfo(Concentrations[7]);
        } else if (concentrations === " Theory & Computation: Continuous") {
            settingConcentrationInfo(Concentrations[8]);
        } else {
            settingConcentrationInfo(Concentrations[9]);
        }
    }

    const switchingConcentration = (event: ChangeEvent) => {
        settingConcentrations(event.target.value);
    };

    function Requirements(courses: string[]) {
        const completed = courses.filter((course: string): boolean =>
            flattenCurrentCoursesPool.includes(course)
        );
        if (completed.length > 0) {
            return true;
        } else {
            return false;
        }
    }
    const labSciencesopt = ["Lab Sciences"];
    const FYEopt = ["First Year Experience"];
    const DLEopt = ["Discovery Learning Experience"];
    const Multiculturalopt = ["Multicultural"];
    const BreadthAopt = ["Breadth A Reqs"];
    const BreadthBopt = ["Breadth B Reqs"];
    const BreadthCopt = ["Breadth C Reqs"];
    const BreadthDopt = ["Breadth D Reqs"];

    function labSciencesOptions(courses: string[]) {
        if (flattenCurrentCoursesPool.includes(courses[0 && 1])) {
            return true;
        } else if (
            flattenCurrentCoursesPool.includes(courses[2 && 3 && 4 && 5])
        ) {
            return true;
        } else if (flattenCurrentCoursesPool.includes(courses[6 && 7 && 8])) {
            return true;
        } else if (flattenCurrentCoursesPool.includes(courses[8 && 9])) {
            return true;
        } else if (
            flattenCurrentCoursesPool.includes(courses[10 && 11 && 12 && 13])
        ) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="ViewReqs">
            <Container>
                <h3>
                    <strong>
                        <b>Degree Requirements</b>
                    </strong>
                </h3>
                <div>
                    <Button onClick={handlePoolingMod} data-testid="poolingMod">
                        All Courses
                    </Button>

                    <ViewPooling
                        show={poolingMod}
                        handleClose={handleClosePoolingMod}
                        plan={plan}
                        settingPlan={settingPlan}
                        pooling={poolingObjects}
                    ></ViewPooling>

                    <p></p>
                    <Button
                        onClick={handleDisplayDegree}
                        data-testid="degreeMod"
                        variant="warning"
                    >
                        <b>Degree:</b>
                    </Button>

                    <Modal
                        show={displayDegree}
                        onClose={handleCloseDisplayDegree}
                    >
                        <Modal.Header>
                            <Modal.Title>Select Degree: </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Col>
                                <Form.Select
                                    value={degree}
                                    onChange={switchingDegree}
                                    data-testid="degrees"
                                >
                                    {DegreePlans.map((opt: string) => (
                                        <option key={opt} value={opt}>
                                            {opt}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                onClick={switchingDegreeInfo}
                                variant="link"
                            ></Button>
                            <Button
                                onClick={handleCloseDisplayDegree}
                                variant="success"
                            >
                                Save
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <p>
                        <p>{degree}</p>
                    </p>

                    <p></p>
                    <Button
                        onClick={handleDisplayMod}
                        data-testid="concentrationsMod"
                        variant="warning"
                    >
                        <b>Concentration:</b>
                    </Button>

                    <Modal show={displayMod} onClose={handleCloseDisplayMod}>
                        <Modal.Header>
                            <Modal.Title>Select Concentration: </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Col>
                                <Form.Select
                                    value={concentrations}
                                    onChange={switchingConcentration}
                                    data-testid="concentrations"
                                >
                                    {CSBSConcentrations.map((opt: string) => (
                                        <option key={opt} value={opt}>
                                            {opt}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                onClick={switchingConcenInfo}
                                variant="link"
                            ></Button>
                            <Button
                                onClick={handleCloseDisplayMod}
                                variant="success"
                            >
                                Save
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <p>
                        <p>{concentrations}</p>
                        <p>
                            <b> Total Credits: </b> {credits} / 124
                        </p>
                    </p>
                </div>
                <div className="table-core">
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>
                                    <b>Core</b>
                                </th>
                                <th>
                                    <b>Completed</b>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {degreeInfo.map((s) =>
                                flattenCurrentCoursesPool.includes(s) ? (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🎉</td>
                                    </tr>
                                ) : (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🛑</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </Table>
                </div>
                <div className="table-conc">
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>
                                    <b>Concentration</b>
                                </th>
                                <th>
                                    <b>Completed</b>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {concentrationInfo.map((s) =>
                                flattenCurrentCoursesPool.includes(s) ? (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🎉</td>
                                    </tr>
                                ) : (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🛑</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </Table>
                </div>
                <div className="table-add">
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>
                                    <b>Additional Req(s)</b>
                                </th>
                                <th>
                                    <b>Completed</b>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {setMath.map((s) =>
                                Requirements(math) ? (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🎉</td>
                                    </tr>
                                ) : (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🛑</td>
                                    </tr>
                                )
                            )}
                            {setSecondWriting.map((s) =>
                                Requirements(secondWriting) ? (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🎉</td>
                                    </tr>
                                ) : (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🛑</td>
                                    </tr>
                                )
                            )}
                            {setAdditionalReqs.map((s) =>
                                Requirements(additionalReqs) ? (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🎉</td>
                                    </tr>
                                ) : (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🛑</td>
                                    </tr>
                                )
                            )}
                            {setCapstone.map((s) =>
                                Requirements(capstone) ? (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🎉</td>
                                    </tr>
                                ) : (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🛑</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </Table>
                </div>
                <div className="table-sci">
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>
                                    <b>Lab Science(s)</b>
                                </th>
                                <th>
                                    <b>Completed</b>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {labSciences.map((s) =>
                                labSciencesOptions(labSciencesopt) ? (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🎉</td>
                                    </tr>
                                ) : (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🛑</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </Table>
                </div>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>
                                <b>Uni Reqs(s)</b>
                            </th>
                            <th>
                                <b>Completed</b>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {FYEopt.map((s) =>
                            Requirements(FYE) ? (
                                <tr key={s}>
                                    <td>{s}</td>
                                    <td>🎉</td>
                                </tr>
                            ) : (
                                <tr key={s}>
                                    <td>{s}</td>
                                    <td>🛑</td>
                                </tr>
                            )
                        )}
                        {DLEopt.map((s) =>
                            Requirements(DLE) ? (
                                <tr key={s}>
                                    <td>{s}</td>
                                    <td>🎉</td>
                                </tr>
                            ) : (
                                <tr key={s}>
                                    <td>{s}</td>
                                    <td>🛑</td>
                                </tr>
                            )
                        )}
                        {Multiculturalopt.map((s) =>
                            Requirements(Multicultural) ? (
                                <tr key={s}>
                                    <td>{s}</td>
                                    <td>🎉</td>
                                </tr>
                            ) : (
                                <tr key={s}>
                                    <td>{s}</td>
                                    <td>🛑</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </Table>
                <div className="table-breadth">
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>
                                    <b>Breadth(s)</b>
                                </th>
                                <th>
                                    <b>Completed</b>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {BreadthAopt.map((s) =>
                                Requirements(BreadthA) ? (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🎉</td>
                                    </tr>
                                ) : (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🛑</td>
                                    </tr>
                                )
                            )}
                            {BreadthBopt.map((s) =>
                                Requirements(BreadthB) ? (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🎉</td>
                                    </tr>
                                ) : (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🛑</td>
                                    </tr>
                                )
                            )}
                            {BreadthCopt.map((s) =>
                                Requirements(BreadthC) ? (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🎉</td>
                                    </tr>
                                ) : (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🛑</td>
                                    </tr>
                                )
                            )}
                            {BreadthDopt.map((s) =>
                                Requirements(BreadthD) ? (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🎉</td>
                                    </tr>
                                ) : (
                                    <tr key={s}>
                                        <td>{s}</td>
                                        <td>🛑</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
}
