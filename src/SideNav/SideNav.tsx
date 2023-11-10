import React from "react";
import { JsxElement } from "typescript";
import "../App.css";
import { SideNavInfo } from "./SideNavInfo";
import { Routes, Route, Outlet, Link } from "react-router-dom";

export function SideNav(): JSX.Element {
    function linker(linkName: string) {
        return <Link to={linkName}>hello</Link>;
    }
    return (
        <div className="SideNav">
            <ul className="SideNavList">
                {SideNavInfo.map((value, key) => {
                    return (
                        <li
                            key={key}
                            className="row"
                            id={
                                window.location.pathname == value.link
                                    ? "active"
                                    : ""
                            }
                            //onClick={() => linker(value.link)}
                            //onClick={() => {
                            // window.location.pathname = value.link;
                            // }}
                        >
                            <div id="picture">{value.picture}</div>
                            <div id="name">{value.name}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
