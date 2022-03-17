import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

export const PEOPLE = [
    "Monkey D. Luffy",
    "Tony Tony Chopper",
    "Usopp",
    "Roronoa Zoro",
    "Brook",
    "Nami",
    "Jinbe",
    "Nico Robin",
    "Franky",
    "Sanji"
];

export function Question4(): JSX.Element {
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(newMember: string) {
        if (!team.includes(newMember)) {
            setTeam([...team, newMember]);
        }
    }

    function clearTeam() {
        return setTeam([]);
    }

    return (
        <div>
            <h6>Question4</h6>
            <Row>
                <Col>
                    {PEOPLE.map((member: string) => (
                        <div key={member} style={{ marginBottom: "4px" }}>
                            {" "}
                            <Button
                                onClick={() => chooseMember(member)}
                                size="sm"
                            >
                                {member}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <ol key={member}>{member}</ol>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
