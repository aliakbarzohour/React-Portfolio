import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
function Banner() {
  return (
    <div>
        <section className='banner' id='home'>
            <Container className='align-items-center'>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome To My Portfolio</span>
                    <h1>{`Hi Im Aliakbar Zohour`}<span className='wrap'>Front-End Developer</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum repellendus esse voluptatem nobis iste totam! Quia sed, voluptatum ea excepturi alias possimus dolore adipisci omnis corporis ullam beatae maiores totam.</p>
                    <button onClick={()=>{console.log('home btn is clicked .')}}>Let's Connect <Icon.ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default Banner