import React, { Component } from 'react';
import {Container, Alert, Row, Col, Badge, Button} from 'reactstrap';

class Seniors extends Component {
    
    state = { 
        members:[
            {
                id:0,
                imgUrl1: require("assets/img/team/default-avatar.png"),
                imgUrl2: require("assets/img/team/default-avatar.png"),
                name: "Dinkey Mahawar"
            },
            {
                id:1,  
                imgUrl1: require("assets/img/team/default-avatar.png"),
                imgUrl2: require("assets/img/team/default-avatar.png"),
                name: "Sravani Sathupati"
            },
            {
                id:2,
                imgUrl1: require("assets/img/team/tikesh.jpg"),
                imgUrl2: require("assets/img/team/default-avatar.png"),
                name: "Tikesh Kumar"
            },
            {
                id:3,
                imgUrl1: require("assets/img/team/default-avatar.png"),
                imgUrl2: require("assets/img/team/default-avatar.png"),
                name: "Ayushi Joshi"
            },
            {
                id:4,
                imgUrl1: require("assets/img/team/default-avatar.png"),
                imgUrl2: require("assets/img/team/default-avatar.png"),
                name: "Lalit Kumar"
            },
            {
                id:5,
                imgUrl1: require("assets/img/team/default-avatar.png"),
                imgUrl2: require("assets/img/team/default-avatar.png"),
                name: "Anoop"
            },
            {
                id:6,
                imgUrl1: require("assets/img/team/Deepak.jpg"),
                imgUrl2: require("assets/img/team/default-avatar.png"),
                name: "Deepak das"
            },
            {
                id:7,
                imgUrl1: require("assets/img/team/sajal.jpg"),
                imgUrl2: require("assets/img/team/default-avatar.png"),
                name: "Sajal pandey"
            },
            {
                id:8,
                imgUrl1: require("assets/img/team/viveks.jpg"),
                imgUrl2: require("assets/img/team/default-avatar.png"),
                name: "Vivek "
            },
            {
                id:9,
                imgUrl1: require("assets/img/team/athar.jpg"),
                imgUrl2: require("assets/img/team/default-avatar.png"),
                name: "Athar"
            },
            {
                id:10,
                imgUrl1: require("assets/img/team/default-avatar.png"),
                imgUrl2: require("assets/img/team/default-avatar.png"),
                name: "Komal "
            },
            {
                id:11,
                imgUrl1: require("assets/img/team/default-avatar.png"),
                imgUrl2: require("assets/img/team/default-avatar.png"),
                name: "Alamjot Singh"
            },
            {
                id:12,
                imgUrl1: require("assets/img/team/pranjala.jpg"),
                imgUrl2: require("assets/img/team/default-avatar.png"),
                name: "Pranjala Tiwari"
            },
            {
                id:13,
                imgUrl1: require("assets/img/team/sunil.jpg"),
                imgUrl2: require("assets/img/team/default-avatar.png"),
                name: "Sunil Babu P"
            },
            {
                id:14,
                imgUrl1: require("assets/img/team/ankit.jpg"),
                imgUrl2: require("assets/img/team/default-avatar.png"),
                name: "Ankit Nagar"
            },
            {
                id:15,
                imgUrl1: require("assets/img/team/akshi.jpg"),
                imgUrl2: require("assets/img/team/default-avatar.png"),
                name: "Akshi Bajaj"
            }
        ]
    }

    render() { 
        return ( 
            <div style={{padding:"2px", margin:"2px", paddingBottom: "10px", marginBottom:"20px"}}>
                <p className="category" style={{textAlign:"center"}}>Messages for seniors...</p>
                {/* <Container> */}
                    <Row style={{background:"black"}}>
                        {this.state.members.map((member)=> {
                            return (
                                <Col xs="3" sm="2" style={{padding:"2px"}} className="">
                                    <div className="flip-box">
                                        <div className="flip-box-inner">
                                            <div className="flip-box-front">
                                                <img
                                                    alt="..."
                                                    className="rounded"
                                                    src={member.imgUrl1}
                                                    ></img>
                                                <Badge className="badge-info">{member.name}</Badge>
                                            </div>
                                            <div className="flip-box-back">
                                                <img
                                                    alt="..."
                                                    className="rounded"
                                                    src={member.imgUrl2}
                                                    ></img>
                                                    
                                                <div className="carousel-caption">
                                                    <Alert style={{background:"black", opacity:"0.9", borderRadius:"5%", marginBottom:"2px", padding:"0"}}>
                                                        <strong className="title" style={{padding:"0"}}>
                                                            <h6 className=" d-none d-md-block" style={{padding:"5px"}}>{member.name}</h6>
                                                            <Badge className="badge-info">CLICK ME!</Badge>
                                                        </strong>
                                                    </Alert>
                                                </div>
                                                <Badge className="badge-info">Messages</Badge>
                                            </div>
                                        </div>
                                        </div>
                                </Col>
                            );
                        })}
                        <Col xs="3" sm="2" style={{padding:"2px"}} className="d-none d-sm-block">
                            <div className="flip-box">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front">
                                        <img
                                            alt="..."
                                            className="rounded"
                                            src={require("assets/img/team/default-avatar.png")}
                                            ></img>
                                            <Badge className="badge-info">Empty</Badge>
                                    </div>
                                    <div className="flip-box-back">
                                        <img
                                            alt="..."
                                            className="rounded"
                                            src={require("assets/img/team/default-avatar.png")}
                                            ></img>
                                        <div className="carousel-caption">
                                            <Alert style={{background:"black", opacity:"0.9", borderRadius:"5%", marginBottom:"2px", padding:"0"}}>
                                                <strong className="title" style={{padding:"0"}}>
                                                    {/* <h6 className=" d-none d-md-block" style={{padding:"5px"}}>{member.name}</h6> */}
                                                    <Badge className="badge-info">CLICK ME!</Badge>
                                                </strong>
                                            </Alert>
                                        </div>
                                        <Badge className="badge-info">Messages</Badge>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs="3" sm="2" style={{padding:"2px"}} className="d-none d-sm-block">
                            <div className="flip-box">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front">
                                        <img
                                            alt="..."
                                            className="rounded"
                                            src={require("assets/img/team/default-avatar.png")}
                                            ></img>
                                            <Badge className="badge-info">Space</Badge>
                                    </div>
                                    <div className="flip-box-back">
                                        <img
                                            alt="..."
                                            className="rounded"
                                            src={require("assets/img/team/default-avatar.png")}
                                            ></img>
                                        <div className="carousel-caption">
                                            <Alert style={{background:"black", opacity:"0.9", borderRadius:"5%", marginBottom:"2px", padding:"0"}}>
                                                <strong className="title" style={{padding:"0"}}>
                                                    {/* <h6 className=" d-none d-md-block" style={{padding:"5px"}}>{member.name}</h6> */}
                                                    <Badge className="badge-info">CLICK ME!</Badge>
                                                </strong>
                                            </Alert>
                                        </div>
                                        <Badge className="badge-info">Messages</Badge>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Alert color="info" style={{width:"100%", marginTop:"20px"}}>
                            <Container>
                                <div className="alert-icon">
                                <i className="now-ui-icons ui-1_bell-53"></i>
                                </div>
                                <strong>Excuse me!</strong> We have written something for each one of you! Can you find it?
                            </Container>
                        </Alert>
                    </Row>
                {/* </Container> */}
            </div>
         );
    }
}
 
export default Seniors;