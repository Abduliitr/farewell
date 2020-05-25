import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Video from "./index-sections/Video.js";
import Images from "./index-sections/Images.js";
import Alumni from "./index-sections/Alumni.js"
import Events from "./index-sections/Events"
import Tabs from "./index-sections/Tabs.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import Examples from "./index-sections/Examples.js";
// import Department from "./index-sections/Department.js";
import Download from "./index-sections/Download.js";
import Hscroll from "components/Hscroll.js";




function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <Notifications />
        <Hscroll />
        
        <div className="main">
          {/* <Video /> */}
          {/* <Images /> */}
          <Alumni />
          <Events />
          <Tabs />
          <Typography />
          <Javascript />
          <Carousel />
          <CompleteExamples />
          <Examples />
          {/* <Department /> */}
          <Download /> 
          {/* using Download for footers */}
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
