import React from "react";
//import { JsxElement } from "typescript";
import "../App.css";
//import { SideNavInfo } from "./SideNavInfo";
//import { Routes, Route, Outlet, Link } from "react-router-dom";
//import { Component } from "react";
import SchoolIcon from "@mui/icons-material/School";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ClassIcon from "@mui/icons-material/Class";
import ChecklistIcon from "@mui/icons-material/Checklist";

export function SideNav2({
    flipView,
    flipModalView,
    flipAudit,
    flipAddView
}: {
    flipView: () => void;
    flipModalView: () => void;
    flipAudit: () => void;
    flipAddView: () => void;
}): JSX.Element {
    return (
        <div className="SideNav2">
            <ul className="SideNavList2">
                <li className="row" onClick={() => flipView()}>
                    <div id="picture">{<SchoolIcon />}</div>
                    <div id="name">{"Add Degree Plan"}</div>
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
            </ul>
        </div>
    );
}
