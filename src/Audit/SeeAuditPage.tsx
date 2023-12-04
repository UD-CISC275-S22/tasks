/* eslint-disable no-extra-parens */
/* eslint-disable indent */
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { semester } from "../Interface/semester";
import { classes } from "../Interface/classes";

export function SeeAuditPage({
    canView,
    reqList,
    plan,
    prevUsedClasses,
    pushCurrList,
    stopView
}: {
    canView: boolean;
    reqList: string[];
    plan: semester[];
    prevUsedClasses: classes[][];
    pushCurrList: (usedClasses: classes[][]) => void;
    stopView: () => void;
}): JSX.Element {
    const [usedClasses, setUsedClasses] =
        useState<classes[][]>(prevUsedClasses);
    const [showModal, setShowModal] = useState(false);
    const [selectedClass, setSelectedClass] = useState<number>(0);
    const [classToAdd, setClassToAdd] = useState<classes>({
        code: "MATH166",
        title: "SPECIAL PROBLEM",
        credits: 3,
        preReq: ["No prerequisites."]
    });

    function endView() {
        //ending functions
        pushCurrList(usedClasses);
        stopView();
    }

    function handleClose(): void {
        setShowModal(!showModal);
    }

    const changeAddClass = (event: React.ChangeEvent<HTMLInputElement>) => {
        const wantedClass = event.target.value;

        plan.map((sem) =>
            sem.classList.find((wantClass) =>
                wantClass.code === wantedClass ? setClassToAdd(wantClass) : null
            )
        );
    };

    function changeArr() {
        if (classToAdd !== null && typeof selectedClass === "number") {
            const holder = [...usedClasses];

            if (selectedClass >= 0 && selectedClass < holder.length) {
                holder[selectedClass] = [classToAdd];
                setUsedClasses(holder);
            }
        }
        handleClose();
    }

    if (canView) {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Requirement</th>
                            <th>Filled Classes</th>
                            <th>Add Class To Fill</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reqList.map((req: string, IDX: number) => {
                            return (
                                <tr key={req}>
                                    <td>{req}</td>
                                    <td>
                                        {usedClasses[IDX] == null
                                            ? (usedClasses[IDX] = [])
                                            : usedClasses[IDX].map(
                                                  (usedClass) => usedClass.code
                                              )}
                                    </td>
                                    <td>
                                        <Button
                                            onClick={() => {
                                                setSelectedClass(IDX);
                                                handleClose();
                                            }}
                                        >
                                            Fill Requirement
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Choose Class to Fill Requirement
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {plan.map((sem: semester) =>
                            sem.classList.map((list: classes) => (
                                <Form.Check
                                    key={list.code}
                                    type="radio"
                                    label={list.code}
                                    value={list.code}
                                    onChange={changeAddClass}
                                ></Form.Check>
                            ))
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose}>Close</Button>
                        <Button onClick={changeArr}>Finished</Button>
                    </Modal.Footer>
                </Modal>
                <div>
                    <Button onClick={endView}>hide</Button>
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
}
