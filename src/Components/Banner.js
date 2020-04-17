import React, { Component } from 'react';
import './Banner.css';
import {Col,Row,Container,Jumbotron} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import {Controller, Scene} from 'react-scrollmagic';
import {useSpring, animated} from 'react-spring';







class Banner extends Component {
    state = { hovering: false,
      }
   
    render() { 
       
        return (
           
        <Container fluid className="containerbanner" >
         <Row  className="bannerrow"></Row>  
        <Row className="bannerrow2"></Row>  
          <Controller>
             <Scene duration={800} pin>
      <ScrollAnimation className="bannertext" animateIn="fadeIn">
      <div className="schriftwrapper">
        <h1 className="schrift"><strong>SVEN WEBER</strong></h1>
        <h1 className="schrift2"> <strong>-</strong>FRONTEND DEVELOPER<strong>-</strong></h1>
        <div  className="nachuntenpfeil" >
            <div className="nachuntenpfeildiv">
            </div>
        </div>
        <div className="mousediv">
        
        <div className="scroller" ></div>
        </div>
        </div>
        </ScrollAnimation>
        </Scene>
        </Controller>  
        
         <div text-align="center" className="kreisbild"></div>
        <div className="kreisrahmen"></div>  
       
        </Container>
       );
    }
}
 
export default Banner;