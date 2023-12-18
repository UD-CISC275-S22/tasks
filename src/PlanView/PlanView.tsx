/* eslint-disable no-extra-parens */

/*
 
This component is used to allow the user to view the plan they have created.

If there are no plans available to view, the user will be told to create a plan. 
And the user will select either close or done to close the modal.

If a plans is available to view, a modal will pop up and the user will open the drop
down menu and select which plan they would like to view. The user can select either 
close or done. When selecting close, nothing will run and the modal will close.
If user were to click done, the program will execute viewSemesterTable() which will
use the viewPlan (which holds the user selected plan) to check against the array of 
plans (all plans) and it will take the array of seemsters and set the usestate 
changeViewSemesters to that. This is crucial as that usestate is used to display 
the semester by the code present in SemesterTable, and SemesterView.

*/

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
    const [viewPlan, setViewPlan] = useState<string>("");

    function viewSemesterTable(): void {
        if (viewPlan !== "") {
            const findIndexplan: number = allplans.findIndex(
                (plan) => plan.name === viewPlan
            );
            const foundplan: Plan = allplans[findIndexplan];
            changeViewSemesters(foundplan.semesters);
            setCurrentPlan(viewPlan);
        }
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
                        {allplans.length === 0 ? (
                            <div>
                                <Modal.Title>
                                    Please add a degree plan
                                </Modal.Title>
                            </div>
                        ) : (
                            <Form.Select
                                value={viewPlan}
                                onChange={selectedPlan}
                                style={{ textAlign: "center" }}
                                data-testid="dropdown"
                            >
                                <option>Please select a degree plan</option>
                                {allplans.map((plan) => (
                                    <option key={plan.name} value={plan.name}>
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
