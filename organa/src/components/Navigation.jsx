import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoL from "../assets/Laboratorialogo.png";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #f1f1f1;
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand>
            <img src={LogoL} width="200" height="25" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link>
                  <Link to="/">Scanner</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/summary">Resumen</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}

export default Navigation;