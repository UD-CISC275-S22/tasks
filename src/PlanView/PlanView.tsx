/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Plan } from "../Interface/Plan";
import { semester } from "../Interface/semester";

export function PlanView({
    handleClose,
    show,
    allplans,
    changeViewSemesters,
    setCurrentPlan
}: {
    handleClose: () => void;
    show: boolean;
    allplans: Plan[];
    changeViewSemesters: (viewSemesteres: semester[]) => void;
    setCurrentPlan: (name: string) => void;
}): JSX.Element {
    const [viewPlan, setViewPlan] = useState<string>(allplans[0].name);

    function viewSemesterTable(): void {
        const findIndexplan: number = allplans.findIndex(
            (plan) => plan.name === viewPlan
        );
        const foundplan: Plan = allplans[findIndexplan];
        changeViewSemesters(foundplan.semesters);
        setCurrentPlan(viewPlan);
        handleClose();
    }

    function selectedPlan(event: React.ChangeEvent<HTMLSelectElement>): void {
        setViewPlan(event.target.value);
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Select
                            value={viewPlan}
                            onChange={selectedPlan}
                            style={{ textAlign: "center" }}
                        >
                            {allplans.map((plan) => (
                                <option key={plan.name} value={plan.name}>
                                    {plan.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => {
                            handleClose();
                        }}
                    >
                        Close
                    </Button>
                    <Button
                        onClick={() => {
                            viewSemesterTable();
                        }}
                    >
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
