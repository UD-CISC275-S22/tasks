import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript<br></br>
            </header>
            <h1 className="header">Meghana Yarlagadda!</h1>
            <hr></hr>
            Hello World! <br></br>
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
            <img
                src="https://www.thespruceeats.com/thmb/btLT5e97Xl3vBzNo37xPlUgfQcI=/3135x3900/filters:fill(auto,1)/GettyImages-90053856-588b7aff5f9b5874ee534b04.jpg"
                alt="A cone of several scoops of different flavors of icecream stacked on top of eachother"
                width="250"
                height="325"
            />
            <br></br>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        Column 1:
                        <ul>
                            <li>Chocolate</li>
                            <li>Vanilla</li>
                            <li>Strawberry</li>
                        </ul>
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        Column 2:
                        <div className="rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
