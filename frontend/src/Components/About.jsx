import React, { Component } from 'react';
import './Css/about.css';
class About extends Component {
    state = {  }
    render()
     { 
        return ( <div className='container'>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 mt-5">
                    <h5 className='text-center sty'>
                        Developed By Karventhan
                    </h5>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div> );
    }
}
 
export default About;