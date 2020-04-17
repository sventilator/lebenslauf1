import React, { Component } from 'react';
import './Technologien.css';
import {Col,Row,Container,Button} from 'reactstrap';
    import Carousel from "react-multi-carousel";
    import "react-multi-carousel/lib/styles.css";
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3,
        },
        desktop: {
          breakpoint: { max: 3000, min: 993 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 993, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
class Technologien extends Component {
  constructor(props) {
    super(props)

}
    render() { 
        return ( 
            <Container fluid className="containerprojekt" >
        <Row className="projekterow"><h1 className="überschriftpro" id={this.props.id}><strong>TECH</strong>NOLOGIEN</h1></Row>
        <Row className="projekterow2"></Row>
         <Row className="projekterowcards">
         <Carousel
         infinite={true}
           showDots={false}
           swipeable={true}
           
  transitionDuration={100}

           keyBoardControl={true}
          /*  customTransition="all .100"
           transitionDuration={1000} */
          className="machmal" responsive={responsive}>
          <Col className="projektcol1" lg="4">
          <div className="carddiv"><div className="carddivinner"></div>
          <h1 align="center" className="cardschrift">React.JS</h1>
          <Button  className="btncard" variant="outline-secondary">MEHR</Button>
          </div>
          
          </Col>
        
          <Col lg="4">
          <div  className="carddiv"><div className="carddivinner zwei"></div>
          <h1 align="center" className="cardschrift">HTML-CSS-JS</h1>
          <Button  className="btncard" variant="outline-secondary">MEHR</Button>
          </div>
          
          </Col>

          <Col lg="4">
          <div   className="carddiv"><div className="carddivinner drei"></div>
          <h1 align="center" className="cardschrift">Microsoft.NET</h1>
          <Button  className="btncard" variant="outline-secondary">MEHR</Button>
          </div>
          </Col>
          <Col lg="4">
          <div  className="carddiv"><div className="carddivinner vier"></div>
          <h1 align="center" className="cardschrift">MS-SQL</h1>
          <Button  className="btncard" variant="outline-secondary">MEHR</Button>
          </div>
          
          </Col>
          <Col lg="4">
          <div  className="carddiv"><div className="carddivinner fünf"></div>
          <h1 align="center" className="cardschrift">J-QUERY</h1>
          <Button  className="btncard" variant="outline-secondary">MEHR</Button>
          </div>
          
          </Col>
          
          
          </Carousel>
          </Row>
        
        
         
        </Container> );
        
    }
}
 
export default Technologien;