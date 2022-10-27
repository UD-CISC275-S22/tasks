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

interface changeTeamProps {
    team: string[];
    setTeam: (tm: string[]) => void;
}

interface changeSets {
    setAllOptions: (op: string[]) => void;
    setTeam: (tm: string[]) => void;
}

function chooseMember(newMember: string, { team, setTeam }: changeTeamProps) {
    if (!team.includes(newMember)) {
        setTeam([...team, newMember]);
    }
}

function clearTeam({ setTeam }: changeSets) {
    setTeam([]);
}

export function ChooseTeam(): JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);
    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => {
                                    chooseMember(option, { team, setTeam });
                                }}
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
                    <Button
                        onClick={() => {
                            clearTeam({ setAllOptions, setTeam });
                        }}
                    >
                        Clear Team
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
