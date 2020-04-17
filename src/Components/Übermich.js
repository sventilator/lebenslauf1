import React, { Component } from 'react';
import './Übermich.css';
import {Col,Row,Container} from 'reactstrap';

class übermichcollinks extends Component {
    constructor(props) {
        super(props)
    
    }
    render() { 
        return ( 
            <Container fluid className="containerübermich">
      
       
            
      <h1 className="überschrift"><strong>ÜBER </strong>MICH</h1>
        <Row className="übermichrow" id={this.props.id}>
        
            <Col md="12" lg="6" className="übermichcollinks">
            <div className="textwrapper">
            
            <h5>Viele Wege führen nach Rom </h5>
            <p style={{color:'#1b1b1b',}} align="left"> 
               Seit über einem Jahr arbeite ich mit React.JS und habe viele Konzepte bereits verinnerlicht, sei es in der Programmierung von Landingpages oder in der Erstellung von Webanwendungen. 
                Es gefällt mir wie ein Programmierer zu denken, ich bin aber auch sehr daran interessiert mehr über die Designaspekte im Web zu verstehen. 
                In meiner Umschulung zum Anwendungsentwickler gab es eine breite Palette von Themengebieten, beispielsweise wurden Datenbanken mit MS-SQL angelegt, REST API Schnittstellen erstellt, aber auch mit C# objektorientiert programmiert oder mit Linux gearbeitet.   
               </p>
               </div>
            </Col>
            <Col md="12" lg="6" className="übermichcolrechts">
            
           <div className="textwrapper">
            <h5>Was kann ich Ihrem Unternehmen bieten? </h5>
            <p style={{color:'#1b1b1b'}} align="left">Als Junior Developer bin ich höchst motiviert die gängigen Methoden der modernen Webentwicklung zu verstehen und mein bisheriges Wissen bei Ihnen einzubringen und zu vertiefen.
            Durch meine jahrelange Band/Studioerfahrung bin ich es gewohnt, auch in stressigeren Phasen ein gemeinsames Ziel zu verfolgen und einen kühlen Kopf zu bewahren, diese Erfahrungen lassen sich ganz gut auf das Berufsleben eines Entwicklers transponieren.
            Falls Ihnen mein kleines Lebenslauf-Projekt gefällt und Sie gerne mehr über mich erfahren möchten, freue ich mich sehr über eine Nachricht von Ihnen.<br/><br/> 
            <p style={{color:'#1b1b1b'}} align="left" className="mitbestengrüßen">  Mit besten Grüßen. </p>
             
               </p>
               
              </div>
            </Col>
            <div  className="corner"></div>
            <div  className="cornerlinks"></div>
        </Row>
        
        
       
        
        </Container>
         );
    }
}
 
export default übermichcollinks;