import React, { useState } from "react";
//import React from 'react';
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";
//import { Answer } from "../interfaces/answer";
//import { toShortForm } from "../objects";

export function ChangeType(): React.JSX.Element {

    const [changeType, setChangeType] = useState<QuestionType>("short_answer_question");
    function flipType(): void{
        
        if (changeType == "short_answer_question"){
                setChangeType("multiple_choice_question");
        } else {
            setChangeType("short_answer_question");
      
        }
            // rmb everything can go in the setState even strings if it type allows. Make a new answer and set it as ur default
    }

    return (
    <span>
    <Button onClick = {flipType}>Change Type</Button>
       {changeType == "short_answer_question" && <div>Short Answer</div> } 
        {/*This is the same as saying check if changetype equals short answer
        and display 'Short ANswer' if it does  
        Normally we'd just do {changeType && <div> show wtv </div>/} but since  the display changes
       
       {/* i needed to put changeType in brackets to make it visible 
       Format is {state (condiiton if needed) && <div> wtv </div>}
       */}
        {changeType == "multiple_choice_question" && <div>Multiple Choice</div>}

    </span>
)
}
