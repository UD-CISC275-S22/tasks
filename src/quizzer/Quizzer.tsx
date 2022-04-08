import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Button } from "react-bootstrap";
import { Question } from "../interfaces/question";
import "./quizzersketch.png";
import "./quizzerdatamodel.png";

export function Quizzer(): JSX.Element {
    return (
        <div>
            <h3>Quizzer</h3>
            <img src="./quizzerdatamodel.png"></img>
            <img src="./quizzersketch.png"></img>
        </div>
    );
}
