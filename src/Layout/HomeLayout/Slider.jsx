import React from "react";
import innovatorsImageImage from '../../assets/innovators.jpg'
import entrepreneursImage from '../../assets/Entrepreneurs.jpg'
import creativeImage from '../../assets/creative.jpg'

const Slider = () => {
  return (
    <div className="carousel min-h-[calc(100vh-107px)] w-full">
      <div id="slide1" className="carousel-item relative h-[calc(100vh-107px)] w-full">
        <img
          src={innovatorsImageImage}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-5 left-1/2 flex gap-x-2 -translate-y-1/2 transform">
          
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
         
        </div>
      </div>

      <div id="slide2" className="carousel-item h-[calc(100vh-107px)] relative w-full">
        <img
          src={entrepreneursImage}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-5 left-1/2 gap-x-2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item h-[calc(100vh-107px)] relative w-full">
        <img
          src={creativeImage}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-5 left-1/2 gap-x-2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Slider;
