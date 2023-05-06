import React, { Component } from 'react'
import {Routes , Route} from 'react-router-dom';
import Login from '../components/login';
import Home from '../components/Home';
import Aboutus from '../components/Aboutus';
import Gallery from '../components/Gallery';
import Contactus from '../components/Contactus';
import Service from '../components/Service';

export default class Navigate extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Aboutus" element={<Aboutus/>}></Route>
        <Route path="/Gallery" element={<Gallery/>}></Route>
        <Route path="/Contactus" element={<Contactus/>}></Route>
        <Route path="/Service" element={<Service/>}></Route>


      </Routes>
    )
  }
}

