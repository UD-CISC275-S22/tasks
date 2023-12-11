import { Plan } from "../interfaces/Plan";

export const PhysicsPlan: Plan = {
    id: "2",
    title: "Physics Plan",
    semesters: [
        {
            id: "Fall 2022",
            season: "Fall",
            year: "2022",
            skip: false,
            courses: [
                {
                    code: "PHYS 169",
                    name: "Perspectives on Physics and Astronomy",
                    descr: "First year seminar providing introduction to the practice of physics andastronomy.  Topics include research, education, careers, and therelation of physics to society.",
                    credits: " 1",
                    preReq: "",
                    restrict:
                        "Priority given to first year students. Intended for physics and astronomy majors.",
                    breadth: "University: ; A&S: ",
                    typ: "Fall"
                },
                {
                    code: "CHEM 103",
                    name: "General Chemistry",
                    descr: "Matter, the changes that matter undergoes, and the laws governing these changes, with greater emphasis on atomic and molecular structure, chemicalbonding, and energy relationships. Properties of gases, liquids, solids and solutions.",
                    credits: " 3",
                    preReq: "",
                    restrict:
                        "For majors in the physical and natural sciences, mathematics and engineering. One year of high school chemistry strongly recommended.",
                    breadth:
                        "University: Mathematics, Natural Sciences and Technology; A&S: GROUP D: A&S Math, Nat Sci & Technology",
                    typ: "Fall, Winter, Spring, Summer"
                },
                {
                    code: "CHEM 133",
                    name: "General Chemistry Laboratory",
                    descr: "Laboratory topics and techniques covered include: stoichiometry, gases, liquids, solids, atomic and molecular structure, chemical reactions in solution, and properties of solutions. 42h lab experiments.",
                    credits: " 1",
                    preReq: "",
                    restrict: "",
                    breadth:
                        "University: Mathematics, Natural Sciences and Technology; A&S: GRP D LAB: A&S Math, Nat Sci & Tech w Lab",
                    typ: "Fall, Winter, Spring, Summer"
                },
                {
                    code: "MATH 241",
                    name: "Analytic Geometry and Calculus A",
                    descr: "Functions, limits, continuity, derivatives. Polynomial, rational, exponential, hyperbolic, logarithmic, trigonometric and inverse trigonometric functions. Definite and indefinite integrals and the Fundamental Theorem of Calculus. Simple differential equations (separable ODE, linear ODE). ODE models leading to exponential growth and decay.",
                    credits: " 4",
                    preReq: "MATH 117 or acceptable score on the Math Placement Exam in accordance with current standards determined by the Department of Mathematical Sciences. See https://www.mathsci.udel.edu/courses-placement/ud-math-placement for more information.",
                    restrict:
                        "Students who received credit in MATH 242 or MATH 243 are not eligible to take this course without permission.",
                    breadth:
                        "University: Mathematics, Natural Sciences and Technology; A&S: GROUP D: A&S Math, Nat Sci & Technology",
                    typ: "Fall, Winter, Spring, Summer"
                },
                {
                    code: "PHYS 207",
                    name: "Fundamentals of Physics I",
                    descr: "First course in a sequence with PHYS 208 that provides an introduction to physics for those in physical sciences and engineering. Emphasis on Newton\u2019s laws of motion and conservation principles. These are applied to motion in a gravitational field, and to rotation of a rigid body. Integrates conceptual understanding with extensive problem solving.",
                    credits: " 3",
                    preReq: "",
                    restrict:
                        "One year of high school calculus is recommended. Students who have received credit in PHYS 203 are not eligible to take this course without permission.",
                    breadth:
                        "University: Mathematics, Natural Sciences and Technology; A&S: GROUP D: A&S Math, Nat Sci & Technology",
                    typ: "Fall, Winter, Spring, Summer"
                },
                {
                    code: "PHYS 227",
                    name: "Fundamentals of Physics Laboratory I",
                    descr: "Introductory laboratory experience associated with the course content in PHYS 207.  This includes exploring projectile motion, linear and rotational dynamics, energy, momentum, and simple harmonic motion.",
                    credits: " 1",
                    preReq: "",
                    restrict:
                        "Student who received credit in PHYS 221 are not eligible to take this course without permission.",
                    breadth:
                        "University: Mathematics, Natural Sciences and Technology; A&S: GRP D LAB: A&S Math, Nat Sci & Tech w Lab",
                    typ: "Fall, Winter, Spring, Summer"
                },
                {
                    code: "UNIV 101",
                    name: "First Year Experience I",
                    descr: "The seminar is designed to help students adjust to college life. Led by faculty who will work closely with a peer mentor and others to help ensure that the first semester is successful and provides the foundation for your future success at UD.  Opportunity for class discussion while utilizing the common reader, class assignments and university wide programming.  Highlights our commitment at UD to being a community that recognizes and appreciates diversity and difference.",
                    credits: " 1",
                    preReq: "",
                    restrict: "For freshmen only.",
                    breadth: "University: ; A&S: ",
                    typ: "Fall and Spring"
                },
                {
                    code: "HIST 102",
                    name: "Europe and the World since 1648",
                    descr: "The transformations of Europe since the middle of the 17th century through cultural, social, and economic developments, revolutions, wars, and interactions with other parts of the world.",
                    credits: " 3",
                    preReq: "",
                    restrict: "",
                    breadth:
                        "University: History and Cultural Change; A&S: GROUP B: A&S History & Cultural Change",
                    typ: "Fall, Winter, Spring, Summer"
                }
            ]
        },
        {
            id: "Spring 2023",
            season: "Spring",
            year: "2023",
            skip: false,
            courses: [
                {
                    code: "CISC 106",
                    name: "General Computer Science for Engineers",
                    descr: "Principles of computer science illustrated and applied through programming in a general-purpose language. Programming projects illustrate computational problems, styles, and issues that arise in engineering.",
                    credits: " 3",
                    preReq: "",
                    restrict: "",
                    breadth:
                        "University: Mathematics, Natural Sciences and Technology; A&S: GROUP D: A&S Math, Nat Sci & Technology",
                    typ: "Fall, Summer and Spring"
                },
                {
                    code: "ENGL 110",
                    name: "Seminar in Composition",
                    descr: "",
                    credits: " 3",
                    preReq: "",
                    restrict:
                        "Required of all students. Should be taken first year on campus.",
                    breadth: "University: ; A&S: ",
                    typ: "Fall, Winter, Spring, Summer"
                },
                {
                    code: "MATH 242",
                    name: "Analytic Geometry and Calculus B",
                    descr: "Brief review of MATH 241; evaluation of limits by L\u2019Hospital\u2019s rule; applications of integration; integration techniques; parametric curves; polar coordinates; infinite sequences and series. Includes use of computers to perform symbolic, numerical and graphical analysis.",
                    credits: " 4",
                    preReq: "MATH 241 or MATH 232.",
                    restrict:
                        "Students who received credit in MATH 243 are not eligible to take this course without permission.",
                    breadth:
                        "University: Mathematics, Natural Sciences and Technology; A&S: GROUP D: A&S Math, Nat Sci & Technology",
                    typ: "Fall, Winter, Spring, Summer"
                },
                {
                    code: "PHYS 208",
                    name: "Fundamentals of Physics II",
                    descr: "Second course in a sequence with PHYS 207 that provides an introduction to physics for those in the physical sciences and engineering. Emphasis on electro- and magnetostatics in terms of forces, fields and potentials, with some elements of circuit theory. Furthermore, magnetic induction and Maxwell\u2019s equations in integral form are introduced. Integrates conceptual understanding with extensive problem solving.",
                    credits: " 3",
                    preReq: "PHYS 203 or PHYS 207 and PHYS 227, MATH 241 or MATH 232.",
                    restrict: "",
                    breadth:
                        "University: Mathematics, Natural Sciences and Technology; A&S: GRP D LAB: A&S Math, Nat Sci & Tech w Lab",
                    typ: "Fall, Winter, Spring, Summer"
                },
                {
                    code: "PHYS 228",
                    name: "Fundamentials of Physics Laboratory II",
                    descr: "Introductory laboratory associated with topics coverd in PHYS 208.  This includes investigaing the properties of Electric and Magnetic fields, simple circuits, and simple motors.",
                    credits: " 1",
                    preReq: "",
                    restrict: "",
                    breadth:
                        "University: Mathematics, Natural Sciences and Technology; A&S: GRP D LAB: A&S Math, Nat Sci & Tech w Lab",
                    typ: "Fall, Winter, Spring, Summer"
                },
                {
                    code: "PHYS 209",
                    name: "Aspects of Modern Physics",
                    descr: "Explores basic solid state physics, nuclear physics, and introductions to elementary particle physics, general relativity and cosmology.",
                    credits: " 3",
                    preReq: "PHYS 207 and PHYS 227.",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Spring"
                }
            ]
        },
        {
            id: "Fall 2023",
            season: "Fall",
            year: "2023",
            skip: false,
            courses: [
                {
                    code: "MATH 243",
                    name: "Analytic Geometry and Calculus C",
                    descr: "Vectors, operations on vectors, velocity and acceleration, partial derivatives, directional derivatives, optimization of functions of two or more variables, integration over two and three dimensional regions, line integrals, Green\u2019s Theorem, surface integrals, the Divergence theorem. Includes use of computers to perform symbolic, numerical and graphical analysis.",
                    credits: " 4",
                    preReq: "MATH 242.",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Fall, Winter, Spring, Summer"
                },
                {
                    code: "MATH 352",
                    name: "Engineering Mathematics II",
                    descr: "Laplace transform, application to constant coefficient ordinary differential equations, scalar and vector fields, Laplacian, line integrals, divergence theorem, Stokes\u2019 theorem, Fourier series, orthogonality, diffusion equation, Laplace\u2019s equation, wave equation, separation of variables, with engineering applications.",
                    credits: " 3",
                    preReq: "MATH 351",
                    restrict: "Open to MEEG and CIEG majors only.",
                    breadth: "University: ; A&S: ",
                    typ: "Fall, Winter and Spring"
                },
                {
                    code: "PHYS 211",
                    name: "Oscillations and Waves",
                    descr: "Builds on and extends concepts of classical physics introduced in PHYS 207. Explores simple harmonic oscillation, the damped harmonic oscillator and forced and coupled oscillations. Provides a simple treatment of traveling and standing waves, reflection of waves at discontinuities as well as interference and diffraction.",
                    credits: " 3",
                    preReq: "PHYS 207 and PHYS 227, MATH 241.",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Fall"
                },
                {
                    code: "PHYS 310",
                    name: "Introduction to Thermal Physics",
                    descr: "General overview of thermal phenomena. Provides detailed treatment of the First Law of Thermodynamics. Introduces concepts of micro- and macro-states, and entropy and the Second Law are treated within a statistical context. First and second laws are applied to power and refrigeration cycles. The concept of free energies and their connection to phase transitions is developed. Finishes with brief introduction to Boltzmann factor and partition function.",
                    credits: " 3",
                    preReq: "PHYS 207 and PHYS 227, and MATH 242.",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Fall"
                },
                {
                    code: "CRJU 110",
                    name: "Introduction to Criminal Justice",
                    descr: "Responses in American society to the problems of crime. Examines criminal behavior, criminal law, the police, the courts and corrections, as well as selected issues in criminal justice.",
                    credits: " 3",
                    preReq: "",
                    restrict: "",
                    breadth:
                        "University: Social and Behavioral Sciences; A&S: GROUP C: A&S Social & Behavioral Sci",
                    typ: "Fall, Winter, Spring, Summer"
                }
            ]
        },
        {
            id: "Spring 2024",
            season: "Spring",
            year: "2024",
            skip: false,
            courses: [
                {
                    code: "MATH 351",
                    name: "Engineering Mathematics I",
                    descr: "Solutions of linear algebraic equations, Gauss elimination, vector spaces, subspaces, linear dependence, linear ordinary differential equations of 2nd order and higher, initial value problems, eigenvalues, coupled linear ordinary differential equations, nonlinear differential equations, with engineering applications.",
                    credits: " 3",
                    preReq: "",
                    restrict:
                        "Students who received credit in MATH302 or MATH349 are not eligible to take this course without permission.",
                    breadth: "University: ; A&S: ",
                    typ: "Fall, Winter and Spring"
                },
                {
                    code: "PHYS 309",
                    name: "Physics of the Twentieth and Twenty-First Centuries",
                    descr: "Fundamentals in physics that help form a modern understanding of science and technology. Intended for physical science and engineering majors, the emphasis is on electromagnetic radiation, quantum mechanics, nuclear reactions, Bohr atom, solid state physics and devices, and special relativity.",
                    credits: " 3",
                    preReq: "PHYS 208 and PHYS 228 or PHYS 245, and MATH 242.",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Spring"
                },
                {
                    code: "PHYS 313",
                    name: "Physical Optics",
                    descr: "A detailed treatment of optics at an intermediate level appropriate for physics, engineering and other students with a physical science background. Emphasis is on physical concepts and analysis of geometric optics, wave optics and applications of optics.",
                    credits: " 4",
                    preReq: "PHYS 208 and PHYS 228, or PHYS 245.",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Spring"
                },
                {
                    code: "CISC 210",
                    name: "Introduction to Systems Programming",
                    descr: "",
                    credits: " 3",
                    preReq: "A grade of C- or better in CISC 106 or CISC 108.",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Fall and Spring"
                },
                {
                    code: "ARTH 101",
                    name: "Visual Culture",
                    descr: "Explores the ways we make, perceive and experience images and artifacts.Students will hone their skills in seeing, analyzing historical models andcritically engaging in discussions of visual art and material cultures inselected eras and civilizations around the world.",
                    credits: " 3",
                    preReq: "",
                    restrict: "",
                    breadth:
                        "University: Creative Arts and Humanities; A&S: GROUP A: A&S Creative Arts & Humanities",
                    typ: "Fall, Winter, Spring, Summer"
                }
            ]
        },
        {
            id: "Fall 2024",
            season: "Fall",
            year: "2024",
            skip: false,
            courses: [
                {
                    code: "PHYS 403",
                    name: "Electricity and Magnetism I",
                    descr: "First of a two-part sequence (with PHYS404) that provides an intermediate level treatment of electrostatics and magnetostatics, as well as an introduction to electrodynamics. Topics include a discussion of different techniques used for the calculation of electrostatic and magnetostatic fields in vacuum and in matter, and effects of time varying electric and magnetic fields.",
                    credits: " 3",
                    preReq: "PHYS 208 and PHYS 228, and MATH 302 or MATH341 or MATH 351.",
                    restrict: "",
                    breadth:
                        "University: Mathematics, Natural Sciences and Technology; A&S: ",
                    typ: "Verify offering with Dept"
                },
                {
                    code: "PHYS 424",
                    name: "Quantum Mechanics I",
                    descr: "First in a sequence with PHYS425 that provides introduction to basic principles and applications of quantum mechanics. Emphasis on formalism of quantum mechanics. Schroedinger equation is solved for simple cases such as free-particle motion, simple harmonic oscillator and hydrogen atom, with a basic treatment of angular momentum. Topic of identical particles also considered.",
                    credits: " 3",
                    preReq: "MATH 302 or MATH 349 or MATH351.",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Fall"
                },
                {
                    code: "PHIL 101",
                    name: "Great Western Philosophers",
                    descr: "Survey of the key ideas of great Western philosophers concerning the nature of reality and how it is known. Focus on individual philosophers such as Plato, Aristotle, Descartes, Kant, Hegel, James and Wittgenstein.",
                    credits: " 3",
                    preReq: "",
                    restrict: "",
                    breadth:
                        "University: History and Cultural Change; A&S: GROUP B: A&S History & Cultural Change",
                    typ: "Fall, Winter, Spring, Summer"
                },
                {
                    code: "CISC 220",
                    name: "Data Structures",
                    descr: "Review of data type abstraction, recursion, arrays, stacks, queues, multiple stacks and linked lists. Emphasis on dynamic storage management, garbage collection, trees, graphs, tables, sorting and searching.",
                    credits: " 3",
                    preReq: "A minimum grade of C- in CISC 210.",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Fall, Summer and Spring"
                },
                {
                    code: "PHYS 460",
                    name: "Computational Methods of Physics",
                    descr: "Introduction to basic computational techniques in science with application to anumber of disciplines of current research interest, such as quantum physics, biophysics, statistical mechanics and chaos.",
                    credits: " 3",
                    preReq: "MATH 302 or MATH 341 or MATH 351, CISC 106, PHYS 208 and PHYS 228, or PHYS 245.",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Spring"
                }
            ]
        },
        {
            id: "Spring 2025",
            season: "Spring",
            year: "2025",
            skip: false,
            courses: [
                {
                    code: "PHYS 333",
                    name: "Fundamentals of Astrophysics",
                    descr: "A quantitative approach to astronomy and astrophysics. Treatment of stars, the interstellar medium, galaxies, and cosmology.",
                    credits: " 3",
                    preReq: "PHYS 208 and PHYS 228, or PHYS 245, MATH 243.",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Spring"
                },
                {
                    code: "PHYS 404",
                    name: "Electricity and Magnetism II",
                    descr: "Second of a two-part sequence (with PHYS403) that provides an intermediate level treatment of electrostatics and magnetostatics, as well as an introduction to electrodynamics. Topics include a discussion of different techniques used for the calculation of electrostatic and magnetostatic fields in vacuum and in matter, and effects of time varying electric and magnetic fields.",
                    credits: " 3",
                    preReq: "PHYS 403.",
                    restrict: "",
                    breadth:
                        "University: Mathematics, Natural Sciences and Technology; A&S: ",
                    typ: ""
                },
                {
                    code: "PHYS 419",
                    name: "Classical Mechanics I",
                    descr: "Emphasizes fundamental principles of classical mechanics. Treats in detail and with mathematical rigor Newton\u2019s Laws, projectile motion with drag, conservation laws, oscillations, calculus of variation, Lagrange\u2019s equations and their application, central force problems, rotational motion of rigid bodies, and coupled oscillations and normal modes. Concludes with introduction to Hamiltonian mechanics.",
                    credits: " 3",
                    preReq: "PHYS 207 and PHYS 227, PHYS 208 and PHYS 228 and MATH 243.",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Spring"
                },
                {
                    code: "SOCI 201",
                    name: "Introduction to Sociology",
                    descr: "An overview of the sociological perspective of the study of society, social organization and social institutions with special emphasis on the social causes and consequences of human behavior.",
                    credits: " 3",
                    preReq: "",
                    restrict: "",
                    breadth:
                        "University: Social and Behavioral Sciences; A&S: GROUP C: A&S Social & Behavioral Sci",
                    typ: "Fall, Summer and Spring"
                },
                {
                    code: "MUSC 101",
                    name: "Appreciation of Music",
                    descr: "Introduction to Western music literature through a nontechnical presentation of various musical styles and forms.",
                    credits: " 3",
                    preReq: "",
                    restrict: "Not open to music majors.",
                    breadth:
                        "University: Creative Arts and Humanities; A&S: GROUP A: A&S Creative Arts & Humanities",
                    typ: "Fall, Winter, Spring, Summer"
                }
            ]
        },
        {
            id: "Fall 2025",
            season: "Fall",
            year: "2025",
            skip: false,
            courses: [
                {
                    code: "PHYS 468",
                    name: "Introduction to Research",
                    descr: "Undergraduate research on an assigned problem carried out under supervision of the faculty.",
                    credits: " 1-6",
                    preReq: "",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Fall, Summer and Spring"
                },
                {
                    code: "PHYS 469",
                    name: "Observational Astronomy",
                    descr: "Hands-on experience focusing on techniques and analysis of astronomical observation, with emphasis on CCD imaging. Topics include celestial coordinates, telescope handling, CCDs, data reduction, and data analysis.",
                    credits: " 3",
                    preReq: "",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Fall, Winter and Summer"
                },
                {
                    code: "CISC 260",
                    name: "Machine Organization and Assembly Language",
                    descr: "Introduction to the basics of machine organization. Programming tools and techniques at the machine and assembly levels. Assembly language programming and computer arithmetic techniques.",
                    credits: " 3",
                    preReq: "A minimum grade of C- in CISC 210.",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Fall and Spring"
                },
                {
                    code: "MATH 350",
                    name: "Probability Theory and Simulation Methods",
                    descr: "Introduces the basic theory of discrete and continuous aspects of probability theory. Topics include bivariate distributions, sums of independent random variables, moment generating functions, laws of large numbers and central limit theorem.",
                    credits: " 3",
                    preReq: "",
                    restrict:
                        "Requires basic knowledge of the counting principles in permutation and combination.",
                    breadth: "University: ; A&S: ",
                    typ: "Fall and Spring"
                },
                {
                    code: "MATH 450",
                    name: "Mathematical Statistics",
                    descr: "Introduction to mathematical aspects of statistics. Topics include exploratory data analysis, parameter estimation, maximum likelihood method, testing of hypothesis, confidence intervals and others. Includes application of a computer software package to perform data analysis.",
                    credits: " 3",
                    preReq: "MATH 350 or an equivalent course in probability",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Fall and Spring"
                }
            ]
        },
        {
            id: "Spring 2026",
            season: "Spring",
            year: "2026",
            skip: false,
            courses: [
                {
                    code: "PHYS 480",
                    name: "History of Physics",
                    descr: "Survey of the development of physical ideas, from observations of the heavens and calculations of planetary positions by the ancient Egyptians, Babylonians, and Greeks, and the development of natural philosophy, to the revolutionary discoveries from the 16th century onward by Galileo, Newton, Einstein, etc. Attention to individual contributions by scientists from a wide variety of geographical and ethnic backgrounds, and to international collaborations on large scientific projects in the modern world.",
                    credits: " 3",
                    preReq: "PHYS 207/PHYS 227 and PHYS 208/PHYS 228, and PHYS 309 or PHYS 424 or CHEM 443.",
                    restrict: "",
                    breadth:
                        "University: History and Cultural Change; A&S: GROUP B: A&S History & Cultural Change",
                    typ: "Fall"
                },
                {
                    code: "PHYS 630",
                    name: "Galaxies",
                    descr: "Addresses the structure, formation, and evolution of galaxies as building blocks of the universe. Emphasizes using the laws of physics to interpret observational data and recent discoveries in the field.",
                    credits: " 3",
                    preReq: "PHYS333.",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: ""
                },
                {
                    code: "PHYS 634",
                    name: "Physics of the Sun",
                    descr: "Physics of processes which occur in the outer regions of the sun. Topics include radiative transfer, convection, sound waves, magnetic fields, the chromosphere, the corona, the solar wind, and the cycle of solar activity.",
                    credits: " 3",
                    preReq: "PHYS333 or PHYS 633.",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Spring"
                },
                {
                    code: "PHYS 624",
                    name: "Introduction to Condensed Matter Physics",
                    descr: "X-ray diffraction, structure and properties of metals, insulators and semiconductors, and band theory of solids; includes electrical, optical, magnetic and thermal properties.",
                    credits: " 3",
                    preReq: "",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Fall"
                },
                {
                    code: "MATH 503",
                    name: "Advanced Calculus and Nonlinear Dynamics",
                    descr: "Change of variables, surface integrals, Stokes\u2019 Theorem, Divergence Theorem, Calculus of Variations, Euler\u2019s Equation, Brachistochrone and isoperimetric problems. Introduction to the qualitative theory of ordinary differential equations, including linear systems, phase space analysis, Lyapanov\u2019s Methods, and elements of the analysis of nonlinear systems.",
                    credits: " 3",
                    preReq: "300 level or above courses in ordinary differential equations and linear algebra.",
                    restrict: "",
                    breadth: "University: ; A&S: ",
                    typ: "Fall"
                }
            ]
        }
    ]
};
