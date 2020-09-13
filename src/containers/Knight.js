import React from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import img1 from '../asset/img/Screen-1.png';
import img2 from '../asset/img/Screen-2.png';
import img3 from '../asset/img/Screen-3.png';
import img4 from '../asset/img/Screen-4.png';
import Card from '../components/Card/Card.js';
class Knight extends React.Component {
    render() {
        const styleInfo = {
           flex:1,
           height: 'auto',
        }
        const styleCard = {
            flex:1,
            margin: '10px',
            padding: '50px',
            backgroundColor: '#ededed',
            borderRadius: '10px'
        }
        return (
            <div className='row'  >
                 <Card style = {styleInfo} >
                    <p>React Native Version</p>  
                    <a href="https://github.com/chenzhao7920/React-Native"> Github URL:https://github.com/chenzhao7920/React-Native </a>
                </Card>
                
                <div className="col-md-4" style = {styleCard}>          
                     <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                          <ol className="carousel-indicators">
                             <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                             <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                             <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                             <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                          </ol>
                          <div className="carousel-inner">
                               <div className="carousel-item active">
                                    <img className="d-block w-100" src={img1} alt="First slide"/>
                              </div>
                              <div className="carousel-item">
                                    <img className="d-block w-100" src={img2} alt="Second slide"/>
                              </div>
                              <div className="carousel-item">
                                    <img className="d-block w-100" src={img3} alt="Third slide"/>
                             </div>
                             <div className="carousel-item">
                                    <img className="d-block w-100" src={img4} alt="Forth slide"/>
                             </div>
                         </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                   </a>
                   
                </div>  
                  
            </div>
                  
        )
    }	
}	
export default Knight;
                            
