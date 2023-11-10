import React from "react";
//import { JsxElement } from "typescript";
import "../App.css";
//import { SideNavInfo } from "./SideNavInfo";
//import { Routes, Route, Outlet, Link } from "react-router-dom";
//import { Component } from "react";
import SchoolIcon from "@mui/icons-material/School";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ClassIcon from "@mui/icons-material/Class";

export function SideNav2({ flipView }: { flipView: () => void }): JSX.Element {
    return (
        <div className="SideNav2">
            <ul className="SideNavList2">
                <li className="row" onClick={() => flipView()}>
                    <div id="picture">{<SchoolIcon />}</div>
                    <div id="name">{"Add Degree Plan"}</div>
                </li>
                <li className="row">
                    <div id="picture">{<AutoStoriesIcon />}</div>
                    <div id="name">{"Add Semester"}</div>
                </li>
                <li className="row">
                    <div id="picture">{<ClassIcon />}</div>
                    <div id="name">{"Add Course"}</div>
                </li>
            </ul>
        </div>
    );
}
