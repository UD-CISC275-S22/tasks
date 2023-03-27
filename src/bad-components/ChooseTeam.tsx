import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

export function ChooseTeam(): JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(newMember: string) {
        if (
            allOptions.includes(newMember) &&
            newMember != "" &&
            !team.includes(newMember)
        ) {
            const newTeam = [...team, newMember];
            setTeam(newTeam);
        }
    }

    function clearTeam() {
        setTeam([]);
    }

    return (
        <div>
            <div style={{ textAlign: "center", fontSize: "x-large" }}>
                Choose Team
            </div>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => chooseMember(option)}
                                size="sm"
                                variant="outline-dark"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam} variant="outline-dark">
                        Clear Team
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
