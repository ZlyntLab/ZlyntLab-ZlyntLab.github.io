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
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const carouselItems = [
  {
    src: require("assets/img/pc_rehstore.png"),
    altText: "Reh@Store",
    caption: "Reh@Store Application",
  },
  {
    src: require("assets/img/pc_rehstore_2.png"),
    altText: "Reh@Store",
    caption: "Reh@Store Application",
  },
];

let ps = null;

export default function SolutionsPage() {
  const [tabs, setTabs] = React.useState(1);
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
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">The REF Framework</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                  Full-Stack Development using React and ExpressJS.
                </p>
                <div className="btn-wrapper profile pt-3">
                  <Button
                    className="btn-icon btn-round"
                    color="npm"
                    href="https://www.npmjs.com/package/the-ref-framework"
                    id="tooltip951161185"
                    target="_blank"
                  >
                    <i className="fab fa-npm" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip951161185">
                    Install using NPM
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="github"
                    href="https://github.com/ZlyntLab/the-ref-framework"
                    id="tooltip982846143"
                    target="_blank"
                  >
                    <i className="fab fa-github" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip982846143">
                    Source Code
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-square"
                      src={require("assets/img/react.png")}
                    />
                    <h4 className="title">Features</h4>
                  </CardHeader>
                  <CardBody>
                    <ul>
                      <li>Server side rendering</li>
                      <li>Code split into multiple files</li>
                      <li>Fast and easy configuration</li>
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
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Reh@Store</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                  Almost 80% of research solutions do not reach their intended audience, due to distribution issues.
                  As such the Reh@Store, a software distribution platform, aims to remove those issues by making it possible
                  for researchers to deploy their projects remotely on health institutions.
                  The end-users just need to press a button in order to use any project.
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="info"
                    href="https://rehstore.arditi.pt"
                  >
                    <FontAwesomeIcon icon={faGlobe} style={{ marginRight: "15px" }} size="lg" /> Visit website
                  </Button>
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="https://github.com/NeuroRehabilitation/Reh-Store"
                  >
                    <i className="fab fa-github" /> Source Code
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <section className="section">
          <Container className="align-items-center">
            <Row>
              <Col md="5">
                <h1 className="profile-title text-left">TS SFTP server</h1>
                <h5 className="text-on-back">03</h5>
                <p className="profile-description text-left">
                  A framework for building an SFTP server using TypeScript.
                  This framework's API is similar to ExpressJS.
                </p>

                <div className="btn-wrapper profile pt-3">
                  <Button
                    className="btn-icon btn-round"
                    color="npm"
                    href="https://www.npmjs.com/package/ts-sftp-server"
                    id="tooltip951161185"
                    target="_blank"
                  >
                    <i className="fab fa-npm" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip951161185">
                    Install using NPM
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="github"
                    href="https://github.com/ZlyntLab/ts-sftp-server"
                    id="tooltip982846143"
                    target="_blank"
                  >
                    <i className="fab fa-github" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip982846143">
                    Source Code
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-square"
                      src={require("assets/img/zlyntlab.png")}
                    />
                    <h4 className="title">Features</h4>
                  </CardHeader>
                  <CardBody>
                    <ul>
                      <li>Supported Midleware</li>
                      <li>Supported session</li>
                      <li>TypeScript</li>
                      <li>Supported storage systems:
                        <ul>
                          <li>File System (FS)</li>
                          <li>In-memory file system (memfs)</li>
                          <li>Custom file system</li>
                        </ul>
                      </li>
                    </ul>
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
