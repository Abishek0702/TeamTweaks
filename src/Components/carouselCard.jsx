import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function MultiCarousel({ items, responsive }) {
    return (
        <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={10000}
        customTransition="all .5"
        transitionDuration={500}
        className="gd-carousel"
        >
            {items.map((item, index) => (
                <div key={index} className="card carousel-slide" >
                    <img src={item.image} alt={item.title} className='carousel-slide-image' />
                    <div className="card-body">
                        <span>{item.date}</span>
                        <h5>{item.title}</h5>
                        <span>{item.author}</span>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}

export default MultiCarousel;
