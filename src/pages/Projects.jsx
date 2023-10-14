import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project from "../assets/projects/project.jpeg";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Expense Tracker"
              description="This online Expense Tracking platform boasts a responsive front-end design, built using HTML, CSS and Javascript. An expense tracker is a tool or system used to record and monitor one's spending habits and financial transactions. Its primary purpose is to help individuals or businesses keep track of where their money is going, manage budgets, and gain insights into their financial behavior."
              ghLink="https://github.com/lAmanl/Expense-tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Calculator"
              description="Calculator is built using React is a web application that performs arithmetic operations such as addition, subtraction, multiplication, and division. Using React, developers create components for each element of the calculator, handling user interactions and updating the display in real-time. State management in React ensures that the calculator can store and process input effectively. "
              ghLink="https://github.com/lAmanl/Calculator"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects