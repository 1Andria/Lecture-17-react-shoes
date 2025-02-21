import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function SwiperCont({ ProductData }) {
  return (
    <>
      <div className="w-[445px] h-[445px] hidden">
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="rounded-[15px] w-full h-full "
              src={ProductData.firstPicture}
              alt="shoe"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" rounded-[15px] w-[445px] h-[445px]"
              src={ProductData.secondPicture}
              alt="shoe"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-[15px] w-[445px] h-[445px]"
              src={ProductData.thirdPicture}
              alt="shoe"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-[15px] w-[445px] h-[445px]"
              src={ProductData.fourthPicture}
              alt="shoe"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default SwiperCont;
