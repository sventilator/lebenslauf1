import React, { Component } from 'react';
import './Ausbildung.css';
import {Col,Row,Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';



    export default class Ausbildung extends React.Component {
      constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
    render() { 
      
          return (
           
            <Container className="ausbildungcontainer" fluid>
              <Row className="ausbildungrow" id={this.props.id}>
             <h1  className="überschriftausbildung"><strong>LEBENS</strong>LAUF</h1>

              <Nav className="Tabsmain" tabs>
          <NavItem className="Tabsitem">
            <NavLink id="Tabslink"
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              <h5 className="lebenslaufselectschrift">AUSBILDUNG</h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="Tabslink"
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <h5 className="lebenslaufselectschrift">BERUFSERFAHRUNG</h5>
            </NavLink>
          </NavItem>

         
        </Nav>
      
        <TabContent className="Tabcontent" activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            
               <div className="weiterbildungcol"></div>
               <div className="weiterbildungcoloverlay"></div>
              
               <div className="strichmitte">
               <div className="knoten"></div>
               <div className="knoten"></div>
               <div className="knoten"></div>
               <div className="knoten"></div>
               <div className="knoten"></div>
               </div>
               
               <div className="eintrag">
            
               
            
              <h5 className="zeitraumüberschrift">08/2017-07/2019</h5>
              <h5>UMSCHULUNG</h5>
              <p>Fachinformatiker/Anwendungsentwicklung<br/>
              IT-Akademie Dr. Heuer, Bochum
              </p>
              
              </div>
              <div className="eintrag zwei">
              <h5 className="zeitraumüberschrift">04/2014 – 04/2017</h5>
              <h5>STUDIUM</h5>
              <p>Technische Betriebswirtschaftslehre<br/>
              TFH Georg Agricola, Bochum
              </p>
              </div>
              <div className="eintrag drei">
              <h5 className="zeitraumüberschrift">10/2009 – 04/2014</h5>
              <h5>STUDIUM</h5>
              <p>Maschinenbau<br/>
              Fachhochschule Südwestfalen, Iserlohn
              </p>
              </div>
              <div className="eintrag vier">
              <h5 className="zeitraumüberschrift">08/2008 – 06/2009</h5>
              <h5>ABSCHLUSS</h5>
              <p>Fachhochschulreife Maschinenbautechnik<br/>
              Hönne-Berufskolleg, Menden
              </p>
              </div>
              <div className="eintrag fünf">
              <h5 className="zeitraumüberschrift">08/2006 – 06/2008</h5>
              <h5>ABSCHLUSS</h5>
              <p>Metallschleifer und Polierer (IHK)<br/>
              Aloys F. Dornbracht, Iserlohn
              </p>
              </div>
             
              
            
           
          </TabPane>
          <TabPane tabId="2">
                
          <div className="weiterbildungcol"></div>
               <div className="weiterbildungcoloverlay"></div>
               <div className="strichmitte">
               <div className="knoten"></div>
               <div className="knoten"></div>
               <div className="knoten"></div>
               <div className="knoten"></div>
               <div className="knoten"></div>
               </div>
               <div className="eintrag">
              <h5 className="zeitraumüberschrift">07/2019 – 10/2019</h5>
              <h5>WEBENTWICKLER</h5>
              <p>Frontend Developer<br/>
              Pradtke GmbH, Bochum
              </p>
              </div>
              <div className="eintrag zwei">
              <h5 className="zeitraumüberschrift">10/2018 – 03/2019</h5>
              <h5>PRAKTIKUM</h5>
              <p>Frontend Developer<br/>
              Beckdesign GmbH, Bochum
              </p>
              </div>
              <div className="eintrag drei">
              <h5 className="zeitraumüberschrift">10/2015 – 11/2016</h5>
              <h5>TEILZEITJOB</h5>
              <p>Assistenz für Behinderte<br/>
              SAB GmbH, Bochum
              </p>
              </div>
              <div className="eintrag vier">
              <h5 className="zeitraumüberschrift">01/2012 – 08/2015</h5>
              <h5>NEBENTÄTIGKEIT</h5>
              <p>Nachhilfelehrer für Mathe, Physik, Deutsch<br/>
              Schülerhilfe, Schwerte
              </p>
              </div>
              <div className="eintrag fünf">
              <h5 className="zeitraumüberschrift">08/2006 – 06/2008</h5>
              <h5>NEBENTÄTIGKEIT</h5>
              <p>Fahrer für Personalbeförderung<br/>
              Vermont GmbH, Iserlohn
              </p>
              </div>
              
             
            
          
          </TabPane>
          
        </TabContent>
        </Row>


          
              </Container>

       
           
          );
      
          
       
    }
}
 
