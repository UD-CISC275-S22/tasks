import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./App.css";

export function WelcomeMessage(): JSX.Element {
    const [name, setName] = useState<string>("*Please enter your name here*");
    // const [textOpacity, setTextOpacity] = useState<number>(1); // Opacity ranges from 0 to 1

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    // const handleOpacityChange = (newOpacity: number) => {
    //     setTextOpacity(newOpacity);
    // };

    return (
        <div>
            <Form.Group controlId="formStudent">
                <Form.Label>Name:</Form.Label>
                <Form.Control value={name} onChange={updateName} />
            </Form.Group>
            <div className="BT">
                Welcome {name}, here you will create you potential class
                schedule. You will have to choose your courses to fill out a
                complete degree plan. You have the option to include both winter
                and summer course but you do not have to include them.
                <p className="BT">
                    Here is a sample degree plan that will give you an idea of
                    how this will work.
                </p>
            </div>
            {/* <div>
                <p style={{ opacity: textOpacity }}>
                    This is some text with opacity {textOpacity}
                </p>
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.1}
                    value={textOpacity}
                    onChange={(e) =>
                        handleOpacityChange(parseFloat(e.target.value))
                    }
                />
            </div> */}
        </div>
    );
}
