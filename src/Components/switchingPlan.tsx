import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { Plan } from "../Interfaces/plan";
import "../App.css";

export function SwitchingPlan({
    show,
    handleClose,
    plan,
    settingPlan,
    plans
}: {
    show: boolean;
    handleClose: () => void;
    plan: Plan;
    settingPlan: (t: Plan) => void;
    plans: Plan[];
}): JSX.Element {
    const [onPlan, settingCurrentPlan] = useState(plan);

    function savingPlan(event: React.ChangeEvent<HTMLSelectElement>) {
        const planIndexing = plans.findIndex(
            (p: Plan): boolean => p.title === event.target.value
        );
        settingCurrentPlan(plans[planIndexing]);
    }

    function saveEdits() {
        settingPlan(onPlan);
        handleClose();
    }

    function cancelEdits() {
        settingCurrentPlan(plan);
        handleClose();
    }
    return (
        <div>
            <Modal show={show} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        <b>My Plans:</b>
                    </Modal.Title>
                </Modal.Header>
                <Form.Group controlId="options">
                    <Form.Select
                        value={onPlan.title}
                        onChange={savingPlan}
                        data-testid="plansMod"
                    >
                        {plans.map((p: Plan) => (
                            <option key={p.id} value={p.title}>
                                {p.title}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Modal.Footer>
                    <Button
                        onClick={cancelEdits}
                        data-testid="cancelModSP"
                        variant="link"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={saveEdits}
                        data-testid="saveModSp"
                        variant="success"
                    >
                        Select & Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
