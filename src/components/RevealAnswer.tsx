import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function changeVisibility(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <Button onClick={changeVisibility}>
                There is a Reveal Answer button
            </Button>
            {visible && <div>42</div>}
    const [isAnswerVisible, setIsAnswerVisible] = useState<boolean>(false);

    const flipAnswerVisiblity = (): void => {
        setIsAnswerVisible(
            (isAnswerVisible: boolean): boolean => !isAnswerVisible
        );
    };
    return (
        <div>
            <Button onClick={flipAnswerVisiblity}>Reveal Answer</Button>
            {isAnswerVisible && <p>42</p>}
        </div>
    );
}
