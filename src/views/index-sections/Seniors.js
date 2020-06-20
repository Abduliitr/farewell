import React,  { Component } from 'react';
import {Container,  Alert,  Row,  Col,  Badge,  Button,  Modal,  ModalBody} from 'reactstrap';

class Seniors extends Component {
    
    state = { 
        modal : false, 
        selectedMemberId : -1, 
        selectedMember: {
            id:-1, 
            imgUrl1: require("assets/img/team/default-avatar.png"), 
            imgUrl2: require("assets/img/team/default-avatar.png"), 
            name: "Dummy Data", 
            authors: "xyz", 
            comments: [
                {
                    author: "Abdulahad", 
                    comment: "THis is for comments1. Far far away,  behind the word mountains,  far from the countries Vokalia and Consonantia,  there live the blind texts."
                }
            ]
        }, 

        members:[
            
            
            {
                id:1,   
                imgUrl1: require("assets/img/team/sravani.png"), 
                imgUrl2: require("assets/img/team/sravani.jpg"), 
                name: "Sravani", 
                authors: "Utkarsh,  Vikash,  Keshvam", 
                comments: [
                    {
                        author: "Utkarsh", 
                        comment: "Strict--> guider/helped a lot in managing UBA and CRY---> Funny character 😉. Helped me in managing the tasks and motivated me when I need. One of the beloved member of CRY whose position can’t be replaced by anyone.               "
                    }, 
                    {
                        author: "Keshvam", 
                        comment: "Akka you are the happiest soul who can uplift anybody’s mood within very minutes of the conversation, a kind friend,  a generous senior but this is just only a part of who you are,  your capabilities go much beyond that."
                    }, 
                    {
                         author: "Vikash", 
                         comment: "Cool ma'am. Future IAS officer. Her one of the famous dialogue,  I have trust issue on you. Ma'am ek request hai , aap IAS banke mere district me aa jao.."
                    }
                ]
            }, 
            {
                id:14, 
                imgUrl1: require("assets/img/team/ankit.jpg"), 
                imgUrl2: require("assets/img/team/ankit.png"), 
                name: "Ankit", 
                authors: "Utkarsh, Vikash", 
                comments: [
                    {
                        author: "Utkarsh", 
                        comment: "Social service and group,  a very good guider,  our super senior. Always provide us motivation by praising our work. We will miss you a lot."
                    }, 
                    {
                        author: "Vikash", 
                        comment: "A very good senior, present something is simply amazing. When I was in middle school,  There was a teacher jinke samjhane ke tarike dekhkar,  he became my inspiration , Now when I listen u in meeting it reminds me of my middle school days."
                    }
                ]
            }, 
            {
                id:3, 
                imgUrl1: require("assets/img/team/ayushi.jpg"), 
                imgUrl2: require("assets/img/team/ayushi.png"), 
                name: "Ayushi", 
                authors: "Vikash, Utkarsh", 
                comments: [
                    {
                        author: "Utkarsh", 
                        comment: "Provided so much ideas for the initiatives. Always helped and guided me for my career. IVD celebration,  maafia,  parties,  initiatives, Thomso,  Flashmob.All those moments are memorable"
                    }, 
                    {
                        author: "Vikash", 
                        comment: "One more legend from Metallurgy Department,  Mtb alag level pe machane wale,  Citi me intern then Amex me Placement. A great human being."
                    }
                ]
            }, 
            
            {
                id:0, 
                imgUrl1: require("assets/img/team/dinkey.png"), 
                imgUrl2: require("assets/img/team/dinkey.jpg"), 
                name: "Dinkey", 
                authors: "Utkarsh, Saurabh, Avantika, Vikash, Jai Kumar Rathore, Shapher, Keshvam", 
                comments: [
                    {
                        author: "Saurabh", 
                        comment: "Sincere inka middle name hona chahiye. Thanks for always been there whenever I needed guidance and help and always looking after me. I will miss you dearly. 🥺"
                        
                    }, 
                    {
                        author: "Utkarsh", 
                        comment: "Introduction in the first meeting from a strict leader to career guide to mafia in night outs express the story. Very much dedicated towards the group,  guided us when we were wrong. I will miss those kaunsa prof chill hai aur kaun kharab grade lagata hai and innovative ideas for CRY initiatives."  
                       
                    }, 
                    {
                        author: "Keshvam", 
                        comment: "My Journey at CRY started with you as our Chapter head,  seeing you handling the responsibility of this group and feeling that burning passion and dedication of working for the underprivileged faction in you has kindled a flame inside me and many others and inspired us to not just be a better person but a better citizen of this society."
                    }, 
                    {
                        author: "Vikash", 
                        comment: "Such a machau Senior. Mtb Intern core me karne ke baad Coding start karna and Day0 pe Goldman Sachs me placed hona,  I believe that it's nothing but an exception only"
                    }, 
                    {
                        author: "Avantika", 
                        comment: " It's quite unfortunate that we didn't get a chance to interact much with you,  but as you take a new road we wish you lots of success in  your future endeavours."
                    }, 
                    {
                        author: "Shahper", 
                        comment: "Your contributions to this organization have been immense and tremendous. Hope you keep doing your good work in your next job as well. Your decision-making skills and the way to talk have always inspired me. A farewell trip and chapo is still pending and I hope we will meet soon .Farewell , good luck and stay safe."
                    }, 
                    {
                        author: "Jai Kumar Rathore", 
                        comment: "For me Dinkey Ma'am is one of the best seniors in the college.She is a good mentor,  she guided me to overcome my shy nature,  she also guided me for my career. At the end,  I want to thanks ma'am for all the guidance ☺️"
                    }
                ]
            }, 
            {
                id:5, 
                imgUrl1: require("assets/img/team/anoop.png"), 
                imgUrl2: require("assets/img/team/anoop.jpg"), 
                name: "Anoop", 
                authors: "Saurabh, Utkarsh", 
                comments: [
                    {
                        author: "Utkarsh", 
                        comment: "Very much devoted towards the group. Worked with you in many initiatives and night out (mafia). Guided us when we needed it,  provided ideas for the initiative. We will miss those mafia,  memorable moments in thomso and parties."
                    }, 
                    {
                        author: "Saurabh", 
                        comment: "A really fun,  welcoming and ever smiling person. I still remember the fun we had during this year a night before convocation ;) . Will definitely miss those fun interactions."
                    }
                ]
            }, 
            {
                id:6, 
                imgUrl1: require("assets/img/team/Deepak.jpg"), 
                imgUrl2: require("assets/img/team/deepak1.jpg"), 
                name: "Deepak", 
                authors: "Shyam Tiwari, Saurabh, Utkarsh, Keshvam", 
                comments: [
                    {
                        author: "Saurabh", 
                        comment: "Sweet,  sanskari and decent shakal se at least 😂. You are one of kindest human beings I came across in life and how you find good even in a bad situations always amazes me. Never change yourself for anyone :)"
                    }, 
                    {
                        author: "Shyam Tiwari", 
                        comment: " Aapka excitation level or energy hamesa inspire krti hai . Best moments the yaad hai aap or me sarojni ke bagal wali tanki pe chadh gye the aadhi raat ko josh josh me 😂. Farewell from IITR but life has a lot for you ,  best wishes ."
                    }, 
                    {
                        author: "Utkarsh", 
                        comment: "One of the funny and favourite member of CRY. In a short period of time,  given us so many chapos,  mafia( kaafi maja aata tha aapke sath 😂),  wo Thomso nightout me bhand hone ki acting karte hue ghumna. We have lots of memories with you. We will miss you 😒."
                    }, 
                    {
                        author: "Keshvam", 
                        comment: "You always have a fun and eccentric energy about you that makes others feel comfortable around you. I share a lot of fun memories with you and those will always be cherished deep inside my heart and I am sure I will meet soon again to drink up all the regrets over a table in Divine and relive those memories once again hoping that the night would not come to an end."
                    }
                ]
            }, 
            {
                id:10, 
                imgUrl1: require("assets/img/team/komal.png"), 
                imgUrl2: require("assets/img/team/komal.jpeg"), 
                name: "Komal ", 
                authors: "Prabhu, Utkarsh", 
                comments: [
                    {
                        author: "Utkarsh", 
                        comment: "Involved in mentorship and guided us in some of the initiatives. We will miss those parties,  nights your ideas,  and contribution to the group."
                    }, 
                    {
                        author: "Prabhu", 
                        comment: "You are such a cute ma'am. You are the personification of – “Beauty with Purpose”. I can see your heart is filled with love for underprivileged because it filled so much that the vessel of your body is runneth over with it."
                    }
                ]
            }, 
            {
                id:12, 
                imgUrl1: require("assets/img/team/pranjala.jpg"), 
                imgUrl2: require("assets/img/team/pranjala.png"), 
                name: "Pranjala", 
                authors: "Keshvam, Vikash, Keshvam", 
                comments: [
                    {
                        author: "Keshvam", 
                        comment: "You are the personification of – “Beauty with Purpose”. I can see your heart is filled with love for underprivileged because it filled so much that the vessel of your body is runneth over with it and that love falls down from your eyes and it reflects as the shine in them."
                    }, 
                    {
                        author: "Utkarsh", 
                        comment: "Always available for the group,  so much dedicated as well as bonded with the group. Thomson preparations,  many initiatives,  so many nights out will be remembered by us. We will miss your experience and guidance."
                    }, 
                    {
                        author: "Vikash", 
                        comment: "Such a nice ma'am,  who looks always happy. We went on an amazing trip Kanatal Trip and also get to know that she has great experience of life. And Ma'am u are a good dancer also"
                    }
                ]
            }, 
            {
                id:2, 
                imgUrl1: require("assets/img/team/tikesh.jpg"), 
                imgUrl2: require("assets/img/team/tikesh.png"), 
                name: "Tikesh", 
                authors: "Vikash, Utkarsh", 
                comments: [
                    {
                        author: "Utkarsh", 
                        comment: "Tikesh- A piecefull and so much dedicated towards group. Guided us in many initiatives as well as for our career. Parties,  Maafia,  Flashmob,  nightouts. we will miss you a lot."
                    }, 
                    {
                        author: "Vikash", 
                        comment: "One of the best Senior of my life till now. Inhi ke wajah se meri CGPA badh payi. I feel he is a perfect man. And He is very machau also e.g. PPO,  Gate me rank, CGPA. Sir kahna to bahut kuchh hai,  milte hai jald hi."
                    }
                ]
            }, 
            {
                id:7, 
                imgUrl1: require("assets/img/team/sajal.jpg"), 
                imgUrl2: require("assets/img/team/sajal.png"), 
                name: "Sajal", 
                authors: "Sunil, Saurabh, Prabhu", 
                comments: [
                    {
                        author: "Saurabh", 
                        comment: "One of the coolest senior and athyadhik chill person. And one of my few go to person to take advice from. Thanks for all the fun dinner chapo and adventures and making this year most amazing."
                    }, 
                    {
                        author: "Sunil", 
                        comment: "A pieceful but sharp minded personality. Always ready to give chapo. So may initiative,  night outs specially Thomso wala. We had a lot of fun together."
                    }, 
                    {
                        author: "Prabhu", 
                        comment: " Always been pleasure hanging out with you. A great fun loving person. I wish I had a trip with you."
                    }
                ]
            }, 
            {
                id:8, 
                imgUrl1: require("assets/img/team/viveks.jpg"), 
                imgUrl2: require("assets/img/team/vivek2.jpg"), 
                name: "Vivek ", 
                authors: "Vikash, Sunil, Mohit, Saurabh, Prabhu", 
                comments: [
                    {
                        author: "Vikash", 
                        comment: " A man with great personality and heart. Your way of expressing things is simply amazing. Baki milte hain sir."
                    }, 
                    {
                        author: "Sunil", 
                        comment: "A sharp minded personality,  attached with the group and beloved senior in a very short period of time. We will miss the maafia,  chapos and your innovative ideas a lot."
                    }, 
                    {
                        author: "Mohit", 
                        comment: "Thanks sir for all your support or mujhe CRY se introduce karwane ke liye. Wish you all the luck for your future. Agli dafa Tehri Dam jarur chalenge."
                    }, 
                    {
                        author: "Saurabh", 
                        comment: "you are so calm that your name should be calmdev. The way you always remain calm and compose in every situation is one if the best quality in you and I'm trying to learn that from you."
                    }, 
                    {
                        author: "Prabhu", 
                        comment: " Kafi intelligent bande ho yrr aap... Hmne sath me kitna sahi time spend kiya... Bas hmari trip ki planning bas planning hi reh gayi uske liye sorry... Future me kabhi mauka mile to jarur chalte hain."
                    }
                ]
            }, 
            {
                id:9, 
                imgUrl1: require("assets/img/team/athar.jpg"), 
                imgUrl2: require("assets/img/team/athar.png"), 
                name: "Athar", 
                authors: "Utkarsh, Ekansh", 
                comments: [
                    {
                        author: "Ekansh", 
                        comment: "Sir aap ja rahe ho. Ab kiske sath maze karunga mai. Wo bhi bina mile Jaa rahe ho. Matlab hadd hi ho gayi isbaar. Aur aapne last tak btaya ni. Bhul mat jana bas."
                    }, 
                    {
                        author: "Utkarsh", 
                        comment: "Athar- So much dedicated and involved character in the group. Guided and helped me in my academics too. we will miss chapos,  maafia,  parties,  thomso preparation and so many memories."
                    }
                ]
            }, 
            
            {
                id:11, 
                imgUrl1: require("assets/img/team/default-avatar.png"), 
                imgUrl2: require("assets/img/team/default-avatar.png"), 
                name: "Alamjot", 
                authors: "Utkarsh, Abdul", 
                comments: [
                    {
                        author: "Utkarsh", 
                        comment: "Very pieceful and experienced person,  guided us in many initiatives. We will miss your designing skills,  Raghvendra wala prank😂,  your innovative ideas and of course your experience."
                    }, 
                    {
                        author: "Abdul", 
                        comment: "Thanks sir for all your support and guidance,  through out the IITR Journey. Wish You all the very best in your enddeavours."
                    }
                ]
            }, 
            {
                id:4, 
                imgUrl1: require("assets/img/team/lalit.jpg"), 
                imgUrl2: require("assets/img/team/lalit.png"), 
                name: "Lalit", 
                authors: "Vikash, Utkarsh", 
                comments: [
                    {
                        author: "Vikash", 
                        comment: "A great person,  but extra curricular acitivites me thoda kam participate karne wale. Again a 9+ CGPA Person from Meta Department."
                    }, 
                    {
                        author: "Utkarsh", 
                        comment: "He is a decent and a little bit introvert person. We have worked together in some of the initiatives of CRY. His facebook is full of CRY posts that shows his devotion towards group."
                    }
                ]
            }, 
            {
                id:13, 
                imgUrl1: require("assets/img/team/sunil.png"), 
                imgUrl2: require("assets/img/team/sunil.jpg"), 
                name: "Sunil", 
                authors: "Shyam Tiwari, Vikash, Utkarsh", 
                comments: [
                    {
                        author: "Shyam Tiwari", 
                        comment: "Your sincerity and dedication has always inspired us . Being one of the oldest member of present CRY team aap hi ke margdarshan or chatra chaya me poora saal beeta Soo sir wishing you a happy journey ahead."
                    }, 
                    {
                        author: "Utkarsh", 
                        comment: " Emotionly connected to each and every member of the group,  one of our Super senior,  very much involved in social service and one of the most memorable senior of CRY."
                    }, 
                    {
                        author: "Vikash", 
                        comment: "A very nice and kind senior. Who is always ready to help others. Mtb Corona ke time bhi Majra jana,  hats off to u sir. And He also never denies to give Chappo."
                    }
                ]
            }, 
            
            {
                id:15, 
                imgUrl1: require("assets/img/team/akshi.png"), 
                imgUrl2: require("assets/img/team/akshi.jpg"), 
                name: "Akshi", 
                authors: "Utkarsh, Abdul", 
                comments: [
                    {
                        author: "Utkarsh", 
                        comment: " One of our super senior. Helped and guided us in so many initiatives. your innovative ideas make he task easier. we will highly miss your experience,  nighouts and memories."
                    }, 
                    {
                        author: "Abdul", 
                        comment: "Your views have always guided us and the whole group towards the best decisions ever. We are really glad that we had a mentor like you during our beauiful stay at IITR.. "
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
        // const [modal2,  setModal2] = React.useState(false);
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
                    <div className="row">
                        <div className="col-sm-6 col-6">
                            <h4 className="title title-up"
                                style={{paddingTop:"15px", marginTop:"0"}}
                            >{this.state.selectedMember.name}</h4>
                        </div>
                        <div className="col-sm-6 col-6">
                        <button type="button" class="close" onClick={this.toggle}>&times;</button>
                        </div>
                    </div>
                  <p className="blockquote blockquote-primary">
                    <blockquote>
                        <ul>
                        {this.state.selectedMember.comments.map((comt)=>{
                            return (
                                <li>
                                    {comt.comment}{" "}
                                    <br></br>
                                </li>
                            );
                        })}
                        </ul>
                        <small> - {this.state.selectedMember.authors}</small>
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

            <div style={{padding:"2px",  margin:"2px",  paddingBottom: "10px",  marginBottom:"20px"}}>
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
                                                    <Alert style={{background:"black",  opacity:"0.9",  borderRadius:"5%",  marginBottom:"2px",  padding:"0"}}>
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
                                            style={{borderRadius:"50%",  opacity:".85"}}
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
                                            style={{borderRadius:"50%",  opacity:".85"}}
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
                        <Alert color="info" style={{width:"100%",  marginTop:"20px"}}>
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