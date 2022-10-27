import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("blue");
    /* const COLORS = [
        "red",
        "blue",
        "green",
        "yellow",
        "black",
        "white",
        "purple",
        "pink"
    ]; */

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosenColor(event.target.value);
    }
    //const DEFAULT_COLOR_INDEX = 0;
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="formUserName">
                <Form.Label>Input Name</Form.Label>
                <Form.Control id="colored-box" type="string" />
            </Form.Group>
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                label="red"
                checked={chosenColor === "red"}
                style={{
                    backgroundColor: "red",
                    width: "50px",
                    height: "50px",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                label="blue"
                checked={chosenColor === "blue"}
                style={{
                    backgroundColor: "blue",
                    width: "50px",
                    height: "50px",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                label="green"
                checked={chosenColor === "green"}
                style={{
                    backgroundColor: "green",
                    width: "50px",
                    height: "50px",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                label="yellow"
                checked={chosenColor === "yellow"}
                style={{
                    backgroundColor: "yellow",
                    width: "50px",
                    height: "50px",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                label="black"
                checked={chosenColor === "black"}
                style={{
                    backgroundColor: "black",
                    width: "50px",
                    height: "50px",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                label="white"
                checked={chosenColor === "white"}
                style={{
                    backgroundColor: "white",
                    width: "50px",
                    height: "50px",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                label="purple"
                checked={chosenColor === "purple"}
                style={{
                    backgroundColor: "purple",
                    width: "50px",
                    height: "50px",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                label="pink"
                checked={chosenColor === "pink"}
                style={{
                    backgroundColor: "pink",
                    width: "50px",
                    height: "50px",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            />
        </div>
    );
}
