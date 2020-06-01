import React, { Component } from 'react';

class MobileLoader extends Component {
    
    render() { 
        return ( 
            <div className="mobile-loader" style={{fontSize:"500", width:"100%", height:"100vh"}}>
                <div className="row">
                    <div className="col-12 col-md-4"></div>
                    <div className="col-12 col-md-4 title">
                        <img src={require('assets/img/loader2.gif')} style={{height:"100%", border:"none"}}  alt="IMAGE NOT FOUND"/>
                        <h3>It's Loading!</h3>
                        {console.log("loading section time!")}
                        {/* {setTimeout(() => {
                            console.log('settimeout!')
                        }, 3000)} */}
                    </div>
                    <div className="col-12 col-md-4"></div>
                </div> 
            </div>
        );
    }
}
 
export default MobileLoader;


