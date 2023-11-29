/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { plan } from "./PlannerInterfaces/plan";
import { semester } from "./PlannerInterfaces/semester";
import { DisplaySemester } from "./SemesterTable";

export function Plan({
    degreePlans,
    setDegreePlans,
    currentPlan
}: {
    degreePlans: plan[];
    setDegreePlans: (newDegreePlans: plan[]) => void;
    currentPlan: plan;
}): JSX.Element {
    //const [degreeReqView, toggleDegreeReqView] = useState(false);
    const [plan, setPlan] = useState<plan>({ ...currentPlan });
    const [edit, setEdit] = useState<boolean>(false);

    function insertSemester(id: string) {
        const newSemesters = [...plan.semesters];
        const insertIndex =
            newSemesters.findIndex((semester: semester) => semester.id === id) +
            1; //Finding index of where to put new semester
        newSemesters.splice(insertIndex, 0, {
            id: "",
            name: "New " + plan.semesters[insertIndex - 1].name,
            year: plan.semesters[insertIndex - 1].year,
            courses: [],
            season: ""
        }); //Add new semester
        setPlan({ ...plan, semesters: newSemesters }); //Update plan
    }
    //Delete semester
    function deleteSemester(id: string) {
        const newSemesters = [...plan.semesters];
        newSemesters.splice(
            newSemesters.findIndex((semester: semester) => semester.id === id),
            1
        ); //Removes plan by id
        setPlan({ ...plan, semesters: newSemesters }); //Update plan
    }
    // function saveChanges() {
    //     const replaceIndex = degreePlans.findIndex(
    //         (current: plan) => current.id === plan.id
    //     ); //Finds where the plan we have a copy of is
    //     const newDegreePlans = [...degreePlans]; //Makes a copy of the old list of plans
    //     newDegreePlans.splice(replaceIndex, 1, plan); //Replaces the old plan in the list with our local version
    //     setDegreePlans(newDegreePlans); //Updates the list of plans in App
    // }

    function clearAllSemesters() {
        setPlan({ ...plan, semesters: [] });
    }

    function addSemester() {
        setPlan({
            ...plan,
            semesters: [
                ...plan.semesters,
                {
                    id: "",
                    name: "New Semester",
                    year: 2022,
                    courses: [],
                    season: ""
                }
            ]
        });
    }

    function editPlanName(event: React.ChangeEvent<HTMLInputElement>) {
        setPlan({ ...plan, name: event.target.value });
    }
    return (
        <div>
            {edit ? (
                <div>
                    <Form.Group className="dropdownWidth" controlId="planName">
                        <Form.Label>Name of Plan: </Form.Label>
                        <Form.Control
                            value={plan.name}
                            onChange={editPlanName}
                        />
                    </Form.Group>
                    <Button onClick={() => setEdit(false)} className="btn">
                        Stop Editing
                    </Button>
                </div>
            ) : (
                <div>
                    <h1>
                        {plan.name}{" "}
                        <Button
                            onClick={() => setEdit(true)}
                            className="btntransparent"
                        >
                            Edit Name
                        </Button>
                    </h1>
                </div>
            )}
            {plan.semesters.map((semester: semester) => (
                <div key={semester.id}>
                    <DisplaySemester
                        semester={semester}
                        plan={plan}
                        updatePlan={setPlan}
                    ></DisplaySemester>
                    <Button
                        className="btnadd"
                        onClick={() => insertSemester(semester.id)}
                    >
                        Insert New Semester
                    </Button>
                    <Button
                        className="btncancel"
                        onClick={() => deleteSemester(semester.id)}
                    >
                        Delete This Semester
                    </Button>
                </div>
            ))}
            <Button className="btnadd" onClick={() => addSemester()}>
                Add Semester
            </Button>
            {/* <Button className="btnadd" onClick={() => saveChanges()}>
                Save Plan Changes
            </Button> */}
            <Button className="btncancel" onClick={() => clearAllSemesters()}>
                Delete All Semesters
            </Button>
            <br></br>
        </div>
    );
}
