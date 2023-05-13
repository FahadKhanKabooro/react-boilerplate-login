import React from "react";
import  { Col, Container , Nav, Navbar, Row} from 'react-bootstrap';
import Slider from "./Slider";
import HomeCards from "./HomeCards";




export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col>
          <Navbar variant="dark" bg="dark" expand='sm'>
            <Container>
              <Navbar.Brand>
                <img style={{width:'30px', height:'30px'}} src="logo192.png" alt="" />
                Super Bikes
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="my-nav"/>
              <Navbar.Collapse id="my-nav">
              <Nav className="me-auto fw-bold">
                <Nav.Link href="/Home">  Home</Nav.Link>
                <Nav.Link href="/Aboutus">Aboutus</Nav.Link>
                <Nav.Link href="/Contactus">Contactus</Nav.Link>
                <Nav.Link href="/Gallery">Gallery</Nav.Link>
                <Nav.Link href="/Service">Service</Nav.Link>
              </Nav>
              <Navbar.Text> <a href="/">Log out</a></Navbar.Text>
              </Navbar.Collapse>
            </Container>
            </Navbar>       
          </Col>
        </Row>
      </Container>
      <Slider/>
      <HomeCards/>
    </>
  )
}
