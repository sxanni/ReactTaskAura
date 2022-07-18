import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo-light.png';
import logoblk from './img/logo-blk.png';

import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap';

const Signin = () => {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className='mb-5'>TaskAura</h1>
      {/* <Breadcrumb>
      <Breadcrumb.Item>name</Breadcrumb.Item>
      <Breadcrumb.Item>Email</Breadcrumb.Item>
      <Breadcrumb.Item>password</Breadcrumb.Item>
      </Breadcrumb> */}
  <Card className='card mb-5'>
    <Card.Img  src={logoblk} className="card-img"></Card.Img>
    <Card.Body>
      <Card.Title> Productivity for Gamers </Card.Title>
    </Card.Body>
  </Card>


      <Form className='mb-5'>
        {/* <Form.Group>
          <Form.Label> Email </Form.Label>
          <Form.Control type='email' placeholder='123@gmail.com' ></Form.Control>
          <Form.Label> Password </Form.Label>
          <Form.Control type='password' placeholder='123@gmail.com'></Form.Control>
        </Form.Group> */}
      </Form>
      <Button className='mb-5 alert secondary' > Signin with Google </Button>
      
      <p>

      </p>
     
     
    </header>
  </div>
  )
}

export default Signin