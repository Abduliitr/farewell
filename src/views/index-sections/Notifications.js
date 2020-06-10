import React from "react";

// reactstrap components
import { Alert, Container } from "reactstrap";

// core components

function Notifications() {
  const [alert1, setAlert1] = React.useState(true);
  const [alert2, setAlert2] = React.useState(true);
  // const [alert3, setAlert3] = React.useState(true);
  const [alert4, setAlert4] = React.useState(true);
  return (
    <div id="farewell-video">
      <div class="video-responsive">
        <iframe width="420" height="315" src="https://www.youtube.com/embed/t4W0hgQh4us?autoplay=1" frameborder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen" 
          msallowfullscreen="msallowfullscreen" 
          oallowfullscreen="oallowfullscreen" 
          webkitallowfullscreen="webkitallowfullscreen"></iframe>
      </div>
      
      <div className="section section-notifications" style={{background:"black"}}>
        <Alert color="success" isOpen={alert1}>
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons ui-2_like"></i>
            </div>
            <strong>Well done!</strong> You successfully completed your degree.
            <button
              type="button"
              className="close"
              onClick={() => setAlert1(false)}
            >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </span>
            </button>
          </Container>
        </Alert>
        <Alert color="info" isOpen={alert2}>
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons travel_info"></i>
            </div>
            <strong>Heads up!</strong> Don't ever forget us, Never !
            <button
              type="button"
              className="close"
              onClick={() => setAlert2(false)}
            >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </span>
            </button>
          </Container>
        </Alert>
        {/* <Alert color="warning" isOpen={alert3}>
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons ui-1_bell-53"></i>
            </div>
            <strong>Warning!</strong> Better check yourself, you're not looking
            too good.
            <button
              type="button"
              className="close"
              onClick={() => setAlert3(false)}
            >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </span>
            </button>
          </Container>
        </Alert> */}
        <Alert color="danger" isOpen={alert4}>
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons objects_support-17"></i>
            </div>
            <strong>See you soon !</strong>
            <button
              type="button"
              className="close"
              onClick={() => setAlert4(false)}
            >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </span>
            </button>
          </Container>
        </Alert>
      </div>
    </div>
  );
}

export default Notifications;
