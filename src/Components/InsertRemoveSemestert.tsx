import React, { useState } from "react";
import { semester } from "../interfaces/semster";
import { Button } from "react-bootstrap";

//import sample from "../data/allClasses.json";

export function InsertRemoveSemestert(): JSX.Element {
    const [semesters, setSemesters] = useState<semester[]>([
        { id: 0, classes: [] }
    ]); //creating a semester list with just the semester 0 with no classes

    function addSemester() {
        setSemesters([...semesters, { id: semesters.length + 1, classes: [] }]); //id growing by 1
        //if it  gets complex, then I might need to deep copy
    }

    function removeSemester(id: number) {
        setSemesters(semesters.filter((q: semester): boolean => id !== q.id));
    }

    //return is the buttons
    //slpit the two seperate, add and the remove function
    //where the button will update the semester list
    //----------------------------------------------------------------------------------------
    //when pushing to main branch, push to git push orgin HEAD
    //github, pull request, go to my main branch and push it, then let the team know so they can push it to the main branch

    return (
        <div>
            {semesters.map((semester: semester) => (
                <div key={semester.id}>
                    <span>Semester {semester.id}</span>
                    <Button onClick={() => removeSemester(semester.id)}>
                        Remove Semester
                    </Button>
                </div>
            ))}
            <Button onClick={addSemester}>Add Semester</Button>
        </div>
    );
}
