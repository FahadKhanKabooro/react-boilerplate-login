import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyMaps from './MyMaps';
import ContactForm from './ContactForm';

export default function ContactDetails() {
  return (
    <Container>
      <Row>
        <Col>
        <MyMaps/>
        </Col>
        <Col>
        <ContactForm/>
        </Col>
      </Row>
      
    </Container>
  )
}
