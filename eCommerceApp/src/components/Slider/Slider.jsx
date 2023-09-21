import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Slider";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'; 
SwiperCore.use([Autoplay, Navigation, Pagination]);

const sliderData = [
  {
    id: 1,
    url: "https://i.ibb.co/rmL2t2Z/shop1.jpg",
  },
  {
    id: 2,
    url: "https://i.ibb.co/cwLwQTk/shop2.jpg",
  },
  {
    id: 3,
    url: "https://i.ibb.co/FHypBCT/pexels-david-bartus-297933.jpg",
  },
  {
    id: 4,
    url: "https://i.ibb.co/t4P0dNB/shop4.jpg",
  },
];

export default function Slider() {
  return (
    <div className="slider">
      <div className="swiper">
        <div className="swiper-wrapper">
          <Swiper
            navigation={true}
            className="mySwiper"
            pagination={{
              dynamicBullets: false,
              clickable: true,
            }}
            autoplay={{
              delay: 15000,
              disableOnInteraction: false,
            }}
          >
            {sliderData.map((picture) => {
              const { id, url } = picture;
              return (
                <SwiperSlide key={id}>
                  <div className="swiper-slide">
                    <div className="swiper-slide-overlay"></div>
                    <img src={url} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className="swiper-pagination"></div>
    </div>
  );
}
