import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function UseAttempt(props: {
    onClick: () => void;
    disable: boolean;
}): JSX.Element {
    if (props.disable) {
        return (
            <Button disabled onClick={props.onClick}>
                Use
            </Button>
        );
    }
    return <Button onClick={props.onClick}>use</Button>;
}

function GainAttempt(props: { onClick: () => void }): JSX.Element {
    return <Button onClick={props.onClick}>gain</Button>;
}

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requesting, setRequesting] = useState<string>("");
    const finalNum = parseInt(requesting) || 0;

    function request(value: string) {
        setRequesting(value);
    }

    const gain = () => {
        setAttempts(attempts + finalNum);
    };
    const lose = () => {
        setAttempts(attempts - 1 < 0 ? 0 : attempts - 1);
    };

    return (
        <div>
            <div>
                <span>Number Of Attempts: {attempts}</span>
            </div>
            <div>
                <Form.Group>
                    <Form.Control
                        type="number"
                        value={requesting}
                        role="spinbutton"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => request(event.target.value)}
                    ></Form.Control>
                </Form.Group>
            </div>
            <div>
                <UseAttempt onClick={lose} disable={attempts <= 0}></UseAttempt>
                <GainAttempt onClick={gain}></GainAttempt>
            </div>
        </div>
    );
}
