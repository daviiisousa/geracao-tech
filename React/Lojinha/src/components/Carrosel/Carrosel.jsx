import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./Carrosel.css";
import { ImgCarrosel } from "../ImgCarrosel/ImgCarrosel";

import bananaFoto from '../../assets/imgsCarrosel/banana-lojinha.png'
import abacaxiFoto from '../../assets/imgsCarrosel/abacaxi-lojinha.png'
import cajuFoto from '../../assets/imgsCarrosel/caju-lojinha.png'

export const Carrosel = () => {
  const fotoCarrosel = [
    {
      url: abacaxiFoto,
      titulo: 'Selecionado para você',
      alt: "Foto 1",
    },
    {
      url: bananaFoto,
      titulo: 'Promoçoes todos os dias',
      alt: "Foto 2",
    },
    {
      url: cajuFoto,
      titulo: 'Qulidade em preço, atendimento, em FRUTA',
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
                <ImgCarrosel tituloCarrosel={foto.titulo} fotoCarrosel={foto.url} fotoAltCarrosel={foto.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
