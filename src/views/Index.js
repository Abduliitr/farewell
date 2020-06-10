// import React from "react";
import React, { Component } from 'react';
// import FadeIn from 'react-fade-in';

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
// import MobileLoader from 'components/Loaders/MobileLoader.js'
import CoolLoader from 'components/Loaders/CoolLoader.js'

// sections for this page
import Events from "./index-sections/Events"
import Tabs from "./index-sections/Tabs.js";
import Notifications from "./index-sections/Notifications.js";
import Carousel from "./index-sections/Carousel.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";
import Hscroll from "components/Hscroll.js";


class Index extends Component {

  constructor(props){
    super(props);
    this.state = { isLoading: true }
  }

  async componentDidMount(){

    setTimeout(() => {
      this.setState({isLoading: false});
    }, 5000);

    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }

  render() { 
    
    return (

      (!this.state.isLoading) ? 

      <>
        <IndexNavbar />
        {/* <FadeIn> */}
          <div className="wrapper">
            <IndexHeader />
            
            <Notifications />
            <Hscroll />
            <div className="main">
              <Carousel />
              <Tabs />
              <Events />
              <CompleteExamples />
              <Examples />
              <Download /> 
            </div>
            <DarkFooter />
          </div>
          {console.log("isLoading: " + this.state.isLoading)}
        {/* </FadeIn> */}
      </>
      : 

      <>
        {/* <MobileLoader /> */}
        <CoolLoader />
      </>

    );
  }
}
 
export default Index;
