//import React, { useState } from "react";
//import { Button, Form } from "react-bootstrap";
import React from "react";
import { Button, Form } from "react-bootstrap";

export function QuestionRecordControls({
    updatePublished,
    updateAnswer,
    changeEditing
}: {
    updatePublished: () => void;
    updateAnswer: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    changeEditing: () => void;
}): JSX.Element {
    return (
        <div>
            <Button className="float-right" size="sm" onClick={changeEditing}>
                Edit
            </Button>
            <div>
                <Form.Group controlId="">
                    <Form.Label>Short Answer</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        onChange={updateAnswer}
                    />
                </Form.Group>
            </div>
            <div>
                <Button
                    className="float-right"
                    size="sm"
                    onClick={updatePublished}
                >
                    Publish
                </Button>
            </div>
        </div>
    );
}
