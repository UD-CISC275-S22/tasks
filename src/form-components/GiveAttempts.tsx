import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function UseAttempt(props: {
    requesting: number;
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
    return <Button onClick={props.onClick}>Use</Button>;
}

function GainAttempt(props: {
    requesting: number;
    onClick: () => void;
}): JSX.Element {
    return <Button onClick={props.onClick}>Gain</Button>;
}

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requesting, setRequesting] = useState<string>("1");
    const finalNum = parseInt(requesting) || 0;

    const request = (value: string) => {
        setRequesting(value);
    };

    const gain = () => {
        setAttempts(attempts + finalNum);
    };
    const lose = () => {
        setAttempts(attempts - finalNum < 0 ? 0 : attempts - finalNum);
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
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => request(event.target.value)}
                    ></Form.Control>
                </Form.Group>
            </div>
            <div>
                <UseAttempt
                    requesting={finalNum}
                    onClick={lose}
                    disable={attempts <= 0}
                ></UseAttempt>
                <GainAttempt requesting={finalNum} onClick={gain}></GainAttempt>
            </div>
        </div>
    );
}
