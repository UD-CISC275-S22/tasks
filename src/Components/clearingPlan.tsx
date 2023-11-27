import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Semester } from "../Interfaces/semester";
import { Plan } from "../Interfaces/plan";
import "../App.css";

export function ClearingPlan({
    show,
    handleClose,
    plan,
    plans,
    settingPlan,
    settingPlans
}: {
    show: boolean;
    handleClose: () => void;
    plan: Plan;
    plans: Plan[];
    settingPlan: (t: Plan) => void;
    settingPlans: (t: Plan[]) => void;
}): JSX.Element {
    function saveEdits() {
        plan.semesters = [] as Semester[];
        const planIndexing = plans.findIndex(
            (p: Plan): boolean => p.id === plan.id
        );
        plans[planIndexing] = plan;
        settingPlan(plan);
        settingPlans(plans);
        handleClose();
    }
    function cancelEdits() {
        handleClose();
    }
    return (
        <Modal show={show} close={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Warning!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>
                    You are clearing this entire plan, do you confirm?
                </Form.Label>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={cancelEdits}
                    data-testid="cancelButtonCP"
                >
                    Cancel
                </Button>
                <Button
                    variant="success"
                    onClick={saveEdits}
                    data-testid="confirmationButtonCP"
                >
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
