//this will be a card that shows the user little details about the dp like title and amount of credits,etc
//it will also have a clickable title which sends back id of card to the caller to eventually open up the full dp table
import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { DegreePlan } from "./interfaces/degreeplan";

export const DpStarterSampleCard = ({
    dp,
    handleClick
}: {
    dp: DegreePlan;
    handleClick: (quizId: number) => void;
}) => {
    return (
        <div className="dp_view_card">
            <div className="d-flex align-items-baseline">
                <h3
                    className="title"
                    onClick={() => {
                        handleClick(dp.id);
                    }}
                >
                    {dp.title}
                </h3>
            </div>
            <p>{dp.totalCredits}</p>
        </div>
    );
};
