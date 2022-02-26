import React, { Component } from 'react';
import { Nav, Tab, Row, Pane, Container, Col} from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-3">
                <Nav.Item>
                  <Nav.Link eventKey="first">Рецепты</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Повара</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Блюда</Nav.Link>
                </Nav.Item> 
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Обучение</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Отзывы</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} >
              <Tab.Content className="mt-3 mb-3">
                <Tab.Pane eventKey="first">
                  <CarouselBox/>
                  <img 
                    src="https://img-fotki.yandex.ru/get/194778/1227522.1/0_1c0355_5c3137d5_orig.png"
                    width={300}
                    height={400}
                    />
                  <p>Наши рецепты</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img 
                    height={600}
                    src="https://culinaryschool.ru/wp-content/uploads/2016/07/4.-%D0%9A%D0%B0%D0%BA-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C-%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D0%BE%D0%B2%D0%B0%D1%80%D0%B0.jpg"
                  />
                  <p>Наши повара</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <CarouselBox/>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src="https://img-fotki.yandex.ru/get/194778/1227522.1/0_1c0355_5c3137d5_orig.png"/>
                  <p>Наши рецепты</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src="https://img-fotki.yandex.ru/get/194778/1227522.1/0_1c0355_5c3137d5_orig.png"/>
                  <p>Наши рецепты</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}