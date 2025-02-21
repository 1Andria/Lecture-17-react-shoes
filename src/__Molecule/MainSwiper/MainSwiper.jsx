import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

function MainSwiper({ ProductData }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [active, setActive] = useState(1);

  return (
    <>
      <div className="max-w-[445px] h-auto max-[915px]:hidden">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className="mySwiper2"
          onSlideChange={(swiper) => setActive(swiper.realIndex + 1)}
        >
          <SwiperSlide>
            <img
              src={ProductData.firstPicture}
              className="rounded-[15px] w-full h-[445px] cursor-grab"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ProductData.secondPicture}
              className="rounded-[15px] w-full h-[445px] cursor-grab"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ProductData.thirdPicture}
              className="rounded-[15px] w-full h-[445px] cursor-grab"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ProductData.fourthPicture}
              className="rounded-[15px] w-full h-[445px] cursor-grab"
            />
          </SwiperSlide>
        </Swiper>
        <div className="pt-[32px]">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                onClick={() => setActive(1)}
                src={ProductData.firstPicture}
                className={`w-[88px] h-[88px hover:opacity-[0.7]] rounded-[10px] cursor-pointer  ${
                  active === 1 ? "opacity-[0.5]" : "opacity-[1]"
                }`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                onClick={() => setActive(2)}
                src={ProductData.secondPicture}
                className={`w-[88px] hover:opacity-[0.7] h-[88px] rounded-[10px] cursor-pointer  ${
                  active === 2 ? "opacity-[0.5]" : "opacity-[1]"
                }`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                onClick={() => setActive(3)}
                src={ProductData.thirdPicture}
                className={`w-[88px] h-[88px] hover:opacity-[0.7] rounded-[10px] cursor-pointer  ${
                  active === 3 ? "opacity-[0.5]" : "opacity-[1]"
                }`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                onClick={() => setActive(4)}
                src={ProductData.fourthPicture}
                className={`w-[88px] hover:opacity-[0.7] h-[88px] rounded-[10px] cursor-pointer  ${
                  active === 4 ? "opacity-[0.5]" : "opacity-[1]"
                }`}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default MainSwiper;
