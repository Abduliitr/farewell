/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Modal, Button, ModalBody } from "reactstrap";

function DarkFooter() {
  const [modal2, setModal2] = React.useState(false);
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>

            <li>
              <a
                href="#"
                // target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                // target="_blank"
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
          <a href="/profile-page" target="_blank" onClick={() => setModal2(false)}><h3>ABDULAHAD !<i class="fas fa-heart"></i></h3></a>
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
