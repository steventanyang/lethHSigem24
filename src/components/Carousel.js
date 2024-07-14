import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";
import useIsVisible from "../components/isVisible";
import NavBar from "../components/NavBar";
import Image from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../assets/testimage.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeCarousel = () => {
  return (
    <Carousel width="50%" height="40%">
    <Carousel.Item interval={500} width="50%" height="40%">
      <img
        class="d-block w-100"
        src="https://placebear.com/300/200"
        alt="First slide"
      ></img>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        class="d-block w-100"
        src="https://placebear.com/300/200"
        alt="First slide"
      ></img>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        class="d-block w-100"
        src="https://placebear.com/300/200"
        alt="First slide"
      ></img>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  );
};

export default HomeCarousel;
