import React, { useState } from "react";
import { Button, Modal, Row, Col, Form } from "react-bootstrap";

import { Plan } from "../Interfaces/plan";

export function EditingPlan({
    show,
    handleClose,
    plan,
    settingPlan,
    plans,
    settingPlans
}: {
    show: boolean;
    handleClose: () => void;
    plan: Plan;
    settingPlan: (t: Plan) => void;
    plans: Plan[];
    settingPlans: (t: Plan[]) => void;
}): JSX.Element {
    const [planTitle, settingPlanTitle] = useState<string>(plan.title);

    function saveEdits() {
        plan.title = planTitle;
        const planIndexing = plans.findIndex(
            (p: Plan): boolean => p.id === plan.id
        );

        plans[planIndexing] = plan;
        settingPlan(plan);
        settingPlans(plans);
        handleClose();
    }

    function cancelEdits() {
        settingPlanTitle(plan.title);
        handleClose();
    }

    return (
        <Modal show={show} onClose={handleClose}>
            <Modal.Header>
                <Modal.Title>
                    <h4>Name Your Plan!</h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="planTitle" as={Row}>
                    <Form.Label column sm={2}>
                        Name:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={planTitle}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => settingPlanTitle(event.target.value)}
                        ></Form.Control>
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={cancelEdits}
                    data-testid="cancelModEP"
                    variant="link"
                >
                    Cancel
                </Button>
                <Button
                    onClick={saveEdits}
                    data-testid="saveModEP"
                    variant="success"
                >
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
