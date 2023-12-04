import React from "react";
import "./Prereq.css";
// class Course {
//     name: string;
//     prerequisites: Course[];

//     constructor(name: string) {
//         this.name = name;
//         this.prerequisites = [];
//     }

//     addPrerequisite(course: Course) {
//         this.prerequisites.push(course);
//     }
// }

// function meetsPrerequisites(course: Course, targetCourse: Course): boolean {
//     if (course === targetCourse) {
//         return true;
//     }

//     for (const prerequisite of course.prerequisites) {
//         if (meetsPrerequisites(prerequisite, targetCourse)) {
//             return true;
//         }
//     }

//     return false;
// }
document.addEventListener("DOMContentLoaded", () => {
    const mainButton = document.getElementById(
        "mainButton"
    ) as HTMLButtonElement;
    const dropdown = document.getElementById("dropdown") as HTMLDivElement;

    mainButton.addEventListener("click", () => {
        // Toggle the display of the dropdown when the button is clicked
        dropdown.style.display =
            dropdown.style.display === "block" ? "none" : "block";
    });

    // Hide the dropdown when clicking outside of it
    document.addEventListener("click", (event) => {
        if (
            !mainButton.contains(event.target as Node) &&
            !dropdown.contains(event.target as Node)
        ) {
            dropdown.style.display = "none";
        }
    });
});
