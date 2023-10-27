import React, { useState } from "react";
import { Class } from "../interfaces/class";
import { Form } from "react-bootstrap";
import sample from "../data/allClasses.json";


export function InsertRemoveSemestert(): JSX.Element {
    //perhaps make a button to add
    //then a button to remove the semster
    //each row will have a button to either add or remove a semester

    //make an interface for semester, make it as it's own file, to use it elsewhere
    //state in the main file, semesters-list of semesters
    //to add -make a function, to remove you make a function 
    const SEMESTER = sample.map(
    (semester): Semester => ({
        ...quiz,
        questionList: quiz.questionList.map(
            (q): Question => ({
                ...q,
                submission: "",
                type: q.type as QuestionType
            })
        )
    })
);


    const [semester, setSemester] = useState<Class[]>(SEMESTER);



    return ();
}
