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
    const [allOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(option: string) {
        setTeam([...team, option]);
    }

    function clearTeam() {
        setTeam([]);
    }
    return (
        <div className="container">
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            {!team.includes(option) && (
                                <div className="card">
                                    Add{" "}
                                    <Button
                                        onClick={() => chooseMember(option)}
                                        size="sm"
                                    >
                                        {option}
                                    </Button>
                                </div>
                            )}
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li className="card" key={member}>
                            {member}
                        </li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
