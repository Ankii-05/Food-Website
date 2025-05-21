import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import '../../styles/AboutStyle.css'

const Section1 = () => {
  return (
    <section className="about_section py-5 d-flex align-items-center  about_box">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="TextArea">
            <h2 className="mb-4">About Our Burgers</h2>
            <p>
              Our burgers are crafted with the finest ingredients, from fresh lettuce to
              sesame-seed buns baked daily. We are passionate about creating food that not
              only satisfies your hunger but also your cravings.
            </p>
            <p>
              Come and taste the difference – juicy patties, crisp veggies, and love in
              every bite!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}


 export default Section1
