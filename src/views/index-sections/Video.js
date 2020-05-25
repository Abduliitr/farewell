import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Video() {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col md="12">
            <div
                className="video"
                // style={{
                //   // position: "relative",
                //   paddingBottom: "56.25%" /* 16:9 */,
                //   paddingTop: 25,
                //   // height: 0
                // }}
            >
            <iframe
                style={{
                    width: "100%",
                    height: "auto",
                    minHeight:"400px"
                }}
                src={"https://www.youtube.com/embed/lBqiQZTnwME?&autoplay=1"}
                frameBorder="0"
                autoplay
                />
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/lBqiQZTnwME" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </Col>
          </Row >
          
        </Container>
      </div>
    </>
  );
}

export default Video;
