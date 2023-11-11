import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ClassIcon from "@mui/icons-material/Class";
import ChecklistIcon from "@mui/icons-material/Checklist";

export const SideNavInfo = [
    {
        name: "Add Degree Plan",
        picture: <SchoolIcon />,
        link: "/AddDegreePlan"
    },
    {
        name: "Add Semester",
        picture: <AutoStoriesIcon />,
        link: "/AddSemester"
    },
    {
        name: "Add Course",
        picture: <ClassIcon />,
        link: "/AddCourse"
    },
    {
        name: "Degree Audit",
        pictur: <ChecklistIcon />,
        link: "/DegreeAudit"
    }
];
