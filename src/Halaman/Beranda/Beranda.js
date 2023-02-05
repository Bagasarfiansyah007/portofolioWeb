import './Beranda.css';
import React from 'react';
import Header2 from '../../Komponen/Header 2/Header2';
import SosmedNav from '../../Komponen/navigationSosmed/sosmednav';
import Section1 from '../../section/section 1/section1';
import Section2 from '../../section/section 2/section2';
import Section3 from '../../section/section 3/section3';
import Section4 from '../../section/section 4/section4';
import Section5 from '../../section/Section 5/section5';
import {Scrollbar} from 'smooth-scrollbar-react';
import Footer from '../../Komponen/footer/footer';


class Beranda extends React.Component {
    render() {
      return (
        
          <React.StrictMode>
            <Header2/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Footer/>
            <SosmedNav/>
          </React.StrictMode>
      );
    }
  }
  
  export default Beranda;