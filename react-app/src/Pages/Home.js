import React, { Component } from 'react';
import { Card, Container, Row, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox/>
        <Container>
          <h2 className='text-center m-4'>Наша команда</h2>
          <Row md={3} >
            <Card padding={0}>
              <Card.Img 
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <Card.Body>
                  <Card.Title className='text-center m-1'>Основатели проекта</Card.Title>
                  <Card.Text className='text-center m-1'>
                    Работаем для вас
                  </Card.Text>
                  <Button variant="success">
                    О команде
                  </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img 
                variant="top"
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <Card.Body>
                  <Card.Title className='text-center m-1'>Основатели проекта</Card.Title>
                  <Card.Text className='text-center m-1'>
                    Работаем для вас
                  </Card.Text>
                  <Button variant="success">
                    О команде
                  </Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img 
                variant="top"
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <Card.Body>
                  <Card.Title className='text-center m-1'>Основатели проекта</Card.Title>
                  <Card.Text className='text-center m-1'>
                    Работаем для вас
                  </Card.Text>
                  <Button variant="success">
                    О команде
                  </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </>
    );
  }
}