import React from "react";

const Slider = () => {
  return (
    <div className="carousel min-h-[calc(100vh-107px)] w-full">
      <div id="slide1" className="carousel-item relative h-[calc(100vh-107px)] w-full">
        <img
          src="https://i.ibb.co.com/23cszSD3/image-by-rawpixel-com.jpg"
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
          src="https://i.ibb.co.com/35mPLGs8/creativity-creative-ideas-imagination-inspiration-design-concept.jpg"
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
          src="https://i.ibb.co.com/BHyw5J10/side-view-people-making-music-home.jpg"
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
