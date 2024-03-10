import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [userNoAttempts, setUserNoAttempts] = useState<string>("3");
    const [userRequest, setUserRequest] = useState<string>("0");

    const gainHandler = () => {
        if (parseInt(userRequest)) {
            setUserNoAttempts(
                (parseInt(userNoAttempts) + parseInt(userRequest)).toString()
            );
        } else {
            console.log(userRequest, ", is not a number");
        }
    };

    const useHandler = () => {
        setUserNoAttempts((parseInt(userNoAttempts) - 1).toString());
    };

    return (
        <div>
            <Form.Group controlId="numberOfAttempts">
                <Form.Label>
                    How many attempts would you like to add ?:
                </Form.Label>
                <Form.Control
                    type="number"
                    value={userRequest}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setUserRequest(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                onClick={useHandler}
                disabled={parseInt(userNoAttempts) === 0}
            >
                use
            </Button>
            <Button onClick={gainHandler}>gain</Button>
            <h3>Number of attempts left: {parseInt(userNoAttempts)}</h3>
        </div>
    );
}
