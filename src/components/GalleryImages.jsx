import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function GalleryImages() {
  return (
    <>
    <CardGroup>
    <Card>
      <Card.Img variant="top" src="assets/bike1.jpg" />
      <Card.Body>
        <Card.Title>Super Bike</Card.Title>
        
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="assets/bike2.jpg" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="assets/bike3.jpg" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  </CardGroup>
  <CardGroup>
    <Card>
      <Card.Img variant="top" src="assets/bike1.jpg" />
      <Card.Body>
        <Card.Title>Super Bike</Card.Title>
        
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="assets/bike2.jpg" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="assets/bike3.jpg" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  </CardGroup>
  </>
  
  )
}
