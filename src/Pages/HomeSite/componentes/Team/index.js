import React, {useState} from 'react';
import Swiper from 'react-id-swiper';

import { 
    Container, 
    BannerSlide,
    BannerSlideWorker
} from './styles';

export default function Team() {
  const params = {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30
  };
  return (
    <>
    <Container>
      <Swiper {...params}>
        
        <BannerSlide>
          <BannerSlideWorker>
            slide 1
          </BannerSlideWorker>
        </BannerSlide>
        
        <BannerSlide>
          <BannerSlideWorker>
            slide 2
          </BannerSlideWorker>
        </BannerSlide>
        
        <BannerSlide>
          <BannerSlideWorker>
            slide 3
          </BannerSlideWorker>
        </BannerSlide>
      
      </Swiper>
    </Container>
    </>
  );
};
