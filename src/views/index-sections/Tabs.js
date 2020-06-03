import React from "react";

import Seniors from './Seniors';

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

        <Seniors />

        <Container>
          <p className="category" style={{textAlign:"center"}}>Messages from Super seniors...</p>
          <Row>
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
                            Benison
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
                            Ankur Sharma
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
                            Iqbal
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
                            Devang
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
                            <Col xs="6" sm="6" md="3" style={{padding:"10px"}}>
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
                              {/* <footer className="blockquote-footer">Ankur Sharma,
                                <cite title="Source Title">
                                    CRY IITR Chapter Co-Head, 2017-2018.
                                </cite>
                              </footer> */}
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="pills2">
                          <Row>
                            <Col xs="3" sm="3" className="d-block d-md-none"></Col>
                            <Col xs="6" sm="6" md="3" style={{padding:"10px"}}>
                              <img
                                alt="..."
                                className="rounded-circle img-raised"
                                src={require("assets/img/team/ankur.jpg")}
                              ></img>
                              
                            </Col>
                            <Col className="align-self-center" sm="12" md="9">
                              <p>
                              Whenever I think about my college life, CRY always comes to my mind. Those night outs, mafias, logon ke confessions, sath me thomso k liye preparation, cycle pe majra jana, wahan k bacche, humari trips, all these things made my college life awesome. It gave me a wonderful chance to meet a lot of wonderful people. I have learnt a lot from the seniors and enjoyed a lot with juniors like you all.<br /><br />
                                CRY is and will always be <span role="img" aria-label="love">❣️</span>.
                              </p>
                              <footer className="blockquote-footer">Ankur Sharma,{" "}
                                <cite title="Source Title">
                                    CRY IITR Chapter Co-Head, 2017-2018.
                                </cite>
                              </footer>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="pills3">
                          <Row>
                            <Col xs="3" sm="3" className="d-block d-md-none"></Col>
                            <Col xs="6" sm="6" md="3" style={{padding:"10px"}}>
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
                              {/* <footer className="blockquote-footer">Ankur Sharma,
                                <cite title="Source Title">
                                    CRY IITR Chapter Co-Head, 2017-2018.
                                </cite>
                              </footer> */}
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="pills4">
                          <Row>
                            <Col xs="3" sm="3" className="d-block d-md-none"></Col>
                            <Col xs="6" sm="6" md="3" style={{padding:"10px"}}>
                              <img
                                alt="..."
                                className="rounded-circle img-raised"
                                src={require("assets/img/team/devang.jpeg")}
                              ></img>
                              
                            </Col>                          
                            <Col className="align-self-center" sm="12" md="9">
                              <p>
                                "It's 2020. The Big Year. With You All walking out into the Outside World, it will be a Huge Transformation. My only message to everyone would be 'Be Generous and Kind'. The world needs a lot of Love and Happiness. Spread it and Cherish it. And if at any point you feel low in Life, just remember there's always a Gandhi at a message/call away. Feel free to ping. Loads of Love to All.<i className="fas fa-heart" style={{color:"red"}}></i>"
                              </p>
                              <footer className="blockquote-footer">Devang Gandhi,{" "}
                                <cite title="Source Title">
                                    CRY IITR Chapter Mentorship-Head, 2016-2017.
                                </cite>
                              </footer>
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
