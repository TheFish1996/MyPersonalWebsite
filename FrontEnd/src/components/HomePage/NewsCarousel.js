import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../Navbar'
import {
  Fade, 
  Container, 
  Row, 
  Col, 
  Carousel, 
  CarouselItem,
  CarouselCaption,
  CarouselIndicators,
  CarouselControl
} from 'reactstrap'

function NewsCarousel(props){

    const [activeIndex, setActiveIndex] = useState(0)
    const {newsData} = props
    console.log(newsData)
    let animating;

    function onExiting() {
        animating = true;
    }
    
    function onExited() {
        animating = false;
    }

    function next() {
        if (animating) return;
        const nextIndex = activeIndex === newsData.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex)
    }

    function previous() {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? newsData.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex)
      }

    function goToIndex(newIndex) {
        if (animating) return;
        setActiveIndex(newIndex)
      }


    const slides = newsData.map((item, index) => {
        return (
            <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={index}
            >
                <img className="d-block w-100" height="250px" src={item.urlToImage} alt={"slide1"} />
                <div className="blackMask"></div>
                <div className="text-white carousel-caption">
                    <a href={item.url} target="_blank"><h3>{item.source.name}</h3></a>
                    <p>{item.title}</p>
                </div>
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            ride={"carousel"}
            interval={3000}
        >
            <CarouselIndicators items={newsData} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    )
}

export default NewsCarousel;