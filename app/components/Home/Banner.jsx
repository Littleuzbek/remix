import Image1 from "../../assets/onlineShoping2.jpg";
import Image2 from "../../assets/onlineShoping4.jpg";
import Image3 from "../../assets/onlineShoping5.jpg";
import Image4 from "../../assets/onlineShoping.jpg";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Banner() {
  const productImg = [Image1, Image2, Image3, Image4];
  const isString = (value) => typeof value === "string";
  return (
    <div className="banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        loop
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        style={{ width: "100%", height: "auto" }}
      >
        {Array?.isArray(productImg) ? (
          productImg?.map((pic, index) => (
            <SwiperSlide key={index}>
              <img
                loading="eager"
                src={isString(pic) ? pic : URL.createObjectURL(pic)}
                className="image"
                style={productImg ? { objectFit: "cover" } : {}}
                alt="..."
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <img
              loading="eager"
              src={
                isString(productImg)
                  ? productImg
                  : URL?.createObjectURL(productImg)
              }
              className="Carouse__image d-block w-100"
              style={
                productImg ? { aspectRatio: "1 / 1", objectFit: "cover" } : {}
              }
              alt="..."
            />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
