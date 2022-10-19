import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";
// import { ChangeType } from "./components/ChangeType";
// import { RevealAnswer } from "./components/RevealAnswer";
// import { StartAttempt } from "./components/StartAttempt";
// import { d6, TwoDice } from "./components/TwoDice";
// import { CycleHoliday } from "./components/CycleHoliday";
// import { Counter } from "./components/Counter";
// import { QuestionType } from "./interfaces/question";
// import { DoubleHalf } from "./bad-components/DoubleHalf";
// import { ChooseTeam } from "./bad-components/ChooseTeam";
// import { ColoredBox } from "./bad-components/ColoredBox";
// import { ShoveBox } from "./bad-components/ShoveBox";

function App(): JSX.Element {
    // Make a variable based on some State. No problem!
    return (
        <div className="App">
            {/* <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Alejandro Silva
            </header> */}
            <header>this is zoe test</header>
            <h1 className="App-header">
                There is a header CISC275 Alejandro Silva
            </h1>
            <img
                src="https://unsplash.com/photos/t_mt9LeOmPs"
                alt="Scenic Architecture"
            />
            <div>Different Modern Buildings</div>
            <ul>
                <li>Falling Water</li>
                <li>The Empire State Building</li>
                <li>The Guggenheim</li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World!
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div className="App-square"></div>
                    </Col>
                    <Col>
                        Second column. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        image?
                        <div className="App-square"></div>
                    </Col>
                </Row>
            </Container>
        </div>
        // <div className="App">
        //     <header className="App-header">
        //         UD CISC275 with React Hooks and TypeScript
        //     </header>
        //     <hr></hr>
        //     <Counter></Counter>
        //     <hr />
        //     <RevealAnswer></RevealAnswer>
        //     <hr />
        //     <StartAttempt></StartAttempt>
        //     <hr />
        //     <TwoDice></TwoDice>
        //     <hr />
        //     <ChangeType></ChangeType>
        //     <hr />
        //     <CycleHoliday></CycleHoliday>
        //     <hr />
        //     <DoubleHalf></DoubleHalf>
        //     <hr />
        //     <ChooseTeam></ChooseTeam>
        //     <hr />
        //     <ColoredBox></ColoredBox>
        //     <hr />
        //     <ShoveBox></ShoveBox>
        // </div>
    );
}

export default App;
