import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import foodImgOne from '../assets/foodOne.jpg';
import foodImgThree from '../assets/foodThree.jpg'

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={foodImgOne}
            alt='food'
          />
          <Carousel.Caption>
            <h3>Food is Perfect</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={foodImgThree}
            alt='food'
          />
          <Carousel.Caption>
            <h3>Food is Perfect</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}