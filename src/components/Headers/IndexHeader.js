/*eslint-disable*/
import React from "react";

// reactstrap components
import { Alert, Container, Button } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      
      <div className="page-header" id="main-head">
        <div
          className="page-header-image"
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand title" style={{paddingTop:"100px"}}>
            <img
              alt="..."
              className="n-logo"
              
              src={require("assets/img/iitr-logo.png")}
            ></img>
            {/* <div class="title"> */}
              {/* <h3>PLASM.it - 2018</h3> */}
              {/* <h1 className="h1-seo">IIT ROORKEE</h1> */}
              {/* <h3><Typist  startDelay="1000" cursor={{hideWhenDone:true, hideWhenDoneDelay:0}}>CHILD RIGHTS AND YOU FAMILY!</Typist></h3> */}
              {/* <h1 className="h1-seo">FOR ALL THE <Typewriter wait="3000" options={{strings: ['Loving','Caring','AMAZING', 'SUPPORTIVE'], autoStart: true, loop: true}}/>SENIORS...</h1> */}
              <h1 className="h1-seo">Hamare pyaare SENIORS</h1>
              <h3>WE ARE REALLY GONNA MISS YOU A LOT!<i className="fas fa-heart"></i></h3>
            {/* </div> */}
            <Button color="info" href="#farewell-video"> View Farewell Video <span className="fa fa-arrow-down"></span> </Button>
            
          </div>
            
          
        </Container>
      </div>
      
    </>
  );
}

export default IndexHeader;
