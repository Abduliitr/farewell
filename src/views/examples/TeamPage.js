import React from "react";
import ParticlesBg from "particles-bg";
import icon from "./icon";
import {Members} from './MemberData';

// import FadeIn from 'react-fade-in';

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
  const teamMembers = Members;

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
      {/* <FadeIn> */}
      <div className="wrapper">
        <TeamPageHeader />
        <div className="section section-team text-center title" style={{background:"black", color:"white", border:"5px solid white", borderRadius:"10px"}}>
          <Container>
            <h2 className="title">Dream Team 2019-2020 <i class="fas fa-heart"></i></h2>
            <div className="team"  style={{zIndex:"-100"}} >
              <Row  style={{zIndex:"-100"}} >
                {teamMembers.map(teamMember=> {
                  return(
                    <Col lg="4" md="4" style={{paddingTop:"50px"}}>

                      <div className="team-player">
                        <div className="flip-box flip-box-team">
                          <div className="flip-box-inner flip-box-inner-team" style={{opacity:"1"}}>
                            <div className="flip-box-front" style={{backgroundColor:"#000",opacity:"1"}}>
                              <img
                                alt={teamMember.name}
                                className="rounded-circle img-fluid img-raised"
                                src={teamMember.src}
                                style={{maxWidth:"180px", border:"5px solid white", boxShadow:"15px 15px 30px 30px #ccc", borderRadius:"100%"}}
                              ></img>
                            </div>
                            <div className="flip-box-back" style={{backgroundColor:"rgba(0,0,0,0)",opacity:"1"}}>
                              <img 
                                alt={teamMember.name}
                                className="rounded-circle img-fluid img-raised"
                                src={teamMember.src}
                                style={{maxWidth:"180px", border:"5px solid white", boxShadow:"15px 15px 30px 30px #ccc", borderRadius:"100%"}}
                              ></img>  
                            </div>
                          </div>
                        </div>
                          
                        
                        <h4 className="title">{teamMember.name}</h4>
                        {/* <p className="category text-info">{teamMember.category}</p> */}
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
        <DarkFooter />
      </div>
      {/* </FadeIn> */}
    </>
  );
}

export default TeamPage;
