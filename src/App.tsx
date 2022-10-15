import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
//import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

//from original branch
//import { Button, Container, Row, Col } from "react-bootstrap";
//import { pic } from "C:Usersmadel\taskssrcaudrey.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
        // From original branch
        // <header className="App-header">
        //     UD CISC275 with React Hooks and TypeScript- Madeline Pearce
        // </header>
        // <p>
        //     Edit <code>src/App.tsx</code> and save. This page will
        //     automatically reload. Hello World
        // </p>
        // <div>
        //     <h1>This is header text.</h1>
        //     <img src={pic} alt="breakfast at Tiffany's"></img>
        // </div>
        // <div>
        //     <ul>
        //         <li>First thing</li>
        //         <li>Another thing</li>
        //         <li>A third item</li>
        //     </ul>
        // </div>
        // <div>
        //     <Button onClick={() => console.log("Hello World!")}>
        //         Log Hello World
        //     </Button>
        // </div>
        // <div>
        //     <Container>
        //         <Row>
        //             <Col>First column.</Col>
        //             <Col>Second column.</Col>
        //         </Row>
        //     </Container>
        // </div>
    );
}

export default App;
