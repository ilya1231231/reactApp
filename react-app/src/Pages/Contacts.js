import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{width:'500px'}} className="mt-3">
        <h1 className="text-center">Свяжитесь с нами</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Введите email"/>
            <Form.Text>
              Мы не отправим ваш Email никому
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className='mt-3'>
            <Form.Label>Напишите что думаете о нас</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Введите email"/>
          </Form.Group>

          <Form.Group controlId="check">
            <Form.Check type="checkbox" label="Check me out"/>
          </Form.Group>

          <Button variant="primary">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}