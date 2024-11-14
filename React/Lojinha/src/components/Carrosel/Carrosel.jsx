import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./Carrosel.css";
import { ImgCarrosel } from "../ImgCarrosel/ImgCarrosel";

import abacaxiFoto from '../../assets/imgsCarrosel/abacaxi-lojinha.png'
import bananaFoto from '../../assets/imgsCarrosel/banana-lojinha.png'

export const Carrosel = () => {
  const fotoCarrosel = [
    {
      url: abacaxiFoto,
      alt: "Foto 1",
    },
    {
      url: bananaFoto,
      alt: "Foto 2",
    },
    {
      url: abacaxiFoto,
      alt: "Foto 3",
    }
  ];

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
        {fotoCarrosel.map((foto, index) => (
          <SwiperSlide  key={index}>
            <div className="divImgCarrosel">
                <ImgCarrosel fotoCarrosel={foto.url} fotoAltCarrosel={foto.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
