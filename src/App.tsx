import React, { useEffect, useState } from "react";
import "./App.css";
import { Planner } from "./Planner";
import { Plan } from "./interfaces/Plan";
import { PhysicsPlan } from "./degrees/Physics";
import { EmptyPlan } from "./degrees/EmptyPlan";
import { CompSciPlan } from "./degrees/CompSci";
import image from "./UDMonogramC.jpg";

function App(): JSX.Element {
    const [allPlans] = useState<Plan[]>([EmptyPlan, CompSciPlan, PhysicsPlan]);
    const initialSelectedPlan =
        JSON.parse(localStorage.getItem("selectedPlan") || "null") ||
        allPlans[0];

    const [selectedPlan, setSelectedPlan] = useState(initialSelectedPlan);

    const handlePlanChange = (selectedValue: string) => {
        const newPlan =
            allPlans.find(plan => plan.id === selectedValue) || allPlans[0];
        setSelectedPlan(newPlan);
        console.log("Selected Plan: ", newPlan);
        console.log("Current Plan ID: ", selectedValue);
        window.location.reload();
    };

    useEffect(() => {
        localStorage.setItem("selectedPlan", JSON.stringify(selectedPlan));
    }, [selectedPlan]);

    console.log("Selected Plan in App Component: ", selectedPlan);
    console.log("Selected Plan Semesters: ", selectedPlan.semesters);

    return (
        <div className="App">
            <div className="header">
                <header>
                    <div id="main">
                        <div className="center">
                            <img
                                className="logo"
                                src={image}
                                width={150}
                                height={150}
                                alt="UD"
                            ></img>
                            <h1> University of Delaware Scheduler</h1>
                            <div className="div2">
                                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                            </div>
                            <span>
                                Welcome to our UD Scheduler! Here you can make a
                                nice layout of what classes you need to take
                                during the spring and fall semester to ensure
                                your on the right track to graduate at your
                                expected year! Please Check the bottom see your
                                desired major. Insert Plan when clicked you will
                                be able to add a create a new plan, When
                                clicking on remove plan it will remove plan that
                                you have highlighted. When Clicking on Rename
                                Plan you will be able to click on it making it
                                so that you will be able to rename the plan that
                                is highlighted. When clicking on Insert New
                                Semester it will create either Fall or Spring
                                semester. Clear all Semester will remove all
                                semesters on the current plan your working on.
                                Remove semester will remove the semester you
                                highlighted.
                            </span>
                        </div>
                    </div>
                </header>
            </div>
            {/* <div className="box">
                <a className="button" href="#popup1">
                    Help
                </a>
            </div>

            <div id="popup1" className="overlay">
                <div className="popup">
                    <h2>Button Information</h2>
                    <a className="close" href="#">
                        &times;
                    </a>
                    <div className="content">
                        help/ |-- plans/ | |-- insert plan | |-- remove plan |
                        |-- rename plan |-- semester/ | |-- clear all semesters
                        | |-- remove semester
                    </div>
                </div>
            </div> */}
            <div className="Planner">
                <Planner plan={selectedPlan} onPlanChange={handlePlanChange} />
            </div>
            <div className="ending">
                <div className="footer">
                    <div>
                        2023 University of Delaware Resources &nbsp;
                        <a
                            href="https://catalog.udel.edu/content.php?catoid=47&navoid=8860"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Programs
                        </a>
                        &nbsp;
                        <a
                            href="https://udapps.nss.udel.edu/CoursesSearch/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            UD Course Search
                        </a>
                        &nbsp;
                    </div>
                    <span>
                        Developed by: Andrew Fonseca, Shrey Patel, Mann
                        Patel,Thiago Vazquez, Devlan Horner
                    </span>
                </div>
            </div>
        </div>
    );
}

export default App;
