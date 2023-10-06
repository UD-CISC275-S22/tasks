import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("");

    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }
    function gainAttempts(): void {
        //testing
        if (attempts + parseInt(request) != 0) {
            //used for checking value of attempts
            console.log(attempts + parseInt(request));
            //^^used for checking value of attempts
            setAttempts(attempts + parseInt(request) || attempts);
        } else {
            console.log(attempts);
            setAttempts(attempts + 1);
        }
    }
    //failing on use attempts
    //go to lab hours
    //wont go past 1 on website
    function useAttempts(): void {
        if (attempts - parseInt(request) >= 0) {
            //used for checking value of attempts
            console.log(attempts - parseInt(request));
            //^^used for checking value of attempts
            setAttempts(attempts - parseInt(request) || attempts);
        } else {
            console.log(attempts);
            setAttempts(attempts - 1);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formAttemptInput">
                <Form.Label>Attempts: {attempts}</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={updateRequest}
                ></Form.Control>
                <Button onClick={gainAttempts}>gain</Button>
                <Button onClick={useAttempts} disabled={attempts <= 0}>
                    use
                </Button>
            </Form.Group>
        </div>
    );
}
