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

interface teamProps {
    setTeam: (newT: string[]) => void;
    team: string[];
    newMember: string;
}

interface clearProp {
    setTeam: (newT: string[]) => void;
}

function setOption({ setTeam, team, newMember }: teamProps) {
    if (!team.includes(newMember)) {
        setTeam([...team, newMember]);
    }
}

function ChooseMember({ setTeam, team, newMember }: teamProps) {
    return (
        <Button
            onClick={() => setOption({ setTeam, team, newMember })}
            size="sm"
        >
            {newMember}
        </Button>
    );
}

function ClearTeam({ setTeam }: clearProp) {
    return <Button onClick={() => setTeam([])}>Clear Team</Button>;
}

export function ChooseTeam(): JSX.Element {
    const [allOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <ChooseMember
                                setTeam={setTeam}
                                team={team}
                                newMember={option}
                            ></ChooseMember>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <ClearTeam setTeam={setTeam}></ClearTeam>
                </Col>
            </Row>
        </div>
    );
}
