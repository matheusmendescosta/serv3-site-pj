import React from 'react';
import Swiper from 'react-id-swiper';
import { 
    Container, 
    BannerSlide,
    BannerSlideWorker
} from './styles';

export default function Team() {
     const params = {
       slidesPerView: 1,
       spaceBetween: 30,
       slidesPerGroup: 1,
       loop: true,
       loopFillGroupWithBlank: true,
       pagination: {
         el: '.swiper-pagination',
         clickable: true
       },
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev'
       }
     }

  return (
    <>
    <Container>
          <Swiper {...params}>
            <div>Slide #1</div>
            <button className="nextEl"></button>
          </Swiper>
    </Container>
    </>
  );
};
