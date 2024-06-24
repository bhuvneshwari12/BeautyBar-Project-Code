import React from 'react';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faHeart, faBalanceScale, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { BsPeople } from 'react-icons/bs';

const AboutPage = () => {
  return (
    <div >
      

      <Row>
          <video className="w-100  aboutvedio " autoPlay loop muted >
            <source src="https://assets.mixkit.co/videos/44545/44545-720.mp4" type="video/mp4" allowFullScreen />
          </video>
        </Row> 

      <Container>

        <Row className="my-5 content-container">
          <Col className="content-section">
            <h3>Elevating sparkling Beauty</h3>
            <p>We're committed to setting the gold standard in the Philippine beauty scene. By providing curated, insightful content, we aim to uplift our cultural aesthetic, celebrating the unique and diverse facets of Filipino beauty.</p>
          </Col>
          <Col className="content-section">
            <h3>Empowering Women to Radiate Confidence</h3>
            <p>Beauty is more than just a look; it's a feeling and a state of mind. Through our platform, we strive to inspire every woman to embrace her individuality, allowing her inner confidence to shine brightly.</p>
          </Col>
          <Col className="content-section">
            <h3>Championing The Beauty Community</h3>
            <p>We recognize the power of collective wisdom. By fostering an active, engaged community, we aspire to be the touchstone for beauty enthusiasts – a space where they can not only find reliable advice but also share their own insights and experiences. Together, we embark on a journey of discovery, making smarter beauty decisions every step of the way.</p>
          </Col>
        </Row>



        <Row className="mb-5">
          <Col md={6}>
            <h3 className='heading'>Our Mission</h3>
            <p className='para'>
              At BeautyBar, we are driven by a passionate commitment to empower individuals from all walks of life to embrace and celebrate their unique beauty. We believe that beauty is not limited by age, gender, or ethnicity, but rather, it is a diverse spectrum that deserves to be celebrated in all its forms.
              Through our high-quality cosmetic products, we aim to provide not just makeup, but tools for self-expression, confidence, and creativity. Whether it's a bold lip color, a shimmering eyeshadow palette, or a nourishing skincare regimen, our products are designed to enhance your natural features and ignite your inner glow.
              Innovation is at the heart of everything we do. We are constantly pushing the boundaries of beauty, exploring new formulations, technologies, and trends to bring you the latest and most innovative products. Our commitment to innovation ensures that we stay ahead of the curve and continue to meet the evolving needs and desires of our customers.
              Inclusivity is a core value that guides us in everything we do. We believe that beauty is for everyone, regardless of age, race, ethnicity, or gender identity.
            </p>
          </Col>
          <Col md={6}>
            <Image src="https://images.squarespace-cdn.com/content/v1/51d151b1e4b05d425c859fc9/26094cdc-9327-486a-ba4a-0781904e0e37/DSC02758.JPG?format=1500w" fluid />
          </Col>
        </Row>


        <Row className="my-5 values-container">
      {/* Background animation */}
      <div className="background-animation"></div>
      <Col md={6} className="mb-3">
        <div className="value-section">
          <FontAwesomeIcon icon={faFlask} size="3x" className="mb-2" />
          <h4>Innovative</h4>
          <p>Our quest for knowledge is unwavering; we constantly seek new and innovative ideas for you.</p>
        </div>
      </Col>
      <Col md={6} className="mb-3">
        <div className="value-section">
          <FontAwesomeIcon icon={faHeart} size="3x" className="mb-2" />
          <h4>Understanding</h4>
          <p>We will always understand you, empathize with your challenges, care for you, and offer result-oriented, scientific skin solutions.</p>
        </div>
      </Col>
      <Col md={6} className="mb-3">
        <div className="value-section">
          <FontAwesomeIcon icon={faBalanceScale} size="3x" className="mb-2" />
          <h4>Honest</h4>
          <p>We are honest. We keep our promises and build trust through our positive intent and by adhering to transparent and authentic communication.</p>
        </div>
      </Col>
      <Col md={6} className="mb-3">
        <div className="value-section">
          <FontAwesomeIcon icon={faThumbsUp} size="3x" className="mb-2" />
          <h4>Encouraging</h4>
          <p>We will always empower and encourage you so you can overcome challenges and never stop doing what you love and exploring new experiences.</p>
        </div>
      </Col>
    </Row>





        <Row className="my-5">
          <Col>
            <h2 className="text-center">Meet Our Team</h2>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={4} className="text-center team-member">
            <Image src="https://www.100percentpure.com/s/files/1/0648/1955/files/about_us_james_abfac951-5967-4f86-82b3-0424e7fdc5fa.png?v=1634722167&em-origin=cdn.shopify.com" roundedCircle fluid />
            <h4>John Doe</h4>
            <p>CEO & Founder</p>
            <p>John is the visionary behind BeautyBar. With a passion for beauty and a drive for innovation, he leads our team to new heights.</p>
          </Col>
          <Col md={4} className="text-center team-member">
            <Image src="https://www.100percentpure.com/s/files/1/0648/1955/files/about_us_susie_89fa1c97-c994-42e2-a670-10c3fe16fa8b.png?v=1634722164&em-origin=cdn.shopify.com" roundedCircle fluid />
            <h4>Jane Smith</h4>
            <p>Lead Designer</p>
            <p>Jane brings creativity and flair to everything she touches. With her keen eye for design, she ensures our products look as beautiful as they perform.</p>
          </Col>
          <Col md={4} className="text-center team-member">
            <Image src="https://www.100percentpure.com/s/files/1/0648/1955/files/about_us_ric_0e42618a-8835-4c52-adc2-5b984822ed4c.png?v=1634722165&em-origin=cdn.shopify.com" roundedCircle fluid />
          
            <h4>Mike Johnson</h4>
            <p>Head of Marketing</p>
            <p>Mike is the driving force behind our marketing strategy. With his innovative ideas and strategic thinking, he ensures BeautyBar reaches its audience.</p>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default AboutPage;