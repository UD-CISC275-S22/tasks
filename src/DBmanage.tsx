/* eslint-disable @typescript-eslint/no-unused-vars */
//import React from "react";
import {
    CoursePlan,
    SemesterI,
    dbMangement,
    seasonT,
    yearI
} from "./interfaces/semester";
import { Course } from "./interfaces/course";
import { v4 as uuidv4 } from "uuid";
import { Year } from "./viewCourseComponents";
import { CreateCoursePlan } from "./CreateCoursePlan";

// export function CreatCoursePlan(uuid: string, DB: TotalDB) {}
// export function deleteCoursePlan() {}
// export function addToCoursePlan() {}

// export function deleteCourse(rW: dbMangement, courseplan,) {
//     rW.stateSetter({
//         name: rW.dataset.name,
//         firstsemester: {
//             ...rW.dataset.firstsemester,
//             courses: rW.dataset.firstsemester.courses.filter(
//                 (course: Course): boolean => course.ticker !== idticker
//             )
//         },
//         secondsemester: {
//             ...rW.Courseplan.secondsemester,
//             courses: rW.Courseplan.secondsemester.courses.filter(
//                 (course: Course): boolean => course.ticker !== idticker
//             )
//         }
//     });
// }

export function updateCourse(
    dbManager: dbMangement,
    newCourse: Course,
    uuid: string
) {
    const newDB = {
        Courseplans: dbManager.dataset.Courseplans.map(
            (currentCoursePlan: CoursePlan) => {
                // Updating each course plan
                return {
                    ...currentCoursePlan,
                    years: currentCoursePlan.years.map((currentYear: yearI) =>
                        oneYearUpdate(currentYear, uuid, newCourse)
                    )
                };
            }
        )
    };
    dbManager.stateSetter(newDB);
    console.log(newCourse);
    console.log(newDB);
}

export function oneYearUpdate(year: yearI, uuid: string, Ncourse: Course) {
    const updateSemester = (semester: SemesterI | null) => {
        if (semester === null) {
            return null;
        }
        return {
            ...semester,
            courses: semester.courses.map(
                (course: Course): Course =>
                    course.UUID === uuid
                        ? { ...Ncourse, UUID: course.UUID }
                        : course
            )
        };
    };

    return {
        name: year.name,
        winter: updateSemester(year.winter),
        spring: updateSemester(year.spring),
        summer: updateSemester(year.summer),
        fall: updateSemester(year.fall)
    };
}
export function addCoursePlan(dbManager: dbMangement, nCoursePlan: CoursePlan) {
    dbManager.stateSetter({
        Courseplans: [...dbManager.dataset.Courseplans, nCoursePlan]
    });
}
export function removeSemesterYear(year: yearI, rSemester: SemesterI): yearI {
    console.log("Removing semester: " + rSemester.season);

    // Create a new object to avoid direct modification of the original year object
    const updatedYear = { ...year };

    // Check each season and set the matching one to null
    if (updatedYear.winter && updatedYear.winter.season === rSemester.season) {
        updatedYear.winter = null;
    }
    if (updatedYear.spring && updatedYear.spring.season === rSemester.season) {
        updatedYear.spring = null;
    }
    if (updatedYear.summer && updatedYear.summer.season === rSemester.season) {
        updatedYear.summer = null;
    }
    if (updatedYear.fall && updatedYear.fall.season === rSemester.season) {
        updatedYear.fall = null;
    }

    return updatedYear;
}

export function UpdateCoureplanYear(
    Oyear: yearI,
    Nyear: yearI,
    CoursePlan: CoursePlan
) {
    console.log("looking for old yeat");
    return {
        ...CoursePlan,
        years: CoursePlan.years.map((year: yearI) =>
            year === Oyear ? Nyear : year
        )
    };
}
export function createFourYearCoursePlan(planName: string): CoursePlan {
    const createEmptySemester = (season: seasonT, year: string): SemesterI => {
        return {
            season,
            name: `${season} ${year}`,
            year,
            courses: []
        };
    };

    const years: yearI[] = [];

    for (let i = 1; i <= 4; i++) {
        years.push({
            name: `Year ${i}`,
            winter: createEmptySemester("winter", `${2023 + i}`),
            spring: createEmptySemester("spring", `${2023 + i}`),
            summer: createEmptySemester("summer", `${2023 + i}`),
            fall: createEmptySemester("fall", `${2023 + i}`)
        });
    }

    return {
        name: planName,
        years
    };
}

export function AddCourseToSemester(
    selectedSemester: SemesterI,
    NCourses: Course[],
    courseplan: CoursePlan
): CoursePlan {
    return {
        ...courseplan,
        years: courseplan.years.map((year: yearI): yearI => {
            // Map over each season and update the courses
            const updatedSeasons: {
                winter?: SemesterI | null;
                spring?: SemesterI | null;
                summer?: SemesterI | null;
                fall?: SemesterI | null;
            } = {};
            const seasons: seasonT[] = ["winter", "spring", "summer", "fall"];

            seasons.forEach((season) => {
                if (year[season] != null) {
                    updatedSeasons[season] =
                        year[season] === selectedSemester
                            ? ({
                                  ...year[season],
                                  courses: [
                                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                                      ...year[season]!.courses,
                                      ...NCourses
                                  ]
                              } as SemesterI)
                            : (year[season] as SemesterI);
                } else {
                    updatedSeasons[season] = null;
                }
            });

            return {
                ...year,
                ...updatedSeasons
            };
        })
    };
}
