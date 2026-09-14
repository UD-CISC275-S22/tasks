import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
//import { img } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
//import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Mohammed Fofana UD CISC275 with React Hooks and TypeScript
                <p> Hello World</p>
                <div>
                    <Button
                        onClick={() => {
                            //This onclick function is attached to  and in the first buton tag
                            console.log("Hello World!");
                        }}
                    >
                        Log Hello World
                    </Button>
                </div>
                <div>
                    <Container>
                        <Row>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: 300,
                                    height: 400,
                                }}
                            >
                                <Col>
                                    Slipknot Songs I like.
                                    <div>
                                        <ul>
                                            <li> Eyeless</li>
                                            <li> Custer </li>
                                            <li> Critical darling</li>
                                        </ul>
                                    </div>
                                </Col>
                            </div>

                            <div
                                style={{
                                    backgroundColor: "blue",
                                    width: 525,
                                    height: 500,
                                }}
                            >
                                <Col>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0Rfn9U2nzEhLdKEKeMZs-F2Ofq4EBwdR6gkxjEL0lp4fKh9oVwJu3tYW&s=10"
                                        alt="A picture of the metal band slipknot"
                                    />
                                </Col>
                            </div>
                        </Row>
                    </Container>
                </div>
            </header>

            <h1 style={{ backgroundColor: "Blue" }}></h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <hr></hr>
            <Counter></Counter> 
            <hr />
            <RevealAnswer></RevealAnswer> 
            <hr />
            <StartAttempt></StartAttempt> 
            <hr />
            {/* <TwoDice></TwoDice> */}
            <hr />
            <ChangeType></ChangeType>
            <hr />
             <CycleHoliday></CycleHoliday> 
        </div>
    );
}

type letterGrade = "A" | "B" | "C" | "D";
let grade: letterGrade;
grade = "A";
console.log(grade);
export default App;

export function Add(first: number, second: number): number {
    return first + second;
}
