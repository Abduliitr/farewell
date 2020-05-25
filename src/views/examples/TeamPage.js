import React from "react";
import ParticlesBg from "particles-bg";
import icon from "./icon";

// reactstrap components
import {
  Button,
  // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TeamPageHeader from "components/Headers/TeamPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import IndexNavbar2 from "components/Navbars/IndexNavbar2";

function TeamPage() {
  // const [firstFocus, setFirstFocus] = React.useState(false);
  // const [lastFocus, setLastFocus] = React.useState(false);


  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-50, 50],
    alpha: [0.6, 0],
    scale: [.1, 0.9],
    body: icon,
    position: "all",
    //color: ["random", "#ff0000"],
    cross: "dead",
    random: 10
  };

  // write the const for the team details here...
  const teamMembers = [
    {
      src: require("assets/img/kapil.jpg"),
      altText: "Kapil Birthala",
      name: "Kapil Birthala",
      category: "Convener",
      fbLink:"https://www.facebook.com/profile.php?id=100009371717274",
      linkedinLink:"https://linkedin.com/in/kapil-birthala/"
    },
    {
      src: require("assets/img/aniket.jpeg"),
      altText: "Aniket Kumbhar",
      name: "Aniket Kumbhar",
      category: "Co-Convener",
      fbLink:"https://www.facebook.com/aniket.kumbhar.31945",
      linkedinLink:"https://linkedin.com/in/aniket-kumbhar-2418ab151/"
    },
    {
      src: require("assets/img/abhishek.jpg"),
      altText: "Abhishek Kumar",
      name: "Abhishek Kumar",
      category: "Events Head",
      fbLink:"https://www.facebook.com/kmraabhii",
      linkedinLink:"https://linkedin.com"
    },
    {
      src: require("assets/img/shuvam.jpg"),
      altText: "Shuvam Samadder",
      name: "Shuvam Samadder",
      category: "Alumni-Relations Head",
      fbLink:"https://www.facebook.com/shuvam.samadder.96",
      linkedinLink:"https://www.linkedin.com/in/shuvam-samadder-52b20214b/"
    },
    {
      src: require("assets/img/abdul-square.jpg"),
      altText: "Abdulahad Khan",
      name: "Abdulahad Khan",
      category: "Techncial Head",
      fbLink:"https://www.facebook.com/qadbury0123456789",
      linkedinLink:"https://www.linkedin.com/in/abdulahad-khan-profile/"
    },
    {
      src: require("assets/img/Vinu.jpeg"),
      altText: "Vinay Kumar Goyal",
      name: "Vinay Kumar Goyal",
      category: "Web Developer",
      fbLink:"https://www.facebook.com/profile.php?id=100006934575869",
      linkedinLink:"https://www.linkedin.com/in/vinay-kumar-goyal-002809179/"
    },
    {
      src: require("assets/img/sn.jpg"),
      altText: "Surendra Nitharwal",
      name: "Surendra Nitharwal",
      category: "Cultural Head",
      fbLink:"https://www.facebook.com/surendra.11052000",
      linkedinLink:"https://linkedin.com"
    },
    {
      src: require("assets/img/default-avatar.png"),
      altText: "Anupama Kumari",
      name: "Anupama Kumari",
      category: "PhD Member",
      fbLink:"https://www.facebook.com/",
      linkedinLink:"https://www.linkedin.com/"
    },
    {
      src: require("assets/img/tushar.jpeg"),
      altText: "Tushar Rohilla",
      name: "Tushar Rohilla",
      category: "Technical Executive",
      fbLink:"https://www.facebook.com/tushar.rohilla.94",
      linkedinLink:"https://www.linkedin.com/in/tushar-rohilla-007/"
    },
    {
      src: require("assets/img/parth.jpeg"),
      altText: "Parth Saxena",
      name: "Parth Saxena",
      category: "Executive Member, Alumni-Relations",
      fbLink:"https://www.facebook.com/parth.saxena.31392",
      linkedinLink:"https://www.linkedin.com/in/parth-saxena-621826173/"
    },
    {
      src: require("assets/img/default-avatar.png"),
      altText: "Nagendra Rajput",
      name: "Nagendra Rajput",
      category: "Executive Member",
      fbLink:"https://www.facebook.com/",
      linkedinLink:"https://www.linkedin.com/"
    },
    {
      src: require("assets/img/default-avatar.png"),
      altText: "Harshit Jain",
      name: "Harshit Jain",
      category: "Executive Member",
      fbLink:"https://www.facebook.com/",
      linkedinLink:"https://www.linkedin.com/"
    }
    
  ];

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      {/* <ExamplesNavbar /> */}
      <IndexNavbar2 />
      <div className="wrapper">
        <TeamPageHeader />
        <div className="section section-team text-center" style={{background:"black", color:"white", border:"5px solid white", borderRadius:"10px"}}>
          <Container>
            <h2 className="title">Dream Team 2019-2020 <i class="fas fa-heart"></i></h2>
            <div className="team"  style={{zIndex:"-100"}} >
              <Row  style={{zIndex:"-100"}} >
                {teamMembers.map(teamMember=> {
                  return(
                    <Col lg="4" md="4" style={{paddingTop:"50px"}}>
                      <div className="team-player">
                        <img
                          alt={teamMember.altText}
                          className="rounded-circle img-fluid img-raised"
                          src={teamMember.src}
                          style={{maxWidth:"180px", border:"5px solid white", boxShadow:"15px 15px 30px 30px #ccc", borderRadius:"100%"}}
                        ></img>
                        <h4 className="title">{teamMember.name}</h4>
                        <p className="category text-info">{teamMember.category}</p>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          href={teamMember.fbLink}
                          target="_blank"
                          // onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-facebook"></i>
                        </Button>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          href={teamMember.linkedinLink}
                          target="_blank"
                          // onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-linkedin"></i>
                        </Button>
                      </div>
                    </Col>
                  );
                })}
      
              </Row>
              
            </div>
            
          </Container>
          <ParticlesBg type="custom" config={config} bg={true} style={{position:"absolute",zIndex:"100",top:"0", left:"0"}}/>
        </div>
{/* 
  below comment is for Feedback form */}
{/*         
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to send us a message?</h2>
            <p className="description">Your feedbacks are very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div> */}
        <DarkFooter />
      </div>
    </>
  );
}

export default TeamPage;
