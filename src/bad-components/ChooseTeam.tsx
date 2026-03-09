import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

export function ChooseTeam(): React.JSX.Element {
    const [allOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(newMember: string) {
        setTeam((prevTeam) =>
            prevTeam.includes(newMember) ? prevTeam : [...prevTeam, newMember],
        );
    }

    function clearTeam() {
        setTeam([]);
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
                                /* FIX: Added curly braces and semicolon to 
                                   satisfy @typescript-eslint/no-confusing-void-expression 
                                */
                                onClick={() => {
                                    chooseMember(option);
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
                    <ul>
                        {team.map((member: string) => (
                            <li key={member}>{member}</li>
                        ))}
                    </ul>
                    {/* FIX: Also added braces here for consistency */}
                    <Button
                        onClick={() => {
                            clearTeam();
                        }}
                    >
                        Clear Team
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
