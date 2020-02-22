import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    const images = [
        {
            link: "https://images.adsttc.com/media/images/5012/9a7f/28ba/0d67/1700/0893/newsletter/stringio.jpg?1414494789"
        },
        {
            link: "https://uniquekiosk.com/wp-content/uploads/2019/03/optical-shop-furniture-1.jpg"
        },
        {
            link: "https://images.adsttc.com/media/images/5012/9a7f/28ba/0d67/1700/0893/newsletter/stringio.jpg?1414494789"
        },
    ]
    const mapedImages = images.map((img, index) => (
        <div key={index}>
            <img src={img.link} />
        </div>
    ))
    return (
        <section>
            <Carousel
                showThumbs={false}
                infiniteLoop
                useKeyboardArrows
                swipeable
                emulateTouch
                showStatus={false}
            >
                {mapedImages}
            </Carousel>
        </section>
    )
}

export default Banner
