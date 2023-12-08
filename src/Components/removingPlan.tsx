import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

import { Semester } from "../Interfaces/semester";
import { Plan } from "../Interfaces/plan";
import "../App.css";

export function RemovingPlan({
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
    function saveEdits() {
        plan.semesters = [] as Semester[];
        const planIndexing = plans.findIndex(
            (p: Plan): boolean => p.id === plan.id
        );
        if (planIndexing > -1) {
            plans.splice(planIndexing, 1);
        }
        if (plans.length === 0) {
            const clearPlan: Plan = {
                id: 0,
                title: "Plan Base",
                concentration: "None",
                semesters: [] as Semester[],
                credits: 0
            };
            plans.push(clearPlan);
        }
        settingPlan(plans[0]);
        settingPlans(plans);
        handleClose();
    }

    function cancelEdits() {
        handleClose();
    }

    return (
        <Modal show={show} onClose={handleClose}>
            <Modal.Header>
                <Modal.Title>
                    <b>Warning!</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>
                    <p>
                        Are you sure you want to delete this plan?
                        <p>
                            <p></p>
                            <b>{plan.title}</b>
                        </p>
                    </p>
                </Form.Label>
                <Modal.Footer>
                    <Button
                        onClick={cancelEdits}
                        data-testid="cancelModRP"
                        variant="link"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={saveEdits}
                        data-testid="saveModRP"
                        variant="success"
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal.Body>
        </Modal>
    );
}
