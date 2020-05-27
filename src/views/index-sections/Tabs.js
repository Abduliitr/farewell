import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function Tabs() {
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs" id="studentsCorner">
        <h2 style={{textAlign:"center",paddingTop:"50px"}}>Student's Corner</h2>
        <Container>
          <p className="category" style={{textAlign:"center"}}>Messages from seniors...</p>
          <Row>
            {/* <Col xs="3" sm="3" md="0" className="d-block d-md-none"></Col> */}
            
            <Col className="ml-auto mr-auto" sm="12" md="12">
                
                
                  <Card>
                    <CardHeader>
                      <Nav
                        className="nav-tabs-neutral justify-content-center"
                        data-background-color="blue"
                        role="tablist"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={pills === "1" ? "active" : ""}
                            href="#pablo"
                            onClick={e => {
                              e.preventDefault();
                              setPills("1");
                            }}
                          >
                            Dinkey
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={pills === "2" ? "active" : ""}
                            href="#pablo"
                            onClick={e => {
                              e.preventDefault();
                              setPills("2");
                            }}
                          >
                            Pranjala
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={pills === "3" ? "active" : ""}
                            href="#pablo"
                            onClick={e => {
                              e.preventDefault();
                              setPills("3");
                            }}
                          >
                            Sravani
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={pills === "4" ? "active" : ""}
                            href="#pablo"
                            onClick={e => {
                              e.preventDefault();
                              setPills("4");
                            }}
                          >
                            Sunil
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </CardHeader>
                    <CardBody>
                      <TabContent
                        className="text-center"
                        activeTab={"pills" + pills}
                      >
                        <TabPane tabId="pills1">
                          <Row>
                            <Col xs="3" sm="3" className="d-block d-md-none"></Col>
                            <Col sm="6" md="3" style={{padding:"10px"}}>
                                <img
                                  alt="..."
                                  className="rounded-circle img-raised"
                                  src={require("assets/img/julie.jpg")}
                                ></img>
                                
                              </Col>
                            <Col className="align-self-center" sm="12" md="9">
                              <p>
                                I think that’s a responsibility that I have, to push
                                possibilities, to show people, this is the level that
                                things could be at. So when you get something that has
                                the name Kanye West on it, it’s supposed to be pushing
                                the furthest possibilities. I will be the leader of a
                                company that ends up being worth billions of dollars,
                                because I got the answers. I understand culture. I am
                                the nucleus.
                              </p>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="pills2">
                          <Row>
                            <Col xs="3" sm="3" className="d-block d-md-none"></Col>
                            <Col sm="6" md="3" style={{padding:"10px"}}>
                              <img
                                alt="..."
                                className="rounded-circle img-raised"
                                src={require("assets/img/eva.jpg")}
                              ></img>
                              
                            </Col>
                            <Col className="align-self-center" sm="12" md="9">
                              <p>
                                I will be the leader of a company that ends up being
                                worth billions of dollars, because I got the answers. I
                                understand culture. I am the nucleus. I think that’s a
                                responsibility that I have, to push possibilities, to
                                show people, this is the level that things could be at.
                                I think that’s a responsibility that I have, to push
                                possibilities, to show people, this is the level that
                                things could be at.
                              </p>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="pills3">
                          <Row>
                            <Col xs="3" sm="3" className="d-block d-md-none"></Col>
                            <Col sm="6" md="3" style={{padding:"10px"}}>
                              <img
                                alt="..."
                                className="rounded-circle img-raised"
                                src={require("assets/img/avatar.jpg")}
                              ></img>
                              
                            </Col>                          
                            <Col className="align-self-center" sm="12" md="9">
                              <p>
                                I think that’s a responsibility that I have, to push
                                possibilities, to show people, this is the level that
                                things could be at. So when you get something that has
                                the name Kanye West on it, it’s supposed to be pushing
                                the furthest possibilities. I will be the leader of a
                                company that ends up being worth billions of dollars,
                                because I got the answers. I understand culture. I am
                                the nucleus.
                              </p>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="pills4">
                          <Row>
                            <Col xs="3" sm="3" className="d-block d-md-none"></Col>
                            <Col sm="6" md="3" style={{padding:"10px"}}>
                              <img
                                alt="..."
                                className="rounded-circle img-raised"
                                src={require("assets/img/disha.jpeg")}
                              ></img>
                              
                            </Col>                          
                            <Col className="align-self-center" sm="12" md="9">
                              <p>
                                "I will be the leader of a company that ends up being
                                worth billions of dollars, because I got the answers. I
                                understand culture. I am the nucleus. I think that’s a
                                responsibility that I have, to push possibilities, to
                                show people, this is the level that things could be at."
                              </p>
                            </Col>
                          </Row>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
