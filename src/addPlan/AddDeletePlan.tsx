/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Plan } from "../Interface/Plan";

export function AddDeletePlan({
    handleClose,
    show,
    allplans,
    setPlans
}: {
    handleClose: () => void;
    show: boolean;
    allplans: Plan[];
    setPlans: (plans: Plan[]) => void;
}): JSX.Element {
    const [planName, setPlanName] = useState("");
    const [controlFunction, setControlFunction] = useState(true);
    const [currentPlan, setCurrentPlan] = useState<string>(allplans[0].name);

    function selectedPlan(event: React.ChangeEvent<HTMLSelectElement>): void {
        setCurrentPlan(event.target.value);
    }

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        setPlanName(name);
    };

    function createClosingModal() {
        setPlans([...allplans, { name: planName, semesters: [] }]);
        handleClose();
    }

    function deleteClosingModal() {
        const findIndexplan: number = allplans.findIndex(
            (plan) => plan.name === currentPlan
        );
        allplans.splice(findIndexplan, 1);
        setPlans(allplans);
        handleClose();
        console.log(allplans);
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
                        <Button
                            color={
                                controlFunction === true ? "green" : undefined
                            }
                            onClick={() => setControlFunction(true)}
                        >
                            Add Plan
                        </Button>
                        <Button
                            color={
                                controlFunction === false ? "green" : undefined
                            }
                            onClick={() => setControlFunction(false)}
                        >
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
                                <Form.Select
                                    value={currentPlan}
                                    onChange={selectedPlan}
                                    style={{ textAlign: "center" }}
                                >
                                    {allplans.map((plan) => (
                                        <option
                                            key={plan.name}
                                            value={plan.name}
                                        >
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
