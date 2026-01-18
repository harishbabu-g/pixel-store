"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { A11y, Autoplay, Pagination } from "swiper/modules";

import Widget from "@/components/homepage/widget";

const Homepage = ({ widgetList }) => {

  return (
    <main className="mx-auto max-w-360 px-4">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className="h-[600]"
        modules={[Pagination, A11y, Autoplay]}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src="/img/banner1.jpg" alt="banner1" className="h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/banner2.jpg" alt="banner2" className="h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/banner3.jpg" alt="banner3" className="h-full w-full" />
        </SwiperSlide>
      </Swiper>

      {widgetList?.length && (
        <section>
          {widgetList?.map((widget) => (
            <Widget key={widget?.category} widget={widget} />
          ))}
        </section>
      )}
    </main>
  );
};

export default Homepage;
