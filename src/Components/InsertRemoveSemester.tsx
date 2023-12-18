/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { semester } from "../interfaces/semster";
import { Button, Form } from "react-bootstrap";
import { degreePlanProps } from "../interfaces/degreePlan";

export function RemoveSemester({
    degreePlan,
    setDegreePlan
}: degreePlanProps): JSX.Element {
    /*function removeSemester(id: number) {
        const update = degreePlan.semesters.filter(
            (q: semester): boolean => id !== q.id
        ); */
    function removeSemester(name: string) {
        const update = degreePlan.semesters.filter(
            (q: semester): boolean => name !== q.name
        );
        setDegreePlan({ ...degreePlan, semesters: update });
    }

    //return is the buttons
    //slpit the two seperate, add and the remove function
    //where the button will update the semester list
    //----------------------------------------------------------------------------------------
    //when pushing to main branch, push to git push orgin HEAD
    //github, pull request, go to my main branch and push it, then let the team know so they can push it to the main branch

    return (
        <div>
            {degreePlan.semesters.map((semester: semester) => (
                <div key={semester.name}>
                    <span>Semester {semester.name}</span>
                    <Button onClick={() => removeSemester(semester.name)}>
                        Remove Semester
                    </Button>
                </div>
            ))}
        </div>
    );
}

export function InsertSemester({
    degreePlan,
    setDegreePlan
}: degreePlanProps): JSX.Element {
    const [newSem, setNewSem] = useState<semester>({
        name: "",
        classes: [] /*,*/
        //id: degreePlan.semesters.length
    });

    function addSemester() {
        setDegreePlan({
            ...degreePlan,
            semesters: [...degreePlan.semesters, newSem]
        }); //id growing by 1
        //if it  gets complex, then I might need to deep copy
    }
    return (
        <div>
            <Form.Label>Title: </Form.Label>
            <Form.Control
                value={newSem.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNewSem({
                        ...newSem,
                        name: e.target.value
                    })
                }
            ></Form.Control>
            <Button onClick={addSemester}>Add Semester</Button>
        </div>
    );
}
