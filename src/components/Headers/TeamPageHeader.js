import React from "react";
import Typist from 'react-typist';

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function TeamPageHeader() {
  let pageHeader = React.createRef();



  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg6.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h2 className="title"><Typist cursor={{hideWhenDone:true, hideWhenDoneDelay:0}}>Our Social Media Handles...</Typist></h2>
            <div className="text-center">
              <Button
                className="btn-icon btn-round"
                color="info"
                target="_blank"
                href="https://www.facebook.com/CRY.Roorkee/"
                // onClick={e => e.preventDefault()}
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <Button
                className="btn-icon btn-round"
                color="info"
                target="_blank"
                href="https://twitter.com/Abdulah78723029"
                // onClick={e => e.preventDefault()}
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <Button
                className="btn-icon btn-round"
                color="info"
                target="_blank"
                href="https://www.instagram.com/abdulahad_1318/"
                // onClick={e => e.preventDefault()}
              >
                <i className="fab fa-instagram"></i>
              </Button>
            </div>
            
          </Container>
        </div>
      </div>
    </>
  );
}

export default TeamPageHeader;
