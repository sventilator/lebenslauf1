import React,{Component} from 'react';

import Banner from './Components/Banner';
import Übermich from './Components/Übermich';
import Technologien from './Components/Technologien';
import Ausbildung from './Components/Ausbildung';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import './App.css';


class App extends Component {
  state = {
    showarrowontop: 'none',
    
  }

  listenScrollEvent = e => {
    if (window.scrollY < 10 ) {
      this.setState({showarrowontop: 'none'})
    } else {
      this.setState({showarrowontop: 'block'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  } 
  
  render() {
    return (
   <div>
     
     <Navbar display={this.state.showarrowontop}/> 
     <Banner/>
      <Übermich  id="section1"/>
   <Technologien  id="section2"/>
      <Ausbildung  id="section3"/>
     <Footer id="section4"/>
   </div>
  );
}
}

export default App;
