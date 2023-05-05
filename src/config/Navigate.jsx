import React, { Component } from 'react'
import {Routes , Route} from 'react-router-dom';
import Login from '../components/login';
import Home from '../components/Home';

export default class Navigate extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>


      </Routes>
    )
  }
}

