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
                            className={pills === "0" ? "active" : ""}
                            href="#parnica"
                            onClick={e => {
                              e.preventDefault();
                              setPills("0");
                            }}
                          >
                            Parnica Sharma
                          </NavLink>
                        </NavItem>
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
                        <TabPane tabId="pills0">
                          <Row>
                            <Col xs="3" sm="3" className="d-block d-md-none"></Col>
                            <Col xs="6" sm="6" md="3" style={{padding:"10px"}}>
                                <img
                                  alt="..."
                                  className="rounded-circle img-raised"
                                  src={require("assets/img/team/parnica.jpeg")}
                                ></img>
                                
                              </Col>
                            <Col className="align-self-center" sm="12" md="9">
                              <p>
                              I worked as a CRY IIT Roorkee volunteer for  nearly 2 years during my Mtech.  Contrary to its name the volunteers of CRY have brought only SMILES to precious little children. I would feel absolutely blissful while teaching the kids at Majra village. I remember celebrating occasions like Independence day, Republic day and Rakhsha Bandhan with these kids. They had limited financial resources so we would provide them notebooks, pens, drawing books and other useful resources. The joy on their faces while learning something new was a treat to the eyes and the soul. Their naughty laughter, regard for the volunteers which they expressed through salutations like "Namaste Sirji/Madamji" and their playful eyes have left an ever lasting imprint on my mind.  I will always cherish my days as a CRY Volunteer and wish to contribute to society in the best possible way I can.
                              </p>
                              <footer className="blockquote-footer">Parnica Sharma,
                                <cite title="Source Title">
                                    CRY IITR Chapter, 2016-2017.
                                </cite>
                              </footer>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="pills1">
                          <Row>
                            <Col xs="3" sm="3" className="d-block d-md-none"></Col>
                            <Col xs="6" sm="6" md="3" style={{padding:"10px"}}>
                                <img
                                  alt="..."
                                  className="rounded-circle img-raised"
                                  src={require("assets/img/team/ben.jpeg")}
                                ></img>
                                
                              </Col>
                            <Col className="align-self-center" sm="12" md="9">
                              <p>
                              Nothing beats the college days as that's when you have more control over your time, much easier to find volunteers driven by similar passion and work on problems as a close knit community. Volunteering with CRY came with a special kind of feeling of fulfillment that I may not be able to experience again. The biggest takeaway for me would be that the experiences of CRY helped me to become a more empathetic and thoughtful of the problems out there, and what goes into solving them and the challenges faced. I am sure this is gonna stay with me for long and will factor into new responsibilities and challenges that I take going forward.
                              </p>
                              <footer className="blockquote-footer">Benison,
                                <cite title="Source Title">
                                    CRY IITR Chapter Head, 2017-2018.
                                </cite>
                              </footer>
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
                                src={require("assets/img/team/iqbal.jpeg")}
                              ></img>
                              
                            </Col>                          
                            <Col className="align-self-center" sm="12" md="9">
                              <p>
                              CRY is the best thing happened to me during my college life. Fantastic seniors who were always ready to help and guide, and awesome juniors who were always ready to learn. It always felt good to go to majra and teach those kids, I remember whenever I used to go all the kids used to say "hum Iqbal sir se padhenge", not boasting about it but it used to feel awesome being the favourite mentor. All the work we did, we did it with fum. Thomso and cogni nights , random night out, CRY parties, TRIPs with CRY people and especially the CRY confession game it was all so wonderful. CRY gave me friends for life. I couldn't ask anything more from a single group. It's not a group it's a family. Thanks to CRY for giving me so many memories and making my college life a lot more wonderful.
I Love you CRY 3000 ❤️
                              </p>
                              <footer className="blockquote-footer">Iqbal Khan,
                                <cite title="Source Title">
                                    CRY IITR Chapter RTE Head, 2017-2018.
                                </cite>
                              </footer>
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
