import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { GoTrash } from "react-icons/go";
import { cartAction } from "../../store/CartSlice";

const Carousel = ({ productImg, onDelete, viewMode, inProduct }) => {
  const isString = (value) => typeof value === "string";
  const [activeIMG, setActiveIMG] = useState(0);
  const dispatch = useDispatch();

  const handleSlide = (slide) => {
    setActiveIMG(slide?.realIndex);
  };
  if (productImg !== undefined) {
    return (
      <>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation
          loop
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={handleSlide}
          onSwiper={(swiper) => {}}
          style={{ width: "100%", height: "auto" }}
        >
          {Array?.isArray(productImg) ? (
            productImg?.map((pic, index) => (
              <SwiperSlide key={index}>
                <img
                  onClick={() => {
                    if (inProduct) {
                      dispatch(cartAction.setViewer(true));
                    }
                  }}
                  loading="lazy"
                  src={isString(pic) ? pic : URL.createObjectURL(pic)}
                  className="image"
                  style={
                    productImg
                      ? {
                          aspectRatio: "1 / 1",
                          objectFit: viewMode ? "contain" : "cover",
                        }
                      : {}
                  }
                  alt="..."
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <img
                onClick={() => {
                  if (inProduct) {
                    dispatch(cartAction.setViewer(true));
                  }
                }}
                loading="lazy"
                src={
                  isString(productImg)
                    ? productImg
                    : URL?.createObjectURL(productImg)
                }
                className="image"
                style={
                  productImg
                    ? {
                        aspectRatio: "1 / 1",
                        objectFit: viewMode ? "contain" : "cover",
                      }
                    : {}
                }
                alt="..."
              />
            </SwiperSlide>
          )}
        </Swiper>

        {onDelete && (
          <GoTrash className="toWishes" onClick={() => onDelete(activeIMG)} />
        )}
      </>
    );
  }
};

export default Carousel;
