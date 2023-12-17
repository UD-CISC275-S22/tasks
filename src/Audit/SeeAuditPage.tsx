/* eslint-disable no-extra-parens */
/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { semester } from "../Interface/semester";
import { classes } from "../Interface/classes";

export function SeeAuditPage({
    canView,
    reqList,
    plan,
    prevUsedClasses,
    creditList,
    major,
    resetCurrList,
    stopView
}: {
    canView: boolean;
    reqList: string[];
    plan: semester[];
    prevUsedClasses: classes[][];
    creditList: number[];
    major: string;
    resetCurrList: () => void;
    stopView: () => void;
}): JSX.Element {
    const [usedClasses, setUsedClasses] =
        useState<classes[][]>(prevUsedClasses);
    const [showModal, setShowModal] = useState(false);
    const [majorName, setMajorName] = useState<string>("");
    const [newCredit, setNewCredit] = useState<number[]>([0]);
    const [selectedClass, setSelectedClass] = useState<number>(0);
    const [classToAdd, setClassToAdd] = useState<classes>({
        code: "",
        title: "",
        credits: 0,
        preReq: [""]
    });

    //updates newCredit and majorName if anything changes
    useEffect(() => {
        setNewCredit(creditList);
    });

    useEffect(() => {
        setMajorName(major);
    });

    function endView() {
        //ending functions
        resetCurrList();
        setUsedClasses([]);
        stopView();
    }

    function handleClose(): void {
        setShowModal(!showModal);
    }

    const changeAddClass = (event: React.ChangeEvent<HTMLInputElement>) => {
        //option hovered in modal is saved and then checked against the given plan to see if the class exists
        const wantedClass = event.target.value;

        plan.map((sem) =>
            sem.classList.find((wantClass) =>
                wantClass.code === wantedClass ? setClassToAdd(wantClass) : null
            )
        );
    };

    function changeArr() {
        //checks to ensure all information about wantClass and selectedClass are valid, if so add the class to the list of used classes at the index given by IDX in return plan
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
        //Goes through the list of classes in used classes at a certain index to determine how many credits taken.
        //Subtract credits from required credit list until 0 to symbolize the requirement has been met
        const holder = [...newCredit];
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
                <h3>{majorName}</h3>
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
                                                newCredit[IDX] =
                                                    creditList[IDX];
                                                resetCurrList();
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
