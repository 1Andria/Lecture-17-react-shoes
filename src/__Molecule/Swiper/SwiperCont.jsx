import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function SwiperCont({ ProductData, onClick }) {
  return (
    <>
      <div className=" z-0  w-[445px] max-[474px]:rounded-[0px] max-[474px]:w-full max-[474px]:h-[380px] h-[445px] min-[915px]:hidden">
        <Swiper
          onClick={onClick}
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="rounded-[15px] cursor-grab max-[474px]:rounded-[0px] w-[445px] h-[445px] max-[474px]:h-[380px] "
              src={ProductData.firstPicture}
              alt="shoe"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" rounded-[15px] cursor-grab w-[445px] h-[445px] max-[474px]:rounded-[0px] max-[474px]:h-[380px]"
              src={ProductData.secondPicture}
              alt="shoe"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-[15px] cursor-grab w-[445px] h-[445px] max-[474px]:rounded-[0px] max-[474px]:h-[380px]"
              src={ProductData.thirdPicture}
              alt="shoe"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-[15px] cursor-grab w-[445px] h-[445px] max-[474px]:rounded-[0px] max-[474px]:h-[380px]"
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
