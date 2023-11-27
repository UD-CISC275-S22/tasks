import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Plan } from "../Interface/Plan";

export function AddPlan({
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

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        setPlanName(name);
    };

    function closingModal() {
        setPlans([...allplans, { name: planName, semesters: [] }]);
        handleClose();
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Creating a Plan</Modal.Title>
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
                            closingModal();
                        }}
                    >
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
