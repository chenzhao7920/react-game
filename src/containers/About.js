import React from 'react';
import Card from '../components/Card/Card.js'
class About extends React.Component{
    render(){
        const style = {
            width:'50%',
        }
        return (
 
                 <Card style={style}>  
                    <p> Chen Zhao</p>
                    <p> Full stack developer. I like working on little projects from time to time.  </p>
                </Card>
            
        )
    }
}

export default About;