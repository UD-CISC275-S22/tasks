import React from "react";
import { Question1 } from "./Question1";
import { Question2 } from "./Question2";
import { Question3 } from "./Question3";
import { Question4 } from "./Question4";

export function Quizzer(): JSX.Element {
    return (
        <div>
            <h3>Quizzer</h3>
            <Question1></Question1>
            <Question2></Question2>
            <Question3></Question3>
            <Question4></Question4>
        </div>
    );
}
