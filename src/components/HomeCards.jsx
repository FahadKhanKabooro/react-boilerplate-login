import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HomeCards() {
  return (
    <>
    <Container >
<Row md={4}>
<Col><Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="assets/bike1.jpg" />
    <Card.Body>
      <Card.Title>Super Bikes</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="dark">Go somewhere</Button>
    </Card.Body>
  </Card>
  </Col>
<Col>
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="assets/bike2.jpg" />
    <Card.Body>
      <Card.Title>Super Bikes</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="dark">Go somewhere</Button>
    </Card.Body>
  </Card>
 
</Col>
<Col>
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="assets/bike3.jpg" />
    <Card.Body>
      <Card.Title>Super Bikes</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="dark">Go somewhere</Button>
    </Card.Body>
  </Card>
</Col>
</Row>
    </Container>
    </>
  
  )
}
