import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand } from 'reactstrap'
import Menu from './component/MenuComponent';
import './App.css';

class App extends Component {
render(){
return (
    <div >
      <Navbar dark  color ="primary">
        <div className="container">
          <NavbarBrand href ="/">Menu</NavbarBrand>
          <NavbarBrand href ="/">Service</NavbarBrand>
          <NavbarBrand href ="/">About</NavbarBrand>
          <NavbarBrand href ="/">Our story</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}
}
export default App;
