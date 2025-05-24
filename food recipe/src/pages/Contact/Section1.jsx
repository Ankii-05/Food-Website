import React from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Pro from '../../assets/promotion/pro.png'
import '../../styles/contact.css'
function Section1() {
  return (
    <section className="py-5 bg-light img" id="contact">
      <Container >
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="p-4 shadow mt-5">
              <Card.Body>
                <h2 className="text-center text-danger mb-4">🍔 Get in Touch 🍔</h2>
                <p className="text-center text-muted mb-4">
                  Got a craving or a question? Send us a message!
                </p>
                <Form>
                  <Form.Group controlId="contactName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your burger-loving name"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="contactEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="contactMessage" className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Tell us what's on your bun..."
                      required
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button variant="danger" type="submit">
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
  

export default Section1
