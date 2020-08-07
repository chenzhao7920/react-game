import React from 'react';
import UserInput from '../components/UserInput'
import UserOutput from '../components/UserOutput'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
class HomePage extends React.Component{

    state = {
        userName:"ChenZhao",
        showUser:false,
    }
    userNameChangeHandler = (event)=>{
        this.setState({userName:event.target.value});
    }
    togglePersonsHandler = ()=>{
        this.setState({showUser:!this.state.showUser});
    }
    render(){  
        
        return(  
            <div className="row" >
                <div >
                    <p>This is a react practice project. Although this project looks very simple, from 0 to 1 is always the hardest. Soon it will become richer!</p>
                    <p>Web features:</p>
                    <li>SPA by using ReactJS</li>
                    <li>Uninterrupted music playing when switching pages</li>
                    <li>Implement a web game</li>
                    
                    <br></br>
                </div>
            </div>  

        )   
    }
}
export default HomePage;