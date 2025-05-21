import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../styles/AboutStyle.css';
import Image1 from '../../assets/chefinfo/Chef-1.jpg'
import Image2 from '../../assets/chefinfo/Woman-Chef.webp'
import Image3 from '../../assets/chefinfo/Chef-2.jpg'

const chefs = [
  {
    name: 'Chef Mario Rossi',
    title: 'Head Chef',
    image: Image1,
    bio: 'With over 20 years of culinary experience, Mario specializes in traditional Italian cuisine made with modern flair.',
  },
  {
    name: 'Chef Susan Lee',
    title: 'Pastry Chef',
    image: Image2,
    bio: 'Susan crafts delicate desserts and pastries that are as beautiful as they are delicious.',
  },
  {
    name: 'Chef David Kim',
    title: 'Sous Chef',
    image: Image3,
    bio: 'David is known for his creativity and attention to detail in fusion and modern cuisine.',
  },
];

export default function ChefSection() {
  return (
    <section className="chef-section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Meet Our Chefs</h2>
        <Row>
          {chefs.map((chef, index) => (
            <Col md={4} sm={6} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={chef.image} className="chef-img" style={{backgroundSize:"cover"}} alt={chef.name} />
                <Card.Body>
                  <Card.Title>{chef.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{chef.title}</Card.Subtitle>
                  <Card.Text>{chef.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
