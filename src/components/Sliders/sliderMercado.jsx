// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//import "swiper/css/effect-coverflow";

// import required modules
import { Keyboard, Navigation } from "swiper/modules";
import TarjetaMercado from "../Tarjetas/tarjetaMercado.jsx";

const sliderMercado = () => {
  return (
    <section id="sliderMercado" className="mt-0  py-10 px-4 lg:px-20">
      <>
        <h2 className="inline-block mb-1 text-md text-gray-400 tracking-widest capitalize">
          Mercado
        </h2>
        <h3 className="font-heading mb-1 tracking-tight text-5xl">
          Hastalatumba
        </h3>

        <div className=" mt-5 ">
          <Swiper
            // effect={"coverflow"}
            grabCursor={true}
            //centeredSlides={true}
            //slidesPerView={"auto"}
            // coverflowEffect={{
            //   rotate: 0,
            //   stretch: -110,
            //   depth: 20,
            //   modifier: 0,
            //   slideShadows: true,
            // }}
            //slidesPerView={"auto"}
            //centeredSlides={true}
            // spaceBetween={10}
            // effect={"coverflow"}
            //grabCursor="true"
            //centeredSlides="true"
            // slidesPerView="auto"
            //slideToClickedSlide="true"
            //loop="true"
            //coverflowEffect={{
            //rotate: 0,
            //stretch: -190,
            //////    slideShadows: true,
            //}}
            keyboard={{
              enabled: true,
            }}
            //autoplay={{
            //  delay: 2500,
            //  disableOnInteraction: true,
            //}}
            // pagination={true}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            //pagination={true}
            modules={[Keyboard, Navigation]}
            className="sliderMercado"
          >
            <SwiperSlide>
              <TarjetaMercado
                image="/Imagenes/MerCado/MousePad-promocional-hastalatumba-cl.webp"
                titulo="MousePad"
                alt=""
                title=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <TarjetaMercado
                image="/Imagenes/MerCado/MousePad-promocional-hastalatumba-cl.webp"
                titulo="MousePad"
                alt=""
                title=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <TarjetaMercado
                image="/Imagenes/MerCado/MousePad-promocional-hastalatumba-cl.webp"
                titulo="MousePad"
                alt=""
                title=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <TarjetaMercado
                image="/Imagenes/MerCado/MousePad-promocional-hastalatumba-cl.webp"
                titulo="MousePad"
                alt=""
                title=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <TarjetaMercado
                image="/Imagenes/MerCado/MousePad-promocional-hastalatumba-cl.webp"
                titulo="MousePad"
                alt=""
                title=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <TarjetaMercado
                image="/Imagenes/MerCado/MousePad-promocional-hastalatumba-cl.webp"
                titulo="MousePad"
                alt=""
                title=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    </section>
  );
};

export default sliderMercado;
