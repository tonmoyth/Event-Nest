import React, { useRef } from "react";
import conferenceImage from "../../assets/confarence.jpg";
import workshopImage from "../../assets/workshop.jpg";
import gameImage from "../../assets/game.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";
import Button from "../../components/Header/Button/Button";

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
        >
          <div className="bg-black opacity-50 z-0 w-full h-full absolute "></div>
          <div className="z-10 space-y-2">
          <h1 className="md:text-3xl w-4/5 font-semibold mx-auto flex justify-center text-white z-10 items-center">A conference is a meeting of people who come together to share information about a chosen topic</h1>
          
          <Link to={`/events`}>
          <Button level='Get Start'></Button>
          </Link>
          </div>
          {/* <div className="z-10">
           
          </div> */}
        </SwiperSlide>
        <SwiperSlide
          className="min-h-[calc(100vh-107px)] rounded-xl"
          style={{
            backgroundImage: `url(${workshopImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black opacity-50 z-0 w-full h-full absolute "></div>

          <div className="z-10 space-y-2">
          <h1 className="md:text-3xl w-4/5 font-semibold mx-auto flex justify-center text-white z-10 items-center">an interactive, hands-on session designed to provide participants with practical skills, knowledge, and solutions</h1>
          
          <Link to={`/events`}>
          <Button level='Get Start'></Button>
          </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="min-h-[calc(100vh-107px)] rounded-xl"
          style={{
            backgroundImage: `url(${gameImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black opacity-50 z-0 w-full h-full absolute "></div>
          <div className="z-10 space-y-2">
          <h1 className="md:text-3xl w-4/5 font-semibold mx-auto flex justify-center text-white z-10 items-center">a team automatically advancing to the next round of tournament play without competing </h1>
          
          <Link to={`/events`}>
          <Button level='Get Start'></Button>
          </Link>
          </div>
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
