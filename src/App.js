/* eslint-disable */
import React, { Component, useState } from "react";
import {Navbar, Nav, NavDropdown, Form, Button, FormControl, Jumbotron} from 'react-bootstrap'
import './App.css';
import Data from './data.js';

function App() {

  let [shoes, changeShoes] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className="">
        <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron className="background">
        <h1>20% Season OFF</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      <div className="container">
        <div className="row">

          {
            shoes.map((item, idx) => {
              return (
                  <Card shoes={item} key={idx} i={idx}></Card>
                )
            })
          }
        </div>
      </div>
    </div>
  );
}

function Card (props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg"} width="100%"></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}
export default App;
