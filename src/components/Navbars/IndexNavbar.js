import React from "react";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

import Hscroll from "components/Hscroll";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };

  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar 
        className={"fixed-top " + navbarColor} expand="lg" color="info"
        style={{fontSize:"1.2rem"}}  
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
              className="page-scroll"
              href="/index"
              style={{textShadow:"0 0 10px #ff006c, 0 0 20px #ff006c, 0 0 30px #ff006c, 0 0 40px #ff417d, 0 0 70px #ff417d, 0 0 80px #ff417d, 0 0 100px #ff417d, 0 0 150px #ff417d"}}
              onClick={e => {
                e.preventDefault();
                document
                  .getElementById("main-head")
                  // setTimeout("1000")
                  .scrollIntoView();
              }}
            >
              <i className="fa fa-heartbeat" style={{fontSize:"28px"}}></i>
              {"  "}{"  "}
              CRY IIT ROORKEE
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Designed and Coded by Abdulahad.
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              
              <NavItem>
                <NavLink 
                  className="page-scroll"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("carousel")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons sport_trophy"></i>
                  <p>Events</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className="page-scroll"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("studentsCorner")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons emoticons_satisfied"></i>
                  <p>Students-Corner</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className="page-scroll"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  <p>Reach-Us</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className="page-scroll"
                  href="/team-page"
                >
                  <i className="now-ui-icons design_bullet-list-67"></i>
                  <p>Team</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Hscroll />
    </>
  );
}

export default IndexNavbar;
