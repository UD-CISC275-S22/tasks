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
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(newMember: string) {
        if (!team.includes(newMember)) {
            setTeam((currentTeam) => [...currentTeam, newMember]);
        }
    }

    function clearTeam() {
        setTeam([]);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {PEOPLE.map((person) => (
                        <div key={person} style={{ marginBottom: "4px" }}>
                            <Button
                                onClick={() => chooseMember(person)}
                                size="sm"
                            >
                                Add {person}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    <ul>
                        {team.map((member, index) => (
                            <li key={index}>Add {member}</li>
                        ))}
                    </ul>
                    <Button onClick={clearTeam} style={{ marginTop: "10px" }}>
                        Clear Team
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
