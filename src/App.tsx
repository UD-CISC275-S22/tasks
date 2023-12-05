import React from "react";
import "./App.css";
import { Planner } from "./Planner";
import { CompSciPlan } from "./degrees/CompSci";

function App(): JSX.Element {
    return (
        <div className="App">
            <div className="header">
                <header>
                    <div id="main">
                        <div className="center">
                            <h1>University of Delaware Scheduler</h1>
                            <div className="div2">
                                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                            </div>
                            <span>
                                Welcome to our UD Scheduler! Here you can make a
                                nice layout of what classes you need to take
                                during the spring and fall semester to ensure
                                your on the right track to graduate at your
                                expected year! Please Check the bottom see your
                                desired major.
                            </span>
                        </div>
                    </div>
                </header>
            </div>
            <div className="Planner">
                {} <Planner plan={CompSciPlan} />
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
                            Catalog
                        </a>
                        &nbsp;
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
