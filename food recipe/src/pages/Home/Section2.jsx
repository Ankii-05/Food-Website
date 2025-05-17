import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';
import Pizza from '../../assets/images/about/pizza.png';
import Salad from '../../assets/images/about/salad.png';
import Delivery from '../../assets/images/about/delivery-bike.png';
import AboutBackground from '../../assets/images/about/about-1.jpg'; 
import { Col, Container, Row } from 'react-bootstrap';

function Section2() {
    const cardData = [
        {
            image: Pizza,
            title: "Original",
            paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
        },
        {
            image: Salad,
            title: "Qualty Foods",
            paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
        },
        {
            image: Delivery,
            title: "Fastest Delivery",
            paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
        },
    ];

    return (
        <>
            <section className='about_section' style={{
                background: `url(${AboutBackground}) no-repeat center center`,
                backgroundSize: 'cover',
                paddingTop: '80px',
                paddingBottom: '300px',
                width: '100%'
            }}>
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className='text-center'>
                            <h2>The burger tastes better when you eat it with your family</h2>
                            <p>
                                Porta semper lacus cursus, feugiat primis ultrice a ligula risus
                                auctor an tempus feugiat dolor lacinia cubilia curae integer
                                orci congue and metus integer primis in integer metus
                            </p>
                            <Link to="/" className='btn order_now btn_red'>Explore Full Menu</Link>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='about_wrapper'>
                <Container>
                    <Row className='justify-content-md-center'>
                        {cardData.map((card, index) => (
                            <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
                                <div className='about_box text-center'>
                                    <div className='about_icon'>
                                        <img src={card.image} alt="icon" className='img-fluid' />
                                    </div>
                                    <h4>{card.title}</h4>
                                    <p>{card.paragraph}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Section2;
