import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import { 
    Container, 
    BannerSlide,
} from './styles';

export default function Team() {

  const ManipulatingSwiper = () =>{
    const[swiper, updateSwiper] = useState(null);

    const goNext= () => {
      if (swiper !== null){
        swiper.slideNext();
      }
    };
    const goPrev = () => {
      if (swiper !== null) {
        swiper.slidePrev();
      }
    };
  }

  return (
    <>
    <Container>
      <BannerSlide>
        <div>
          <Swiper getSwiper={updateSwiper}>
            <div>
              Slide 1
            </div>
            <div>
              Slide 1
            </div>
          </Swiper>
            <button onClick={goPrev}>Prev</button>
            <button onClick={goNext}>Next</button>
          </div>
      </BannerSlide>
    </Container>
    </>
  );
}
