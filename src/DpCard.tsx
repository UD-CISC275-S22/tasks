/* eslint-disable no-extra-parens */
//this will be a card that shows the user little details about the dp like title and amount of credits,etc
//it will also have a clickable title which sends back id of card to the caller to eventually open up the full dp table
import React from "react";
import { Card } from "react-bootstrap";
import { DegreePlan } from "./interfaces/degreeplan";

export const DpCard = ({
    dp,
    handleClick
}: {
    dp: DegreePlan[];
    handleClick: (quizId: number) => void;
}) => {
    return (
        <div>
            {dp.map((dp: DegreePlan) => (
                <div
                    key={dp.id}
                    className="d-flex justify-content-center align-items-center"
                >
                    <Card text="light" bg="primary" style={{ width: "25rem" }}>
                        <Card.Body>
                            <Card.Title onClick={() => handleClick(dp.id)}>
                                {dp.title}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};
