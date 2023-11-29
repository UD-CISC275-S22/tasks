import { Plan } from "../Planner";
import catalog from "../catalog.json";

export const physicsPlan: Plan = {
    id: "456",
    title: "Physics Degree",
    semesters: [
        {
            id: "Fall 2022",
            season: "Fall",
            year: "2022",
            skip: false,
            courses: [
                catalog.CHEM["CHEM 103"],
                catalog.CHEM["CHEM 133"],
                catalog.MATH["MATH 241"],
                catalog.PHYS["PHYS 169"],
                catalog.PHYS["PHYS 207"],
                catalog.PHYS["PHYS 227"],
                catalog.UNIV["UNIV 101"],
                catalog.ARTH["ARTH 101"]
            ]
        },
        {
            id: "Spring 2023",
            season: "Spring",
            year: "2023",
            skip: false,
            courses: [
                catalog.CISC["CISC 106"],
                catalog.ENGL["ENGL 110"],
                catalog.MATH["MATH 242"],
                catalog.PHYS["PHYS 208"],
                catalog.PHYS["PHYS 228"],
                catalog.PHYS["PHYS 209"]
            ]
        },
        {
            id: "Fall 2023",
            season: "Fall",
            year: "2023",
            skip: false,
            courses: [
                catalog.MATH["MATH 243"],
                catalog.MATH["MATH 352"],
                catalog.PHYS["PHYS 211"],
                catalog.PHYS["PHYS 310"],
                catalog.HIST["HIST 201"]
            ]
        },
        {
            id: "Spring 2024",
            season: "Spring",
            year: "2024",
            skip: false,
            courses: [
                catalog.MATH["MATH 351"],
                catalog.PHYS["PHYS 309"],
                catalog.PHYS["PHYS 313"],
                catalog.CISC["CISC 210"],
                catalog.CRJU["CRJU 110"]
            ]
        },
        {
            id: "Fall 2024",
            season: "Fall",
            year: "2024",
            skip: false,
            courses: [
                catalog.PHYS["PHYS 403"],
                catalog.PHYS["PHYS 424"],
                catalog.CISC["CISC 220"]
            ]
        },
        {
            id: "Spring 2025",
            season: "Spring",
            year: "2025",
            skip: false,
            courses: [catalog.PHYS["PHYS 425"], catalog.PHYS["PHYS 419"]]
        },
        {
            id: "Fall 2025",
            season: "Fall",
            year: "2025",
            skip: false,
            courses: []
        },
        {
            id: "Spring 2026",
            season: "Spring",
            year: "2026",
            skip: false,
            courses: []
        }
    ]
};
