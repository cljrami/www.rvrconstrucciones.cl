// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//import "swiper/css/effect-coverflow";

// import required modules
import { Keyboard, Navigation } from "swiper/modules";
import TarjetaConfesiones from "../Tarjetas/tarjetaConfesiones";

const sliderConfesiones = () => {
  return (
    <section id="SliderHistorias" className="mt-0  py-10 text-center">
      <div
        className="overflow-hidden "
        data-aos="fade-up"
        dats-aos-duration="3000"
        data-aos-delay="10"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <>
          <h2 className="inline-block mb-1 text-lg text-gray-400 font-semi-bold tracking-widest capitalize">
            Últimas Confesiónes
          </h2>
          <h3 className="font-heading mb-1 tracking-tight text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8x1 font-bold">
            Nuevas Historias
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
              className="sliderConfesiones"
            >
              <SwiperSlide>
                <TarjetaConfesiones
                  image="/Imagenes/portadas/historiaMujer.webp"
                  titulo="La Colegiala"
                  autor="Anonima"
                  edad="21"
                  url="/historias/la-colegiala"
                  alt="LA Historia De La Colegiala"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TarjetaConfesiones
                  image="/Imagenes/portadas/historiaHombre.webp"
                  titulo="Don Cagazo"
                  autor="Anonima"
                  edad="21"
                  url="/historias/don-cagazo"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TarjetaConfesiones
                  image="/Imagenes/portadas/historiaHombre.webp"
                  titulo="El Desleal"
                  autor="Anonimo"
                  edad="41"
                  url="/historias/el-desleal"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TarjetaConfesiones
                  image="/Imagenes/portadas/historiaHombre.webp"
                  titulo=" El Fugitivo"
                  autor="Anonimo"
                  edad="41"
                  url="/historias/el-fugitivo"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      </div>
    </section>
  );
};

export default sliderConfesiones;
