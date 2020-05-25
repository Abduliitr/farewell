/*eslint-disable*/
import React from "react";
import Typist from 'react-typist';
// import Typewriter from 'typewriter-effect';
// import { ReactRotatingText } from "react-rotating-text";
// import Snow from 'react-snow-effect';

// reactstrap components
import { Container } from "reactstrap";
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
          // id="tsparticles"
          // style={{
          //   backgroundImage: "url(" + require("assets/img/header1.jpg") + ")"
          // }}
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
              <h3><Typist  startDelay="1000" cursor={{hideWhenDone:true, hideWhenDoneDelay:0}}>CHILD RIGHTS AND YOU FAMILY!</Typist></h3>
              <h1 className="h1-seo">FOR ALL THE <Typist  startDelay="3000" cursor={{hideWhenDone:true, hideWhenDoneDelay:0}}>Loving, Caring, AMAZING and SUPPORTIVE</Typist> SENIORS...</h1>
              <h3><Typist  startDelay="7000" cursor={{hideWhenDone:true, hideWhenDoneDelay:0}}>WE ARE REALLY GONNA MISS YOU A LOT! </Typist><i class="fas fa-heart"></i></h3>
            {/* </div> */}
          </div>
          {/* <Snow /> */}
        </Container>
      </div>
      
    </>
  );
}

export default IndexHeader;
