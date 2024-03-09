import React from "react";
import "./App.css";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { ShoveBox } from "./bad-components/ShoveBox";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { ChangeColor } from "./form-components/ChangeColor";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World Corey Mitterer UD CISC275 with React Hooks and
                TypeScript
            </header>
            <hr></hr>
            <StartAttempt></StartAttempt>
            <hr></hr>
            <TwoDice></TwoDice>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <CheckAnswer expectedAnswer={"2"}></CheckAnswer>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["1", "2", "3"]}
                expectedAnswer={"1"}
            ></MultipleChoiceQuestion>
        </div>
    );
}

export default App;
