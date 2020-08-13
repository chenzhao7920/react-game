import React from 'react';
import Card from '../components/Card/Card.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class HomePage extends React.Component{
    render(){  
        const style = {
            width:'100%',        
        }
        return(  
            <Card style={style}>  
                    <p>This is a react practice project. Although this project looks very simple, from 0 to 1 is always the hardest. Soon it will become richer!</p>
                    <p>Web features:</p>
                    <li>SPA by using ReactJS</li>
                    <li>Uninterrupted music playing when switching pages</li>
                    <li>Implement a web game</li>
                       
            </Card>       
               
        )   
    }
}
export default HomePage;