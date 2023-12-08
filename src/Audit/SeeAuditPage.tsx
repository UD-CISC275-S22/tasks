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
    major,
    creditList,
    pushCurrList,
    stopView
}: {
    canView: boolean;
    reqList: string[];
    plan: semester[];
    prevUsedClasses: classes[][];
    major: string;
    creditList: number[];
    pushCurrList: (usedClasses: classes[][]) => void;
    stopView: () => void;
}): JSX.Element {
    const [usedClasses, setUsedClasses] =
        useState<classes[][]>(prevUsedClasses);
    const [showModal, setShowModal] = useState(false);
    const [newCredit, setNewCredit] = useState<number[]>(creditList);
    const [selectedClass, setSelectedClass] = useState<number>(0);
    //Base case only occurs if no option is available
    const [classToAdd, setClassToAdd] = useState<classes>({
        code: "",
        title: "",
        credits: 0,
        preReq: [""]
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
                holder[selectedClass].push(classToAdd);
                setUsedClasses(holder);
            }
        }
        setCredits(selectedClass);
        handleClose();
    }

    function setCredits(IDX: number) {
        const holder = [...creditList];
        holder[IDX] =
            holder[IDX] -
            usedClasses[IDX].reduce(
                (total: number, classList: classes) =>
                    total + classList.credits,
                0
            );
        holder[IDX] = holder[IDX] < 0 ? 0 : holder[IDX];
        setNewCredit(holder);
    }

    if (canView) {
        return (
            <div>
                <h3>{major}</h3>
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Requirement</th>
                            <th scope="col">Filled Classes</th>
                            <th scope="col">Add Class To Fill</th>
                            <th scope="col">Reset List</th>
                            <th scope="col">Credits</th>
                            <th scope="col">Complete</th>
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
                                                  (classes) => classes.code
                                              ).join(", ")}
                                    </td>
                                    <td>
                                        <Button
                                            onClick={() => {
                                                setSelectedClass(IDX);
                                                handleClose();
                                            }}
                                        >
                                            Add Class
                                        </Button>
                                    </td>
                                    <td>
                                        <Button
                                            onClick={() => {
                                                usedClasses[IDX] = [];
                                                setNewCredit(creditList);
                                                pushCurrList(usedClasses);
                                            }}
                                        >
                                            Reset
                                        </Button>
                                    </td>
                                    <td>{newCredit[IDX]}</td>
                                    <td>
                                        {newCredit[IDX] == 0
                                            ? "Complete"
                                            : "Incomplete"}
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
