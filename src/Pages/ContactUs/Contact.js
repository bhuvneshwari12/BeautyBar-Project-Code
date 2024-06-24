import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHandshake } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'; 

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  async function submitHandler(event) {
    event.preventDefault();

    const obj = { id: Date.now(), name, email, phoneNumber, message };
    console.log(obj);

    try {
      const response = await fetch('https://beautybar-9a3f9-default-rtdb.firebaseio.com/beautyBar.json', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' }
      })
      if (!response) { throw new Error('failed to load data') }

    } catch (error) {
      console.log(error)
    }
    setName(' ')
  }


  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept payments via credit/debit cards, PayPal, and bank transfers."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries. Shipping fees may vary depending on the destination."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status of your shipment."
    },
    
  ];

  return (
    
    <div className="custom-contact-us">
      
      <div className="custom-contact-bg-image"></div>
      <Container>
        <Row>
          <Col md={6} className='total-form'>
            <h2 className='contact-headings'>Contact Us</h2>
            <p className='contact-headings'>We'd love to hear from you!</p>
            <Form>
              <Form.Group controlId="formBasicName" className='name-css'>
                <Form.Label style={{ color: 'white' }}>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" onChange={(e) => { setName(e.target.value) }} />
              </Form.Group>

              <Form.Group controlId="formBasicEmail"  className='name-css'>
                <Form.Label style={{ color: 'white' }}>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" onChange={(e) => { setEmail(e.target.value) }} />
              </Form.Group>

              <Form.Group controlId="formBasicMessage"  className='name-css'>
                <Form.Label style={{ color: 'white' }}>Phone number</Form.Label>
                <Form.Control type='number' placeholder="Enter contact number" onChange={(e) => { setPhoneNumber(e.target.value) }} />
              </Form.Group>

              <Form.Group controlId="formBasicMessage"  className='name-css'>
                <Form.Label style={{ color: 'white' }}>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" onChange={(e) => { setMessage(e.target.value) }} />
              </Form.Group>

              <Button variant="dark" type="submit" onClick={submitHandler} className='contact-button'>
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} className="custom-contact-info">
            <div className="custom-info-item">
              <FontAwesomeIcon icon={faPhone} className="custom-icon" />
              <span>123-456-7890</span>
            </div>
            <div className="custom-info-item">
              <FontAwesomeIcon icon={faEnvelope} className="custom-icon" />
              <span>info@beautyBar.com</span>
            </div>
            <div className="custom-info-item">
              <FontAwesomeIcon icon={faHandshake} className="custom-icon" />
              <span>Let's connect!</span>
            </div>
            <div className="custom-info-item">
              <FontAwesomeIcon icon={faHandshake} className="custom-icon" />
              <span>Visit us at:</span>
              <p>123 Beauty Street, Delhi, India</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="custom-cartoons-container">

          </Col>
        </Row>
        
      </Container>
    </div>
  );
};

export default Contact;
