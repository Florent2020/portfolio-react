import React from "react";
import "./sass/style.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Logo from "./images/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/florent">
              <img
                width={70}
                height={30}
                className="mr-3"
                src={Logo}
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav as="ul" className="ml-auto">
                <Nav.Item as="li">
                  <NavLink exact to="/florent" className="nav-link">
                    Home
                  </NavLink>
                </Nav.Item>
                <Nav.Item as="li">
                  <NavLink to="/florent/about" className="nav-link">
                    About
                  </NavLink>
                </Nav.Item>
                <Nav.Item as="li">
                  <NavLink to="/florent/projects" className="nav-link">
                    Projects
                  </NavLink>
                </Nav.Item>
                <Nav.Item as="li">
                  <NavLink to="/florent/contact" className="nav-link">
                    Contact
                  </NavLink>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route exact to path="/florent">
            <Home />
          </Route>
          <Route path="/florent/about">
            <About />
          </Route>
          <Route path="/florent/projects">
            <Projects />
          </Route>
          <Route path="/florent/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
