import React, { useRef } from "react";
import conferenceImage from "../../assets/confarence.jpg";
import workshopImage from "../../assets/workshop.jpg";
import gameImage from '../../assets/game.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      <div>
        <SwiperSlide
          className="min-h-[calc(100vh-107px)] rounded-xl"
          style={{
            backgroundImage: `url(${conferenceImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
        <SwiperSlide
          className="min-h-[calc(100vh-107px)] rounded-xl"
          style={{
            backgroundImage: `url(${workshopImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          className="min-h-[calc(100vh-107px)] rounded-xl"
          style={{
            backgroundImage: `url(${gameImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        </SwiperSlide>
      </div>
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default Slider;
