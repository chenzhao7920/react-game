import React from 'react';
import PageHeader from './PageHeader';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
class HomePage extends React.Component{
    render(){
        return(
             
            <div className = "row">
                 <div className="col-md-6 info">
                <p>This is a react practice project. Although this project looks very simple, from 0 to 1 is always the hardest. Soon it will become richer!</p> 
                <p>Web features:</p>
                <li>SPA by using ReactJS</li>
                <li>Uninterrupted music playing when switching pages</li>
                <li>Implement a web game</li>   
                </div>      
            </div>
            
         
        )
         
    }
}

export default HomePage;