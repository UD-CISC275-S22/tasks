//task 1: shows a single semester
//task 2: shows multiple semesters
//task 3: clear out semester
//task 4: insert or remove a course in a semester

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Semester.css";

type SemType = "Fall" | "Spring";

export function showSingle(): JSX.Element {
    const [course, setCourse] = useState<String>("CISC275"); //replace "String" and whether or not itll be a string maybe the ID
    const [SemesterType, setSemesterType] = useState<SemType>("Fall");

    return (
        <div>
            <div>

            </div>
        </div>
    );
}