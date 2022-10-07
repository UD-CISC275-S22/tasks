import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const nxtalpha: Record<string, string> = {
    "🇬🇱": "🐱",
    "🐱": "♊",
    "♊": "🔪",
    "🔪": "☁️",
    "☁️": "🇬🇱"
};

const nxtdate: Record<string, string> = {
    "🇬🇱": "🐱",
    "🐱": "🔪",
    "🔪": "♊",
    "♊": "☁️",
    "☁️": "🇬🇱"
};

/*
    "Leif Erikson day: 🇬🇱", // Oct 9
    "National Cat day: 🐱", // Oct 29
    "Box Cutter day: 🔪", // Nov 10 (Made this one up)
    "National Twins day: ♊", // Dec 18
    "Day of the Sky: ☁️" // Feb 5 (I made this one up as well)
*/

export function CycleHoliday(): JSX.Element {
    const [holiday, setholiday] = useState<string>("🇬🇱");
    return (
        <span>
            <Container>
                <Row>
                    <Col>
                        <Button onClick={() => setholiday(nxtalpha[holiday])}>
                            Advance by Alphabet
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={() => setholiday(nxtdate[holiday])}>
                            Advance by Day of Year
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <span>Holiday: {holiday}</span>
                </Row>
            </Container>
        </span>
    );
}
