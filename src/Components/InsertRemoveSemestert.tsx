import React, { useState } from "react";
import { Class } from "../interfaces/class";
import { Form } from "react-bootstrap";
import sample from "../data/allClasses.json";


export function InsertRemoveSemestert(): JSX.Element {
    const SEMESTER = sample.map();

    const [semester, setSemester] = useState<Class[]>(SEMESTER);

    function addSemester(courseCode: string) {

    }

    function removeSemester(courseCode: string) {
        setSemester(semester.filter((q: Class): boolean => courseCode !== q.courseCode));
    }


    return ();
}
