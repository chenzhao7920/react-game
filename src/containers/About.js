import React from 'react';
import Card from '../components/Card/Card.js'
import portrait from '../asset/img/portrait.png'
class About extends React.Component{
    render(){
        const style = {
            width:'100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            frontSize:'30px',
             
        }
        return (
                 <Card style={style}>   
                    <img alt='portrait' src={portrait} />
                    <h1> Chen Zhao</h1>
                    <p> I am a developer who is passionate about creating clean and elegant web applications. 
                        I consider myself as a detail-oriented developer who loves spending time fixing little 
                        details and optimizing web apps. I love working on some modern technologies whether 
                        that's the front-end or back-end. Also, I like working in a team because there is 
                        always something new and exciting to learn from other people. 
                   </p>     
                </Card>
            
        )
    }
}

export default About;