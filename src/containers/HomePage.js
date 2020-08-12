import React from 'react';
import {Grid, Cell} from 'react-mdl';
import UserInput from '../components/UserInput';
import UserOutput from '../components/UserOutput';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { render } from "react-dom";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class HomePage extends React.Component{
    render(){  
        const style = {
            width:'100%',
            margin:'auto'
        }
        return(  
            <div  style = {style} >
                <Grid className = "homePageGrid">
                    <Cell col = {12}>
                <div >
                    <p>This is a react practice project. Although this project looks very simple, from 0 to 1 is always the hardest. Soon it will become richer!</p>
                    <p>Web features:</p>
                    <li>SPA by using ReactJS</li>
                    <li>Uninterrupted music playing when switching pages</li>
                    <li>Implement a web game</li>
                     
                    <FontAwesomeIcon icon="faPlay" />
                    <br></br>
                   
                </div>
                </Cell>
                </Grid>
            </div>  

        )   
    }
}
export default HomePage;