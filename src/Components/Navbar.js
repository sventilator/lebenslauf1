import React, { Component ,useState} from 'react';
import './Navbar.css';
import {Col,Row,Container, Collapse, Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem} from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";



class Navbar1 extends Component {
  constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
        
      };
      
    }
   
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
      console.log(this.state)
      
    }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
  
  render() 
  
  { 
    return (

      <Container fluid>
         
      <Row className="navbarrow">
         {/* --------when burgermenu is open-------- */}
          {this.state.isOpen ? 
        <Row className="burgerrow">
          <button className="burgermenuopen" onClick={this.toggle}>
          <div className="strichcross1"></div>
          <div className="strichcross2"></div>

          </button>
          <Link className="übermichcolburger"
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={135}
                duration={500}
                onClick={this.toggle}>
                <h1 className="navschrift"><strong>ÜBER</strong> MICH</h1>
          </Link>

          <Link className="technologiecolburger"
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.toggle}>
                <h1 className="navschrift"><strong>TECH</strong>NOLOGIEN</h1>
          </Link>

          <Link className="lebenslaufcolburger"
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                onClick={this.toggle}
              ><h1 className="navschrift"><strong>LEBENS</strong>LAUF</h1>
              </Link>
              
          <Link className="kontaktcolburger"
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.toggle}>
                <h1 className="navschrift"><strong>KON</strong>TAKT</h1>
          </Link> 
        </Row>
          
          :
           /* --------when burgermenu isnt open-------- */ 
        <Row className="navbarrow">
           <button className="burgermenu" onClick={this.toggle}>
          <div className="strich1"></div>
          <div className="strich2"></div>
          <div className="strich1"></div>
          </button> 
          <Link className="übermichcol"
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={70}
                duration={500}>
                <h1 className="navschrift">ÜBER MICH</h1>
          </Link>

          <Link className="technologiecol"
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <h1 className="navschrift">TECHNOLOGIEN</h1>
          </Link>

          <Link className="lebenslaufcol"
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}>
                <h1 className="navschrift">LEBENSLAUF</h1>
          </Link>
              
          <Link className="kontaktcol"
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <h1 className="navschrift">KONTAKT</h1>
          </Link>
              <button style={{'display':this.props.display}} className="nachobenpfeil" onClick={this.scrollToTop}><div className="nachobenpfeildiv"></div></button>
          </Row>}
      </Row>
        
    </Container> );
    }
  }
 
export default Navbar1;