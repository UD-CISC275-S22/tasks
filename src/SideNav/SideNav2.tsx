import React from "react";
import "../App.css";
import SchoolIcon from "@mui/icons-material/School";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ClassIcon from "@mui/icons-material/Class";
import ChecklistIcon from "@mui/icons-material/Checklist";
import List from "@mui/icons-material/List";
import AuthDetails from "../AuthDetails";
import { Logout } from "@mui/icons-material";

export function SideNav2({
    flipView,
    flipPlan,
    flipModalView,
    flipAudit,
    flipAddView,
    handleLogout
}: {
    flipView: () => void;
    flipPlan: () => void;
    flipModalView: () => void;
    flipAudit: () => void;
    flipAddView: () => void;
    handleLogout: () => void;
    // handleUserSignOut: () => void;
}): JSX.Element {
    return (
        <div className="SideNav2">
            <ul className="SideNavList2">
                <li className="row" onClick={() => flipView()}>
                    <div id="picture">{<SchoolIcon />}</div>
                    <div id="name">{"Add Degree Plan"}</div>
                </li>
                <li className="row" onClick={() => flipPlan()}>
                    <div id="picture">{<List />}</div>
                    <div id="name">{"View Degree Plan"}</div>
                </li>
                <li className="row" onClick={() => flipModalView()}>
                    <div id="picture">{<AutoStoriesIcon />}</div>
                    <div id="name">{"Add Semester"}</div>
                </li>
                <li className="row" onClick={() => flipAddView()}>
                    <div id="picture">{<ClassIcon />}</div>
                    <div id="name">{"Add Course"}</div>
                </li>
                <li className="row" onClick={() => flipAudit()}>
                    <div id="picture">{<ChecklistIcon />}</div>
                    <div id="name">{"Degree Audit"}</div>
                </li>
                <li className="row" onClick={() => handleLogout()}>
                    <div id="picture">{<Logout />}</div>
                    <div id="name">{"Logout"}</div>
                </li>
            </ul>
        </div>
    );
}

/*
The sideNav2 component provides a side navigation menu for every screen displayed on the website, in which users
can interact with its "Add Degree Plan", "Add Semester", "Add Course", and "Degree Audit" buttons. This is essentially,
the root point for all interactivity that the website provides. 
*/
