import React, { Component } from 'react';
import './CoolLoader.css'
import Typist from 'react-typist';

class CoolLoader extends Component {

    

    render() { 
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        return ( 
            // <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300' rel='stylesheet' type='text/css'></link>
            <>    
                <div class="loader">
                    <ul>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                        <li><div></div></li>
                    </ul>
                    
                    {/* <h4>Something cool is about to begin</h4> */}
                </div>
                <div className="title" style={{paddingTop:"100px"}}>
                    {(isMobile) ? 
                        <h2>Welcome to CRY Digital Farewell 2020 ...!</h2>
                        :
                        <h2><Typist cursor={{hideWhenDone:true, hideWhenDoneDelay:0}}>Welcome to CRY Digital Farewell 2020 ...!</Typist></h2>
                    }
                    
                </div>
            </>
        );
    }
}
 
export default CoolLoader;