/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container,Row, Col, Modal, Button, ModalBody, UncontrolledTooltip } from "reactstrap";

function DarkFooter() {
  const [modal2, setModal2] = React.useState(false);
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>

            <li>
              <a
                href="https://cryiitr.blogspot.com/p/child-rights-and-you-commonly.html"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="https://cryiitr.blogspot.com/p/child-rights-and-you-commonly.html"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Developed by{" "}
          <Button
            color="neutral"
            // className="mr-1"
            style={{padding:"2px"}}
            onClick={() => setModal2(true)}
            // href="/profile-page"
            // target="_blank"
          >
            Abdulahad Khan {" "}
            <img
                alt="..."
                src={require("assets/img/flags/IN.png")}
            ></img>
          </Button>
        </div>
      </Container>
      <Modal
        modalClassName="modal-mini modal-info"
        toggle={() => setModal2(false)}
        isOpen={modal2}
      >
        <div className="modal-header justify-content-center">
          <div className="modal-profile">
            <i className="now-ui-icons users_circle-08"></i>
          </div>
        </div>
        <ModalBody>
          <a href="/profile-page" style={{color:"white", textAlign:"center"}} target="_blank" onClick={() => setModal2(false)}><h3>Abdulahad Khan</h3></a>
            <Row className="justify-content-md-center text-center">
              <Col className="text-center" lg="12" md="12">
                  <Button
                    style={{borderRadius:"10%"}}
                    className="btn-neutral btn-icon btn-round"
                    color="github"
                    href="https://github.com/Abduliitr"
                    target="_blank"
                    id="github-tooltip"
                  >
                    <i style={{fontSize:"40px", left:"13px", top:"18px"}} className="fab fa-github"></i>
                  </Button>
                  <UncontrolledTooltip target="#github-tooltip">
                    Follow me on Github
                  </UncontrolledTooltip>
                  <Button
                    style={{borderRadius:"10%"}}
                    className="btn-neutral btn-icon"
                    color="facebook"
                    href="https://www.facebook.com/qadbury0123456789"
                    target="_blank"
                    id="facebook-tooltip"
                  >
                    <i style={{fontSize:"40px", left:"13px", top:"18px"}} className="fab fa-facebook-square"></i>
                  </Button>
                  <UncontrolledTooltip target="#facebook-tooltip">
                    Like me on Facebook
                  </UncontrolledTooltip>
                  <Button
                    style={{borderRadius:"10%"}}
                    color="twitter"
                    className="btn-neutral btn-icon btn-round"
                    href="https://twitter.com/Abdulah78723029"
                    target="_blank"
                    id="twitter-tooltip"
                  >
                    <i style={{fontSize:"35px", left:"13px", top:"18px"}} className="fab fa-twitter"></i>
                  </Button>
                  <UncontrolledTooltip target="#twitter-tooltip">
                    Follow me on Twitter
                  </UncontrolledTooltip>
                  <Button
                    style={{borderRadius:"10%"}}
                    className="btn-neutral btn-icon"
                    color="instagram"
                    href="https://www.instagram.com/abdulahad_1318/"
                    target="_blank"
                    id="instagram-tooltip"
                  >
                    <i style={{fontSize:"40px", left:"13px", top:"18px"}} className="fab fa-instagram"></i>
                  </Button>
                  <UncontrolledTooltip target="#instagram-tooltip">
                    Follow me on Instagram
                  </UncontrolledTooltip>
              </Col>
            </Row>
        </ModalBody>
        <div className="modal-footer">
          <Button className="btn-neutral" color="link" type="button" href="/profile-page" target="_blank" onClick={() => setModal2(false)}>
            Profile
          </Button>
          <Button
            className="btn-neutral"
            color="link"
            type="button"
            onClick={() => setModal2(false)}
          >
            Close
          </Button>
        </div>
      </Modal>
    </footer>
  );
}

export default DarkFooter;
