import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";

// core components

function Examples() {
  return (
    <>
      <div className="section section-examples" data-background-color="black">
        <div className="space-50"></div>
        <Container className="text-center">
          <Row>
            <div className="col">
              <a href="https://www.facebook.com/CRY.Roorkee/" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/fbPage.png")}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                outline
                // tag={Link}
              ><a href="https://www.facebook.com/CRY.Roorkee/" target="_blank">
                View FB Page</a>
              </Button>
            </div>
            <div className="col">
              <Link to="/team-page" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/teamPage.png")}
                ></img>
              </Link>
              <Button
                className="btn-round"
                color="default"
                // to="/team-page"
                // target="_blank"
                outline
                // tag={Link}
              ><a href="/team-page" target="_blank">
                View Team Page</a>
              </Button>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Examples;
