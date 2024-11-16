import { Autoplay, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./Carrosel.css";



export const Carrosel = ({children}) => {
  

  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
       {children}
      </Swiper>
    </>
  );
};
