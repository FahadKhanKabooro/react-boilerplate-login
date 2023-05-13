import React from 'react';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
  return (
    <Container>
      <Row>
        <Col><AiOutlineFacebook/></Col>
        <Col><AiOutlineInstagram/></Col>
        <Col><AiOutlineLinkedin/></Col>
      </Row>
    </Container>
  )
}
