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
    <section id="Confesiones" className="mt-0  py-10 text-center">
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
              slidesPerView={"auto"}
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
              //slidesPerView="auto"
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
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Imagenes/portadas/historiaMujer.webp"
                  className="opacity-30"
                />

                <div className="absolute z-100  bottom-0 px-2 w-full py-5 text-left">
                  <a href="">
                    <h2
                      className="tracking-tight text-3xl sm:text-6xl md:text-3xl lg:text-3xl xl:text-5x1 font-semibold 
     "
                    >
                      Cita indiscreta
                    </h2>
                  </a>
                  <h3 className="">
                    Anónimo <i className="fas fa-mars"></i> | 25 años
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Imagenes/portadas/historiaMujer.webp"
                  className="opacity-30"
                />

                <div className="absolute z-100  bottom-0 px-2 w-full py-5 text-left">
                  <a href="">
                    <h2
                      className="tracking-tight text-3xl sm:text-6xl md:text-3xl lg:text-3xl xl:text-5x1 font-semibold 
     "
                    >
                      Cita indiscreta
                    </h2>
                  </a>
                  <h3 className="">
                    Anónimo <i className="fas fa-mars"></i> | 25 años
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Imagenes/portadas/historiaMujer.webp"
                  className="opacity-30"
                />

                <div className="absolute z-100  bottom-0 px-2 w-full py-5 text-left">
                  <a href="">
                    <h2
                      className="tracking-tight text-3xl sm:text-6xl md:text-3xl lg:text-3xl xl:text-5x1 font-semibold 
     "
                    >
                      Cita indiscreta
                    </h2>
                  </a>
                  <h3 className="">
                    Anónimo <i className="fas fa-mars"></i> | 25 años
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Imagenes/portadas/historiaMujer.webp"
                  className="opacity-30"
                />

                <div className="absolute z-100  bottom-0 px-2 w-full py-5 text-left">
                  <a href="">
                    <h2
                      className="tracking-tight text-3xl sm:text-6xl md:text-3xl lg:text-3xl xl:text-5x1 font-semibold 
     "
                    >
                      Cita indiscreta
                    </h2>
                  </a>
                  <h3 className="">
                    Anónimo <i className="fas fa-mars"></i> | 25 años
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Imagenes/portadas/historiaMujer.webp"
                  className="opacity-30"
                />

                <div className="absolute z-100  bottom-0 px-2 w-full py-5 text-left">
                  <a href="">
                    <h2
                      className="tracking-tight text-3xl sm:text-6xl md:text-3xl lg:text-3xl xl:text-5x1 font-semibold 
     "
                    >
                      Cita indiscreta
                    </h2>
                  </a>
                  <h3 className="">
                    Anónimo <i className="fas fa-mars"></i> | 25 años
                  </h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      </div>
    </section>
  );
};

export default sliderConfesiones;
