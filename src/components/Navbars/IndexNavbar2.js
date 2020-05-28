import React from "react";
import {
  NavbarBrand,
  Navbar,
  Container
} from "reactstrap";
import Hscroll from "components/Hscroll";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  // const [collapseOpen, setCollapseOpen] = React.useState(false);

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
            >
              {/* <img src={require('assets/img/logo.png')} style={{borderRadius:'50%'}} width="30" height="30" alt="" /> */}
              <i className="fa fa-heartbeat" style={{fontSize:"28px"}}></i>
              {"  "}{"  "}
              CRY IIT ROORKEE
            </NavbarBrand>
          </div>
        </Container>
        
      </Navbar>
      <Hscroll />
    </>
  );
}

export default IndexNavbar;
