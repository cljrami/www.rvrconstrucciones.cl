// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
//import "swiper/css/navigation";

//import "swiper/css/effect-coverflow";

// import required modules
import { Autoplay, Keyboard } from "swiper/modules";

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
          <h3 className="font-heading mb-1 tracking-tight text-5xl sm:text-4xl md:text-6xl lg:text-5xl xl:text-8x1 font-bold">
            Nuevas Historias
          </h3>

          <div className="mx-auto mt-5 ">
            <Swiper
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
              //  rotate: 0,
              //  stretch: -80,
              // depth: 300,
              // modifier: 1,
              //  slideShadows: true,
              //}}
              keyboard={{
                enabled: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              // pagination={true}
              // navigation={true}
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
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              //pagination={true}
              modules={[Keyboard, Autoplay]}
              className="sliderConfesiones"
            >
              <SwiperSlide>
                <img src="/Imagenes/portadas/historiaMujer.webp" />
                <div className="absolute z-100 p-40">hola</div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Imagenes/portadas/historiaMujer.webp" />
                <div className="absolute z-100 p-40">hola</div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Imagenes/portadas/historiaMujer.webp" />
                <div className="absolute z-100 p-40">hola</div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Imagenes/portadas/historiaMujer.webp" />
                <div className="absolute z-100 p-40">hola</div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Imagenes/portadas/historiaMujer.webp" />
                <div className="absolute z-100 p-40">hola</div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Imagenes/portadas/historiaMujer.webp" />
                <div className="absolute z-100 p-40">hola</div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Imagenes/portadas/historiaMujer.webp" />
                <div className="absolute z-100 p-40">hola</div>
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      </div>
    </section>
  );
};

export default sliderConfesiones;
