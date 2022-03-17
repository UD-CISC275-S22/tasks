import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function Question3(): JSX.Element {
    const [released, setReleased] = useState<string>("2022");
    const previousYear = parseInt(released) - 1 || 0;

    // Provide forms for editing the new movie
    // And also a button to append the movie
    return (
        <div>
            <h6>Question3</h6>
            <Form.Group controlId="formMovieReleased">
                <Form.Label>Released:</Form.Label>
                <Form.Control
                    type="number"
                    value={released}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setReleased(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                The year before the movie was released was {previousYear}.
            </div>
        </div>
    );
}
