/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";
import { TypeAnimation } from 'react-type-animation';


// core components
import Footer from "components/Footer/Footer.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLocationDot } from "@fortawesome/free-solid-svg-icons";


const hellos = [
    // English
    "Hello, World!",
    2000,
    // German
    "Hallo Welt!",
    2000,
    // French
    "Bonjour le monde!",
    2000,
    // Spanish
    "¡Hola Mundo!",
    2000,
    // Portuguese
    "Olá Mundo!",
    2000,
    // Italian
    "Ciao mondo!",
    2000,
    // Dutch
    "Hallo Wereld!",
    2000,
    // Polish
    "Witaj świecie!",
    2000,
    // Croatian
    "Pozdrav svijete!",
    2000,

    // Croatian
    "Pozdrav svijete!",
    2000,
    // Czech
    "Ahoj světe!",
    2000,
    // Hungarian
    "Helló Világ!",
    2000,
    // Finnish
    "Hei maailma!",
    2000,
    // Swedish
    "Hej världen!",
    2000,
    // Danish
    "Hej Verden!",
    2000,
    // Greek
    "Γειά σου Κόσμε",
    2000,
    // Hebrew
    "שלום עולם",
    2000,
    // Russian
    "Привет, мир",
    2000,
    // Hindi
    "नमस्ते दुनिया",
    2000,
    // Punjabi
    "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ",
    2000,
    // Thai
    "สวัสดีชาวโลก",
    2000,
    // Arabic
    "مرحبا بالعالم",
    2000,
    // Turkish
    "Selam Dünya!",
    2000,
    // Filipino
    "Kumusta, Mundo!",
    2000,
    // Korean
    "안녕하세요 월드",
    2000,
    // Japanese
    "こんにちは世界",
    2000,
    // Chinese
    "你好，世界",
    2000,
    // Vietnamese
    "Chào thế giới",
    2000,
];

let ps = null;

const professionalExperience = [
    {
        title: "Software Engineer | R&D",
        company: "NeuroRehabLab at ARDITI",
        dates: "Feb. 2022 - Jan. 2024"
    },
    {
        title: "Software Engineer | Master Thesis | R&D",
        company: "NeuroRehabLab at ARDITI",
        dates: "Set. 2020 - May 2022"
    },
    {
        title: "Volunteer (Software Engineer | Technical Support)",
        company: "Secção de Informática (University of Madeira)",
        dates: "Set. 2017 - Oct. 2020"
    }
];

const awards = [
    {
        title: "International Conference on ENTERprise Information Systems (CENTERIS)",
        company: <span><FontAwesomeIcon icon={faLocationDot} /> Porto, Portugal</span>,
        dates: "Nov. 2023"
    },
    {
        title: <span>RUR VR Summit (Hackaton)<br/> 2º Place</span>,
        company: <span><FontAwesomeIcon icon={faLocationDot} /> Bochum, Germany</span>,
        dates: "Oct. 2023"
    },
    {
        title: <span>CodeWeek Hackaton<br/>2º Place</span>,
        company: <span><FontAwesomeIcon icon={faLocationDot} /> Funchal, Portugal</span>,
        dates: "Oct. 2017"
    },
]

function ProfessionalExperience(experience) {
    return experience.map(value =>
    (<><Row className="justify-content-between">
        <Col md="7">
            <span className="text-left font-weight-bold" style={{ fontSize: "1rem" }}>
                {value.title} <br />
                <span style={{ fontSize: "0.8rem" }}>{value.company}</span>
            </span>
        </Col>
        <Col md="5">
            <span className="profile-description text-right font-weight-bold" style={{ fontSize: "0.8rem" }}>{value.dates}</span>
        </Col>
    </Row><br /></>)
    );
}

const skillSetList = [
    {
        title: "Software Engineer",
        skills: [
            "C#", "C", "C++", "Git", "Android Development", "Desktop Development (Win, Mac, Linux)", "CI/CD Pipeline",
            "Architectural patterns: Model-View-Controller (MVC), Flux",
        ]
    },
    {
        title: "Front-End Developer",
        skills: [
            "React", "Figma", "JavaScript", "CSS (CSS3, SASS, SCSS)", "TypeScript", "Socket.IO", "Material UI", "Ant Design", "Webpack", "Babel"
        ]
    },
    {
        title: "Back-End Developer",
        skills: [
            "NodeJS", "ExpressJS", "NoSQL (MongoDB)", "SQL (MariaDB and SQLite3)", "PHP", "C#", "Socket.IO", "Webpack", "Babel"
        ]
    },
    {
        title: "Design Patterns",
        skills: [
            "Models: Model-View-Controller (MVC), Flux"
        ]
    },
    {
        title: "Cloud",
        skills: [
            "Docker", "Open-Stack", "Proxmox", "Micro-services"
        ]
    },
    {
        title: "Data Science",
        skills: [
            "Python", "Pandas", "MatLab", "Pentaho Business Suite", "Java", "Machine Learning: "
        ]
    },
    {
        title: "Methodology",
        skills: [
            "SCRUM", "Agile", "Waterfall"
        ]
    },
    {
        title: "Human-Computer Interaction",
        skills: [
            "Figma", "Wireframe"
        ]
    }


]
const portfolioList = [
    {
        title: "Reh@Store",
        logo: require("assets/img/rehstore_logo.png"),
        description: `
        Almost 80% of research solutions do not reach their intended audience, due to distribution issues.
        As such the Reh@Store, a software distribution platform, aims to remove those issues by making it possible
        for researchers to deploy their projects remotely on health institutions.
        The end-users just need to press a button in order to use any project.
    `,
        website: "https://rehstore.arditi.pt",
        github: "https://github.com/NeuroRehabilitation/Reh-Store"
    },
    {
        title: "Open Rehab Initiative",
        logo: require("assets/img/ori_logo.png"),
        description: `
        The Open Rehab Initiative aims to be the go to portal of serious games for researchers, 
        clinicians and developers. In order to go a step further, I developed the third version of this Initiative,
        fusing my previous project (Reh@Store) and it's knowledge with the ORI. The result was a solution for
        distributing software capable of backing user data, providing the necessary tools for remote clinical therapy,
        allowing users to interact with each other trough our forum and allow for a controlled deployment of the developed
        software.
        `,
        website: "https://openrehab.arditi.pt"
    },
    {
        title: "Let me fix website",
        logo: require("assets/img/zlyntlab.png"),
        description: `
        I developed a marketplace for users to find and provide home fixing services to users (for example plummer).
        `,
        github: "https://github.com/Zlynt/letmefix_er/blob/master/index.js"
    },
    {
        title: "PICO Compiler",
        logo: require("assets/img/blob.png"),
        description: `
        My PICO Compiler is capable of verifying the Source Code for error and subsequently compile the code into
        an executable binary.
        `,
        github: "https://github.com/Zlynt/PICO-Compiler"
    },
    {
        title: "TS SFTP Server",
        logo: require("assets/img/zlyntlab.png"),
        description: `
        This framework allows developers to easily create an SFTP server using a syntax similar to ExpressJS.
        It is possible to use multiple file system formats, including "in memory" or a custom made one.
        `,
        github: "https://github.com/ZlyntLab/ts-sftp-server"
    },
    {
        title: "Parkinson Diagnose",
        logo: require("assets/img/zlyntlab.png"),
        description: `
        This project detects parkinson on the patient based on data collected from their voice.
        It uses Machine Learning and MatLab under the hood.
        `,
        github: ""
    },
    {
        title: "AI Wine Classification",
        logo: require("assets/img/zlyntlab.png"),
        description: `
        This project detects how good a wine is based on laboratory data such as the PH.
        It uses Machine Learning and MatLab under the hood.
        `,
        github: ""
    },
    {
        title: "Battleship Game",
        logo: require("assets/img/zlyntlab.png"),
        description: `
        This battleship game was built using ExpressJS and Socket.io.
        It can be played by 2 users in realtime.
        `,
        github: "https://github.com/Zlynt/BattleshipGame"
    },
    {
        title: "Calendar Page",
        logo: require("assets/img/zlyntlab.png"),
        description: `
        This calendar page was built using Laravel.
        `,
        github: "https://github.com/Zlynt/calendario"
    },
    {
        title: "Web 3 login prototype",
        logo: require("assets/img/zlyntlab.png"),
        description: `
        This project provides an ubiquitous solutions to login on a website using cryptographic keys.
        Think of it like a Metamask extension, but only login (no cryptocurrency).
        `,
        github: "https://github.com/Zlynt/Trabalho-de-Computa--o-Ubiqua"
    },
    {
        title: "Linux Fan Driver",
        logo: require("assets/img/zlyntlab.png"),
        description: `
        Asus ROG GL553VW laptop users cannot control its fans when using Ubuntu, due to lack of proper drivers.
        This project implements a Linux driver for the computer fans to be controlled manually.
        `,
        github: "https://github.com/Zlynt/GL553VW-Ubuntu-Fan-Driver"
    },
    {
        title: "Alarm Clock",
        logo: require("assets/img/zlyntlab.png"),
        description: `
        This Android application persuades its users to adopt healthy sleep patterns in order to improve their overall health.
        `,
        github: "https://github.com/Zlynt/T-picos-2--Projeto"
    }
]

export default function ProfilePage() {
    const [skillSet, setSkillSet] = React.useState(0);
    const changeSkillSet = (value) => {
        if (value >= 0 && value < skillSetList.length) setSkillSet(value);
    };

    const [portfolioIndex, setPortfolioIndex] = React.useState(0);
    const changeCurrentPortfolio = (value) => {
        if (value >= 0 && value < portfolioList.length) setPortfolioIndex(value);
    };

    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            document.documentElement.className += " perfect-scrollbar-on";
            document.documentElement.classList.remove("perfect-scrollbar-off");
            let tables = document.querySelectorAll(".table-responsive");
            for (let i = 0; i < tables.length; i++) {
                ps = new PerfectScrollbar(tables[i]);
            }
        }
        document.body.classList.toggle("profile-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            if (navigator.platform.indexOf("Win") > -1) {
                ps.destroy();
                document.documentElement.className += " perfect-scrollbar-off";
                document.documentElement.classList.remove("perfect-scrollbar-on");
            }
            document.body.classList.toggle("profile-page");
        };
    }, []);

    return (
        <>
            <IndexNavbar />
            <div className="wrapper">
                <div className="page-header">
                    <img
                        alt="..."
                        className="dots"
                        src={require("assets/img/dots.png")}
                    />
                    <img
                        alt="..."
                        className="path"
                        src={require("assets/img/path4.png")}
                    />
                    <Container className="align-items-center">
                        <Row>
                            <Col md="12">
                                <h2 className="title">
                                    <TypeAnimation
                                        sequence={hellos}
                                        wrapper="span"
                                        speed={50}
                                        style={{ fontSize: '2em', display: 'inline-block' }}
                                        repeat={Infinity}
                                    />
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <br />
                            <br />
                            <br />
                            <br />
                        </Row>
                        <Row>
                            <Col lg="6" md="6">
                                <h1 className="profile-title text-left">Ivan Teixeira</h1>
                                <h5 className="text-on-back">Zlynt</h5>
                                <img
                                    alt="Hello There!"
                                    src="https://media0.giphy.com/media/xTiIzJSKB4l7xTouE8/200.gif?cid=6c09b952wad5hpax364vkw3foo1l0tirttwgzku5s7v2e5ps&ep=v1_internal_gif_by_id&rid=200.gif&ct=g"
                                    width="200px"
                                    height="100px"
                                />
                                <br />
                                <br />
                                <br />
                                <p className="profile-description">
                                    👋 I'm Ivan, a software engineer with 7 years of experience.
                                </p>
                                <br />
                                <br />
                                <p className="profile-description">
                                    🔬 My focus varies from software engineering to data analytics.
                                </p>
                                <br />
                                <br />
                                <p className="profile-description">
                                    🤝 Successfull software results from team work.
                                </p>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="4" md="6">
                                <Card className="card-coin card-plain">
                                    <CardHeader>
                                        <img
                                            className="img-center img-fluid rounded-circle"
                                            src={require("assets/img/Ivan.png")}
                                            alt="Ivan"
                                        />
                                        <h4 className="title">Areas of focus</h4>
                                    </CardHeader>
                                    <CardBody>
                                        <ul>
                                            <li>Software Engineering</li>
                                            <li>Full-Stack Developer</li>
                                            <li>Application Developer</li>
                                            <li>DevOps</li>
                                            <li>Data Analytics</li>
                                            <li>Machine Learning</li>
                                        </ul>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section">
                    <Container>
                        <Row className="justify-content-between">
                            <Col md="5">
                            </Col>
                            <Col md="5">
                                <h1 className="profile-title text-left">Professional Experience</h1>
                                <h5 className="text-on-back">Experience</h5>
                                <Row className="justify-content-between">
                                    <Col md="12">

                                        <Card className="card-coin card-plain">
                                            <CardHeader>
                                                <br />
                                            </CardHeader>
                                            <CardBody>
                                                <br />
                                                <br />
                                                <br />
                                                {ProfessionalExperience(professionalExperience)}
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="section">
                    <Container>
                        <Row className="justify-content-between">
                            <Col md="5">
                                <h1 className="profile-title text-left">Awards</h1>
                                <h5 className="text-on-back">Awards</h5>
                                <Row className="justify-content-between">
                                    <Col md="12">

                                        <Card className="card-coin card-plain">
                                            <CardHeader>
                                                <br />
                                            </CardHeader>
                                            <CardBody>
                                                <br />
                                                <br />
                                                <br />
                                                {ProfessionalExperience(awards)}
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md="5">
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section">
                    <Container>
                        <Row className="justify-content-between">
                            <Col md="5">
                            </Col>
                            <Col md="5">
                                <h1 className="profile-title text-left">Education</h1>
                                <h5 className="text-on-back">Education</h5>
                                <p className="profile-description text-left">
                                    My Highest degree is a masters at Informatics Engineering (Computer Science and Engineering).
                                </p>
                                <br />
                                <p className="profile-description text-left">
                                    This degree allowed to profound my skills related to:
                                    <ul>
                                        <li>Human-computer interaction</li>
                                        <li>Project Management</li>
                                        <li>Software Engineering</li>
                                        <li>Full-Stack and Application Developer</li>
                                        <li>Business Analytics and Intelligence</li>
                                        <li>Machine Learning</li>
                                        <li>Hardware Engineer</li>
                                        <li>Project Management</li>
                                    </ul>
                                </p>
                                <br />
                                <p className="profile-description text-left">
                                    I also have extra-curricular courses:
                                    <ul>
                                        <li>Front-End: React and Redux</li>
                                        <li>Python</li>
                                    </ul>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <section className="section">
                    <Container>
                        <Row>
                            <Col md="6">
                                <Card className="card-plain">
                                    <CardHeader>
                                        <h1 className="profile-title text-left">Skills</h1>
                                        <h5 className="text-on-back">Skills</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <p className="profile-description text-left">
                                            My develop skills belong to the following {skillSetList.length} categories:
                                            <ul>
                                                {skillSetList.map((val, index) => <li><Link onClick={(ev) => {
                                                    ev.preventDefault();
                                                    setSkillSet(index);
                                                }}>{val.title}</Link></li>)}
                                            </ul>
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="ml-auto" md="6">
                                <Card className="card-coin card-plain">
                                    <CardHeader>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <h4 className="title">Skill Set</h4>
                                        <p className="text-center">{skillSetList[skillSet].title}</p>
                                        <Button
                                            className="btn-round float-right"
                                            color="primary"
                                            data-placement="right"
                                            id="next_skill_list"
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                changeSkillSet(skillSet + 1);
                                            }}>
                                            {">"}
                                        </Button>
                                        <UncontrolledTooltip
                                            delay={0}
                                            placement="right"
                                            target="next_skill_list"
                                        >
                                            Next skill set
                                        </UncontrolledTooltip>

                                        <Button
                                            className="btn-round float-right"
                                            color="primary"
                                            data-placement="right"
                                            id="back_skill_list"
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                changeSkillSet(skillSet - 1);
                                            }}>
                                            {"<"}
                                        </Button>
                                        <UncontrolledTooltip
                                            delay={0}
                                            placement="right"
                                            target="back_skill_list"
                                        >
                                            Previous skill set
                                        </UncontrolledTooltip>
                                    </CardHeader>
                                    <CardBody>
                                        <Nav
                                            className="nav-tabs-primary justify-content-center"
                                            tabs
                                        >
                                        </Nav>
                                        <TabContent
                                            className="tab-subcategories"
                                            activeTab={"skillSetTab"}
                                        >
                                            <TabPane tabId="skillSetTab">
                                                <p><strong>Associated Skills</strong></p>
                                                <ul>
                                                    {skillSetList[skillSet].skills.map(val => <li>{val}</li>)}
                                                </ul>
                                            </TabPane>
                                        </TabContent>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="section">
                    <Container>
                        <Row>
                            <Col md="7">
                                <Card className="card-plain">
                                    <CardHeader>
                                        <h1 className="profile-title text-left">Portfolio</h1>
                                        <h5 className="text-on-back">Portfolio</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <p className="profile-description text-left">
                                            During my academic and professional path, I developed the following solutions:
                                            <ul>
                                                {portfolioList.map((val, index) => <li><Link onClick={(ev) => {
                                                    ev.preventDefault();
                                                    changeCurrentPortfolio(index);
                                                }}>{val.title}</Link></li>)}
                                            </ul>
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col className="ml-auto" md="5">
                                <Card className="card-coin card-plain">
                                    <CardHeader>
                                        <img
                                            alt="..."
                                            className="img-center img-fluid rounded-circle"
                                            src={portfolioList[portfolioIndex].logo}
                                        />
                                        <h4 className="title">{portfolioList[portfolioIndex].title}</h4>
                                        <Button
                                            className="btn-round float-right"
                                            color="primary"
                                            data-placement="right"
                                            id="next_project_list"
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                changeCurrentPortfolio(portfolioIndex + 1);
                                            }}>
                                            {">"}
                                        </Button>
                                        <UncontrolledTooltip
                                            delay={0}
                                            placement="right"
                                            target="next_project_list"
                                        >
                                            Next project
                                        </UncontrolledTooltip>

                                        <Button
                                            className="btn-round float-right"
                                            color="primary"
                                            data-placement="right"
                                            id="back_project_list"
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                changeCurrentPortfolio(portfolioIndex - 1);
                                            }}>
                                            {"<"}
                                        </Button>
                                        <UncontrolledTooltip
                                            delay={0}
                                            placement="right"
                                            target="back_project_list"
                                        >
                                            Previous project
                                        </UncontrolledTooltip>
                                    </CardHeader>
                                    <CardBody>
                                        <Nav
                                            className="nav-tabs-primary justify-content-center"
                                            tabs
                                        >
                                        </Nav>
                                        <TabContent
                                            className="tab-subcategories"
                                            activeTab={"skillSetTab"}
                                        >
                                            <TabPane tabId="skillSetTab">
                                                <p><strong>Description</strong></p>
                                                {portfolioList[portfolioIndex].description}
                                                <div className="btn-wrapper pt-3">
                                                    {portfolioList[portfolioIndex].website &&
                                                        <Button
                                                            className="btn-simple"
                                                            color="info"
                                                            href={portfolioList[portfolioIndex].website}
                                                        >
                                                            <FontAwesomeIcon icon={faGlobe} style={{ marginRight: "15px" }} size="lg" /> Visit website
                                                        </Button>
                                                    }
                                                    {portfolioList[portfolioIndex].github &&
                                                        <Button
                                                            className="btn-simple"
                                                            color="primary"
                                                            href={portfolioList[portfolioIndex].github}
                                                        >
                                                            <i className="fab fa-github" /> Source Code
                                                        </Button>
                                                    }
                                                </div>
                                            </TabPane>
                                        </TabContent>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Footer />
            </div>
        </>
    );
}
