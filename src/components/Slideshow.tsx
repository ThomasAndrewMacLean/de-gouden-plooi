import React from 'react';
import * as Styles from './Slideshow.styles';
//@ts-ignore
import { Carousel } from 'react-responsive-carousel';
import { ImagesType } from '../types';

type PropsType = { images: ImagesType[] };
const Slideshow = ({ images }: PropsType): JSX.Element => {
  const filteredImages = images.filter((x) => x.inSlideShow);
  return (
    <Styles.SlideshowWrapper>
      <Carousel
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        dynamicHeight={false}
        infiniteLoop
        autoPlay
        interval={5000}
      >
        {filteredImages.map((x, i) => {
          return <img key={i} src={x.pic[0].url} />;
        })}
      </Carousel>
    </Styles.SlideshowWrapper>
  );
};

export default Slideshow;
