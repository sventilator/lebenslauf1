import React, { Component } from 'react';
import './Footer.css';
import {Col,Row,Container} from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";



class Footer extends Component {
    constructor(props) {
        super(props)
    
    }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() { 
        return (
            <Container fluid className="containerfooter" id={this.props.id}>
            <h1  className="überschriftfooter"><strong>KON</strong>TAKT</h1>
            <button className="nachobenpfeilfooter" onClick={this.scrollToTop}>
            <div className="nachobenpfeilfooterdiv"></div>
            </button>
            <Row  className="kontaktrow">
           
            <Col lg="7" sm="12" className="kontaktcollinks">
            <div className="kontaktschriftlinksobendiv">
                <h2 className="kontaktschriftlinksoben">BEI FRAGEN GERNE MELDEN</h2> 
            </div>
            </Col>
            <Col lg="5" sm="12" className="kontaktcolrechts">
            <div >
                <button className="buttonkontakt">MEHR</button>
            </div>
            <div className="unterbuttonstrich"></div>
            </Col>
           
               </Row>
                
            <Row className="kontaktrow2">
            <Col lg="6"  sm="12"  className="kontaktcolrechts2">
            <div className="kontaktuntenrechtsdiv">
                
                <button className="link1" ></button>
                <button className="link2"></button>
                <button className="link3"></button>
                <button className="link4"></button>
                
            </div>
            </Col>
            <Col lg="6"   sm="12"    className="kontaktcollinks2">
            <div className="kontaktschriftdiv">
                <p className="kontaktschrift">Sven Weber | Musterstraße 11, Bochum | 0165-123456</p> 
            </div>
            </Col>
           
                </Row>    
           </Container>
             );
    }
}
 
export default Footer;