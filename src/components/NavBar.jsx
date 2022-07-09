import React, { useEffect, useState } from "react";
// React bootstrap component for the NavBar
import { Navbar, Nav, Container } from "react-bootstrap";
// Style the NavBar component
import './NavBar.css';

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
    // when scrolling, set the state of the scrolled variable
    window.addEventListener("scroll", onScroll);
    return () => {
      // when the component is unmounted, remove the event listener
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  // Update the active link when the user clicks on a link
  const onUpdateActiveLink = (value) => {
    setactiveLink(value);
  };
  // And return the NavBar component with JSX
  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Navbar.Toggle className="border-light text-light" aria-controls="basic-navbar-nav" />
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
              <span className="social-icons">
                {/* Github */}
                <a href="https://github.com/aliakbarzohour">
                  <i class="bi bi-github"></i>
                </a>
                {/* LinkedIn */}
                <a href="https://linkedin.com/in/aliakbarzohour">
                  <i class="bi bi-linkedin"></i>
                </a>
                {/* Instagram */}
                <a href="https://instagram.com/ali.akbarzohour">
                  <i class="bi bi-instagram"></i>
                </a>
              </span>
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
