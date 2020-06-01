import React, { Component } from 'react';
import {Container, Alert, Row, Col, Badge, Button, Modal, ModalBody} from 'reactstrap';

class Seniors extends Component {
    
    state = { 
        modal : false,
        selectedMemberId : -1,
        selectedMember: {
            id:-1,
            imgUrl1: require("assets/img/team/default-avatar.png"),
            imgUrl2: require("assets/img/team/default-avatar.png"),
            name: "Dummy Data",
            comments: [
                {
                    author: "Abdulahad",
                    comment: "THis is for comments1. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                }
            ]
        },
        members:[
            
            
            {
                id:1,  
                imgUrl1: require("assets/img/team/sravani.png"),
                imgUrl2: require("assets/img/team/sravani.jpg"),
                name: "Sravani",
                comments: [
                    {
                        author: "Abdulahad",
                        comment: "THis is for comments1. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    },
                    {
                        author: "Second Author",
                        comment: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    }
                ]
            },
            {
                id:14,
                imgUrl1: require("assets/img/team/ankit.jpg"),
                imgUrl2: require("assets/img/team/ankit.png"),
                name: "Ankit",
                comments: [
                    {
                        author: "Abdulahad",
                        comment: "THis is for comments1. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    },
                    {
                        author: "Second Author",
                        comment: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    }
                ]
            },
            {
                id:3,
                imgUrl1: require("assets/img/team/ayushi.jpg"),
                imgUrl2: require("assets/img/team/ayushi.png"),
                name: "Ayushi",
                comments: [
                    {
                        author: "Abdulahad",
                        comment: "THis is for comments1. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    },
                    {
                        author: "Second Author",
                        comment: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    }
                ]
            },
            
            {
                id:0,
                imgUrl1: require("assets/img/team/dinkey.png"),
                imgUrl2: require("assets/img/team/dinkey.jpg"),
                name: "Dinkey",
                comments: [
                    {
                        author: "Abdulahad",
                        comment: "THis is for comments1. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    },
                    {
                        author: "Second Author",
                        comment: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    }
                ]
            },
            {
                id:5,
                imgUrl1: require("assets/img/team/anoop.png"),
                imgUrl2: require("assets/img/team/anoop.jpg"),
                name: "Anoop",
                comments: [
                    {
                        author: "Abdulahad",
                        comment: "THis is for comments1. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    },
                    {
                        author: "Second Author",
                        comment: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    }
                ]
            },
            {
                id:6,
                imgUrl1: require("assets/img/team/Deepak.jpg"),
                imgUrl2: require("assets/img/team/deepak1.jpg"),
                name: "Deepak",
                comments: [
                    {
                        author: "Abdulahad",
                        comment: "THis is for comments1. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    },
                    {
                        author: "Second Author",
                        comment: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    }
                ]
            },
            {
                id:10,
                imgUrl1: require("assets/img/team/komal.png"),
                imgUrl2: require("assets/img/team/komal.jpeg"),
                name: "Komal ",
                comments: [
                    {
                        author: "Abdulahad",
                        comment: "THis is for comments1. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    },
                    {
                        author: "Second Author",
                        comment: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    }
                ]
            },
            {
                id:12,
                imgUrl1: require("assets/img/team/pranjala.jpg"),
                imgUrl2: require("assets/img/team/pranjala.png"),
                name: "Pranjala",
                comments: [
                    {
                        author: "Abdulahad",
                        comment: "THis is for comments1. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    },
                    {
                        author: "Second Author",
                        comment: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    }
                ]
            },
            {
                id:2,
                imgUrl1: require("assets/img/team/tikesh.jpg"),
                imgUrl2: require("assets/img/team/tikesh.png"),
                name: "Tikesh",
                comments: [
                    {
                        author: "Abdulahad",
                        comment: "THis is for comments1. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    },
                    {
                        author: "Second Author",
                        comment: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    }
                ]
            },
            {
                id:7,
                imgUrl1: require("assets/img/team/sajal.jpg"),
                imgUrl2: require("assets/img/team/sajal.png"),
                name: "Sajal",
                comments: [
                    {
                        author: "Abdulahad",
                        comment: "THis is for comments1. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    },
                    {
                        author: "Second Author",
                        comment: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    }
                ]
            },
            {
                id:8,
                imgUrl1: require("assets/img/team/viveks.jpg"),
                imgUrl2: require("assets/img/team/vivek2.jpg"),
                name: "Vivek ",
                comments: [
                    {
                        author: "Abdulahad",
                        comment: "THis is for comments1. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    },
                    {
                        author: "Second Author",
                        comment: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    }
                ]
            },
            {
                id:9,
                imgUrl1: require("assets/img/team/athar.jpg"),
                imgUrl2: require("assets/img/team/athar.png"),
                name: "Athar",
                comments: [
                    {
                        author: "Abdulahad",
                        comment: "THis is for comments1. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    },
                    {
                        author: "Second Author",
                        comment: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    }
                ]
            },
            
            {
                id:11,
                imgUrl1: require("assets/img/team/default-avatar.png"),
                imgUrl2: require("assets/img/team/default-avatar.png"),
                name: "Alamjot",
                comments: [
                    {
                        author: "Abdulahad",
                        comment: "THis is for comments1. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    },
                    {
                        author: "Second Author",
                        comment: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    }
                ]
            },
            {
                id:4,
                imgUrl1: require("assets/img/team/lalit.jpg"),
                imgUrl2: require("assets/img/team/lalit.png"),
                name: "Lalit",
                comments: [
                    {
                        author: "Abdulahad",
                        comment: "THis is for comments1. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    },
                    {
                        author: "Second Author",
                        comment: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    }
                ]
            },
            {
                id:13,
                imgUrl1: require("assets/img/team/sunil.png"),
                imgUrl2: require("assets/img/team/sunil.jpg"),
                name: "Sunil",
                comments: [
                    {
                        author: "Abdulahad",
                        comment: "THis is for comments1. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    },
                    {
                        author: "Second Author",
                        comment: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    }
                ]
            },
            
            {
                id:15,
                imgUrl1: require("assets/img/team/akshi.png"),
                imgUrl2: require("assets/img/team/akshi.jpg"),
                name: "Akshi",
                comments: [
                    {
                        author: "Abdulahad",
                        comment: "THis is for comments1. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    },
                    {
                        author: "Second Author",
                        comment: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                    }
                ]
            }
        ]
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
        console.log("Toggle called!")
    }

    render() { 
        // const [modal2, setModal2] = React.useState(false);
        return (
        <div>

            <Modal
                className="modal-lg"
                // modalClassName="modal-info"
                // toggle={() => setModal2(false)}
                isOpen={this.state.modal}
                style={{paddingBottom:"50px"}}
              >
                <ModalBody>
                    {console.log("selected Member Id is " + this.state.selectedMemberId)}
                    {/* {console.log(this.state.selectedMember)}; */}
                    <h4 className="title title-up">{this.state.selectedMember.name}</h4>
                  <p>
                    <blockquote>
                        {this.state.selectedMember.comments.map((comt)=>{
                            return (
                                <p className="blockquote blockquote-primary">
                                    {comt.comment}{" "}
                                    <br></br>
                                    <small>- {comt.author}</small>
                                </p>
                            );
                        })}
                    </blockquote>    
                  </p>
                </ModalBody>
                <div className="modal-footer">
                  {/* <Button color="default" type="button">
                    Nice Button
                  </Button> */}
                  <Button
                    color="danger"
                    type="button"
                    onClick={this.toggle}
                  >
                    Close
                  </Button>
                </div>
              </Modal>

            <div style={{padding:"2px", margin:"2px", paddingBottom: "10px", marginBottom:"20px"}}>
                <p className="category" style={{textAlign:"center"}}>Messages for seniors...</p>
                {/* <Container> */}
                    <Row style={{background:"black"}}>
                        {this.state.members.map((member)=> {
                            return (
                                <Col xs="3" sm="2" style={{padding:"2px"}} key={member.id} className="">
                                    <div className="flip-box">
                                        <div className="flip-box-inner"  style={{borderRadius:"50%"}}>
                                            <div className="flip-box-front"  style={{borderRadius:"50%"}}>
                                                <img
                                                    alt="..."
                                                    // className="rounded"
                                                    style={{borderRadius:"50%"}}
                                                    src={member.imgUrl1}
                                                    ></img>
                                                <Badge className="badge-info">{member.name}</Badge>
                                            </div>
                                            <div className="flip-box-back" style={{borderRadius:"50%"}}>
                                                <img
                                                    alt="..."
                                                    // className="rounded"
                                                    style={{borderRadius:"50%"}}
                                                    src={member.imgUrl2}
                                                    ></img>
                                                  
                                                <div className="carousel-caption">
                                                    <Alert style={{background:"black", opacity:"0.9", borderRadius:"5%", marginBottom:"2px", padding:"0"}}>
                                                        <strong className="title" style={{padding:"0"}}>
                                                            <h6 className=" d-none d-md-block" style={{padding:"5px"}}>{member.name}</h6>
                                                            <Badge className="badge-info" 
                                                                onClick={() => {
                                                                    this.toggle();
                                                                    this.setState({selectedMemberId:member.id});
                                                                    this.setState({selectedMember:member});
                                                                }} 
                                                                style={{cursor:"pointer"}}>CLICK ME!</Badge>
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
                                <div className="flip-box-inner" style={{borderRadius:"50%"}}>
                                    <div className="flip-box-front" style={{borderRadius:"50%"}}>
                                        <img
                                            alt="..."
                                            // className="rounded"
                                            style={{borderRadius:"50%", opacity:".85"}}
                                            src={require("assets/img/team/child.jpg")}
                                            ></img>
                                            <Badge className="badge-info">Thank</Badge>
                                    </div>
                                    <div className="flip-box-back" style={{borderRadius:"50%"}}>
                                        <img
                                            alt="..."
                                            // className="rounded"
                                            style={{borderRadius:"50%"}}
                                            src={require("assets/img/team/thanks.png")}
                                            ></img>
                                        <Badge className="badge-info">Messages</Badge>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs="3" sm="2" style={{padding:"2px"}} className="d-none d-sm-block">
                            <div className="flip-box">
                                <div className="flip-box-inner" style={{borderRadius:"50%"}}>
                                    <div className="flip-box-front" style={{borderRadius:"50%"}}>
                                        <img
                                            alt="..."
                                            // className="rounded"
                                            style={{borderRadius:"50%", opacity:".85"}}
                                            src={require("assets/img/team/boy-child.png")}
                                            ></img>
                                            <Badge className="badge-info">You!</Badge>
                                    </div>
                                    <div className="flip-box-back" style={{borderRadius:"50%"}}>
                                        <img
                                            alt="..."
                                            // className="rounded"
                                            style={{borderRadius:"50%"}}
                                            src={require("assets/img/team/thanks2.png")}
                                            ></img>
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
        </div>
         );
    }
}
 
export default Seniors;