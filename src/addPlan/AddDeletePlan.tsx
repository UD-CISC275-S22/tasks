/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Plan } from "../Interface/Plan";
import { semester } from "../Interface/semester";

export function AddDeletePlan({
    handleClose,
    show,
    allplans,
    setPlans,
    currentPlan,
    setCurrentPlan,
    setSemesters
}: {
    handleClose: () => void;
    show: boolean;
    allplans: Plan[];
    setPlans: (plans: Plan[]) => void;
    currentPlan: string;
    setCurrentPlan: (planName: string) => void;
    setSemesters: (viewSemesteres: semester[]) => void;
}): JSX.Element {
    const [planName, setPlanName] = useState("");
    const [controlFunction, setControlFunction] = useState(true);
    const [selectPlan, setSelectPlan] = useState<string>("");

    function selectedPlan(event: React.ChangeEvent<HTMLSelectElement>): void {
        setSelectPlan(event.target.value);
    }

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        setPlanName(name);
    };

    function createClosingModal() {
        if (planName !== "") {
            setPlans([...allplans, { name: planName, semesters: [] }]);
        }
        handleClose();
    }

    function deleteClosingModal() {
        if (selectPlan !== "") {
            const findIndexplan: number = allplans.findIndex(
                (plan) => plan.name === selectPlan
            );
            allplans.splice(findIndexplan, 1);
            // Included this if statement because the plan name
            // displayed on the table view should only be erased if that
            // specific plan is currenlty being displayed and the user wants remove it
            if (selectPlan === currentPlan) {
                setCurrentPlan("");
                setSemesters([]);
            }
            setPlans(allplans);
        }
        handleClose();
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title> Add/Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around"
                        }}
                    >
                        <Button onClick={() => setControlFunction(true)}>
                            Add Plan
                        </Button>
                        <Button onClick={() => setControlFunction(false)}>
                            Delete Plan
                        </Button>
                    </div>
                </Modal.Body>

                {controlFunction ? (
                    <div>
                        <Modal.Header>
                            <Modal.Title>Creating Plan</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    placeholder="Provide a name for the degree plan"
                                    onChange={inputChange}
                                    data-testid="input1"
                                />
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
                                    createClosingModal();
                                }}
                            >
                                Done
                            </Button>
                        </Modal.Footer>
                    </div>
                ) : (
                    <div>
                        <Modal.Header>
                            <Modal.Title>Delete Plan</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group>
                                {allplans.length === 0 ? (
                                    <div>
                                        <Modal.Title>
                                            Please add a degree plan
                                        </Modal.Title>
                                    </div>
                                ) : (
                                    <Form.Select
                                        value={selectPlan}
                                        onChange={selectedPlan}
                                        style={{ textAlign: "center" }}
                                    >
                                        <option>
                                            Please select a degree plan
                                        </option>
                                        {allplans.map((plan) => (
                                            <option
                                                key={plan.name}
                                                value={plan.name}
                                            >
                                                {plan.name}
                                            </option>
                                        ))}
                                    </Form.Select>
                                )}
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
                                    deleteClosingModal();
                                }}
                            >
                                Done
                            </Button>
                        </Modal.Footer>
                    </div>
                )}
            </Modal>
        </div>
    );
}
