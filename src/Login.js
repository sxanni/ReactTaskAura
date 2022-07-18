import React from 'react'
import logo from './img/logo-light.png';
import logoblk from './img/logo-blk.png';
import glogo from './img/google.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap';


const Login = () => {
  return (
    
     <div className='login-container'>
      <header className="mt-5">
      <img src={logoblk} className="App-logo" alt="logo" />
      <h1 className='mb-5'>TaskAura</h1>
      </header>
     
  <Card className='card mb-5'>
    <Card.Body>
      <Card.Title> Productivity for Gamers. </Card.Title>
    </Card.Body>
  </Card>  
    {/* <Form className='mb-5'>
        <Form.Group>
          <Form.Label> Email </Form.Label>
          <Form.Control type='email' placeholder='123@gmail.com' ></Form.Control>
          <Form.Label> Password </Form.Label>
          <Form.Control type='password' placeholder='123@gmail.com'></Form.Control>
        </Form.Group>
    </Form> */}
      <Button className='login-btn google btn btn-dark m-3 py-2 px-4 w-sm-25' > Signin with Google <img className=' ml-5' style={{width:'30px', marginLeft:'10px'}} src={glogo}></img></Button>
      

    </div>
  )
}

export default Login