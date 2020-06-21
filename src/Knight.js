import React from 'react';
import './Knight.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
 


class Knight extends React.Component {
    render() {
        return (
            <div className='row'  >
                <div className="col-md-6 info"  >
                <img src="https://cdn.auth0.com/blog/illustrations/reactjs.png" alt = "Screen-1" width = "100" height = "100"/>  
                    <p>React Native Version</p>  
                    <a href="https://github.com/chenzhao7920/React-Native"> Github URL:https://github.com/chenzhao7920/React-Native </a>
                </div>
                <div class="board col-md-6">     
                     <p>Should be pictures</p>                 
                </div>
            </div>           
        )
    }	
}	
export default Knight;
                            
