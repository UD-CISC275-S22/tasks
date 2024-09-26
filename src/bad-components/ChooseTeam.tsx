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
    const allOptions = PEOPLE;
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember({ option }: { option: string }) {
        if (!team.includes(option)) {
            setTeam([...team, option]);
        }
    }

    function clearTeam({ setTeam }: { setTeam: (team: string[]) => void }) {
        setTeam([]);
        return;
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => chooseMember({ option })}
                                size="sm"
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
                    <div></div>
                    <Button onClick={() => clearTeam({ setTeam })}>
                        Clear Team
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
