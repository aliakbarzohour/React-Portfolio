import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  // Difine the state for the active links
  const [activeLink, setactiveLink] = useState("home");
  // Difine the state for the scroll position
  const [scrolled, setScrolled] = useState(false);
  // UseEffect to set Scrolled to true when the user scrolls down
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const onUpdateActiveLink = (value) => {
    setactiveLink(value);
  };

  // And return the NavBar component with JSX
  return (
    <>
      <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <span className="social-icon">{/* Insert Icons */}</span>
              <button
                className="vvd"
                onClick={() => {
                  console.log("is Clicked .");
                }}
              >
                Let's Connect
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
